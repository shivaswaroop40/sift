---
id: dd1208e65b
title: Rust borrow checker allows bypassing lifetime constraints via covariant field assignment
original_title: 11 year old unsoundness bugs found in Rust borrow checker
url: https://github.com/rust-lang/rust/issues/164250
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-10-13"
published_at: "2026-10-13T10:27:00.000Z"
authors:
  - formerly_proven
comments: https://news.ycombinator.com/item?id=50069499
tags:
  - borrow-checker
  - soundness
  - lifetime
  - rust
  - memory-safety
  - drop
  - community
why_read: >-
  Understand a critical soundness bug in the borrow checker that affects production Rust code
  without requiring unsafe blocks.
rank: 6
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

The Rust borrow checker has a soundness hole that allows assignment of references with shorter lifetimes to struct fields declared as requiring static or longer lifetimes. This enables code to compile that stores pointers to stack-allocated data where static references are promised, causing use-after-free at runtime.

The vulnerability exists in the Drop trait implementation path. When a struct field is assigned a covariant reference of a shorter lifetime, the borrow checker does not validate that Drop implementations will only access that field with the promised lifetime. This breaks Rust's memory safety guarantee.

The bug has existed since Rust 1.4.0 in 2015, nearly a decade undetected. It affects stable releases through at least 1.85.0 and requires no unsafe code to trigger, only standard covariance rules in struct definitions.
