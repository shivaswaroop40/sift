---
id: 2f27be72ad
title: Grace-Blackwell unified memory bandwidth varies thirteenfold by data placement and access pattern
original_title: Understanding NVIDIA Grace-Blackwell Unified Memory Through Placement-Controlled Microbenchmarks
url: https://arxiv.org/abs/2610.20354
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-15"
published_at: "2026-10-15T04:00:00.000Z"
authors:
  - Nathan Graddon
  - Aaron Jarmusch
  - Sunita Chandrasekaran
comments: null
tags:
  - nvidia
  - gpu-memory
  - benchmarking
  - unified-memory
  - performance-modelling
  - paper
why_read: >-
  Learn how Grace-Blackwell unified memory actually behaves under different access patterns and
  capacity conditions.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

NVIDIA's Grace-Blackwell systems present CPU-GPU memory as unified in software but the hardware enforces different costs. A 1 GB STREAM triad reaches 3963 GB/s from local GPU HBM but only 304 GB/s through host-mapped system memory. The same hardware path produces vastly different throughput depending on whether data is prefetched, reused, evicted under capacity pressure, or accessed for the first time.

For platform engineers, the unified memory abstraction masks critical performance cliffs. Prefetched and reused data sustains above 4.6 TB/s until capacity is exceeded. Beyond 125 per cent of CUDA-visible memory, throughput drops to 968-1214 GB/s. A single benchmark number is useless; you must measure your actual access pattern, data placement, and memory pressure.

The paper builds a placement-controlled microbenchmark suite isolating local HBM access, host memory access, prefetch, reuse, and eviction. Results are calibrated to a model of migration, synchronisation, and handoff costs. This gives a methodology for characterising your own workload rather than relying on vendor specifications.
