---
id: 0ef5db6f2f
title: GPU die scaling breaks naive schedulers, asymmetry-aware allocation recovers up to 1.33x
original_title: Dissecting How Die Scaling Breaks GPU Fine-grained Scheduling
url: https://arxiv.org/abs/2609.24270
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - Xiaoze Fan
  - Jianhao Wang
  - Weihao Cui
  - Han Zhao
  - Zhuobin Huang
  - Yangjie Zhou
comments: null
tags:
  - gpu
  - scheduling
  - hbm
  - llm-inference
  - die-scaling
  - arxiv
  - paper
why_read: >-
  See concrete numbers on how much hidden GPU asymmetry is costing your kernel and inference
  schedules, and what a per-chip topology map buys you.
rank: 4
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Die scaling has made modern GPUs physically asymmetric, producing per-chip compute topologies from manufacturing floorsweeping and non-uniform memory access from cache and HBM partitioning. The paper reports up to 1.33x performance variation when compute unit allocation ignores topology, up to 67% higher HBM latency on remote accesses, and nearly doubled L2 latency for those accesses.

For anyone running multi-tenant GPU workloads or high-throughput inference, this means the logical resource abstraction exposed by the driver is misleading. LLM serving in particular stacks many small tenants onto one device, so the 14.3% improvement from asymmetry-aware multiplexing maps directly to tokens-per-second and tail-latency budgets.

The authors profile each chip at runtime to learn its compute and memory affinity, then patch fine-grained schedulers to pick physical units by affinity rather than by count. The same mechanism improves mainstream kernels by up to 1.22x and removes the worst-case 1.33x spread between allocations. The characterisation step is described as lightweight, but the paper is an abstract and gives no detail on the cost of profiling or which frameworks were modified.
