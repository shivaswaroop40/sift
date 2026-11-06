---
id: c78ecd89b3
title: GitHub's new Git storage architecture sustains 7,200 pushes per second in tests
original_title: Inside GitHub’s new Git storage architecture
url: >-
  https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/
source: GitHub Blog
kind: blog
section: systems
date: "2026-11-06"
published_at: "2026-11-05T20:23:21.000Z"
authors:
  - Karthik Raman
comments: null
tags:
  - git
  - github
  - storage
  - scalability
  - agentic
  - blog
why_read: >-
  The full post explains how GitHub rebuilt Git storage for agent-scale write traffic and what that
  means for hosted repositories.
rank: 1
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

GitHub has announced a new Git storage architecture at GitHub Universe. It is built for thousands of writes per second, with reads that scale on demand. In internal testing, GitHub says it supported 5,000 concurrent agents working on a single repository and 7,200 pushes per second to one repo, while still serving read traffic at consistently low latency.

The target is agentic development. Fleets of automated agents pushing to the same repository create write patterns that human-paced Git hosting was never designed for. GitHub positions this as the foundation for supporting agentic development for hundreds of millions of users. If you run bots, CI, or agent workloads against shared repos, storage write throughput is the constraint this work addresses.

The numbers are GitHub's own, from internal testing rather than production traffic. The available text gives no detail on the underlying mechanism, such as how writes are sharded or replicated. Treat the throughput figures as vendor claims until production data or architectural detail is published.
