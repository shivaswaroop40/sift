import { createHash } from 'node:crypto';

/** Collapse HTML to readable plain text. Deliberately simple: no DOM, no readability heuristics. */
export function htmlToText(html = '') {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<aside[\s\S]*?<\/aside>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<br\s*\/?>|<\/p>|<\/div>|<\/li>|<\/h\d>|<\/tr>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*\n\s*/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function truncate(s = '', n = 400) {
  s = String(s).trim();
  return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
}

export function slugify(s = '', max = 60) {
  const slug = String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug.length <= max ? slug : slug.slice(0, max).replace(/-+$/, '');
}

/** Canonical form of a URL for dedupe: strip tracking params, fragments, trailing slashes, protocol. */
export function canonicalUrl(url = '') {
  try {
    const u = new URL(url);
    const drop = [...u.searchParams.keys()].filter((k) => /^(utm_|fbclid|gclid|ref$|source$|mc_cid|mc_eid|guccounter|ncid)/i.test(k));
    drop.forEach((k) => u.searchParams.delete(k));
    u.hash = '';
    let s = u.host.replace(/^www\./, '') + u.pathname.replace(/\/+$/, '') + (u.search || '');
    return s.toLowerCase();
  } catch {
    return String(url).trim().toLowerCase();
  }
}

export function idFor(url) {
  return createHash('sha1').update(canonicalUrl(url)).digest('hex').slice(0, 10);
}

const STOP = new Set('a an the of to in on for and or with by from at is are as vs into over under after before new how why what its it this that'.split(' '));
export function titleTokens(t = '') {
  return new Set(
    String(t)
      .toLowerCase()
      .replace(/[^a-z0-9 ]+/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w)),
  );
}

/** Jaccard similarity of title token sets. Used to collapse the same story from several sources. */
export function titleSimilarity(a, b) {
  const A = titleTokens(a), B = titleTokens(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / (A.size + B.size - inter);
}
