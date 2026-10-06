---
id: 2b5adcf811
title: Kubelet inode eviction only triggers when disk is nearly full, not when inodes run low
original_title: Kubelet watches inodes. Just not until it’s an emergency.
url: https://www.cncf.io/blog/2026/10/05/kubelet-watches-inodes-just-not-until-its-an-emergency/
source: CNCF
kind: blog
section: infrastructure
date: "2026-10-06"
published_at: "2026-10-05T21:27:03.000Z"
authors:
  - 3). GSoC 2026 contributor with Red Hat
  - on JBoss Web Server tooling. CKA
  - RHCSA
  - AWS SAA. Pune
  - India.
comments: null
tags:
  - kubelet
  - inodes
  - eviction
  - ext4
  - node-resources
  - garbage-collection
  - blog
why_read: >-
  Understand why your node can run out of inodes while disk space remains available and what kubelet
  actually watches.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A worker node's inode table filled to 67% and triggered a NodeFilesystemFilesFillingUp alert, but kubelet took no action until the moment hard eviction kicked in at 95% used. Image garbage collection, which runs at 85% disk usage, only watches bytes. Inodes have no early-warning mechanism.

Kubernetes nodes can exhaust inodes while disks remain half full. Ext4 allocates a fixed inode count at format time, typically one per 16 KiB. A filesystem packed with small files can run out of inodes when only 25% of disk space is consumed, because each file needs a 4 KiB block regardless of size.

The lack of dual thresholds matters because small files arrive faster than big ones. Image garbage collection sits at 85% and 80% by disk bytes. Hard eviction sits at 5% free inodes or 10% free bytes on nodefs, whichever triggers first. When those diverge, nothing catches the gap until pods start evicting.
