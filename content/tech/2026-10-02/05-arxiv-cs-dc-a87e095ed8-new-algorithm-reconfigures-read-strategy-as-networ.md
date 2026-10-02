---
id: a87e095ed8
title: New algorithm reconfigures read strategy as network conditions shift
original_title: "Ditto: Generalized Reconfigurable Linearizable Reads"
url: https://arxiv.org/abs/2610.00702
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-10-02"
published_at: "2026-10-02T04:00:00.000Z"
authors:
  - Aleksey Panas
comments: null
tags:
  - linearizability
  - distributed-systems
  - reads
  - quorums
  - adaptation
  - paper
why_read: >-
  Understand why no single read algorithm suits every deployment, and how to pick the right one for
  your network.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers analysed specialised read algorithms for distributed datastores that maintain linearizability. They found that no single algorithm performs best across all deployments because fundamental tradeoffs exist between read and write latency, and between read and write tolerance to network variance. These tradeoffs shift as network and workload conditions change.

The paper matters because most real workloads are read-dominant by orders of magnitude, so read latency directly affects user-perceived performance. Deploying the wrong algorithm for your current conditions wastes resources or increases latency. The authors expose a gap in existing approaches: they cannot adapt to changing conditions.

They propose Ditto, which reconfigures across the algorithm space at runtime. A companion algorithm, Pairwise Quorums, handles cases that existing approaches cannot. Together these subsume all prior algorithms: against each existing approach, Ditto is either strictly better or reconfigures to match it where genuine tradeoffs exist.
