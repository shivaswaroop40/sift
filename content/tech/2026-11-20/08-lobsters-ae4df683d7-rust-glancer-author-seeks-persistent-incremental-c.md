---
id: ae4df683d7
title: >-
  Rust Glancer author seeks persistent incremental computation after hand-built caches grew too
  complex
original_title: Persistent incrementality in Rust
url: https://rust-glancer.github.io/blog/persistent-incrementality-in-rust/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-11-20"
published_at: "2026-11-20T04:16:34.000Z"
authors:
  - rust-glancer.github.io via vi_mi
  - rust-glancer.github.io via vi_mi
comments: https://lobste.rs/s/9bvpac/persistent_incrementality_rust
tags:
  - rust
  - incremental-computation
  - salsa
  - language-server
  - caching
  - rust-analyzer
  - community
why_read: >-
  The original should give a worked salsa example and, further in, the author's approach to
  persisting incremental state, which the excerpt does not reach.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

The author of Rust Glancer, a Rust language server, describes why the project wants persistent incremental computation. Rust-analyzer builds on salsa, a library for incremental computation, but salsa is designed mainly to work in memory. Rust Glancer tries to keep memory use low, so salsa does not fit as it stands.

Until now Rust Glancer has used no incremental framework. It relied on a network of persistent caches, with sharding and targeted optimisations. The author says this stopped scaling. Each gain in efficiency needs a more complex custom cache format, and the computations are tied to that format.

The author calls the resulting complexity roughly quadratic, the product of computation complexity and cache implementation complexity, and admits the claim is loose. The post says it will explain how in-memory incrementality works, then how to make it persistent.

The supplied text is truncated. It covers the motivation and a toy salsa example that counts words across files that include one another, with a changing input. It does not reach the persistence design, so the solution is not described here.
