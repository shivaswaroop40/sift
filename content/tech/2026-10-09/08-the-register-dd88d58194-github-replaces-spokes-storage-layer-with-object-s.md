---
id: dd88d58194
title: GitHub replaces Spokes storage layer with object-store architecture for 35x write gains
original_title: "So long, Spokes: GitHub rewrites storage to restore reliability, just in time for agentic hordes"
url: >-
  https://www.theregister.com/devops/2026/10/09/so-long-spokes-github-rewrites-storage-to-restore-reliability-just-in-time-for-agentic-hordes/5302148
source: The Register
kind: news
section: infrastructure
date: "2026-10-09"
published_at: "2026-10-09T06:03:00.000Z"
authors: []
comments: null
tags:
  - github
  - git
  - storage-architecture
  - ai-agents
  - distributed-systems
  - object-storage
  - news
why_read: Learn how GitHub is restructuring Git infrastructure to handle AI agent traffic at scale.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

GitHub is replacing its Spokes storage system, which used three-phase commits across replicated disks, with a new architecture that writes once to Azure Blob Storage. The change decouples reads from writes and moves maintenance tasks to background processes. Early internal tests show a 35x improvement in write performance.

The shift matters because GitHub traffic doubled between September 2025 and August 2026, driven by AI agent activity. Commits surged to 7.38 billion in September alone, a five-fold increase year-on-year. The platform suffered 19 performance-degrading incidents across April and May alone.

The new design eliminates the quorum bottleneck that slowed Spokes by requiring all replicas to acknowledge writes. Blob Storage handles redundancy automatically. Reads run on separate compute channels. The migration is intended to be non-disruptive to existing workflows and security controls.
