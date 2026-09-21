---
id: c33f83a00f
title: Bun rewrites 535K lines of Zig into Rust using Claude agents in four months
original_title: Bun Rewrites 535K Lines of Zig into Rust in Four Months, Eliminates Numerous Memory Leaks
url: >-
  https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-09-21"
published_at: "2026-09-20T19:51:00.000Z"
authors:
  - Bruno Couriol
comments: null
tags:
  - bun
  - rust
  - zig
  - ai-coding
  - memory-safety
  - agents
  - news
why_read: >-
  It is a candid, number-heavy write-up of a million-line AI port, from orchestration setup and
  token costs to regressions the tests missed.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Bun creator Jarred Sumner has shipped Bun v1.4.0, a complete rewrite of the runtime and bundler from Zig to Rust, done in about four months rather than the estimated one year. The work was driven by roughly 64 Claude agents running in parallel across four workspace shards, using a porting guide and lifetimes file to map Zig idioms to Rust. The new implementation resolved 128 longstanding bugs from v1.3.14 and stopped native memory leaks, with in-process bundling tests plateauing at 609 MB instead of climbing past 6.7 GB.

The port cost about $165,000 in API tokens, consuming 5.9 billion uncached input tokens, 690 million output tokens and 72 billion cached token reads. Peak throughput reached around 1,300 lines of code per minute and 695 commits an hour. Validation against Bun's existing TypeScript test suite, which has more than one million assertions, was the gating signal throughout.

Fuzzing and adversarial reviewer agents still surfaced problems after the suite passed. The mechanical nature of the transpilation introduced 19 subtle semantic regressions, and 11 rounds of security review plus 24/7 coverage-guided fuzzing produced 30 further PRs. HTTP throughput also rose by 2% to 5%.

Zig creator Andrew Kelley criticised the framing, arguing that shipping unreviewed code on the strength of a test suite contradicts the claim that the old codebase was bug-ridden. User vitaminCPP framed the merged million-line LLM-generated codebase as an industry canary for the long-term maintainability of machine-transpiled code.
