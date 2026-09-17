---
id: ed44ac7e8d
title: SSD-LLaMA runs trillion-parameter MoE inference over 1 token/s on a consumer PC
original_title: "SSD-LLaMA: SSD-Native Inference for Trillion-Parameter MoE at 1+ Token/s on a Consumer PC"
url: https://arxiv.org/abs/2609.18110
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-17"
published_at: "2026-09-17T04:00:00.000Z"
authors:
  - Fangzhou Liang
  - Yibin Shen
  - Jianmin Hu
  - Jiayang Xu
  - Hanchi Gao
  - Minxian Xu
comments: null
tags:
  - moe
  - inference
  - ssd
  - llm
  - consumer-hardware
  - paper
why_read: >-
  You will see a concrete design for moving trillion-parameter MoE inference off the GPU memory
  ceiling and onto cheap SSD storage.
rank: 2
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers have built SSD-LLaMA, a local inference system for Mixture-of-Experts language models that treats SSDs as primary model storage rather than swap space. It uses an SSD I/O pipeline tuned for expert delivery, a three-tier SSD-RAM-VRAM hierarchy that loads and retains experts on demand, and a CPU-GPU hybrid executor that runs selected experts without pruning or substituting cheaper alternatives.

Across three frontier MoE model families, the system improves prefill throughput by 1.52x to 4.19x and decode throughput by 2.10x to 15.58x over the baselines tested. It sustains above 1 token/s on a trillion-parameter model using a single RTX 5090 and 32GB of RAM.

For practitioners, the work shows that running very large MoE models locally is feasible without exotic hardware, with the bottleneck shifting from GPU VRAM to storage bandwidth and expert scheduling. The claims come from the authors' own evaluations against unspecified baselines, so the speedup range depends on what they compared against.
