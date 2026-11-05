---
id: 2d29340e94
title: RTX 2080 Ti FP16 throttle removal gives 1.6x matmul but 11.8% pre-training gain at best
original_title: >-
  Unlocking Turing Tensor Cores: A Measured Throughput Account of From-Scratch Pre-training on a
  Single 22G RTX 2080 Ti
url: https://arxiv.org/abs/2611.05419
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-11-05"
published_at: "2026-11-05T05:00:00.000Z"
authors:
  - Dezhou Shen
comments: null
tags:
  - nvidia
  - tensor-cores
  - fp16
  - pre-training
  - throughput
  - paper
why_read: >-
  You get the before/after throughput, wall-time, memory and quality numbers for all five model
  tiers.
rank: 10
interest_score: 6.7
depth_score: 8
novelty_score: 8
utility_score: 4
scored: true
model: glm-5.3
---

A paper measures the end-to-end training effect of lifting NVIDIA's driver-level FP16 throttle on the RTX 2080 Ti. The turing-unlock kernel module writes the FP16 speed selectors before the driver binds the device and releases the ACR mutex. Published measurements report cuBLAS FP16 matmul throughput rising from 55.7 to 91.4 TFLOPS, about 1.6x. Pre-training on the same 22G card gains far less.

The tier-by-tier results show why the 1.6x microbenchmark figure does not transfer to training. Under a fixed protocol of five Chinese encoder-decoder tiers, 2,451 steps per tier and 16,384 tokens per step, the small tier (75.7M parameters, 512-wide, 8+8 layers, activation checkpointing on) went from 6,480 to 7,246 tok/s, up 11.8%, with wall time cut from 1.77h to 1.61h. The tiny tier gained 4.7%. The three smallest tiers gained at most 0.3%.

The authors conclude the gain rises monotonically with matrix size, imperceptible for the pico-micro tiers and a double-digit percentage only at the small tier. Per-tier peak memory stayed bit-identical, and final quality metrics were bit-identical or consistent within 10^-3. They describe the effect as a pure throughput gain that leaves training dynamics untouched.
