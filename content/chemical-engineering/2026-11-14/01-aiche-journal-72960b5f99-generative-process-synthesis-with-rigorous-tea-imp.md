---
id: 72960b5f99
title: Generative process synthesis with rigorous TEA improves on best random designs by 12.2%
original_title: >-
  Integrating rigorous techno‐economic analysis into generative process synthesis for economic
  optimization
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70758?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-11-14"
published_at: "2026-11-14T05:24:58.000Z"
authors:
  - Yeong Woo Son
  - Ji Hun Pak
  - Chan Kim
  - Hyungsoo Lee
  - Jong Min Lee
comments: null
tags:
  - process-synthesis
  - techno-economic-analysis
  - bayesian-optimization
  - generative-models
  - aspen-plus
  - process-design
  - paper
why_read: >-
  The full paper should show how the generator, TuRBO inner loop and Aspen Plus TEA evaluation are
  coupled, and how the two case studies were set up.
rank: 1
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

An AIChE Journal paper describes a fully automated dual-loop framework for process synthesis. A trained generative model proposes process topologies. An inner loop initialises flowsheets in Aspen Plus using equation-oriented methods, then runs trust-region Bayesian optimisation (TuRBO) on an external simulation and techno-economic analysis evaluation.

The evaluation includes discrete decisions on equipment sizing and utility selection. Particle swarm optimisation uses the resulting economic feedback to steer the generator. In the cyclohexane case, annualised profit rose by 12.2% against the best randomly sampled design. In the ethylene glycol case, the annualised deficit fell by 30.6%.

For practitioners, the point is that topology search is being tied to rigorous costing rather than shortcut metrics. Including discrete sizing and utility choices makes the economic signal closer to what a design team would actually evaluate.

The baseline is the best randomly sampled design, not a human-designed or published flowsheet. The abstract reports two case studies only. It also shows the ethylene glycol designs still run at a deficit, so the gain is a smaller loss rather than a profitable process.
