---
id: "0184221143"
title: Rust 1.100 stabilises the never type and the core allocator API after ten years
original_title: Rust 1.100
url: https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-11-13"
published_at: "2026-11-12T18:39:05.000Z"
authors:
  - mbStavola
comments: https://news.ycombinator.com/item?id=50472038
tags:
  - rust
  - rust-1-100
  - never-type
  - allocator-api
  - cargo
  - release
  - community
why_read: >-
  The post covers the never type fallback change in detail, with the cases that can break, plus
  examples for DropGuard and conjure_zst.
rank: 8
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Rust 1.100.0 stabilises the never type (!) after ten years and five failed attempts. It can now be named anywhere, such as Result<T, !>. Infallible becomes an alias for !. The release also stabilises the core of allocator_api, with an Allocator trait usable with Vec and Box.

The never type change is breaking. The never type fallback moves from () to ! in editions 2015, 2018 and 2021, matching edition 2024. The team says this is largely unnoticeable but can affect code that ignores a generic return value, and the compiler may flag more code as unreachable. Fixes for affected public crates have already shipped.

Smaller additions include core::mem::DropGuard, which runs a closure on drop and can be dismissed to give a rollback pattern. There is also an unsafe std::mem::conjure_zst for creating zero-sized values. Cargo gains unused dependency reporting, fewer cache collisions and min-publish-age. The source text cuts off before details of the Cargo items.
