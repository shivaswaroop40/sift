---
id: 28b7854d64
title: Attention-FFN disaggregation lifts decode throughput up to 1.17x on GB200 NVL72
original_title: "FastAFD: When Does Attention-FFN Disaggregation Pay on Rack-Scale NVLink?"
url: https://arxiv.org/abs/2611.07149
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Yichao Fu
  - Yuxuan Zhang
  - Minshen Zhang
  - Ruitian Wang
  - Junda Chen
  - Hao Zhang
comments: null
tags:
  - disaggregation
  - moe
  - inference
  - gb200
  - vllm
  - speculative-decoding
  - paper
why_read: >-
  You get the measured AFD versus wide EP numbers on GB200 NVL72, the throughput model that predicts
  them within 3%, and the conditions under which disaggregation pays.
rank: 5
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Researchers built FastAFD, an attention-FFN disaggregation engine for GB200 NVL72 that overlaps the mixture-of-experts work of one microbatch with the attention of another. Benchmarked against the best vLLM wide expert parallelism setting, disaggregation reached up to 1.17x decode throughput on Qwen3 and 1.16x on Qwen3.5, and matched wide EP on MiniMax-M2.5. Earlier AFD results came from other hardware, narrower baselines, or analytical models rather than production-style rack-scale systems.

The paper also derives an analytical model that predicts AFD throughput within 3% using only profiles of colocated vLLM, so a team can tell whether switching pays off before deploying it. The speedup factors into a batch gain, because attention GPUs hold no expert weights and so take larger batches, an overlap gain, because MoE runs on expert GPUs behind attention, and a disaggregation cost from the GPUs given over to experts.

Speculative decoding helps light-expert models most, adding a further 8% to AFD's advantage over wide EP. The authors also project that serving experts on accelerators that keep weights in on-chip SRAM, such as Groq LPX paired with Vera Rubin NVL72, would remove most of the disaggregation cost and raise the ideal speedup to 2.48x with speculative decoding. That figure is a projection, not a measurement. FastAFD is open source.
