---
id: 8d5ca59e73
title: CUDA Locality Domains speed up Blackwell workloads by up to 111%, study finds
original_title: Characterizing CUDA Locality Domains on Blackwell GPUs
url: https://arxiv.org/abs/2611.07535
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Rocky Wang
  - Joyce Zhou
  - Keith Jiang
  - Jason Zhao
comments: null
tags:
  - cuda
  - nvidia
  - blackwell
  - locality-domains
  - nccl
  - memory-allocation
  - paper
why_read: >-
  You get measured die-aware execution numbers on eight B300 GPUs and a driver-level fix for LD
  allocation overhead above 32 MB.
rank: 7
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

An arXiv paper evaluates the Locality Domain (LD) feature introduced in CUDA 13.4, running tests on a single node with eight NVIDIA B300 GPUs. It covers memory management and access, computation, and communication. With die-aware adaptations integrated into widely used libraries, the authors report speedups of up to 43.5% for NCCL 2.32.3 AllGather, 111.3% for nvbandwidth device-to-device transfers, and 37% for DeepGEMM (EP). The gains depend on the data access pattern.

As Blackwell and Rubin GPUs advance multi-die scaling, data placement and cross-die communication matter more for latency. The authors note these costs have been largely unexplored. For teams running multi-GPU work on B300 hardware, the numbers suggest die-aware placement pays off in the collectives and GEMM libraries already in the stack. The gains are not automatic, since each library needed die-aware adaptation.

The feature has a cost of its own. LD-related GPU memory allocation overhead becomes non-negligible once allocations exceed 32 MB, driven by barrier and TLB invalidation. The authors propose a fix in the GPU driver kernel module, submitted to NVIDIA, and show the overhead could fall by 7x to 10x with no user-code changes.
