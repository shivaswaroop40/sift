---
id: 96b00e3241
title: Google and Meta open-source TorchTPU for native PyTorch on TPUs
original_title: Google and Meta Open-source TorchTPU to Bring Native PyTorch Support to Google TPUs
url: >-
  https://www.infoq.com/news/2026/11/torchtpu-native-pythorch-tpu/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-11-03"
published_at: "2026-11-02T17:00:00.000Z"
authors:
  - Sergio De Simone
comments: null
tags:
  - pytorch
  - tpu
  - google
  - meta
  - open-source
  - machine-learning
  - news
why_read: >-
  The original announcement lays out TorchTPU's architecture, its three eager modes and the
  benchmark methodology behind the TPUv7 numbers.
rank: 12
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Google and Meta have open-sourced TorchTPU, a native PyTorch backend for Google TPUs. It takes a different route from PyTorch/XLA, the approach Google has used since 2020, which leaned on JAX, XLA and lazy tensors. Migrating a GPU workload means swapping the cuda device for tpu and the nccl distributed backend for tpu_dist, or calling the new torch.accelerator.current_accelerator API. Google tested it against roughly 5,000 Hugging Face models across more than 500 architectures on TPU generations from v5e onwards.

The change matters because PyTorch/XLA demanded intrusive source edits to mark compilable regions, suffered severe compile-time latency and never supported PyTorch's eager mode. TorchTPU treats eager execution as a first-class concern. Its DeferAndFuse mode, a hybrid of eager and compiled execution, is claimed to run 50% or more faster than strict eager while cutting peak HBM memory. For teams with existing GPU code, the port to TPU now looks like a device-string change rather than a rewrite.

Google's own benchmarks give a sense of scale. A 30-billion parameter Muse Glimmer model in standard PyTorch reached 25.7k tokens per second in inference on a single TPUv7 chip at 5,120 sequence length, and 22.4k at 10,240. Training on four chips hit 5.6k and 4.6k tokens per second at the same lengths. Qwen3 MoE 235B training scaled from 1,024 to 8,192 TPUv7 chips.

The project is still at an early stage and in continuous evolution. Its roadmap lists dynamic shapes, compilation performance, operator coverage, reinforcement learning and quantization. Every performance figure above comes from Google's own testing, so treat it as a vendor number until independent results appear.
