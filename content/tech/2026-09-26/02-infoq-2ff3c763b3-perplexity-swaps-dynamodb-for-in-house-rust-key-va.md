---
id: 2ff3c763b3
title: Perplexity swaps DynamoDB for in-house Rust key-value store and cuts batch-read latency 5x
original_title: >-
  Home Made CobbleDB Replaces DynamoDB at Perplexity to Cut Query Latency 5x and Reduce Cloud
  Storage
url: >-
  https://www.infoq.com/news/2026/09/cobbledb-perplexity/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-09-26"
published_at: "2026-09-25T14:14:00.000Z"
authors:
  - Olimpiu Pop
comments: null
tags:
  - databases
  - rust
  - key-value-store
  - dynamodb
  - ai-infrastructure
  - perplexity
  - news
why_read: >-
  A concrete, measured case study of replacing a managed cloud database with an in-house store,
  including the workload shape, the new architecture and the numbers.
rank: 2
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Perplexity has replaced DynamoDB at the hot retrieval tier of its answer engine with CobbleDB, a 40,000-line Rust distributed key-value store built by two engineers in two months with AI coding agents. Median batch-read latency dropped from 31.4 ms to 5.60 ms, p99 from 123 ms to 24.2 ms, and cloud storage costs fell by at least 20%.

The problem was the workload, not DynamoDB itself. Each query fans out into 100 to 120 page keys served in parallel batches of 10 to 20, returning roughly 50 KB per record rather than short snippets. At over 200,000 requests per second, AWS per-byte pricing and opaque partition placement made uncached reads and cross-zone hops both expensive and uncontrollable.

The replacement splits storage into three pieces: Pillar on YTsaurus for durable state, Lorry as a stateless batcher that writes partition-aligned files to S3, and CobbleDB workers that ingest those files into RocksDB on local NVMe. A stateless router maps keys to partitions, prefers same-zone replicas, and speculatively hedges to another node on slow reads. CobbleDB skips consensus and applies updates asynchronously because search tolerates small lag.

The trade-off is operational. Perplexity now owns node lifecycle, rebalancing, backup and eventual-consistency semantics instead of paying AWS to hide them. CobbleDB is reported as open-source soon, though the article does not name a release date.
