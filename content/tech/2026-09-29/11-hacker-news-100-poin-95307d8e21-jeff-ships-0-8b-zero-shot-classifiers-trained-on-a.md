---
id: 95307d8e21
title: Jeff ships 0.8B zero-shot classifiers trained on a single workstation GPU
original_title: Jeff – Jev-compatible 0.8B decision models, trained at home, ~30 ms
url: https://github.com/firelex/jeff
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-09-29"
published_at: "2026-09-28T20:23:36.000Z"
authors:
  - firelex
comments: https://news.ycombinator.com/item?id=49883844
tags:
  - llm
  - classification
  - fine-tuning
  - open-source
  - inference
  - benchmarks
  - community
why_read: >-
  See how a 0.8B local classifier compares to Jev on real benchmarks, what the latency looks like,
  and where it falls short.
rank: 11
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Jeff is a set of small open-source decision models built as fine-tunes of Qwen3.5 and Gemma 4. They take a situation and a list of options in plain text and return calibrated probabilities per option in a single forward pass, with no text generation to parse.

On an RTX PRO 6000 the 0.8B model runs about 22 ms per decision and 28 ms on an M4 Max via MLX. Training took around 2 hours on one workstation GPU, using synthetic data written by an open model on two DGX Sparks. No closed-model data was used in training.

Across 4,599 benchmark questions the 0.8B and 2B Jeff variants hit overall scores between 79.1 and 83.1, beating Jev's published 83.0 on some suites but trailing on reasoning-heavy ones like BBH and JudgeBench, which is expected at this size. The authors note Jeff is a classifier, not a planner, and that wording the consequences of each option matters more than prompt tricks.

A short fine-tune on user data is presented as the way to close the gap: a voice-navigation fine-tune lifted held-out accuracy from 31.7% to 95.8% in under half an hour on one GPU. The project uses Jev's request format but is independent of TypeSafe.
