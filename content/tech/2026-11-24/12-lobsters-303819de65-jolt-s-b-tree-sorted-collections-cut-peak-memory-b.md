---
id: 303819de65
title: Jolt's B+tree sorted collections cut peak memory by 40% against red-black trees
original_title: Swapping Jolt's sorted collections to a B+tree
url: https://yogthos.net/posts/2026-11-23-b+trees.html
source: Lobsters
kind: community
section: systems
date: "2026-11-24"
published_at: "2026-11-23T17:15:02.000Z"
authors:
  - yogthos.net by Yogthos
  - yogthos.net by Yogthos
comments: https://lobste.rs/s/wv9nhw/swapping_jolt_s_sorted_collections_b_tree
tags:
  - b-plus-tree
  - red-black-tree
  - data-structures
  - persistent-collections
  - clojure
  - benchmarks
  - community
why_read: >-
  You get the node layout, the byte-per-entry arithmetic and the full benchmark tables, including
  the small-collection regression and how bulk loading recovers it.
rank: 12
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Jolt replaced the red-black tree behind sorted-map and sorted-set, a port of Clojure's PersistentTreeMap, with a persistent B+tree. The java.util.TreeMap and TreeSet shims moved too. Leaves hold up to 16 entries and inner nodes up to 32 children, each stored as one Scheme vector. Peak memory fell by 40%, and most operations got faster at every size.

The red-black node cost 48 bytes of metadata per entry. A full B+tree leaf costs about 17 bytes per entry, with 34 as the worst case. A 4 million entry tree drops from about 22 levels to 5. Lookups touch fewer cache lines, and a persistent write copies a shorter path as contiguous blocks.

The cost is in small collections. Building maps of tens to hundreds of entries by repeated inserts was about 15% slower, because past 17 entries every insert copies a root and leaf path. The author reduced this by buffering inputs in into, constructors and multi-argument conj and assoc, then bulk-loading. The worst remaining case is a 4 entry build at 1.05x.

On 20,000 entries the ratios ranged from 0.41 to 0.89, with get at 0.86 and pop-max at 0.47. Reduce-kv fell to 0.06 because it no longer allocates a map entry per pair. Figures come from one M1 Max, with JVM comparisons on Clojure 1.12.6 and OpenJDK 20. The source text cuts off partway through the last explanation.
