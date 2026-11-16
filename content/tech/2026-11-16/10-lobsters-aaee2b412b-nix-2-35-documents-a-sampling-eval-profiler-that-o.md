---
id: aaee2b412b
title: Nix 2.35 documents a sampling eval-profiler that outputs flamegraph.pl input
original_title: "Nix: Using the eval-profiler"
url: https://nix.dev/manual/nix/2.35/advanced-topics/eval-profiler
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-11-16"
published_at: "2026-11-16T01:28:22.000Z"
authors:
  - nix.dev via tomeraberbach
  - nix.dev via tomeraberbach
comments: https://lobste.rs/s/7kt4yi/nix_using_eval_profiler
tags:
  - nix
  - profiling
  - flamegraph
  - nixpkgs
  - developer-tooling
  - community
why_read: >-
  You get the exact flags and output format needed to profile a slow Nix evaluation and render it as
  a flamegraph.
rank: 10
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

The Nix manual describes an evaluation profiler that samples the function call stack at regular intervals. You enable it with the eval-profiler setting, for example by passing --eval-profiler flamegraph to nix-instantiate. The output is a profile file that flamegraph.pl can read directly.

By default the profile is written to nix.profile in the current working directory. The eval-profile-file setting changes the path, and eval-profiler-frequency changes the sampling rate. Each line records the call site position and the name of the function being called, when one is available. The manual's example shows the import primop called at a line and column in nixpkgs.

This gives Nix users a way to find slow evaluation without guesswork. Evaluation time is a common cost in large nixpkgs or flake-based setups, and a flamegraph shows which call sites dominate. The page is a short usage note. It gives no benchmarks, no overhead figures and no guidance on choosing a sampling frequency.
