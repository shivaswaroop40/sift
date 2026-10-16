---
id: e61493883a
title: >-
  Heterogeneous GPU clusters add constant overhead to LLM pipeline throughput, not just the GPipe
  penalty
original_title: Exact Makespan Bounds and the GPipe Homogeneity Bias for Heterogeneous LLM Inference Pipelines
url: https://arxiv.org/abs/2610.21815
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-16"
published_at: "2026-10-16T04:00:00.000Z"
authors:
  - Zhu Wenbo
comments: null
tags:
  - llm-inference
  - pipeline-parallelism
  - heterogeneous-systems
  - gpu-scheduling
  - throughput-optimization
  - paper
why_read: >-
  Learn why GPipe's homogeneous formula misleads on mixed hardware and what drives inference
  throughput in practice.
rank: 1
interest_score: 8.3
depth_score: 9
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers derived exact formulas for throughput of micro-batch pipelines serving LLMs across heterogeneous GPU clusters. The classic GPipe formula assumes uniform stages; on mixed hardware, additional communication overhead appears as a fixed constant, not in the slope term. Testing on RTX 5090, 3090, and GTX 1070 partitions confirmed the model to within 10^-9 error.

For practitioners tuning distributed inference, balancing per-stage compute time matters far more than reducing communication latency for steady-state throughput. The communication overhead only enters the slope when some stage's communication time exceeds the compute difference between fastest and slowest stages.

Under asynchronous communication via NCCL, the overhead is purely additive. Under blocking communication, it affects throughput slope only conditionally. Real systems with partial overlap fall between these bounds.
