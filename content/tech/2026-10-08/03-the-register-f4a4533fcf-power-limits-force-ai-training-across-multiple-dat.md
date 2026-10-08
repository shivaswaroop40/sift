---
id: f4a4533fcf
title: Power limits force AI training across multiple datacentres, creating new networking demands
original_title: When one datacenter is no longer enough
url: >-
  https://www.theregister.com/ai-and-ml/2026/10/07/sponsored-when-one-datacenter-is-no-longer-enough/5301030
source: The Register
kind: news
section: infrastructure
date: "2026-10-08"
published_at: "2026-10-07T15:00:00.000Z"
authors: []
comments: null
tags:
  - distributed-systems
  - ai-infrastructure
  - datacenter-networking
  - gpu-clusters
  - power-constraints
  - news
why_read: >-
  Understand why your next large-scale training cluster spans sites and what that means for your
  network architecture.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Training the largest AI models now hits power constraints at single sites, pushing organisations to run workloads across multiple datacentres. This creates a different networking problem than traditional interconnect: AI training needs huge synchronous flows, minimal packet loss and tightly coordinated GPU communication across long distances.

Distributed AI infrastructure requires the network to become part of the compute system itself, not just transport. If one part of the cluster stalls, the impact spreads across the entire job. This demands new approaches to routing, buffering and coherent optics to make geographically separate facilities behave like a single deterministic machine.

Trade-offs matter. Network power consumption directly competes with power available to GPUs. Programmability becomes essential as AI workloads evolve and infrastructure teams must adapt their systems.
