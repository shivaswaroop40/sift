---
id: b18cf94898
title: Cloudflare redesigns D1 control plane to support millions of databases
original_title: Cloudflare Scales D1 Control Plane to Millions of Databases
url: >-
  https://www.infoq.com/news/2026/11/cloudflare-d1-control-plane/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-11-08"
published_at: "2026-11-08T06:34:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - cloudflare
  - d1
  - control-plane
  - serverless
  - sqlite
  - postgres
  - news
why_read: >-
  The Cloudflare post explains the heartbeat, caching and routing patterns that keep one Postgres
  cluster out of the data plane at millions-of-databases scale.
rank: 2
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Cloudflare has described how it redesigned the control plane of D1, its serverless SQL database built on SQLite, to support millions of databases. Postgres holds transactional metadata, ClickHouse handles analytics, and Workers KV carries globally replicated routing data. Queries stay off the central Postgres. An Edge API Worker handles authentication and rate limiting, then an Eyeball Worker routes requests straight to the relevant D1 Durable Object, trusting authorization already encoded in D1 Bindings. Daily active databases grew 18-fold over the past year.

The core reconciliation mechanism is a 30-second heartbeat with per-database jitter. Each Durable Object checks itself against Postgres, which remains the source of truth for database existence and account limits. Failed creations and deletions become self-correcting. Orphaned objects are marked as deleted, and Workers KV routing metadata is repaired when best-effort updates fail. Because heartbeats tolerate slightly stale data, they can be served from Hyperdrive's cache layers or a Postgres read replica rather than the primary.

Storage limits are enforced in a way that protects Postgres from write spikes. Usage updates are queued and batched asynchronously, and account totals are pre-aggregated through incremental deltas, avoiding expensive scans and write contention for accounts holding millions of databases. Workers KV was chosen over a plain cache because it is a durable store. A catastrophic cache purge forcing a million databases to fetch routing data from Postgres would cause a metastable failure.

The design leans on scale that few operators have. One Reddit commenter argues the gains come mostly from running an in-process SQLite database at the edge, with the rest being orchestration only a global datacentre operator can afford. Other Reddit users have previously questioned D1's availability in production. On pricing, the free tier covers 5 GB of storage, writes beyond it cost 1 USD per million rows, and there are no compute or data-transfer charges.
