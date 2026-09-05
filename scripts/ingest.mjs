#!/usr/bin/env node
/**
 * Sift ingestion. For each domain:
 *   1. fetch every feed, normalise, drop anything already seen or outside the time window
 *   2. triage with Claude: score depth/novelty/utility, pick a section, keep or drop
 *   3. collapse near-duplicate stories, cap per source, take the top N
 *   4. fetch article text and write a summary for each survivor
 *   5. write content/<domain>/<date>/NN-*.md plus edition.json, and update the seen store
 *
 * Flags:
 *   --dry-run        no Claude calls; heuristic ranking and feed snippets as bodies (for layout previews)
 *   --domain <slug>  only this domain (repeatable)
 *   --date YYYY-MM-DD  edition date (default: today, UTC)
 *   --limit N        override stories per domain
 *   --force          rebuild an edition that already exists for that date
 */
import fs from 'node:fs';
import path from 'node:path';
import { SITE } from '../site.config.ts';
import { fetchAllFeeds, fetchArticleText } from './lib/feeds.mjs';
import { titleSimilarity, slugify, truncate } from './lib/text.mjs';
import { loadDomains, loadSeen, saveSeen, writeStory, writeEdition, editionDir, clearEdition } from './lib/store.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const opts = (name) => args.flatMap((a, i) => (a === name ? [args[i + 1]] : []));

const DRY = flag('--dry-run');
const FORCE = flag('--force');
const onlyDomains = opts('--domain');
const date = opt('--date') || new Date().toISOString().slice(0, 10);
const limitOverride = opt('--limit') ? Number(opt('--limit')) : null;
const now = new Date();

const log = (...a) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...a);

let claude = null;
if (!DRY) {
  claude = await import('./lib/claude.mjs');
  log(`model: ${claude.MODEL}`);
} else {
  log('DRY RUN: no Claude calls. Stories will carry scored: false and feed snippets as bodies.');
}

const domains = loadDomains().filter((d) => !onlyDomains.length || onlyDomains.includes(d.slug));
if (!domains.length) { console.error('no matching domains'); process.exit(1); }

const KIND_PRIOR = { research: 1.5, paper: 1.2, blog: 1.0, advisory: 1.0, news: 0.8, community: 1.0 };

