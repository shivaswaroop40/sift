---
id: 984e50b230
title: Fault tolerance mechanisms show no universal winner across distributed training architectures
original_title: "FailBench: Evaluating Fault Tolerance Across Distributed Training Architectures"
url: https://arxiv.org/abs/2610.07688
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-07"
published_at: "2026-10-07T04:00:00.000Z"
authors:
  - Khaled Aljbab
  - Amine Barrak
comments: null
tags:
  - fault-tolerance
  - distributed-training
  - benchmarking
  - checkpointing
  - deep-learning
  - paper
why_read: >-
  Learn how fault-tolerance mechanism performance varies across architectures and which trade-offs
  matter for your setup.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

FailBench tested eight crash-fault-tolerance mechanisms across seven distributed training architectures using an 8xV100 cluster. Checkpoint sizes ranged from 205 MB to 2.7 GB per rank. Single, concurrent, and cascading failures were evaluated across 142 architecture-mechanism combinations.

For practitioners choosing between mechanisms, the findings matter because overhead and recovery speed vary drastically by architecture. In-memory replication overhead ranged from 3.7% to 176% depending on setup. Disk checkpointing showed 0.5% steady-state overhead but slower recovery; just-in-time checkpointing avoided periodic costs but incurred 0.9 second delays on failure.

Gossip training increased sample throughput by 17.9% after worker loss, yet showed no measurable improvement in loss progress compared to no-fault training. This suggests throughput gains may not translate to meaningful convergence benefits. The work provides a decision framework for selecting mechanisms rather than a one-size-fits-all answer.
