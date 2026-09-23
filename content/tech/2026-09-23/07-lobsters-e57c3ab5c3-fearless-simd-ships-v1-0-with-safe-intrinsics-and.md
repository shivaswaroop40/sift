---
id: e57c3ab5c3
title: Fearless SIMD ships v1.0 with safe intrinsics and a multiversioning macro
original_title: Fearless SIMD v1.0 is here
url: https://linebender.org/blog/fearless-simd-1-0/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-09-23"
published_at: "2026-09-22T12:10:21.000Z"
authors:
  - linebender.org via ohrv
  - linebender.org via ohrv
comments: https://lobste.rs/s/wx3qsm/fearless_simd_v1_0_is_here
tags:
  - rust
  - simd
  - performance
  - crates
  - linebender
  - community
why_read: >-
  You will get a clear picture of how Fearless SIMD differs from other portable SIMD crates on
  safety, performance, and ergonomics, and whether it is worth trying in Rust projects.
rank: 7
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Fearless SIMD v1.0 is released by the Linebender project, offering Rust developers a portable SIMD abstraction that removes ad-hoc unsafe code while supporting platform intrinsics with no overhead. The crate provides precise and fast variants for edge-case-differing operations, hardware-native vector sizing, and a new `#[simd]` macro in `fearless_simd_macros` v0.1 for function multiversioning without leaky annotations.

The library is already a direct dependency of 30 crates and indirectly relied on by over a thousand, according to the announcement. It works on stable Rust and the team has committed to three years of security updates for v1.0 and later.

Safety rests on two audited building blocks: a `kernel!` macro that targets compiler feature v1.1 to invoke most intrinsics without unsafe, and a safe transmute module inspired by `bytemuck` and `zerocopy` for SIMD loads and stores. The maintainers say the crate will continue even if `std::simd` stabilises, since the standard library is unlikely to cover multiversioning or hardware-width vectors.

It is unclear how the precise versus fast variants affect benchmark numbers across targets, as the post describes the design rather than publishing comparative figures.
