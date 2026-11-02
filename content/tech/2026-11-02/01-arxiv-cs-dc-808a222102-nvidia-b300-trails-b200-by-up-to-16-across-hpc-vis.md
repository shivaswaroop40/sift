---
id: 808a222102
title: NVIDIA B300 trails B200 by up to 16× across HPC, vision and LLM workloads
original_title: >-
  Matching Workloads to Blackwell: Power-Resolved Benchmarking of NVIDIA B200 and B300 across HPC
  and AI Workloads
url: https://arxiv.org/abs/2610.41919
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Mohsen Zand
  - Trung Dac Nguyen
  - H. Birali Runesha
comments: null
tags:
  - nvidia
  - blackwell
  - benchmarking
  - hpc
  - llm-inference
  - power
  - paper
why_read: >-
  The paper gives per-workload B200 versus B300 numbers, a power-based explanation of the deficits,
  and procurement guidance.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

A benchmark of NVIDIA B200 and B300 (Blackwell Ultra) GPUs on two independent eight-GPU clusters found the B300 is not a uniform successor. It trails the B200 by up to 5.6× on convolutional inference, 8× on 3D vision transformer training, 24-27% on Llama-3-70B inference throughput, and 16× on double-precision Quantum ESPRESSO. The tests span computer-vision inference and training, LLM inference with Llama-3-8B and 70B, and six production HPC codes.

The result matters for anyone specifying GPU clusters. Blackwell Ultra is not a safe default upgrade over the B200. The winner depends on the workload, so a single benchmark score cannot guide a purchase. The authors give per-workload procurement guidance instead of one ranking.

The authors resolve the convolutional deficit with board power rather than throughput alone. On the affected workloads the B300 draws only 36-53% of its 1100 W envelope. On ViT-Large, which it wins, both parts saturate at 95-97% of TDP. The harness keeps inputs resident in device memory, which rules out a host-side data pipeline and points to per-kernel cost.

Software builds matter as much as hardware in these results. Two B300 nodes of identical silicon differed by 2.1× in time-to-first-token, solely because of a development vLLM build. The lesson for anyone benchmarking inference hardware is to pin the software stack.
