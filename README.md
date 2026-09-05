# Sift

A daily digest per field. A script reads every feed that matters for a domain, asks Claude to score each new item for depth, novelty and usefulness to a specific reader, and keeps the dozen worth your time. Each domain gets a front page, an archive, an RSS feed and a small JSON endpoint for widgets.

Domains live in `domains/*.json`. Ship a new one by adding a file.

## Layout

```
domains/            one JSON per domain: audience, criteria, sections, feeds
site.config.ts      name, tagline, house voice (the VOICE string is injected into every prompt)
scripts/ingest.mjs  the pipeline: fetch → triage → select → summarise → write markdown
content/<domain>/<date>/NN-*.md   generated stories, committed
data/seen/<domain>.json           what the pipeline has already looked at (45-day memory)
src/                Astro site: layout, story component, per-domain pages, rss.xml, latest.json
widgets/scriptable.js             iOS widget that reads latest.json
.github/workflows/daily.yml       cron: ingest, commit, build, deploy to GitHub Pages
```

## Run it locally

```bash
npm install
cp .env.example .env            # add ANTHROPIC_API_KEY
npm run ingest -- --domain chemical-engineering   # one domain, real scoring
npm run ingest                  # all domains
npm run dev                     # http://localhost:4321
```

Useful flags: `--dry-run` (no model calls, heuristic ranking, feed excerpts as bodies), `--force` (rebuild today's edition), `--limit 5`, `--date 2026-09-01`. `npm run feeds:check [slug]` prints feed health.

## Deploy

1. Push to GitHub. Settings → Pages → Source: GitHub Actions.
2. Add repository secret `ANTHROPIC_API_KEY`.
3. Add repository variables `SITE_URL` (e.g. `https://you.github.io`) and, if not on a custom domain, `BASE_PATH` (e.g. `/sift`).
4. Run the "Daily edition" workflow once by hand. It runs every day at 04:40 UTC after that.

## Subscribe

`<site>/<domain>/rss.xml` in any reader. On iPhone, NetNewsWire and Reeder both give a home screen widget for a folder. For a lock screen widget, use `widgets/scriptable.js`.

## Cost

Triage is one call per 40 candidates with a cached system prompt. Summaries are one call per kept story. A day across four domains is roughly 20 triage calls and 45 summary calls on `claude-opus-5`. Set `SIFT_MODEL=claude-sonnet-5` to run cheaper.
