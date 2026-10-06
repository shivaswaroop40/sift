---
id: 61052d2278
title: Activation-space perturbation trains transformers without backpropagation at scale
original_title: "Dust: Pretraining Transformers Without Backpropagation"
url: https://qlabs.sh/research/dust
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-10-06"
published_at: "2026-10-05T21:15:07.000Z"
authors:
  - E-Reverance
comments: https://news.ycombinator.com/item?id=49970871
tags:
  - transformers
  - zeroth-order
  - optimisation
  - evolution-strategies
  - training
  - community
why_read: >-
  Understand whether gradient-free training scales to modern language models and what the efficiency
  trade-offs are.
rank: 3
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers present Dust, a zeroth-order optimisation method that trains transformers by perturbing activations rather than weights. Each token acts as a virtual population member, allowing one forward pass to evaluate many perturbations in parallel. At large populations, Dust matches or exceeds backpropagation performance.

Zeroth-order methods have long been considered unscalable to large networks. This work shows the opposite: larger models require smaller populations to match backprop, suggesting the approach may improve with scale. Gradient estimates remain well aligned with backprop across tested scales up to one billion tokens.

The efficiency gain over weight-space evolution strategies is substantial. Dust is ten thousand to a million times more efficient than EGGROLL, a state-of-the-art evolution strategy, according to extrapolations from one million tokens onwards.

The findings suggest backpropagation's requirement for differentiability may be an unnecessary constraint in compute-rich settings, where more generic search-based algorithms could eventually dominate.
