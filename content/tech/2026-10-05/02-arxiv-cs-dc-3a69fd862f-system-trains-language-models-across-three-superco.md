---
id: 3a69fd862f
title: System trains language models across three supercomputers 7,400km apart with elastic aggregation
original_title: >-
  Cross-Facility LLM Pre-training on HPC: Elastic Aggregation, Data Leasing, and Queue-Aware
  Placement
url: https://arxiv.org/abs/2610.03457
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Zar\`e Palanciyan
  - Thomas van Osch
  - Douwe van der Wal
  - Olivera Kotevska
  - Tim Kok
comments: null
tags:
  - distributed-training
  - hpc
  - language-models
  - fault-tolerance
  - resource-fragmentation
  - paper
why_read: >-
  Learn how to coordinate distributed pre-training across independent HPC facilities with different
  hardware and no shared network or storage.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers built a system that pre-trains a single language model across Snellius, LUMI and Frontier supercomputers on two continents, combining DiLoCo-style training with elastic weight aggregation and a data-leasing protocol that prevents duplicate or lost samples during crashes and departures.

For practitioners managing distributed training across fragmented HPC allocations, this demonstrates that cross-facility pre-training becomes practical when synchronisation overhead stays constant regardless of local steps per round. In a 23.8-hour run with four site departures, overhead was 3.1% of wall-clock time and data integrity was maintained.

The trade-off is accuracy: the three-site run reached perplexity of 34.7 versus 28.2 for centralised training on the same model and dataset. Queue-aware placement can shorten time-to-target by 18-43% by avoiding waits for all sites to allocate simultaneously.
