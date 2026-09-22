---
id: 7550b209d1
title: Linear cut PR CI wait from 6 to 5 minutes by reworking runners, linting and gates
original_title: AI coding has made CI a bottleneck, so we reworked ours to keep up
url: https://linear.app/now/ci-bottleneck-reworked
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-09-22"
published_at: "2026-09-21T19:23:33.000Z"
authors:
  - julian_digital
comments: https://news.ycombinator.com/item?id=49792067
tags:
  - ci
  - github-actions
  - typescript
  - linting
  - build-performance
  - monorepo
  - community
why_read: >-
  It gives the specific numbers and mechanisms behind cutting CI feedback time and runner cost while
  test volume quadruples.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Linear's engineering team rewrote its CI pipeline after AI coding agents drove up test volume and runner costs. Their test suites roughly quadrupled this year, yet they cut PR wait time from over 6 minutes to just over 5, while halving runner time per test. The article details the concrete mechanisms behind those gains.

The biggest wins came from leaving GitHub Actions for third-party runners with faster CPUs, which made jobs 34% faster on average. Switching the TypeScript compiler to tsgo cut weekly median tsc time by 73%, and rewriting custom lint rules to use AST analysis rather than the TypeScript type graph reduced API lint time by 68%. Memory pressure dropped as a result.

Several changes targeted the critical path rather than raw compute. Linear capped fetch depth and dropped checkouts from jobs that did not need a working tree, taking the slowest change-detection gate from 94 to 20 seconds and the median from 26 to 8. Replacing actions/checkout with a retrying composite action guarded against IP link degradation to GitHub, preventing stalls.

They also preinstalled shared dependencies like a Postgres client into a small CI base image, stopping every shard from running apt on each run. Moving a cache-marker write off the merge-critical path shaved 42 seconds per API PR. The article describes a workflow-by-workflow optimisation rather than a single new tool, so the lessons transfer across languages and toolchains.
