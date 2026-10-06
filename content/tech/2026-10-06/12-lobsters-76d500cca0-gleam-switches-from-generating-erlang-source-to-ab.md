---
id: 76d500cca0
title: Gleam switches from generating Erlang source to abstract forms, cutting build times
original_title: Gleam doesn't compile to Erlang source anymore
url: https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-10-06"
published_at: "2026-10-05T17:29:17.000Z"
authors:
  - gleam.run via novedevo
  - gleam.run via novedevo
comments: https://lobste.rs/s/2svplr/gleam_doesn_t_compile_erlang_source
tags:
  - gleam
  - erlang
  - compilation
  - beam
  - type-safety
  - community
why_read: >-
  Understand why Gleam's architecture choice trades compilation speed and debugging accuracy for
  maintainability.
rank: 12
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Gleam v1.19.0 now compiles to Erlang abstract forms instead of source code. Abstract forms are an intermediate representation that the Erlang compiler normally produces internally. By generating this binary format directly, Gleam skips the Erlang compiler's parsing stage.

Build times improved significantly. Benchmarks show Gleam v1.19.0 compiling a test project roughly twice as fast as v1.17.0. The change also makes stack traces and crash reports report accurate line numbers from the original Gleam source, not the generated Erlang code.

The Gleam team considered targeting BEAM bytecode directly but ruled it out. BEAM changes with each VM release, and keeping pace would require sustained effort the community-funded project cannot afford. Elixir uses the same abstract-forms approach.
