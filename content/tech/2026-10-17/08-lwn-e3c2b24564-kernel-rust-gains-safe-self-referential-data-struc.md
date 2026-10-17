---
id: e3c2b24564
title: Kernel Rust gains safe self-referential data structures
original_title: "[$] Safe self-referential data structures in kernel Rust"
url: https://lwn.net/Articles/1099224/
source: LWN
kind: news
section: systems
date: "2026-10-17"
published_at: "2026-10-16T18:30:00.000Z"
authors:
  - daroc
comments: null
tags:
  - rust
  - kernel
  - memory-safety
  - pin-init
  - news
why_read: Learn how kernel Rust can now express self-referential structures safely.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Self-referential structures have long required unsafe code in Rust because the borrow checker cannot verify that internal pointers remain valid. Gary Guo presented a solution at Kangrejos 2026 using the kernel's pin_init crate, which manages immovable data structures for interoperability.

Kernel developers often need self-referential structures for linked lists and other algorithms. Eliminating unsafe code in these cases reduces the attack surface and reasoning burden, making the kernel easier to audit and maintain.

The approach leverages pinning guarantees, which promise that an object will not move in memory once initialised. This allows the compiler to safely verify pointer validity without requiring manual safety proofs.
