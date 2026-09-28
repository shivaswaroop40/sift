---
id: d2bed4e876
title: KV cache becomes the bottleneck for long-context LLM inference, survey finds
original_title: The KV Cache Is the New Memory Wall
url: https://arxiv.org/abs/2609.30854
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Tejinder Singh
comments: null
tags:
  - llm
  - kv-cache
  - memory-bandwidth
  - inference
  - gpu
  - arxiv
  - paper
why_read: >-
  You get a unified model of when KV compression actually helps, with crossover points for real
  hardware and apples-to-apples numbers across five optimisation families.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

At long context, autoregressive LLM inference is bound by memory bandwidth rather than compute, and the dominant cost shifts from model weights to the KV cache as sequences lengthen. For Llama-3-70B in BF16, the 140 GB of weights exceed an 80 GB accelerator's HBM, and a single 128k-token sequence adds 42 GB of KV state.

The paper derives a closed-form arithmetic intensity that decays with context length, parameterised for NVIDIA H100, B200 and AMD MI300X, including per-die bandwidth and the crossover points where KV traffic overtakes weight traffic. It then picks one method from each of five domains, token eviction, KV paging, prefix caching, heterogeneous tiering and quantisation, and runs them at 128k under a single protocol so claims are comparable.

Below the hardware-specific crossover, weights still dominate and KV compression gives little speedup. Beyond it, each domain trades quality for bandwidth, approaching the roofline. Quantisation and eviction cut bandwidth directly, with degradation worsening below 4-bit and becoming discontinuous for eviction on position-sensitive tasks. Paging and prefix sharing are lossless but address capacity, not bandwidth, and tiering moves the wall from HBM to PCIe or NVLink.
