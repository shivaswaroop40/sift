---
id: aee8eb17a4
title: Uber Eats cut search latency 50% by measuring time to first screen instead of backend response
original_title: Uber Eats Rebuilds Search Pipeline to Cut End-to-End Latency by 50%
url: >-
  https://www.infoq.com/news/2026/10/uber-eats-search-latency/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-03"
published_at: "2026-10-02T14:22:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - latency
  - distributed-systems
  - search-infrastructure
  - observability
  - performance-optimization
  - databases
  - news
why_read: >-
  Understand how Uber reduced search latency 50% through measurement discipline and incremental
  full-stack optimisation across retrieval, ranking, and infrastructure.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Uber rebuilt its Eats search pipeline and achieved a 50% reduction in end-to-end latency by shifting measurement to Above-the-Fold completion, the time until the first screen renders with images. Pagination with server-side caching and asynchronous rendering improved that metric by over 200 milliseconds.

For distributed systems engineers, this work demonstrates the gap between backend metrics and user experience. Focusing on time-to-first-screen revealed that Uber was hydrating tens of thousands of retrieval candidates before ranking, then discarding most. Removing low-value strategies saved 120 milliseconds.

The optimizations spanned the full stack: product embeddings reduced data lookups 100-fold, separating ranking from presentation data saved 100 milliseconds, redesigning the advertising path with column-oriented data saved 130 milliseconds, and infrastructure changes like parallel encoding and garbage collection tuning contributed further gains. The work followed three principles: do less work, start work earlier, remove dependencies.
