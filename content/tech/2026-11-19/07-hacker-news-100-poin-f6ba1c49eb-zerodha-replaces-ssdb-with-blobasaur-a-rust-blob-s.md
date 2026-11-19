---
id: f6ba1c49eb
title: Zerodha replaces SSDB with Blobasaur, a Rust blob server that stores data in sharded SQLite
original_title: Distributed, high-performance blob storage on SQLite
url: https://zerodha.tech/blog/high-performance-distributed-blob-storage/
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-11-19"
published_at: "2026-11-19T08:39:45.000Z"
authors:
  - ghostfoxgod
comments: https://news.ycombinator.com/item?id=50557537
tags:
  - sqlite
  - blob-storage
  - rust
  - redis-protocol
  - sharding
  - zerodha
  - community
why_read: >-
  You get a worked comparison of why a team rejected nine blob-storage options, plus the
  requirements and durability trade-off that made SQLite the answer.
rank: 7
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Zerodha built Blobasaur, an open source Rust server that speaks the Redis protocol and uses sharded SQLite as storage. It holds user preferences for its Kite trading platform: JSON blobs from a few KB to several MB. The team says it handles thousands of reads and writes per second on commodity hardware with single-digit millisecond latency.

It replaces SSDB, which became unmaintained, runs only on one node, and forced a 1 MB blob cap because latency degraded on larger payloads. Zerodha rejected ScyllaDB, Postgres BYTEA, YugabyteDB, RocksDB, Ceph, SeaweedFS, S3 and MinIO, and one-file-per-blob. Reasons included large-blob throughput, overwrite-heavy disk growth, per-request costs and TTL handling.

The design suits a narrow workload. Writes are about half of traffic, payloads are repetitive JSON, and Redis compatibility let existing Go and Python clients stay untouched. The team also accepts relaxed durability, since losing a recent chart tweak after a power cut does not affect trading.

That durability trade-off matters if you consider copying the approach. The store holds non-critical data, and the quoted excerpt gives no benchmark figures beyond the headline claims. The text is truncated before the implementation and sharding details.
