---
id: a7138e6f11
title: Composite sphericity descriptor unifies non-spherical particle heat transfer prediction
original_title: >-
  A convective heat‐transfer model for non‐spherical particles based on SuperDEM–CFD from direct
  numerical simulation
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70702?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-11-03"
published_at: "2026-11-03T09:10:22.000Z"
authors:
  - Hairui Lin
  - Jianjian Dai
  - Zhuohan Li
  - Zhi Zhang
  - Riwei Wei
  - Yan Wang
comments: null
tags:
  - heat-transfer
  - non-spherical-particles
  - dem-cfd
  - sphericity
  - correlation
  - machine-learning
  - paper
why_read: >-
  The full paper details the composite sphericity descriptor, the mechanism-based correlation and
  the machine-learning model comparison across geometries.
rank: 4
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

Particle-resolved direct numerical simulations of ellipsoids, cylinders and cuboids, across a wide range of aspect ratios and attack angles, show that crosswise sphericity governs heat transport in the stagnation zone while overall sphericity sets the available surface area. A composite descriptor, Φ/Φ⊥, combining the two sphericities collapses data from every geometry tested. A mechanism-based correlation built on it reached mean absolute percentage errors below 5% on unseen conditions, with shape-specific versions below 3%.

Most convective correlations assume spherical particles, and shape corrections are often ad hoc. This work separates the orientation effect, captured by crosswise sphericity, from the surface-area effect, captured by overall sphericity. A single descriptor then covers ellipsoids, cylinders and cuboids, giving DEM-CFD models of non-spherical particle flows a closure with quantified accuracy rather than a borrowed sphere correlation.

The four machine-learning models were more accurate within their training domain but extrapolated poorly. The back-propagation neural network performed best on Reynolds-number extrapolation, yet it deteriorated at an aspect ratio of 6. Outside the simulated range, the mechanism-based correlation is the safer choice.
