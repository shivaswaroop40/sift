import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export const ROOT = path.resolve(new URL('../..', import.meta.url).pathname);
export const CONTENT_DIR = path.join(ROOT, 'content');
export const SEEN_DIR = path.join(ROOT, 'data', 'seen');

export function loadDomains() {
  const dir = path.join(ROOT, 'domains');
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function loadSeen(slug) {
  const p = path.join(SEEN_DIR, `${slug}.json`);
  if (!fs.existsSync(p)) return {};
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return {}; }
}

/** seen = { [id]: isoDateFirstSeen }. Prune entries older than keepDays. */
export function saveSeen(slug, seen, { keepDays = 45 } = {}) {
  fs.mkdirSync(SEEN_DIR, { recursive: true });
  const cutoff = Date.now() - keepDays * 86400 * 1000;
  const pruned = Object.fromEntries(Object.entries(seen).filter(([, d]) => new Date(d).getTime() > cutoff));
  fs.writeFileSync(path.join(SEEN_DIR, `${slug}.json`), JSON.stringify(pruned, null, 0) + '\n');
}

export function editionDir(slug, date) {
  return path.join(CONTENT_DIR, slug, date);
}

export function writeStory(slug, date, story) {
  const dir = editionDir(slug, date);
  fs.mkdirSync(dir, { recursive: true });
  const { body, filename, ...frontmatter } = story;
  const fm = yaml.dump(frontmatter, { lineWidth: 100, noRefs: true, quotingType: '"' });
  fs.writeFileSync(path.join(dir, filename), `---\n${fm}---\n\n${body.trim()}\n`);
}

export function writeEdition(slug, date, meta) {
  const dir = editionDir(slug, date);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'edition.json'), JSON.stringify(meta, null, 2) + '\n');
}

export function clearEdition(slug, date) {
  const dir = editionDir(slug, date);
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}
