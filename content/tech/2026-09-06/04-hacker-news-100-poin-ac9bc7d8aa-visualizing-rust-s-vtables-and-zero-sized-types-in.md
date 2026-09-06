---
id: ac9bc7d8aa
title: Visualizing Rust's vtables and zero-sized types in memory
original_title: "Visualizing Rust's Vtables: How dyn Trait Works In Memory"
url: https://sofiabelen.github.io/projects/visualizing-rusts-vtables-how-dyn-trait-works-in-memory/
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-09-06"
published_at: "2026-09-05T13:31:05.000Z"
authors:
  - torutofu
comments: https://news.ycombinator.com/item?id=49576343
tags:
  - rust
  - vtables
  - dyn-trait
  - zero-sized-types
  - memory-layout
  - community
why_read: >-
  You will get a clear, memory-level picture of how Rust implements static and dynamic dispatch and
  what zero-sized types really mean.
rank: 4
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

A blog post walks through how Rust's dyn Trait compiles down to a vtable-backed wide pointer, by stepping from C++ virtual functions and CRTP into Rust's static and dynamic dispatch, then inspecting generated assembly and memory layouts.

For systems engineers who use Rust, the piece clarifies a common point of confusion: a &dyn Trait is a fat pointer of two words, one to the data and one to the vtable, which is why dyn has a cost generics do not. It also explains why Circle and Square have size 0, since Rust tracks identity through ownership rather than addresses.

The author highlights a subtle caveat: while C++ mandates a minimum object size of one byte, Rust permits zero-sized types, and addresses of ZSTs are not guaranteed to be distinct. Debug builds allocate dummy stack slots so inspectors can attach to them, but release builds let addresses collapse.

The full experiments and code are on GitHub, so readers can reproduce the layouts themselves.
