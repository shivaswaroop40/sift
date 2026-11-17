---
id: dfba5e6436
title: Rust nightly now enables the parallel compiler frontend by default, with two threads
original_title: Enabling the parallel frontend on nightly
url: https://blog.rust-lang.org/2026/11/16/enabling-parallel-frontend-on-nightly/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-11-17"
published_at: "2026-11-16T15:22:38.000Z"
authors:
  - blog.rust-lang.org via fanf
  - blog.rust-lang.org via fanf
comments: https://lobste.rs/s/8eivbk/enabling_parallel_frontend_on_nightly
tags:
  - rust
  - compiler
  - parallelism
  - build-times
  - nightly
  - cargo
  - community
why_read: >-
  The post has the full benchmark table, the per-crate scaling charts and the exact flags for tuning
  or disabling the feature, which help when judging the effect on your own CI.
rank: 10
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Since nightly-2026-11-14, the Rust compiler runs its frontend, including type checking and borrow checking, on two threads by default. Only the LLVM backend was parallel before. The team wants bug reports before stabilising. Stable stays sequential. Opt out with `-Zunstable-options --jobs-frontend=1`, or raise the count with a higher value.

On single-crate builds, 8 frontend threads cut mean wall time by 44% for cargo check and 28% for optimised builds. Some crates, including nalgebra, cargo and diesel, checked almost three times faster. Other benchmarks barely improved. Incremental rebuilds gained only 3 to 5% on average, and the team admits its benchmarks for that case are weak.

Whole crate graphs gain less, because cores are already busy with LLVM and parallel crate builds. Checking cargo itself on 8 cores took 36.7s with one frontend thread and 30.8s with eight, about 15% faster. Scaling is poor beyond roughly 8 threads, and more threads raise compiler memory use, which can mean running out of memory.

There are caveats for CI. Diagnostic order may no longer be deterministic. Some binaries may not be reproducible, which the team treats as a bug and asks to have reported. Known reproducibility issues are still being worked on.
