---
id: 07873cb954
title: Meta achieves 1.5x AMD GPU training speedup through hardware-model co-design
original_title: >-
  Architecting for Hardware Diversity: Meta's End-to-End Co-Design for High-Performance AI Training
  on AMD GPUs
url: https://arxiv.org/abs/2610.22230
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-16"
published_at: "2026-10-16T04:00:00.000Z"
authors:
  - Haoyu Zhang
  - Arshad Rahman
  - Adnan Aziz
  - Ajith Prabhudev
  - Amin Farmahini
  - Ben Rhoads
comments: null
tags:
  - gpu
  - amd
  - training
  - co-design
  - vendor-diversity
  - performance-tuning
  - paper
why_read: Learn how to extract performance from non-NVIDIA accelerators in production training workloads.
rank: 7
interest_score: 7.7
depth_score: 9
novelty_score: 6
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Meta trained recommendation models on AMD MI350X GPUs alongside NVIDIA B200s to reduce vendor lock-in and costs. Direct porting underperformed, so they redesigned models to exploit MI350X's 1.6x larger memory, used analytical models to pick optimal kernels, and extended agentic workflows for AMD-specific tuning. This delivered up to 1.5x throughput gains.

Distributed systems engineers running large fleets face pressure to diversify hardware. NVIDIA-specific optimizations compound vendor dependence. Meta's approach of reshaping models and software rather than porting directly offers a playbook for alternative accelerators.

The work required an analytical performance model for zero-warmup kernel selection across datatypes and matrix shapes. Contributions were upstreamed to PyTorch, Triton, and ROCm, meaning these tools now better support AMD hardware without custom work.
