---
id: 672587e85b
title: Matching chunked prefill removes most of vLLM's measured gap to SGLang
original_title: >-
  A Controlled Experimental Evaluation of Configuration and Cache Architecture in LLM Serving
  Engines
url: https://arxiv.org/abs/2611.05991
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-11-05"
published_at: "2026-11-05T05:00:00.000Z"
authors:
  - Muhammad Faizan Anwar
  - Sina Keshvadi
comments: null
tags:
  - vllm
  - sglang
  - llm-serving
  - benchmarking
  - chunked-prefill
  - prefix-caching
  - paper
why_read: >-
  You get the testbed design, the fluid queue model and six rules for benchmarking serving engines
  without configuration confounds.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Researchers compared vLLM and SGLang on a reproducible Kubernetes testbed using a seeded multi-agent workload generator. SGLang ran the same configuration in both arms, acting as an internal control. Under vendor defaults, vLLM's median time to first token reached up to 64 times SGLang's. Matching one setting, whether long prompts are prefilled in chunks, removed 78% of the capacity gap where it was largest and 30 to 67% of the latency gap.

Published comparisons of the two engines usually credit such gaps to their different prefix-cache granularities. Multi-agent workloads repeat most prompt tokens, so cache behaviour matters, but chunked prefill is set by each engine's defaults for the hardware and release. A benchmark that does not hold it fixed can mistake a configuration difference for an architecture difference.

Near saturation, the remaining latency gap reflects queue growth. A fluid queue model driven only by a 4.4% throughput shortfall reproduces it, and shows the gap scales with the length of the benchmark run. What survives matching is a tail-latency advantage of 2.4 to 6.4 times at equal throughput, consistent with cache-aware ordering of waiting requests. The paper derives six recommendations for comparing serving engines.
