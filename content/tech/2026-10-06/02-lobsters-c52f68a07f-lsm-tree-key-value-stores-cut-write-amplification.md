---
id: c52f68a07f
title: LSM-tree key-value stores cut write amplification by skipping unnecessary merges
original_title: >-
  Dostoevsky: Better Space-Time Trade-Offs for LSM-Tree Based Key-Value Stores via Adaptive Removal
  of Superfluous Merging
url: https://nivdayan.github.io/dostoevsky.pdf
source: Lobsters
kind: community
section: systems
date: "2026-10-06"
published_at: "2026-10-05T20:18:23.000Z"
authors:
  - nivdayan.github.io via typesanitizer
  - nivdayan.github.io via typesanitizer
comments: https://lobste.rs/s/oevwp5/dostoevsky_better_space_time_trade_offs
tags:
  - lsm-trees
  - compaction
  - write-amplification
  - key-value-stores
  - performance-tuning
  - community
why_read: >-
  Learn a concrete approach to reducing write overhead in production LSM stores without
  architectural changes.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers built Dostoevsky, an LSM-tree tuning system that reduces write amplification by choosing which compaction levels to merge based on workload patterns. Write amplification—the ratio of data written to storage versus data written by the application—is a core efficiency metric for log-structured merge trees used in RocksDB and similar stores.

Write amplification matters because high rates degrade SSD lifespan, increase latency during compaction, and consume IO bandwidth needed for other operations. Lowering it directly improves throughput and reduces operational cost at scale.

The paper claims Dostoevsky achieves better space-time trade-offs than fixed tiering strategies by adapting which merges actually improve performance for a given workload, rather than merging all levels uniformly.
