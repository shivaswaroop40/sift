---
id: d3fb11b5fa
title: >-
  Coordination-free data loading reduces batch-cost variability in distributed training by 83
  percent
original_title: Coordination-Free Workload Regularization for Variable-Cost Distributed Training
url: https://arxiv.org/abs/2610.21162
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-10-16"
published_at: "2026-10-16T04:00:00.000Z"
authors:
  - Tao Huang
  - Chen Zhu
  - Antonio Alonso
  - Daming Li
  - Adarsh Goura
  - Jaideep Ray
comments: null
tags:
  - distributed-training
  - data-loading
  - synchronization
  - variable-cost
  - scheduling
  - paper
why_read: >-
  Understand how to reduce synchronization stalls in distributed training without coordination
  overhead.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Batch Cost Lookahead buffers rank-local data and repartitions it into fixed-size packs with balanced estimated cost. The method needs no cross-rank communication or runtime changes. Simulation shows it cuts per-rank batch-cost variability by up to 82.8 percent.

In synchronous distributed training, all ranks wait for the slowest one each step. Variable-length data creates idle time when one rank has expensive records. BCL moves this balancing to the data loader, not the trainer, so stragglers matter less.

On eight H200 GPUs across 13 language model fine-tuning corpora, BCL runs 1.05 to 1.17 times faster than the baseline. On internal sequence workloads, compiled measurements show 1.20 to 1.34 times speedup across one to four nodes.

The method identifies a memory boundary where extremely high-variance or out-of-memory records need capping before BCL balances the rest. This clarifies when data preparation must precede load balancing.
