---
id: 0a191dc692
title: Researchers run 975 billion parameter model across eleven consumer laptops
original_title: "Cascadia: Resident 975B MoE Inference on Eleven AI PCs"
url: https://arxiv.org/abs/2610.07219
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-10-07"
published_at: "2026-10-07T04:00:00.000Z"
authors:
  - Tate Berenbaum (Not Community Labs Inc.)
  - Matias Parij (Not Community Labs Inc.)
  - Muthaiah Venkatachalam (Intel Corporation)
comments: null
tags:
  - moe
  - inference
  - distributed-systems
  - optimization
  - cpu-gpu-memory
  - paper
why_read: Understand how sparse models can run at scale on commodity hardware without custom accelerators.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cascadia executes Inkling, a 975B-parameter mixture-of-experts model, on eleven Intel Core Ultra X7 laptops with 64GB memory and Arc B390 graphics. The custom engine uses OpenVINO to fuse operations, achieving 60 tokens per second at 88 concurrent streams and 46.87 tokens/s over full serving phases. First-token latency reaches 6.05 seconds at fifteen streams.

For distributed systems engineers, this matters because it demonstrates practical sparse model execution without specialised hardware. The approach shows that gigabit Ethernet coordination and CPU-GPU memory sharing can sustain inference at reasonable throughput, challenging assumptions about inference requiring centralised GPUs.

The system scales context to 64k tokens per stream with attention becoming the bottleneck rather than memory. Dense feed-forward layers are optimised by representing them as expert slices, reducing layer computation time from 8.1ms to 4.5ms.
