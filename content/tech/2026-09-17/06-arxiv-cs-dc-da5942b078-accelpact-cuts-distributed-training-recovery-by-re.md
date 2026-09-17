---
id: da5942b078
title: >-
  AccelPact cuts distributed training recovery by rebinding FSDP references instead of reloading
  checkpoints
original_title: Zero-I/O Fault Recovery for Sharded Deep Learning via Dynamic Framework Dependency Rebinding
url: https://arxiv.org/abs/2609.18178
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-17"
published_at: "2026-09-17T04:00:00.000Z"
authors:
  - Genlang Chen
  - Junyi Zhu
comments: null
tags:
  - distributed-training
  - fault-tolerance
  - fsdp
  - pytorch
  - checkpoints
  - gpu
  - paper
why_read: >-
  It explains why FSDP jobs crash after a network blip even when the optimiser step committed, and
  shows a checkpoint-free recovery path with measured numbers.
rank: 6
interest_score: 8
depth_score: 9
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Researchers at an unstated institution present AccelPact, a runtime that recovers sharded distributed training jobs from network faults without rolling back to a checkpoint. Their motivation is concrete: per-update asynchronous checkpointing on a 1.216B-parameter decoder added 656.7% latency overhead, consumed 32.5 GiB of host memory and produced 3.39 TB/hour of storage traffic.

When a fault hits at a committed optimizer step, GPU memory on the surviving ranks is untouched. The problem is that PyTorch FSDP caches communication handles inside its module wrappers, so continuation fails until those handles are rebuilt. AccelPact walks the parameter hierarchy and rebinds the cached references in place, coordinated by an out-of-band Gloo consensus channel so every rank reattaches at the same step. No application code changes are needed and torch.compile graphs are preserved.

On 16 RTX 5880 GPUs training full-parameter Mistral-7B, AccelPact gave 1.197x whole-run goodput over a cold restart and 1.194x over NVRx checkpoint restoration at checkpoint age 5, rising to 1.698x at age 18. Ten successive injected faults left all 16 ranks bit-identical to a fault-free run, and reference rebinding itself took 0.49 to 0.52 ms across 4 to 16 GPUs.
