---
id: 54d4ccac45
title: py-kvcache makes disk KV caching in vLLM faster than LMCache at 80k tokens
original_title: "Building py-kvcache: A Performance Characterization of External KV Caching for vLLM with NVMe SSDs"
url: https://arxiv.org/abs/2609.11744
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-11"
published_at: "2026-09-11T04:00:00.000Z"
authors:
  - Joseph Kanichai
  - Tiziano De Matteis
  - Animesh Trivedi
comments: null
tags:
  - kv-caching
  - vllm
  - llm-inference
  - nvme
  - prefix-caching
  - performance-characterization
  - paper
why_read: >-
  Read this to see when external KV caching pays off in vLLM and how py-kvcache's preloading changes
  the tradeoff.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: deepseek-v4-flash
---

A performance study of external KV caching in vLLM finds that cache performance depends on transfer granularity, intermediate memory use, and when transfers enter the request schedule, not only on device bandwidth. The authors built py-kvcache, a KV Offload connector with asynchronous direct I/O, bounded shared staging, and scheduler-aware preloading. At 80k tokens, loading from disk is 2.0x faster than LMCache, with preloading contributing 1.34x.

This matters because recomputation can beat loading from an external cache for short prefixes or fast GPUs. The paper characterises the tradeoff across GPU, CPU, and NVMe tiers using synthetic workloads, long-context benchmarks, and production traces. With GPU, CPU, and disk caching enabled, py-kvcache is 1.23x faster than LMCache and within approximately 4% of the native vLLM KV Offload implementation. LongBench and SCBench results show the benefits extend to irregular prefix chains and multi-turn workloads.

The caveat is that external caching is not always worth it. Bailian trace replays improve TTFT on a weaker GPU, but on an H100 the average request falls below the break-even point and GPU memory alone retains enough prefixes. The authors conclude that external KV caching should be treated as a setup-specific admission decision. The implementation is available on GitHub.
