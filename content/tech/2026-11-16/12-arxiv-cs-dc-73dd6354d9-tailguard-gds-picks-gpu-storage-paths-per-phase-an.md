---
id: 73dd6354d9
title: TailGuard-GDS picks GPU storage paths per phase and cuts FSDP step p95 by 18.4%
original_title: "TailGuard-GDS: Tail-Safe Control of GPU Storage Data Movement"
url: https://arxiv.org/abs/2611.17824
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-11-16"
published_at: "2026-11-16T05:00:00.000Z"
authors:
  - Jiaqi Liu
  - Fan Yang
  - Xiaohang Shi
  - Xianzhe Zhang
  - Tao Jiang
  - Guojun Yuan
comments: null
tags:
  - gpudirect-storage
  - nvme
  - tail-latency
  - pytorch-fsdp
  - deepspeed
  - gpu-io
  - paper
why_read: >-
  The full paper should show which operations and conditions make GDS lose to host staging, and how
  the profiling and switching policy is built.
rank: 12
interest_score: 5.7
depth_score: 6
novelty_score: 6
utility_score: 5
scored: true
model: claude-sonnet-5-5
---

The paper reports that GPUDirect Storage is not reliably the best path for moving data between NVMe and GPU memory. On eight H100s, the preferred path varied with operation, request size, concurrency, placement and resource contention. Bandwidth winners and tail-latency winners sometimes differed for the same GPU-buffer operation.

TailGuard-GDS is a runtime that profiles equivalent delivery plans, varying backend, request shape and placement. It picks the one with the lowest GPU-visible tail latency under each application phase's constraints, and revisits the choice as conditions change. The authors say policy lookup and switching cost microseconds.

Integrated with PyTorch FSDP and DeepSpeed ZeRO-3, it cut FSDP step p95 by 18.4% and GPU-idle p95 by 25.3% against the strongest fixed path. Across five eight-GPU ZeRO-3 workloads, step p95 fell 7.9-24.6% against fixed host staging and 28.4-42.6% against fixed GDS.

The margin over a tuned DeepSpeed AIO baseline is small: 5.6% lower step p95 and 6.1% higher estimated throughput. The throughput figure is an estimate. This is an abstract, so the workloads and measurement method are not visible here.
