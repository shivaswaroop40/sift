---
id: "5762401932"
title: >-
  Backblaze drive data shows model differences matter more than lifetime curve shape for failure
  forecasts
original_title: Drive Failure and Lifetime Simulation in the Backblaze Drive Statistics Corpus, 2013-2026
url: https://arxiv.org/abs/2611.27122
source: arXiv cs.DC
kind: paper
section: papers
date: "2026-11-23"
published_at: "2026-11-23T05:00:00.000Z"
authors:
  - Ahmed Amer
  - Darrell D. E. Long
comments: null
tags:
  - storage
  - drive-failure
  - backblaze
  - reliability
  - smart
  - simulation
  - paper
why_read: >-
  You get evidence on which assumptions in durability models and failure simulators hold up against
  13 years of fleet data, and which produce overconfident or inflated risk estimates.
rank: 2
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

The paper tests storage-simulator assumptions against Backblaze daily records from April 2013 to June 2026. The data covers 504,624 drives, 99 models, 2.0 million drive-years and 31,881 failures, including removals of drives judged likely to fail. The authors forecast failure counts over nine successive years.

Accounting for drive-model differences and attributes improves forecast scores about 4.3 times as much as swapping a single Weibull for two competing Weibulls. A fixed bathtub benchmark predicts 2.4 times the observed failures. Prediction intervals covered 44% of observed counts without annual variation, and 92% once fleet-wide changes and shared good or bad years per model were added.

For drives already in service, a SMART warning raises one-year risk ranking AUC from 0.64 to 0.73. Boosted trees on monthly SMART records gave the best individual forecasts, but still predicted 19% too many failures at one year and 22% too many at 90 days.

Long-term survival estimates are sensitive to how ageing is separated from calendar time. Fitted fifteen-year survival differs by up to 18 percentage points, and assumptions about future calendar trends by up to 27 points. The authors provide samplers for storage simulations.
