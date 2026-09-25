---
id: 672201e541
title: Prefix caching for LLM workloads rewards simple LRU over fancier eviction policies
original_title: "When Fancy Eviction Fails: Rethinking Cache Replacement For LLM Prefix Reuse"
url: https://arxiv.org/abs/2609.28870
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-25"
published_at: "2026-09-25T04:00:00.000Z"
authors:
  - Yiyu Liu
  - Minlan Yu
  - Juncheng Yang
comments: null
tags:
  - llm
  - caching
  - eviction
  - prefix-cache
  - infrastructure
  - attention
  - paper
why_read: >-
  It explains why your prefix cache may not need a clever eviction policy, and which workload
  features do require new mechanisms beyond LRU.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers studied production traces from two companies and benchmarked 14 cache eviction algorithms under both HBM-constrained and large memory-pool settings. Sophisticated policies designed for traditional web or database caches offered little benefit over plain LRU, despite a large remaining gap to a Belady optimal oracle.

The cause is structural: under agentic workloads, prefix reuse is dominated by the regular pacing of active sessions, so recency becomes unusually predictive. Prefix caching also introduces new failure modes that traditional caches lack, including heavy-tailed session footprints and miss costs that grow with sequence length as attention computation scales.

The paper proposes a compute-savings ratio and two offline oracles to measure these effects, then recommends building eviction policy around recency. Additions worth keeping include quick demotion for one-hit prefixes, partial eviction that accounts for recompute cost, and capacity-dependent granularity. The authors plan to release the traces and simulator.
