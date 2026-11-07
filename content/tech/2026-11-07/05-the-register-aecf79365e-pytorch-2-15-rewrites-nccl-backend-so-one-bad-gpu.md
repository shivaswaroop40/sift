---
id: aecf79365e
title: PyTorch 2.15 rewrites NCCL backend so one bad GPU no longer means a full restart
original_title: PyTorch 2.15 tackles the 'one bad GPU' problem
url: https://www.theregister.com/devops/2026/11/06/pytorch-215-tackles-the-one-bad-gpu-problem/5308227
source: The Register
kind: news
section: ai-and-ml
date: "2026-11-07"
published_at: "2026-11-06T18:36:42.000Z"
authors:
  - Joab Jackson
comments: null
tags:
  - pytorch
  - nccl
  - nvidia
  - gpu
  - distributed-training
  - fault-tolerance
  - news
why_read: >-
  You get the mechanics of the one-communicator rule, the flight recorder and the 2.16 removal plan
  for the legacy backend.
rank: 5
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

PyTorch 2.15 ships a rewritten backend for Nvidia's Collective Communications Library. The old ProcessGroupNCCL could spawn dozens of communicators per process group, which led to intermittent deadlocks and unpredictable performance. The new backend enforces one communicator per process group at initialisation. It also adds a flight recorder that captures operations in snapshots for inspection after a failure.

This matters for anyone running large multi-node training. A crashed or slow GPU can now be excluded by a third-party orchestrator, which can assign a replacement worker, rather than forcing the whole job to restart. The flight recorder replaces the generic timeout or deadlock message operators previously saw when a cluster stalled.

The legacy ProcessGroupNCCL ships in 2.15 as a rollback. If the new backend holds up, the old one is removed in 2.16, planned for early next year. The release also adds a Python transport API for asynchronous one-way data movement, parallel processing improvements for Apple hardware, and support for Nvidia's next-generation Blackwell GPUs. It totals 3,117 commits from 583 contributors.
