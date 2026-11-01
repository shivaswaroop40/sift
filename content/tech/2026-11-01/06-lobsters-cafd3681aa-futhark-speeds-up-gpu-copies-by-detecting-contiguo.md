---
id: cafd3681aa
title: Futhark speeds up GPU copies by detecting contiguous layouts and transposes at run-time
original_title: Speeding up GPU copies by permuting iteration spaces, or, optimising the identity function
url: https://futhark-lang.org/blog/2026-10-31-faster-copying.html
source: Lobsters
kind: community
section: systems
date: "2026-11-01"
published_at: "2026-10-31T17:03:04.000Z"
authors:
  - futhark-lang.org via fanf
  - futhark-lang.org via fanf
comments: https://lobste.rs/s/1abkzu/speeding_up_gpu_copies_by_permuting
tags:
  - futhark
  - gpu
  - compilers
  - memory-layout
  - performance
  - community
why_read: >-
  The post works through the descriptor representation and the run-time checks that turn strided
  copies into memcpy and fast transposes.
rank: 6
interest_score: 6.3
depth_score: 8
novelty_score: 6
utility_score: 5
scored: true
model: glm-5.3
---

The Futhark compiler now makes certain array copies faster by exploiting layout information that only exists at run-time. Arrays are described by linear memory access descriptors, one size and stride pair per dimension. When the source and target of a copy turn out to share a contiguous layout, the compiler emits a single memcpy instead of a strided element-wise loop. It also detects transpositions, including batched ones.

This matters because a naive transposition has poor locality on every platform the author knows, since either the reads or the writes are strided. Implementations that exploit the memory hierarchy can run almost as fast as a full-speed copy. The trade only works because array languages perform few, large operations, unlike typical compiler output where huge numbers of small copies make run-time analysis counterproductive.

Contiguity is detected by collapsing neighbouring dimensions whenever the outer stride equals the inner stride times the inner size, then checking whether some permutation of dimensions collapses to one. The search is worst-case exponential in the array's rank, but rank is small and constant regardless of array size, so burning a few thousand instructions before copying billions of elements is negligible.

The author is candid that the impact on some programs is small and the technique is probably more fun than useful. The descriptors themselves permit copy-free slicing, reshaping and transposition by adjusting strides alone.
