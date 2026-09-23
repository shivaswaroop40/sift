---
id: 7d26d4e3ea
title: Dynamo cuts LLM serving recovery to under 7 seconds with shared GPU memory
original_title: Fast Recovery for LLM Serving via Decoupled Device Memory Lifetime in Dynamo
url: https://arxiv.org/abs/2609.25451
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-23"
published_at: "2026-09-23T04:00:00.000Z"
authors:
  - Schwinn Saereesitthipitak (NVIDIA)
  - Mohammed Abdulwahhab (NVIDIA)
  - Hannah Zhang (NVIDIA)
  - Dan Feigin (NVIDIA)
  - Neelay Shah (NVIDIA)
  - Maksim Khadkevich (NVIDIA)
comments: null
tags:
  - llm-serving
  - inference
  - gpu
  - fault-recovery
  - kubernetes
  - vllm
  - paper
why_read: >-
  You will see how Dynamo sidesteps the minutes-long engine reinitialisation step that forces LLM
  serving clusters to overprovision, and what the real cost is that this design trades against.
rank: 10
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers behind the Dynamo serving system argue that recovery time, not request progress, drives the need for overprovisioned LLM capacity. They propose treating an initialised engine as the thing to preserve, rather than the thing to rebuild after each failure.

Their GPU Memory Service (GMS) decouples device-memory ownership from engine processes, so a fresh replacement engine can reattach to surviving GPU allocations such as model weights without copying them. An 18-week trace of Dynamo shows most failures leave the GPU and its allocations usable, which is the precondition this design relies on.

Across four models on vLLM and SGLang, the team reports replica recovery in under 7 seconds, against minutes for a warm restart, using 4 to 8 GiB of extra device memory per GPU regardless of model size. Replaying the trace, they estimate GMS would reclaim 79 percent of GPU-hours previously lost to recovery.

The mechanism is a second initialised runtime kept warm on the same GPUs, so a failed replica is promoted rather than reconstructed. This trades a small fixed memory overhead and some read-only sharing complexity for large reductions in recovery latency and required spare capacity.
