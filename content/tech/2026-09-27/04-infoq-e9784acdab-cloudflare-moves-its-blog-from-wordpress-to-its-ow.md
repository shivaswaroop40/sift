---
id: e9784acdab
title: Cloudflare moves its blog from WordPress to its own EmDash CMS
original_title: Cloudflare Details Its Migration from WordPress to EmDash
url: >-
  https://www.infoq.com/news/2026/09/cloudflare-emdash-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-27"
published_at: "2026-09-26T09:38:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - cloudflare
  - workers
  - cms
  - caching
  - migration
  - wordpress
  - news
why_read: >-
  You get the concrete architecture and rollout mechanics of running a CMS on Workers, KV, and
  Hyperdrive, plus a real traffic-shifting playbook.
rank: 4
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Cloudflare has migrated its main blog from WordPress to EmDash, the open source CMS the company built in TypeScript. Production runs EmDash on a Cloudflare Worker with Workers Cache, a Workers KV object cache, and Hyperdrive connecting to a PlanetScale database. The platform was load tested to 7,000 requests per second.

The blog typically sees around 75 requests per second with spikes above 5,000 RPS. Cloudflare reports that p95 latency on the new stack is flatter and more consistent than the old setup, which showed periodic spikes under load. For practitioners, the interest is the architecture: a CMS running on Workers, KV caching, and Hyperdrive to a managed MySQL-compatible database, rather than a traditional LAMP stack.

Rollout used a proxy Worker that set a version cookie and routed 1% of traffic initially, scaling up progressively with automatic fallback to WordPress on 500 errors. The team reached 100% in a single day once metrics looked clean. The migration also added two MCP servers so authors and AI agents can browse, edit, and publish content through EmDash.

Cloudflare calls itself Customer Zero. Early editor complaints about the editing experience and scheduled posts have been logged for a v1 release, which has no public date.