for (const domain of domains) {
  log(`=== ${domain.name} (${domain.slug}) edition ${date} ===`);
  const dir = editionDir(domain.slug, date);
  if (fs.existsSync(dir) && !FORCE) {
    log(`edition exists at ${path.relative(process.cwd(), dir)}; use --force to rebuild. skipping.`);
    continue;
  }
  const perDay = limitOverride ?? domain.perDay ?? SITE.perDay;
  const seen = loadSeen(domain.slug);

  // 1. Fetch
  const results = await fetchAllFeeds(domain.feeds, { now, defaultWindowHours: SITE.windowHours });
  const feedReport = results.map((r) => ({ name: r.feed.name, ok: r.ok, items: r.items.length, error: r.error }));
  for (const r of results) log(`  ${r.ok ? 'ok ' : 'ERR'} ${String(r.items.length).padStart(3)}  ${r.feed.name}${r.error ? '  ' + r.error : ''}`);

  const byId = new Map();
  for (const r of results) for (const it of r.items) {
    if (seen[it.id] && !FORCE) continue;
    if (!byId.has(it.id)) byId.set(it.id, it);
  }
  const candidates = [...byId.values()];
  log(`${candidates.length} new candidates after seen-filter`);
  if (!candidates.length) { log('nothing to do'); continue; }

  // 2. Triage
  let scored;
  let usage = null;
  if (DRY) {
    scored = candidates.map((c) => {
      const ageH = c.publishedAt ? (now - new Date(c.publishedAt)) / 3.6e6 : 24;
      const recency = Math.max(0, 1 - ageH / 72);
      const s = Math.max(1, Math.min(9, Math.round(2 + 3 * (KIND_PRIOR[c.kind] ?? 1) + 2 * recency + Math.min(1, c.snippet.length / 500))));
      return { ...c, keep: true, depth: s, novelty: s, utility: s, section: domain.sections[0], reason: 'dry-run heuristic' };
    });
  } else {
    const { results: t, usage: u } = await claude.triage(domain, candidates);
    usage = u;
    scored = candidates.filter((c) => t.has(c.id)).map((c) => ({ ...c, ...t.get(c.id) }));
    log(`triage: ${scored.filter((s) => s.keep).length} kept of ${scored.length} scored (in ${u.input}, cached ${u.cacheRead}, out ${u.output} tokens)`);
  }

  // 3. Select
  const ranked = scored
    .filter((s) => s.keep)
    .map((s) => ({ ...s, interest: Math.round(((s.depth + s.novelty + s.utility) / 3) * 10) / 10 }))
    .sort((a, b) => b.interest - a.interest || b.depth - a.depth);
  const chosen = [];
  const perSource = new Map();
  for (const s of ranked) {
    if (chosen.length >= perDay) break;
    if (chosen.some((c) => titleSimilarity(c.title, s.title) >= 0.6)) continue;
    const n = perSource.get(s.source) ?? 0;
    if (n >= 3) continue;
    perSource.set(s.source, n + 1);
    chosen.push(s);
  }
  log(`selected ${chosen.length} stories`);

  // 4. Summarise and write
  if (FORCE) clearEdition(domain.slug, date);
  let rank = 0;
  const written = [];
  for (const s of chosen) {
    rank++;
    let title = s.title, body, why_read = '', tags = [], scoredFlag = !DRY, model = null;
    if (DRY) {
      body = s.snippet || '(no snippet in feed)';
    } else {
      const text = s.fullText || (await fetchArticleText(s.url)) || s.snippet || s.title;
      try {
        const sum = await claude.summarise(domain, s, text);
        title = sum.title; body = sum.summary.join('\n\n'); why_read = sum.why_read; tags = sum.tags; model = sum.model;
      } catch (err) {
        log(`  summary failed for ${s.id} (${truncate(s.title, 60)}): ${err.message}. Using snippet.`);
        body = s.snippet || s.title; scoredFlag = false;
      }
    }
    const filename = `${String(rank).padStart(2, '0')}-${slugify(s.source, 20)}-${s.id}-${slugify(title, 50)}.md`;
    const story = {
      filename,
      id: s.id,
      title,
      original_title: s.title,
      url: s.url,
      source: s.source,
      kind: s.kind,
      section: s.section,
      date,
      published_at: s.publishedAt,
      authors: s.authors,
      comments: s.commentsUrl || null,
      tags: [...new Set([...tags.map((t) => slugify(t, 30)), s.kind])].filter(Boolean),
      why_read,
      rank,
      interest_score: s.interest,
      depth_score: s.depth,
      novelty_score: s.novelty,
      utility_score: s.utility,
      scored: scoredFlag,
      model,
      body,
    };
    writeStory(domain.slug, date, story);
    written.push({ rank, id: s.id, title, source: s.source, interest: s.interest });
    log(`  #${String(rank).padStart(2)} ${s.interest.toFixed(1)}  ${truncate(title, 70)}  [${s.source}]`);
  }

  writeEdition(domain.slug, date, {
    domain: domain.slug,
    date,
    generated_at: now.toISOString(),
    dry_run: DRY,
    model: DRY ? null : claude.MODEL,
    candidates: candidates.length,
    kept: chosen.length,
    feeds: feedReport,
    triage_usage: usage,
  });

  // 5. Seen store: everything we looked at, so tomorrow only sees new items.
  for (const c of candidates) seen[c.id] = seen[c.id] || now.toISOString();
  saveSeen(domain.slug, seen);
  log(`wrote ${written.length} stories to ${path.relative(process.cwd(), dir)}`);
}
log('done');
