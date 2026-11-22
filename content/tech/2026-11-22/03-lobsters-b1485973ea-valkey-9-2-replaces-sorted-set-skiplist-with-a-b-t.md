---
id: b1485973ea
title: Valkey 9.2 replaces sorted set skiplist with a B+ tree, cutting per-member overhead by up to 43%
original_title: "From Skiplists to B+ Trees: Making Valkey Sorted Sets More Memory Efficient"
url: https://valkey.io/blog/from-skiplist-to-b+tree/
source: Lobsters
kind: community
section: systems
date: "2026-11-22"
published_at: "2026-11-21T04:31:29.000Z"
authors:
  - valkey.io via kana
  - valkey.io via kana
comments: https://lobste.rs/s/ixhrac/from_skiplists_b_trees_making_valkey
tags:
  - valkey
  - redis
  - b-tree
  - skiplist
  - memory-efficiency
  - data-structures
  - community
why_read: >-
  You get the node layout, the allocator-aware sizing and the SIMD lookup design, plus the full
  benchmark tables that the excerpt cuts off before.
rank: 3
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Valkey 9.2 replaces the skiplist behind large sorted sets with fbtree, a B+ tree variant with a 61-way fanout. In a 5-million-member test, per-member memory overhead fell by 36 to 43%, saving up to 109 MB. The hashtable for member lookups stays. Only the ordered index changes.

The skiplist stores one element per node, each a separate allocation. Each node carries a backward pointer, about 1.33 levels of forward pointers and spans, and an 8-byte score. That comes to roughly 37 bytes before the member string. fbtree packs 61 members into a node and stores score and member together as one value.

Fewer levels means fewer dependent memory fetches. fbtree also compares 4-byte features of child anchors using SIMD, links leaves for range scans, and caches the leftmost and rightmost leaves so ZPOPMIN stays O(1). The cache-miss figures cited come from a 2025 study of other implementations, not Valkey.

Command behaviour is unchanged. OBJECT ENCODING now returns btree instead of skiplist for large sorted sets, so any monitoring or tests matching the literal string need updating. Small sets using listpack are unaffected. The excerpt cuts off before the full benchmark results.
