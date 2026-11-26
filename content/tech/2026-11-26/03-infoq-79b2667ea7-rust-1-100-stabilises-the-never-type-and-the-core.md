---
id: 79b2667ea7
title: Rust 1.100 stabilises the never type and the core of the allocator API
original_title: Rust 1.100 Ships the Never Type After Ten Years and Five Failed Attempts
url: >-
  https://www.infoq.com/news/2026/11/rust-1-100-never-types/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-26"
published_at: "2026-11-25T07:29:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - rust
  - cargo
  - supply-chain-security
  - allocator-api
  - language-design
  - release
  - news
why_read: >-
  The article covers the upgrade risks of the never-type change and the cooldown caveats, with
  community criticism of the allocator design alongside the release notes.
rank: 3
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Rust 1.100.0, released on 12 November 2026, stabilises the never type `!` after ten years and five failed attempts. It can now be named outside return positions, for example `Result<T, !>`. `std::convert::Infallible` becomes an alias for `!`. The release also stabilises the core of the allocator API, adds `DropGuard`, and gives Cargo opt-in dependency cooldowns.

To make the alias work, the 2015, 2018 and 2021 editions get a small breaking change. Never-type fallback moves from `()` to `!`, matching Rust 2024. The release notes call the impact largely unnoticeable, but more code may be flagged as unreachable. Updating dependencies first is the advice, as fixes for widely used crates are already out.

The allocator work lets library authors define custom allocators for `Vec` and `Box` through an `Allocator` trait. Critics on the internals forum say it still falls short of Zig's control, because the design cannot support inline storage when moves invalidate internal pointers. It is seen as a starting point, not a finished design.

The new `global-min-publish-age` setting holds back freshly published crate versions for a set window, as a defence against malicious releases. It has caveats. One tester found `cargo install` ignores it, and an update could downgrade a forced security fix. The release notes flag this as a known issue.
