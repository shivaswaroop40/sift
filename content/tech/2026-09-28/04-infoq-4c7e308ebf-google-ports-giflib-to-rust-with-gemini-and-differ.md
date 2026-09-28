---
id: 4c7e308ebf
title: Google ports giflib to Rust with Gemini and differential fuzzing, dodges zero-day
original_title: Google Rewrites Critical C Dependencies to Rust Using AI and Differential Fuzzing
url: >-
  https://www.infoq.com/news/2026/09/c-rust-rewrite/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-09-28"
published_at: "2026-09-27T14:14:00.000Z"
authors:
  - Olimpiu Pop
comments: null
tags:
  - rust
  - memory-safety
  - ai
  - fuzzing
  - google
  - giflib
  - news
why_read: >-
  It is a concrete case study of AI-assisted C-to-Rust migration with the validation rig, bug finds
  and latency data spelled out.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Google security engineers Bastian Kersting and Max Hils used Gemini to translate giflib, a roughly 3,000-line C image decoding library, into an ABI-compatible Rust drop-in that matched the runtime performance of the original. The team retained original exported symbols so downstream callers did not break, and used a feedback loop where a differential fuzzer fed behavioural mismatches back to the model for further patches.

The work matters because memory corruption bugs account for about 70 per cent of severe vulnerabilities in mature C and C++ codebases. Validating against more than 30 million real-world GIFs and running the fuzzer for six days across 200 million iterations caught an internal legacy out-of-bounds write and, before public disclosure, an upstream heap write zero-day tracked as CVE-2026-26740. Production nodes running the Rust binary were structurally immune.

With memory safety enforced by the type system, Google removed the OS-level sandbox that previously isolated image decoding and saw a drop in p99 tail latency. The engineers stress that AI translation is not hands-off. FFI wrappers still need human audit for pointer lifetimes and thread safety, and forking creates long-term maintenance divergence from upstream giflib. Community debate on r/rust and Hacker News questioned whether deterministic transpilers like c2rust plus AI-driven refactoring into idiomatic safe Rust would scale better beyond self-contained targets.
