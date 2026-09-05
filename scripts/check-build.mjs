#!/usr/bin/env node
/**
 * Post-build checks. Fails the build if the site would 404 once deployed under BASE_PATH.
 *   - every internal href/src/action in dist/**\/*.html starts with the base path
 *   - every internal link resolves to a file in dist
 *   - every domain has an edition page with at least one story
 *   - rss.xml and latest.json exist per domain and parse
 *   - the home page redirect script and the domain <select> use the base path
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
const domains = fs.readdirSync('domains').filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join('domains', f))).slug);

const failures = [];
const fail = (m) => failures.push(m);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
}
function existsInDist(urlPath) {
  const rel = decodeURIComponent(urlPath.replace(/^\/+/, '').replace(/[?#].*$/, ''));
  const p = path.join(DIST, rel);
  return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html')));
}

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
if (!htmlFiles.length) fail('dist has no HTML files');

const attrRe = /\b(?:href|src|action|content)=["']([^"']+)["']/g;
let checked = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(attrRe)) {
    const url = m[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue; // external, relative, or protocol-relative
    checked++;
    const rel = path.relative(DIST, file);
    if (base && !url.startsWith(base + '/') && url !== base) fail(`${rel}: "${url}" does not start with base "${base}/"`);
    const inDist = base ? url.slice(base.length) : url;
    if (!existsInDist(inDist)) fail(`${rel}: "${url}" -> no file in dist`);
  }
  // Inline scripts that build URLs: the home redirect and the domain select handler.
  for (const m of html.matchAll(/location\.(?:replace|href\s*=)\s*\(?\s*['"`]([^'"`]+)['"`]/g)) {
    if (m[1].startsWith('/') && base && !m[1].startsWith(base)) fail(`${path.relative(DIST, file)}: redirect target "${m[1]}" misses base`);
  }
}

for (const slug of domains) {
  const page = path.join(DIST, slug, 'index.html');
  if (!fs.existsSync(page)) { fail(`${slug}: no index.html`); continue; }
  const html = fs.readFileSync(page, 'utf8');
  const stories = (html.match(/class="story/g) || []).length;
  if (stories === 0) fail(`${slug}: front page has no stories`);
  for (const f of ['rss.xml', 'latest.json']) {
    const p = path.join(DIST, slug, f);
    if (!fs.existsSync(p)) { fail(`${slug}: missing ${f}`); continue; }
    const body = fs.readFileSync(p, 'utf8');
    if (f === 'latest.json') { try { const j = JSON.parse(body); if (!j.stories?.length) fail(`${slug}: latest.json has no stories`); } catch { fail(`${slug}: latest.json is not JSON`); } }
    if (f === 'rss.xml' && !/<item>/.test(body)) fail(`${slug}: rss.xml has no items`);
  }
  for (const m of fs.readFileSync(page, 'utf8').matchAll(/<option value="([^"]+)"/g)) {
    if (base && !m[1].startsWith(base + '/')) fail(`${slug}: dropdown option "${m[1]}" misses base`);
  }
}

console.log(`checked ${checked} internal URLs across ${htmlFiles.length} pages, base "${base || '/'}", ${domains.length} domains`);
if (failures.length) {
  console.error(`\n${failures.length} problem(s):`);
  for (const f of [...new Set(failures)].slice(0, 40)) console.error('  - ' + f);
  process.exit(1);
}
console.log('build check passed');
