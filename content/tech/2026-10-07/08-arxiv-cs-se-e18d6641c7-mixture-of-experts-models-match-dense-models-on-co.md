---
id: e18d6641c7
title: >-
  Mixture-of-experts models match dense models on code repair while using a third of the active
  parameters
original_title: >-
  Beyond the Leaderboard: Multi-Dimensional Evaluation of Dense and Mixture-of-Experts Models for
  Automated Program Repair
url: https://arxiv.org/abs/2610.08173
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-10-07"
published_at: "2026-10-07T04:00:00.000Z"
authors:
  - Anvi Kalpesh Shah
  - Umamaheswara Sharma B
comments: null
tags:
  - program-repair
  - mixture-of-experts
  - model-evaluation
  - code-generation
  - sparse-models
  - paper
why_read: >-
  Understand how to evaluate code repair models beyond test passage, and when sparse models offer
  better value.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers evaluated automated program repair models using a quality index that combines correctness, maintainability, security and generation efficiency, rather than test-suite passage alone. They tested three Qwen2.5-Coder dense models and one DeepSeek Mixture-of-Experts model on 130 real bugs, running all locally on identical hardware.

For a platform engineer, this matters because it shows active parameter count drives performance in sparse models, not total parameters. The MoE model matched the 7B and 14B dense models on correctness while activating only 2.4B of 16B parameters, cutting computational cost substantially.

Model rankings shifted when weighting metrics differently, demonstrating that leaderboards hiding behind single scores can mask real trade-offs between correctness, maintenance burden, security and inference cost. This is particularly relevant when selecting models for production repair pipelines.
