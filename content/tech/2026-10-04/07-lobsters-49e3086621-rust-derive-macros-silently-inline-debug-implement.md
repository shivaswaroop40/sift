---
id: 49e3086621
title: Rust derive macros silently inline Debug implementations, inflating binaries
original_title: Rust's derive often implies inline
url: https://yossarian.net/til/post/rust-s-derive-often-implies-inline/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-10-04"
published_at: "2026-10-04T01:41:57.000Z"
authors:
  - yossarian.net by yossarian
  - yossarian.net by yossarian
comments: https://lobste.rs/s/dldhpw/rust_s_derive_often_implies_inline
tags:
  - rust
  - binary-size
  - derive-macros
  - inlining
  - community
why_read: >-
  Learn why your Rust binaries might be larger than expected and how to control derived trait
  inlining.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Rust's #[derive(Debug)] and similar macros automatically emit #[inline] hints on generated trait implementations. This is not formally guaranteed but appears throughout the compiler's macro expansion. The inline hint is sensible for trivial implementations but becomes problematic with nested error types.

For engineers building large distributed systems, deeply nested error hierarchies can accumulate significant binary bloat. One project shrunk its binary by 160KB by preventing inlining of a single Debug implementation across a nested error enum. The compiler appears to apply no limit to how many times derived implementations get inlined.

The trade-off matters most in codebases with complex error types and frequent logging. Trivial implementations benefit from inlining, but large or frequently-called ones can bloat the final binary substantially. Controlling this requires writing custom proc macros rather than using derive.
