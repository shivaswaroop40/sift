---
id: 318b6a090e
title: Two-stack algorithm efficiently computes sliding-window aggregates without inversion
original_title: Two-Stack Sliding-Window Aggregation
url: https://orlp.net/blog/two-stack-sliding-window-aggregation/
source: Lobsters
kind: community
section: papers
date: "2026-10-04"
published_at: "2026-10-03T12:39:14.000Z"
authors:
  - orlp.net via fanf
  - orlp.net via fanf
comments: https://lobste.rs/s/49glor/two_stack_sliding_window_aggregation
tags:
  - algorithms
  - aggregation
  - sliding-window
  - time-series
  - distributed-systems
  - community
why_read: >-
  Learn a simple, widely-applicable algorithm for sliding-window queries that handles aggregations
  without inverses.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A two-stack algorithm maintains aggregates over sliding windows for operations without inverses, such as minimum, maximum, or quantile. Unlike naive approaches using double-ended queues, it works for any associative operation by tracking a values stack and cumulative aggregates stack, achieving amortised O(1) time per operation.

For practitioners, this matters when building time-series queries or monitoring systems. Operations like NaN handling, floating-point summation, and HyperLogLog sketches all benefit. The algorithm isolates errors to affected windows rather than propagating them indefinitely, improving correctness in real systems.

Memory usage scales with window size, not data size. The algorithm rebalances stacks every w-th pop, amortising expensive O(w) drains across w operations. Floating-point results closely match expectations, especially with compensated summation.
