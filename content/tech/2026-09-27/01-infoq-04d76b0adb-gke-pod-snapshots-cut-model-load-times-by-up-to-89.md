---
id: 04d76b0adb
title: GKE pod snapshots cut model load times by up to 89%, GA since May
original_title: GKE Pod Snapshots Cut Model Load Times, and Move the Work to Snapshot Lifecycle Management
url: >-
  https://www.infoq.com/news/2026/09/gke-pod-snapshots-benchmarks/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-27"
published_at: "2026-09-27T06:46:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - kubernetes
  - gke
  - gpu
  - google-cloud
  - ai-infra
  - checkpointing
  - news
why_read: >-
  A grounded look at what GKE pod snapshots actually do, what they require, and where the
  operational pain moves.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Google has published benchmark numbers for GKE Pod snapshots, a checkpoint and restore feature that saved a 70B parameter model in 37 seconds and an 8B model in 15 seconds. Snapshots capture CPU and GPU memory, file descriptors, threads and tmpfs, and a new replica resumes from that state instead of running cold start code. General availability landed in May on clusters running 1.35.3-gke.1234000 or later.

It matters because large model cold start is one of the main costs in serving and batch inference. Snapshots shift the bottleneck from model loading to snapshot retrieval, but only inside GKE Sandbox with gVisor. Standard clusters need a gVisor node pool. Two CRDs handle configuration: PodSnapshotStorageConfig points at a Cloud Storage bucket, PodSnapshotPolicy picks Pods by label and sets trigger mode plus retention.

Practitioner attention has moved past the capture to what happens after it. Restoration requires an identical distilled Pod spec hash, matching machine series, matching gVisor kernel and matching GPU driver. Upgrade any of those and the benefit is silently lost, the Pod just starts cold. Rootfs-only snapshots relax the rules and can cross machine families, but do not restore process memory.

Hardware support is narrow. Whole-pod snapshots do not work on E2, multi-GPU Pods only work on L4, and Multi-Instance GPU sharing is unsupported. Rehydration is the application's job: secrets, certificates, environment variables, external connections, persistent volumes and added iptables rules are not restored. Cloud Storage holds the full memory of a process, so IAM via Workload Identity Federation governs access.
