---
id: 8af5c42a64
title: LLM routing metadata reveals sensitive query topics despite content logging disabled
original_title: "Sensitive-Topic Leakage Through LLM Routing Metadata: Measurement and Mitigation"
url: https://arxiv.org/abs/2610.09981
source: arXiv cs.CR
kind: paper
section: cloud-and-supply-chain
date: "2026-10-08"
published_at: "2026-10-08T04:00:00.000Z"
authors:
  - Teng-Ruei Chen
comments: null
tags:
  - llm-routing
  - privacy
  - side-channel
  - inference-optimization
  - logging
  - paper
why_read: >-
  Learn how routing metadata leaks sensitive topics and which mitigations actually work in
  production systems.
rank: 5
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

LLM routers that select cheap or expensive models based on request content leak information about topic sensitivity through their routing decisions alone, even when content logging is off. Researchers analysed 1.7 million real requests using two cost-based routers and a domain router, finding that harassment and medical queries were routed differently than comparable requests.

This matters because routing patterns create a covert channel. An attacker observing which model handles each request can infer whether it contains sensitive content. The researchers showed that twenty routing decisions can identify frequent medical askers with 71% accuracy, approaching the theoretical limit.

Per-category length-matched parity—matching routing rates across sensitive categories at fixed prompt length—removed most leakage and cost only 0.2 accuracy points on standard benchmarks. However, simpler defences like per-conversation stickiness or per-user budgets failed to close the gap, since routing behaviour differs by category and direction.
