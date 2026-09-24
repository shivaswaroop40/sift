---
id: 569571f63f
title: Backstitch fixes broken request context across 673 of 1,133 microservices
original_title: "Backstitch: Restoring Request Causality Across a Production Microservice Fleet"
url: https://arxiv.org/abs/2609.27538
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Ziyue Dang
  - Qiuyu Wu
  - Haoyun Xu
  - Tongjue Wang
  - Yongqing Ling
  - Weihao Chen
comments: null
tags:
  - microservices
  - distributed-tracing
  - observability
  - agentic-repair
  - causality
  - arxiv
  - paper
why_read: >-
  You will see how a production fleet diagnosed silent tracing breaks at custom queues and used
  replay-driven agents to repair hundreds of microservices with measurable results.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A video platform found that 673 of its 1,133 microservices lost request context at handoffs like custom queues and callbacks, even though the request itself succeeded. These breaks were invisible to existing tests because the payload passed through but the causal context did not.

Backstitch is an agentic repair system that replays suspicious calls to check request correlation, traces the broken handoff in source, applies a bounded fix, then re-replays to validate. It targets the most common silent failure in distributed tracing: the trace dies while the work continues.

At 240 repaired calls, break rates fell from 90.46% to 4.69%. Over 112 days of fleet-wide rollout, the overall break rate more than halved. The repairs restored causality without changing what the calls actually do.

The paper does not say how generalisable the agent is beyond one fleet, and the 240-call sample is a subset of the 673. Still, the mechanism is concrete: replay-based correlation plus bounded source edits, validated by the same replay.
