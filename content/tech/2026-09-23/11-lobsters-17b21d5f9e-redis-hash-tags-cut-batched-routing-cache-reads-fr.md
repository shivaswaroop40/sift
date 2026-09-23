---
id: 17b21d5f9e
title: Redis hash tags cut batched routing cache reads from 12 round trips to 3
original_title: Redis is not a map you talk to over TCP
url: >-
  https://blog.verygoodsoftwarenotvirus.dev/posts/2026/09/22/redis-is-not-a-map-you-talk-to-over-tcp/
source: Lobsters
kind: community
section: systems
date: "2026-09-23"
published_at: "2026-09-23T05:00:36.000Z"
authors:
  - blog.verygoodsoftwarenotvirus.dev via abhin4v
  - blog.verygoodsoftwarenotvirus.dev via abhin4v
comments: https://lobste.rs/s/sfhrrp/redis_is_not_map_you_talk_over_tcp
tags:
  - redis
  - caching
  - distributed-systems
  - h3
  - performance
  - community
why_read: >-
  It walks through a real clustered-Redis footgun and the actual fix, with the slot arithmetic and
  the hot-spot trap spelt out.
rank: 11
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

A delivery-matching service caches H3-hex-snapped driving-time estimates in clustered Redis. The first version used MSET with keys shaped as origin-hex:destination-hex:resolution. Clustered Redis only allows multi-key commands when keys share a hash slot, so 12 keys became 12 round trips and the latency budget fell apart.

The fix was Redis hash tags, the curly-brace syntax that makes only the tagged substring count toward CRC16 mod 16384. Wrapping a shared tag in braces collapsed the same 12 keys onto 3 slots, so one MGET per node, running in parallel, replaced 12 sequential round trips. The mechanism matters because routing calls are the dominant latency contributor and the cache is hit or miss on whether batching actually batches.

The author warns against semantic tags such as the origin hex, which put one busy downtown hex on one node and create a hot spot while the rest of the cluster idles. Instead, the tag should be a meaningless integer chosen at startup by brute-forcing n from zero, hashing each candidate, and keeping only those whose slot lands on a primary that still has capacity. The output is a flat list of known-good tag integers, evenly spread, with no meaning attached to any particular value.
