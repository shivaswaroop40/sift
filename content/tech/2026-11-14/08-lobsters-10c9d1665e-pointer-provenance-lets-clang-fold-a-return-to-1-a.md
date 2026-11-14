---
id: 10c9d1665e
title: Pointer provenance lets Clang fold a return to 1, and Rust's addr() states intent C++ casts cannot
original_title: Pointer Provenance in Rust vs C++
url: https://sofiabelen.github.io/projects/pointer-provenance-in-rust-vs-cpp/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-11-14"
published_at: "2026-11-13T18:37:30.000Z"
authors:
  - sofiabelen.github.io via gignico
  - sofiabelen.github.io via gignico
comments: https://lobste.rs/s/xmtjzq/pointer_provenance_rust_vs_c
tags:
  - rust
  - cpp
  - llvm
  - pointer-provenance
  - compilers
  - miri
  - community
why_read: >-
  You get a worked Godbolt and LLVM IR walkthrough of why integer casts defeat alias analysis, plus
  the first look at Rust's provenance APIs; the excerpt cuts off before the preserving section.
rank: 8
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

The author explains pointer provenance with a short C++ example. A function sets a local int x to 1, passes an unrelated pointer p to an opaque function, then returns x. Clang at -O2 compiles this to return 1, because p was not derived from x and so cannot alias it. Provenance exists only inside the compiler, not as a field in memory. The LLVM IR shows it as a graph of allocation roots.

Casting &x to uintptr_t exposes the address, so LLVM must assume any integer could be turned back into a pointer to x. The optimisation is then dropped and x is reloaded. That happens even if the code only wanted to read the address. C++ gives no way to say that.

Rust's p.addr() reads the address without exposing provenance, and it promises not to cast the integer back. In the author's test, the current compiler still reloads x, so there is no gain today. The claimed benefits are room for future optimisation and better bug detection in Miri.
