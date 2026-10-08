---
id: 20829d8a95
title: Compiler backend cuts register allocator from 1392 to 584 lines by measuring and simplifying
original_title: rat's minimal register allocator
url: https://hexrat.cc/pages/blog/2026_10_07
source: Lobsters
kind: community
section: systems
date: "2026-10-08"
published_at: "2026-10-07T18:01:25.000Z"
authors:
  - hexrat.cc by hexrat
  - hexrat.cc by hexrat
comments: https://lobste.rs/s/frav12/rat_s_minimal_register_allocator
tags:
  - compilers
  - register-allocation
  - code-generation
  - x86-64
  - optimization
  - community
why_read: >-
  Learn how a minimal register allocator achieves good results without production compiler
  complexity.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Rat, a small compiler backend, replaced its 1392-line linear-scan register allocator with a 584-line priority bin-packing allocator. The new allocator visits live ranges by importance and assigns each to the first available register, producing better code without complex heuristics like eviction or range splitting.

For systems engineers building compilers or code generators, this shows that register allocation heuristics work well without the machinery that makes production allocators large. Rat's design generates better code because callee-saved register usage falls naturally from the algorithm, not from explicit rules.

The allocator processes five steps per function: computing live ranges, marking fixed registers, coalescing copies, assigning registers in priority order, and spilling to stack. Key optimisations include numbering slots within instructions to handle two-address code, computing live-out sets per vreg rather than by fixed-point iteration, and using loop depth to weight spill costs.
