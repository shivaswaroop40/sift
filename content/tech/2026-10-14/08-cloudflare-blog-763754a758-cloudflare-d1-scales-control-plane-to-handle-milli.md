---
id: 763754a758
title: Cloudflare D1 scales control plane to handle millions of databases
original_title: "Under the hood, off the hot path: How D1 scales to millions of databases"
url: https://blog.cloudflare.com/d1-control-plane/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-10-14"
published_at: "2026-10-13T16:20:18.000Z"
authors:
  - David Laban
comments: null
tags:
  - sqlite
  - databases
  - cloudflare-workers
  - edge-computing
  - control-plane
  - distributed-systems
  - blog
why_read: >-
  Learn how D1's control plane handles millions of databases while keeping queries fast through edge
  caching and avoiding centralised bottlenecks.
rank: 8
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

D1, Cloudflare's serverless SQLite database, has grown 15x in live databases and 18x in daily active databases over the past year. The platform now supports millions of databases by redesigning its control plane to avoid centralised bottlenecks on the hot path for queries.

For platform builders running multi-tenant or per-user database models, this matters because query latency depends on keeping metadata lookups at the edge rather than routing through central data centres. D1 uses Workers KV for routing metadata and Hyperdrive for pooled access to central Postgres, keeping query requests fast.

The architecture separates concerns into data plane (queries, must be fast at edge), control plane (CRUD operations, can use central components), and background plane (analytics, eventual consistency). This pattern applies broadly to distributed systems on Cloudflare's platform.
