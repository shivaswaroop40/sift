---
id: c89d461a68
title: >-
  Coda improves coding-agent serving by scheduling requests based on KV-cache location and context
  length
original_title: "Coda: Exploiting Admission Flexibility for Coding-Agent Serving"
url: https://arxiv.org/abs/2610.03088
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Youhe Jiang
  - Fangcheng Fu
  - Binhang Yuan
  - Krishna Malladi
  - Ehsan K. Ardestani
  - Zhan Shu
comments: null
tags:
  - llm-serving
  - scheduling
  - batching
  - inference
  - kv-cache
  - paper
why_read: Learn how admission scheduling unlocks efficiency gains in LLM serving systems.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Coda is a serving system for LLM-based coding agents that exploit flexibility in when requests are admitted to the GPU. The system tracks where KV cache states live across storage tiers and groups requests with compatible context lengths to reduce interference during decoding.

For engineers running LLM inference clusters, this matters because it shows how scheduling decisions can recover capacity lost to inefficient batching. Coda improved throughput by 20% on average and SLO compliance by up to 70% in experiments.

The key trade-off is that perfect fairness in request admission order is relaxed in favour of efficient state preparation and batch composition. This is practical for sessions where a request can wait a few milliseconds without violating its deadline.
