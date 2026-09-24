---
id: 9d70dcae07
title: Crossflow makes prefill-decode boundary elastic without changing node roles
original_title: "Crossflow: Prefill-Decode Elasticity for Agentic LLM Serving"
url: https://arxiv.org/abs/2609.27085
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Yi Xu
  - Ehsan K. Ardestani
  - Wenyin Fu
  - Martin Schatz
  - Krishna Malladi
  - Zhan Shu
comments: null
tags:
  - llm-serving
  - prefill-decode
  - disaggregation
  - kubernetes
  - scheduling
  - inference
  - paper
why_read: >-
  You will get a concrete mechanism for elastic P/D disaggregation plus the workload numbers that
  show why static partitioning wastes capacity on agentic traffic.
rank: 4
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Crossflow is a prefill-decode disaggregation scheme that lets decode nodes publish short-lived, revocable leases covering local prefill compute, KV capacity, transfer work, and projected output. It keeps the same node roles as static P/D but makes the boundary between the two pools elastic.

The paper observes that uncached-input to output token ratios are highly variable, with peak-to-mean ratios up to 4.7x at minute granularity in a large LLM fleet, and a median 24.5x range within a day on a public agentic trace. Sizing pools at the 95th percentile wastes up to 17% of cluster capacity; sizing below it converts the same imbalance into queueing. Reassigning replicas takes tens of minutes, which is too slow.

Across public and internal traces, Crossflow improves token throughput by 16.2 to 17.4% on geometric mean over static P/D, and by up to 43.4% at high load. Mean TTFT falls at every evaluated point. The gains come from absorbing prefill bursts on decode capacity instead of waiting on slow replica reassignment.
