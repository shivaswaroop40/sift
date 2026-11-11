---
id: a4efc6fc25
title: Microsoft researchers find soundness bugs in Rust's standard library, reachable from safe code
original_title: Memory Safety Bugs in Rust Standard Library
url: https://forge-blog.github.io/posts/rust-std-memory-safety/
source: Lobsters
kind: community
section: security
date: "2026-11-11"
published_at: "2026-11-10T19:44:50.000Z"
authors:
  - forge-blog.github.io via expurple
  - forge-blog.github.io via expurple
comments: https://lobste.rs/s/plreds/memory_safety_bugs_rust_standard_library
tags:
  - rust
  - memory-safety
  - unsafe-rust
  - standard-library
  - panic-safety
  - microsoft
  - community
why_read: >-
  You get a concrete example of panic safety failing in real unsafe code, plus the trust patterns to
  check for in your own unsafe blocks.
rank: 9
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Microsoft's FORGE Lab reported several memory safety bugs in Rust's core and std. Some can trigger undefined behaviour from code written entirely in safe Rust. The team used Hyenas, a research version of an AI-assisted scanner called MDASH, then reproduced each bug by hand and worked with maintainers on fixes.

The bugs fall into three patterns of misplaced trust in unsafe code. Code is trusted not to panic, user-provided trait implementations are trusted to behave, and the underlying system is trusted. The excerpt covers only the first pattern in detail.

The worked example is MapWindows::clone (#156501), in a nightly API. Clone built a buffer whose destructor was already armed, then called the user's T::clone to fill it. If that call panicked, unwinding dropped N uninitialised values. The fix holds the buffer in ManuallyDrop until it is fully written, so a panic leaks it instead.
