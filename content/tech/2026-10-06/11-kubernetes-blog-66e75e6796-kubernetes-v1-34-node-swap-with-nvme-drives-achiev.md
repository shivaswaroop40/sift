---
id: 66e75e6796
title: Kubernetes v1.34 node swap with NVMe drives achieves up to 3× pod density
original_title: Scaling Kubernetes Workloads with Node Swap
url: https://kubernetes.io/blog/2026/10/05/scaling-kubernetes-workloads-with-node-swap/
source: Kubernetes Blog
kind: blog
section: infrastructure
date: "2026-10-06"
published_at: "2026-10-05T18:00:00.000Z"
authors: []
comments: null
tags:
  - kubernetes
  - memory-management
  - node-swap
  - pod-density
  - cgroup-v2
  - sandboxing
  - blog
why_read: >-
  Learn whether swap-backed nodes fit your cluster's memory constraints and which workloads benefit
  most.
rank: 11
interest_score: 7
depth_score: 7
novelty_score: 6
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Kubernetes v1.34 reached general availability with full node swap support, allowing idle pod memory to be paged to NVMe drives. Testing across CI/CD builds, sandboxed browsers, and Python runtimes showed density gains of 25% to 200%, often with negligible latency cost. The approach works because cgroup v2 tracks disk swap separately from RAM, eliminating unpredictability from earlier versions.

For platform engineers, this matters because memory has become the binding resource constraint in clusters, particularly as agentic AI workloads hold large memory footprints during idle periods. Swap-backed nodes let you reduce per-pod memory limits by 50% or more while preventing OOM kills, allowing tighter bin-packing without cluster instability. The trade-off is explicit: swap absorbs burst memory spikes, not sustained working-set pressure.

The benchmarks show headless Chrome under gVisor doubled from 80 to 160 concurrent pods; Python sandboxes tripled from 80 to 240. At peak densities, latency increases come from CPU contention rather than I/O, so operators can run below maximums to hit target latencies while still gaining substantial density.
