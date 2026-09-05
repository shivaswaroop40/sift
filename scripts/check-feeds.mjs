#!/usr/bin/env node
// Prints one line per feed: status, item count in window, newest item. Use it when a domain looks thin.
import { fetchAllFeeds } from './lib/feeds.mjs';
import { loadDomains } from './lib/store.mjs';
import { SITE } from '../site.config.ts';

const only = process.argv[2];
for (const d of loadDomains()) {
  if (only && d.slug !== only) continue;
  console.log(`\n## ${d.name}`);
  const res = await fetchAllFeeds(d.feeds, { defaultWindowHours: SITE.windowHours });
  for (const r of res) {
    const newest = r.items.map((i) => i.publishedAt).filter(Boolean).sort().at(-1) || '-';
    console.log(`${r.ok ? 'ok ' : 'ERR'} ${String(r.items.length).padStart(3)}  ${newest.slice(0, 16).padEnd(17)} ${r.feed.name}${r.error ? '   ' + r.error : ''}`);
  }
}
