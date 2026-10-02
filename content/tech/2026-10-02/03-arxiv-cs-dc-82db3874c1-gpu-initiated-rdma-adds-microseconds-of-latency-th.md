---
id: 82db3874c1
title: GPU-initiated RDMA adds microseconds of latency through queue and memory ordering overhead
original_title: "GPU-Initiated Communication: Dissecting Down to the Bone"
url: https://arxiv.org/abs/2610.01380
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-02"
published_at: "2026-10-02T04:00:00.000Z"
authors:
  - Javid Baydamirli
  - Ismayil Ismayilov
  - Kaan Oktay
  - Didem Unat
comments: null
tags:
  - gpu-networking
  - rdma
  - collective-communication
  - inference
  - distributed-systems
  - paper
why_read: >-
  Learn where GPU-initiated RDMA latency comes from and how queue sharing degrades collective
  performance.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

GPU-initiated communication lets GPU threads post RDMA operations directly to the network interface card, underpinning libraries like NVSHMEM and NCCL GIN used in mixture-of-experts models. A minimal GPU path issues an operation in 0.7 microseconds and completes in 4.0 microseconds, but production libraries add up to 4.6 microseconds of issue time through queue management, memory ordering, and completion semantics.

This matters because latency directly affects fine-grained collective operations in modern language models. Understanding where those microseconds go helps practitioners tune or replace communication layers for specific hardware and traffic patterns.

Sharing a queue with bulk traffic degrades latency by one to three orders of magnitude. Reaching 260 million messages per second on the test InfiniBand platform requires doorbell batching and queue parallelism, both of which consume GPU resources and reduce block residency even when unused.
