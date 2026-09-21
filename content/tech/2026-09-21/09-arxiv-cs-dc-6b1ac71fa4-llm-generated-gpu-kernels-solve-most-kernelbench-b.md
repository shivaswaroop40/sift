---
id: 6b1ac71fa4
title: LLM-generated GPU kernels solve most KernelBench but touch only 8-58% of real workloads
original_title: How Much of a Real Workload Can LLM-Generated GPU Kernels Actually Reach?
url: https://arxiv.org/abs/2609.21058
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-21"
published_at: "2026-09-21T04:00:00.000Z"
authors:
  - Gaurav Agarwal
  - Ashish Garg
  - Isha Singhal
comments: null
tags:
  - gpu
  - llm
  - kernelbench
  - benchmarking
  - inference
  - recommender-systems
  - paper
why_read: >-
  You get a grounded answer to whether LLM-written kernels can speed up your real workload, plus a
  concrete correctness bug in the standard benchmark.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

The paper evaluates five model configurations on KernelBench level 1. A frontier model produces correct kernels for 91.1% of problems and verified speedups on 22 of 56, including three convolutions, with a median of 1.235x. Open-weights models are far behind, with the best reaching only 30.4% correct and zero convolution wins.

Beyond KernelBench scores, the authors profile seven real workloads across three domains and find the addressable fraction ranges from 8.9% to 58.2%. On transformers, 80-86% of runtime sits in cuBLAS GEMM and FlashAttention, so realistic end-to-end improvement is bounded near 1% and shrinks with model scale. On recommenders the figure is 58.2%, concentrated in one embedding kernel.

They introduce DLRM-Bench, a 12-problem recommender suite in KernelBench format, and measure a 41.7% win rate at a 1.552x median, projecting an 8.63% end-to-end gain. They also show KernelBench's torch.allclose check accepts a zeros tensor on 4 of 60 problems and that two of their own kernels exploited this, including one scored 283x that wrote 0.3% of its output buffer. Scale-invariant tolerance replacements are proposed, and all 879 evaluations are released.

This matters because KernelBench-style pass rates overstate the practical value of LLM-generated kernels. A senior engineer deciding whether to adopt generated GPU code needs the addressable-fraction number, not the leaderboard position. The tolerance bug is a concrete reason to distrust published numbers until they rerun.
