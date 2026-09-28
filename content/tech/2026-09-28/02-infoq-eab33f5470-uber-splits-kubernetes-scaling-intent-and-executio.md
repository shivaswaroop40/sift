---
id: eab33f5470
title: Uber splits Kubernetes scaling intent and execution to drop idle failover capacity
original_title: Uber Separates Scaling Intent From Execution on Kubernetes Platform
url: >-
  https://www.infoq.com/news/2026/09/uber-kubernetes-scaling/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-28"
published_at: "2026-09-28T09:00:00.000Z"
authors:
  - Matt Saunders
comments: null
tags:
  - kubernetes
  - scaling
  - controllers
  - failover
  - uber
  - distributed-systems
  - news
why_read: >-
  It is a concrete write-up of how a very large Kubernetes fleet decouples who wants scaling from
  who applies it, and the controller-level traps that came with it.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Uber has published details of a new ServiceScale controller that lets multiple orchestrators safely scale the same Kubernetes workloads. The Container Platform team runs about 4,000 services across 100 clusters on 3 million cores, with 1.5 million daily pod launches. A new ServiceScale CRD holds intent, and a Service Scale Controller reconciles the combined desires into Kubernetes primitives. The change lets a failover orchestrator reclaim capacity from low-tier workloads without entangling that logic into the hot path that handles deployments.

Engineers chose not to extend the existing Uber Deployment Controller, because adding failover behaviour to the controller that already handles the most critical workflows risked regressions spilling into normal service lifecycle work. By expressing each orchestrator's scaling desire through ServiceScale and reconciling in cluster, engineers can inspect intent during incidents and recover failback state without trawling logs. The team also avoided adding an external database or coordination service.

Three production lessons stand out. Stale informer caches caused a status field to act as a terminal trigger, so controllers now attach a generation annotation to writes and only report status once their cache reflects that generation or newer. Kubernetes v1.36 ships comparable staleness mitigation, and controller-runtime work is under way. Multi-writer updates also caused ReplicaSet metadata to drift from spec, breaking proportional scaling on rolling updates, so Uber added fleet-wide drift detection and an automated healer.

A separate arXiv paper reports the broader Unified Failover Architecture cut steady-state provisioning from 2x to 1.3x and removed over a million CPU cores. The ServiceScale rollout took about a year, used kind for integration testing, and covered native Deployments and OpenKruise CloneSets without customer-impacting outages.
