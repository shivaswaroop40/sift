---
id: cf7405e254
title: Weave dynamically partitions GPU SMs per layer to speed up MoE inference
original_title: "Weave: Fine-Grained Dynamic SM Scheduling in an MoE Megakernel for Compute-Communication Overlap"
url: https://arxiv.org/abs/2609.21483
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-21"
published_at: "2026-09-21T04:00:00.000Z"
authors:
  - Ziyu Huang
  - Yangjie Zhou
  - Chenhao Zhu
  - Zihan Liu
  - Jinyu Liu
  - Shulai Zhang
comments: null
tags:
  - moe
  - gpu
  - inference
  - scheduling
  - nvlink
  - h100
  - paper
why_read: >-
  It shows a concrete mechanism for reclaiming GPU resources wasted by fixed SM splits in MoE
  serving, with measured speedups on real hardware.
rank: 1
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Weave is a new system for mixture-of-experts inference on GPUs with expert parallelism. It runs as a persistent megakernel that, after each layer's routing decision, partitions streaming multiprocessors into communication and computation workers based on the actual data volumes. A temporal scheduler then staggers the two groups to reduce idle time caused by MoE data dependencies.

The authors report a 2.89x geometric-mean speedup on MoE layers and 1.33x end-to-end versus five existing baselines across six models on 4x H100 SXM. The core idea is treating the SM split as a runtime decision rather than a fixed policy, since the optimal ratio depends on each layer's routing pattern.

The paper claims the first overlap system to schedule SMs at this granularity. Claims are based on the authors' own benchmarks, and the abstract does not specify which baselines were tested or how routing variability affects the gains.
