---
id: f3c9e92fee
title: eBay engineer sets out latency budgets per hop for sub-100ms distributed APIs
original_title: "Presentation: From Fan-Out to Fast: Sub-100ms API Design in Distributed Systems"
url: >-
  https://www.infoq.com/presentations/sub-100ms-latency-distributed-systems/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-11-27"
published_at: "2026-11-27T11:00:00.000Z"
authors:
  - Saranya Vedagiri
comments: null
tags:
  - latency
  - distributed-systems
  - api-design
  - tail-latency
  - qcon
  - resilience
  - news
why_read: >-
  You get a 50-minute talk and full transcript on assigning per-hop latency budgets and handling
  tail latency, drawn from production experience at eBay.
rank: 1
interest_score: 6.7
depth_score: 7
novelty_score: 5
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Saranya Vedagiri, a staff engineer at eBay, gave a QCon London talk on building APIs that respond in under 100ms. Her approach is to treat latency as a route plan. Each hop in the request path gets its own budget, so no single service can eat the whole allowance. The talk also covers async fan-out trade-offs, thread pool sizing, caching and circuit breakers.

She argues that latency drifts with scale even when code does not change. A 30ms target can become 60ms at peak traffic and 120ms when a dependency wobbles. The causes she names are retries, cache misses falling back to the database, thread contention and queuing.

Budgets are meant to help with prioritisation and team alignment. If the cap is known, nobody spends 100ms on a nice-to-have. Her example is a recommendation engine that must answer in 50ms. Some hops, such as TLS and initial routing at the edge, cannot be squeezed and must be given their time.

The source text is truncated after the edge layer discussion. The specific budget figures, thread pool guidance and measurement advice are not in the excerpt, so they cannot be assessed here.
