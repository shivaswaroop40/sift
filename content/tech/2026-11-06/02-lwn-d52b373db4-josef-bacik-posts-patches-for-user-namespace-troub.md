---
id: d52b373db4
title: Josef Bacik posts patches for user namespace trouble with file capabilities
original_title: "[$] User namespaces + file capabilities = trouble"
url: https://lwn.net/Articles/1103429/
source: LWN
kind: news
section: security
date: "2026-11-06"
published_at: "2026-11-05T14:33:59.000Z"
authors:
  - corbet
comments: null
tags:
  - user-namespaces
  - file-capabilities
  - linux-kernel
  - containers
  - security
  - news
why_read: >-
  The original details the file-capability mechanism behind the trouble and what Bacik's patches
  change.
rank: 2
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

User namespaces let processes inside a container appear to hold full root while gaining no extra privileges on the wider system. That is the intent at least. In practice, keeping privilege contained within a user namespace has often proved difficult. Josef Bacik has posted a small patch series intended to address situations where a process within a user namespace gains privileges beyond the namespace. The article's concern is the interaction with file capabilities.

This matters because user namespaces are a key part of the kernel's toolkit for assembling containers. Any route by which namespace root becomes real privilege on the host breaks the isolation model behind container runtimes. Teams running containerised workloads, particularly on shared hosts, will want to know whether their kernels are affected and when a fix lands.

The source text available here is truncated mid-sentence, so the precise mechanism linking file capabilities to the privilege problem is not stated in this excerpt. The headline indicates that the combination of the two features is where the trouble arises. The original article carries the technical detail and the content of Bacik's patches.
