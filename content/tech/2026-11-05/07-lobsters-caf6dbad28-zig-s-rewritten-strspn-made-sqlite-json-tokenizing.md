---
id: caf6dbad28
title: Zig's rewritten strspn made SQLite JSON tokenizing about 12,000x slower
original_title: "Shlemiel the Painter Is Back: How Zig’s libc Rewrite Made SQLite Slower"
url: https://dennisforbes.ca/blog/microblog/2026/10/the_accidental_12000x_sqlite_slowdown/
source: Lobsters
kind: community
section: systems
date: "2026-11-05"
published_at: "2026-11-04T15:23:09.000Z"
authors:
  - dennisforbes.ca via ohrv
  - dennisforbes.ca via ohrv
comments: https://lobste.rs/s/lh1j0e/shlemiel_painter_is_back_how_zig_s_libc
tags:
  - sqlite
  - zig
  - libc
  - performance
  - cross-compilation
  - community
why_read: >-
  The original details the debugging path from a CPU-bound SQLite insert to Zig's strspn rewrite,
  with the 12,000x measurement and the fixes tried.
rank: 7
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

A Rust service backed by SQLite found that inserting about 40,000 JSON records took minutes instead of milliseconds, saturating a single core. The Linux builds compiled SQLite with zig cc through cargo-zigbuild. Zig has been rewriting musl functions in pure Zig, and its versions of strspn, strcspn, strpbrk and strstr measure the entire string length as a first step.

That first step is what breaks tokenizers. A common loop skips whitespace, takes the new position, and repeats. With the rewritten functions, each skip remeasures the whole string, giving quadratic runtime. Tokenizing a 1.2MB JSON file, as SQLite does when parsing JSON, ran about 12,000 times slower. The problem only showed on Linux because the Mac build never used zig cc, so testing missed it.

The author's first fix was pre-pruning whitespace from the JSON before handing it to sqlite3, which cut the cost sharply. Unsure where else the pattern might bite, they moved Linux builds to containers instead. The post does not say whether Zig has changed the functions, so treat this as one account of a current trade-off in zig cc cross-compilation.
