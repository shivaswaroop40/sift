---
id: b7edca3758
title: Josef Bacik revives the push for containers as a first-class kernel object
original_title: "[$] Containers as a recognized kernel object"
url: https://lwn.net/Articles/1102593/
source: LWN
kind: news
section: systems
date: "2026-10-30"
published_at: "2026-10-29T14:02:30.000Z"
authors:
  - corbet
comments: null
tags:
  - containers
  - linux-kernel
  - namespaces
  - cgroups
  - news
why_read: >-
  The full article sets out Bacik's proposal and the history of earlier failed attempts at kernel
  container objects.
rank: 2
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

The Linux kernel has no container abstraction. It provides namespaces, control groups, sandboxing mechanisms and other components, and leaves user space to assemble them. Efforts to turn containers into first-class kernel objects have been made repeatedly over the years. None has gone far. Josef Bacik has now brought a new proposal.

This is the arrangement every container runtime and orchestrator depends on. User space assembles the kernel's pieces and presents the result as a container. The kernel itself never sees that unit. Bacik's proposal is the latest attempt to give containers first-class status in the kernel, and the record of failures suggests the bar is high.
