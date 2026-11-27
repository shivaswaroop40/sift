---
id: a1d60a2f72
title: AMD-specific llama.cpp patch set lifts one user's generation from 35 to 55 tokens a second
original_title: AMD-specific fork of llama.cpp
url: https://devnull.land/amd-specific-llama-cpp
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-27"
published_at: "2026-11-26T17:11:29.000Z"
authors:
  - julianlam
comments: https://news.ycombinator.com/item?id=50657265
tags:
  - llama-cpp
  - amd
  - rocm
  - llm-inference
  - local-llm
  - open-source
  - community
why_read: >-
  You get the exact podman invocation, the before and after figures, and a first-hand view of how
  AMD-focused llama.cpp variants compare with the newer vibe-coded engines.
rank: 6
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

A blogger recommends llama-cpp-rdna-boosts, a small set of AMD-specific patches applied to a pinned llama.cpp commit and re-applied to newer releases. On an AMD R9700 in an eGPU, running a Q6_K_L 27B model with MTP enabled, prefill rose from about 700 to 1300 tokens a second. Generation rose from about 35 to 55. It is a single setup, and the author says results may vary.

The author contrasts it with newer engines such as Strata, which are largely vibe-coded and chase generation speed. He claims Strata sometimes prefers experts already in VRAM over the ones the model would normally route to. That changes model behaviour rather than just hardware efficiency, so speed figures may not be comparable to a faithful implementation.

For anyone running local inference on AMD hardware, the patch-set model is the useful part. A thin changeset over a stable upstream is easier to audit and maintain than a full fork. The author notes the documentation of the changes is opaque and clearly LLM-written, so the transparency is partial.

The evidence is thin. There is one machine, one model, no stated methodology and no output-quality check. The author has not tried upgrading the pre-built ROCm container image. He also abandoned a vLLM fork with AMD patches because the build was too heavy for one machine.
