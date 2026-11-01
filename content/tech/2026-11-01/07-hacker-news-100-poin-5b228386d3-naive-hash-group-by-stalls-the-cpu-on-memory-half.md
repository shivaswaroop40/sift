---
id: 5b228386d3
title: Naive hash GROUP BY stalls the CPU on memory half the time
original_title: It's the memory latency, stupid
url: https://pivotlake.io/blog/its-the-memory-latency-stupid/
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-11-01"
published_at: "2026-10-31T18:38:16.000Z"
authors:
  - ntur1337
comments: https://news.ycombinator.com/item?id=50318720
tags:
  - memory-latency
  - cpu-caches
  - group-by
  - databases
  - perf-counters
  - clickbench
  - community
why_read: >-
  You get perf-counter evidence that a naive hash GROUP BY spends half its time stalled on DRAM,
  plus the cache-hierarchy numbers behind it.
rank: 7
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

PivotLake's engineering blog instrumented a deliberately naive GROUP BY to show what a CPU at 100% utilisation is really doing. On one pinned core of an AMD EPYC 9124, counting roughly 17 million unique UserIDs across ClickBench's 99-million-row hits table took 3.6 seconds with a warm page cache. perf counters showed 50.1% of CPU slots stalled waiting on memory and only 16.1% retiring instructions. About 76 million DRAM fills, 64 bytes each, meant 4.5GB read from RAM.

The mechanism is cache misses on a hash table that no longer fits. A modern core executes 4 to 8 instructions per nanosecond, while a DRAM access costs 50 to 100ns, so one memory access equals 400 to 800 instructions of lost work. With millions of unique group keys, nearly every hash probe is a cold hit. CPU utilisation graphs hide this entirely.

The proposed fix is radix partitioning. A first pass splits keys into 4096 partitions so each partition's hash table fits in cache, then aggregation runs per partition. The excerpt cuts off before the improved numbers, so the payoff is argued by design rather than measured here. The measurements also required bare metal, since cloud VMs do not expose the DRAM-fill counters.
