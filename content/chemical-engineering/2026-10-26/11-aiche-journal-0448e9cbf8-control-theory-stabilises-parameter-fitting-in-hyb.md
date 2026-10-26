---
id: 0448e9cbf8
title: Control theory stabilises parameter fitting in hybrid process models
original_title: >-
  A control‐inspired learning framework for stabilizing ill‐conditioned parameter recovery in hybrid
  models
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70712?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-10-26"
published_at: "2026-10-24T01:46:47.000Z"
authors:
  - Hangjun Cho
  - Akshay Kudva
  - Joseph Sang‐Il Kwon
  - Costas Kravaris
comments: null
tags:
  - hybrid-models
  - parameter-estimation
  - feedback-linearization
  - sparse-learning
  - process-control
  - paper
why_read: Learn how control theory can stabilise data-driven parameter recovery in hybrid process models.
rank: 11
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Series-type hybrid models embed data-driven components into first-principles equations to handle incomplete mechanistic structure. Traditional training via output mismatch produces ill-conditioned parameter recovery: different missing physics yield similar trajectories. Researchers applied feedback linearization theory to treat missing physics as an input-like parameter, then extracted a proxy from measured data that ensures asymptotic output tracking.

This matters because hybrid models are standard for complex processes where first-principles alone fall short. The control-inspired approach directly addresses a known weakness: non-unique parameter solutions that undermine model reliability and transferability. The method targets sparse dictionary learning with a tracking-motivated signal rather than raw trajectory fitting.

A continuous stirred-tank reactor test showed the learned sparse closure reproduced measured output whilst preserving the reaction-rate channel, suggesting the method retains mechanistic meaning alongside empirical fit.
