---
id: de039570a6
title: PostHog moves its warehouse off DuckDB after hitting limits at 2 PB and a trillion rows
original_title: Why we're moving our warehouse off DuckDB
url: https://posthog.com/blog/moving-off-duckdb
source: Lobsters
kind: community
section: systems
date: "2026-11-03"
published_at: "2026-11-03T07:33:25.000Z"
authors:
  - posthog.com via arcatan
  - posthog.com via arcatan
comments: https://lobste.rs/s/wpahfd/why_we_re_moving_our_warehouse_off_duckdb
tags:
  - duckdb
  - ducklake
  - posthog
  - trino
  - data-warehouse
  - postgres
  - community
why_read: >-
  A detailed post-mortem of running DuckDB and DuckLake at 2 PB, with the specific bottlenecks and
  numbers behind the move to Trino.
rank: 4
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

PostHog has re-architected its data warehouse away from DuckDB, five months after choosing it over ClickHouse. Customer workloads outgrew what a single-node engine could serve at a fair price. At its peak the DuckLake-based warehouse held about 2 PB, roughly 1 trillion rows and 15.3 million snapshots. Single-table writes could take more than three minutes because every commit re-read statistics for the entire catalog.

The core problem is operational. A single-node engine must be sized before the query arrives, and PostHog could not predict CPU and memory for a specific query, so complex queries forced huge instances. DuckLake's catalog schema must stay portable across SQL databases, which blocks engine-specific optimizations. Over 99% of its statistics rows described deleted tables; cleaning them made writes 30 to 50 times faster, but the rows grew back.

The Postgres wire protocol was another limit. Reconnects, idle connections and TTL management were hard at scale, long-running connections were expensive, and load balancing tooling for pgwire is thin compared with HTTP. HTTP headers also make routing in Kubernetes more flexible. Each Postgres client expected its own niche behaviour, and compatibility coverage never got good enough.

The replacement is Trino with HogLake, PostHog's own open table format, tested internally at petabyte scale before design partners see it. The team also carried patches in a DuckLake fork, which cost them the community benefit of upstream. The post is a first-hand account, and the new stack is still unproven outside PostHog.
