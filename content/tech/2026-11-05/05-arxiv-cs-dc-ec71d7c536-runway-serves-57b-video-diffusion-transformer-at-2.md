---
id: ec71d7c536
title: Runway serves 57B video diffusion transformer at 24 fps on four H100 GPUs
original_title: "Runway Characters: Serving a 57B Video Diffusion Transformer for Real-Time Conversation"
url: https://arxiv.org/abs/2611.05642
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-11-05"
published_at: "2026-11-05T05:00:00.000Z"
authors:
  - Rohan Agarwal
  - Robin Andeer
  - Alex Armbruster
  - Bennett Arthur
  - Michail Christos Doukas
  - Piero Esposito
comments: null
tags:
  - runway
  - video-diffusion
  - kv-cache
  - fp8
  - inference
  - real-time
  - paper
why_read: >-
  You get the full mechanism for cutting a 240.9 ms diffusion step to 147.4 ms, plus seven weeks of
  production data.
rank: 5
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Runway describes the system behind its Characters product, which serves a roughly 57B-parameter autoregressive video diffusion transformer at 704×1088 and 24 fps on four H100 GPUs, with a voice agent in the loop. It serves one user at a time at batch size one. Real time means a sustained 166.7 ms per four-frame chunk, with only a few chunks of buffering.

The write-time technique is the transferable part. Each chunk makes 240 attention calls, each reading a 5,788-slot KV cache in which only 757 tokens are new, and 29% of the original step was whole-cache work repeated in every call. Runway moves that work to write time, applying a ring cache, RoPE and FP8 quantisation once per write, plus a delta rotation when positions reset. It also fuses the tensor-parallel all-reduce into the FP8 GEMM with in-switch reduction, and gives the latent-to-frame decoder its own GPU.

The numbers come with a caveat. Without the fused kernel, the other changes cut the diffusion step from 240.9 to 159.3 ms, a 1.51× speedup sustaining 24.5 fps, with no detected degradation in lip-sync scores. The fused kernel reaches 147.4 ms, 1.63× and 43% of FP8 peak, but was rolled back once in production before being re-enabled. Over seven weeks of production the worker averaged above 23.5 fps in 99.5% of sessions that streamed for at least a second.

The pipeline accounts for 0.49 s of a 2.1 s median conversational turn. On the same GPUs, the two open-source real-time video systems the authors benchmarked, at four denoising passes, miss real time or add over a second of latency, one figure estimated, at a third to half the resolution.
