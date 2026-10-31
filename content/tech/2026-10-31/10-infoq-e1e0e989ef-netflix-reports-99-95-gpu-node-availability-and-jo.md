---
id: e1e0e989ef
title: Netflix reports 99.95% GPU-node availability and job success above 99.5%
original_title: Netflix Treats GPU Reliability as a Distributed Systems Problem
url: >-
  https://www.infoq.com/news/2026/10/netflix-gpu-distributed-systems/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-31"
published_at: "2026-10-30T12:00:00.000Z"
authors:
  - Craig Risi
comments: null
tags:
  - netflix
  - gpu
  - kubernetes
  - reliability
  - health-checks
  - auto-remediation
  - news
why_read: >-
  The original details the DCGM-based checks, the Karpenter remediation integration and the
  checkpointing model behind Netflix's reported numbers.
rank: 10
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: glm-5.3
---

Netflix has described a reliability platform for large-scale GPU training and inference built on Kubernetes, combining layered health checks, automated remediation and fault-tolerant training. It reports more than 99.95% GPU-node availability, with job success rising from roughly 98% to more than 99.5%. A training run may last weeks across hundreds of GPUs in lockstep, so one failed GPU or slow machine can stall the whole workload. For comparison, Meta attributed more than 66% of its Llama 3 training interruptions to hardware failures.

Standard cloud health checks only prove a virtual machine is running and reachable. Netflix found a GPU can answer a status query normally and still fail once memory is allocated or sustained computation begins, and a network adapter can be present with fewer links than expected, degrading collective operations. Device-level checks use NVIDIA DCGM for GPU errors, memory, interconnect and thermal conditions, and a node agent turns results into Kubernetes node conditions. Checks fail closed, so a hung diagnostic marks the machine unhealthy rather than reporting success.

Remediation is progressive rather than all-or-nothing. A transient fault first blocks new scheduling while existing workloads continue. If it persists, the machine is drained and its workloads move. Actions range from killing a job or resetting a GPU to rebooting or replacing the machine. This integrates with Karpenter's node auto-repair, with Netflix policies setting how long to tolerate each failure and how much of the cluster can be disrupted at once.

Hardware failures are accepted as unavoidable, so the training platform makes them cheaper to recover from. Large jobs checkpoint and use elastic workers to resume from the last healthy checkpoint when a machine is lost, with automatic retries. Application failures are classified separately to avoid repeatedly restarting jobs with genuine software bugs. The job itself is treated as a distributed system, so the platform can identify a single slow rank holding back a synchronous workload. NVIDIA's Multi-Instance GPU lets smaller inference workloads share GPUs with memory-level isolation.
