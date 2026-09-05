import Parser from 'rss-parser';
import { htmlToText, truncate, idFor, canonicalUrl } from './text.mjs';

const UA = 'Mozilla/5.0 (compatible; SiftDigest/0.1; +https://github.com/) feed reader';

const parser = new Parser({
  timeout: 20000,
  headers: { 'User-Agent': UA, Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.8' },
  customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
      ['dc:creator', 'creator'],
      ['dc:date', 'dcDate'],
      ['prism:publicationDate', 'prismDate'],
      ['comments', 'commentsUrl'],
      ['arxiv:announce_type', 'announceType'],
    ],
  },
});

/**
 * Fetch one feed and return normalised candidates.
 * Each candidate: { id, title, url, source, kind, publishedAt, snippet, fullText, authors, commentsUrl }
 */
export async function fetchFeed(feed, { now = new Date(), defaultWindowHours = 36 } = {}) {
  const windowHours = feed.windowHours ?? defaultWindowHours;
  const cutoff = new Date(now.getTime() - windowHours * 3600 * 1000);
  let parsed;
  try {
    parsed = await parser.parseURL(feed.url);
  } catch (err) {
    return { feed, ok: false, error: String(err.message || err).slice(0, 160), items: [] };
  }
  const items = [];
  for (const it of parsed.items || []) {
    const url = (it.link || it.guid || '').trim();
    if (!/^https?:\/\//i.test(url)) continue;
    const title = htmlToText(it.title || '').replace(/\s+/g, ' ').trim();
    if (!title) continue;
    // arXiv "replace" announcements are revisions of old papers. Skip them.
    if (it.announceType && /replace/i.test(it.announceType)) continue;

    const dateStr = it.isoDate || it.pubDate || it.dcDate || it.prismDate || null;
    const publishedAt = dateStr ? new Date(dateStr) : null;
    if (publishedAt && !Number.isNaN(publishedAt.getTime()) && publishedAt < cutoff) continue;

    const rawBody = it.contentEncoded || it.content || it.summary || it.description || it.contentSnippet || '';
    let body = htmlToText(rawBody);
    // Journal feeds (ScienceDirect, Wiley) put metadata lines in the description. Lift authors out and drop the rest.
    const authorLine = body.match(/^Author\(s\):\s*(.+)$/m)?.[1];
    body = body
      .split('\n')
      .filter((l) => !/^(Publication date|Source|Author\(s\)|Available online|Volume)\s*:/i.test(l))
      .join('\n')
      .replace(/^(Abstract|Summary)\s*[:.]?\s*/i, '')
      .trim();
    const authors = [it.creator, it.author, authorLine, ...(it.authors || []).map((a) => a?.name)]
      .flatMap((a) => (typeof a === 'string' ? a.split(/,\s*|\s+and\s+/) : []))
      .map((a) => a.trim())
      .filter((a) => a && a.length < 80)
      .slice(0, 6);

    items.push({
      id: idFor(url),
      title,
      url,
      canonical: canonicalUrl(url),
      source: feed.name,
      kind: feed.kind || 'news',
      abstractInFeed: Boolean(feed.abstractInFeed),
      publishedAt: publishedAt && !Number.isNaN(publishedAt.getTime()) ? publishedAt.toISOString() : null,
      snippet: truncate(body, 500),
      fullText: feed.abstractInFeed ? truncate(body, 6000) : null,
      authors,
      commentsUrl: it.commentsUrl || (it.comments && /^https?:/.test(it.comments) ? it.comments : null),
    });
  }
  return { feed, ok: true, items };
}

export async function fetchAllFeeds(feeds, opts = {}, concurrency = 6) {
  const results = new Array(feeds.length);
  let i = 0;
  async function worker() {
    while (i < feeds.length) {
      const idx = i++;
      results[idx] = await fetchFeed(feeds[idx], opts);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, feeds.length) }, worker));
  return results;
}

/** Fetch an article page and reduce it to text for the summariser. Best effort; returns null on failure. */
export async function fetchArticleText(url, { maxChars = 7000, timeoutMs = 15000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,*/*;q=0.8' }, signal: ctrl.signal, redirect: 'follow' });
    if (!res.ok) return null;
    const type = res.headers.get('content-type') || '';
    if (!/html|xml|text/i.test(type)) return null;
    const html = await res.text();
    // Prefer the <article> or <main> element when present; it cuts most chrome.
    const m = html.match(/<article[\s\S]*?<\/article>/i) || html.match(/<main[\s\S]*?<\/main>/i);
    const text = htmlToText(m ? m[0] : html.replace(/^[\s\S]*?<body[^>]*>/i, ''));
    if (text.length < 300) return null;
    return truncate(text, maxChars);
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}
