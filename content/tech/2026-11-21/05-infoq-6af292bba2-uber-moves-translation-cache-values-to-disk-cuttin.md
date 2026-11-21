---
id: 6af292bba2
title: Uber moves translation cache values to disk, cutting memory by over 90% in its Go services
original_title: Uber Cuts Translation Cache Memory by up to 90% While Keeping P99 Latency Below 1 MS
url: >-
  https://www.infoq.com/news/2026/11/uber-go-translation-cache/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-11-21"
published_at: "2026-11-20T14:38:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - go
  - caching
  - garbage-collection
  - memory
  - uber
  - performance
  - news
why_read: >-
  The original blog post has the sharding and hashing details and the memory graphs, which help if
  you run read-heavy in-process caches in Go.
rank: 5
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Uber has rebuilt the Go translation cache used across its services. Keys and hot values stay in memory, while the remaining values sit in disk-backed files. The Get() and Put() API is unchanged. Initial memory fell by more than 90%, p99 cache miss latency stayed under one millisecond, and hit rate stayed above 99.9%.

Profiling had shown garbage collection taking over 20% of CPU in some services, with translations making up about 70% of allocated objects. Replacing sync.Map with a plain map[string]string behind an RWMutex cut object allocations and improved CPU use by over 30% in one service. That did not fix memory, so the disk-backed design followed.

The design uses 256 shards, each with its own mutex, in-memory entries and disk file. Keys are six-byte hashes, with a fallback for collisions. A time-based global LRU manages memory. On refresh, entries accessed in the previous 15 minutes are preloaded, so the swapped-in cache is not cold.

One dataset dropped from about 800 MB to 40 MB of metadata, and typical use was 80 to 120 MB with 50,000 entries held in memory. Another workload held about 30,000 of over four million entries in memory. Disk-backed misses had p99 latency under 100 microseconds. All figures are Uber's own.
