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

## Using OpenCode Zen or Go

Two cases, chosen with `SIFT_PROVIDER`.

**Claude models on Zen** speak the Anthropic Messages API, so the default provider works. Set `ANTHROPIC_API_KEY` to the Zen key and `ANTHROPIC_BASE_URL=https://opencode.ai/zen/v1`. The pipeline notices the gateway and skips the beta-only refusal fallback.

**Open models on Zen or Go** sit on three different endpoints, and the model IDs differ between Zen and Go. From OpenCode's docs:

| Model | Go model ID | Endpoint | Settings |
|---|---|---|---|
| Muse Spark 1.3 | `muse-spark-1.3-contributor` | responses | `SIFT_PROVIDER=responses` |
| GPT 5.6 Luna, Grok 4.6 | `gpt-5.6-luna`, `grok-4.6` | responses | `SIFT_PROVIDER=responses` |
| MiniMax M3, Qwen 3.8 Max | `minimax-m3`, `qwen3.8-max` | messages | `SIFT_PROVIDER=anthropic` + `ANTHROPIC_BASE_URL` + `ANTHROPIC_API_KEY` |
| GLM 5.3, Kimi K3, DeepSeek V4 | `glm-5.3`, `kimi-k3`, `deepseek-v4-pro` | chat/completions | `SIFT_PROVIDER=chat` |

Example for a Go key and Muse Spark:

```bash
SIFT_PROVIDER=responses
SIFT_MODEL=muse-spark-1.3-contributor
OPENAI_API_KEY=<Go key>
OPENAI_BASE_URL=https://opencode.ai/zen/go/v1   # Zen keys use https://opencode.ai/zen/v1
```

Example for a Go key and MiniMax M3, which speaks the Messages API:

```bash
SIFT_PROVIDER=anthropic
SIFT_MODEL=minimax-m3
ANTHROPIC_API_KEY=<Go key>
ANTHROPIC_BASE_URL=https://opencode.ai/zen/go/v1
```

The pipeline asks for native JSON-schema output first and falls back to a JSON-only prompt with validation, because gateways and open models vary in what they accept. Expect more retries and occasionally weaker summaries than with Claude; the triage prompt is the part that suffers most on small models.

Note on Go: its terms say it is meant for coding agents and that traffic is monitored. Sift sends a clear user agent and the `x-opencode-session` header as asked, and a day's run is about 65 short requests, but it is still outside the stated purpose. Zen pay-as-you-go has no such restriction.

**Fallback model.** Set `SIFT_FALLBACK_MODEL` (and `SIFT_FALLBACK_PROVIDER`, default `chat`) to retry a failed request on a second model. The two may be on different endpoints; with a Go key, `minimax-m3` over Messages with `deepseek-v4-flash` over chat completions is a good pair, since the chat base URL is derived from `ANTHROPIC_BASE_URL` when `OPENAI_BASE_URL` is not set. Each story's frontmatter records the `model` that wrote it, and the run log counts how many triage batches fell back.

In GitHub Actions, add `SIFT_PROVIDER`, `SIFT_MODEL`, `SIFT_FALLBACK_MODEL`, `SIFT_FALLBACK_PROVIDER` and `OPENAI_BASE_URL` as repository variables and `OPENAI_API_KEY` as a secret.
