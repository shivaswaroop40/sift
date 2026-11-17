---
id: 64e208f3b7
title: Physics-informed population balance model cuts jet milling calibration time by 20% to 47%
original_title: >-
  Multiscale physics‐informed population balance model and neural surrogates for particle size
  prediction in jet milling
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70744?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-11-17"
published_at: "2026-11-17T03:44:22.000Z"
authors:
  - Leqi Lin
  - Sajad Khodadadi
  - Yang Liu
  - Wenbo Zhu
  - Lijun Xue
  - Dingeman L. H. van der Haven
comments: null
tags:
  - jet-milling
  - population-balance
  - particle-size
  - cfd-dem
  - neural-networks
  - pharmaceuticals
  - paper
why_read: >-
  Read it for how single-particle tests and CFD-DEM are combined to replace per-pressure
  calibration, and for the limits of the neural surrogate on new materials.
rank: 2
interest_score: 6.3
depth_score: 6
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A paper in AIChE Journal describes a physics-informed population balance model (PI-PBM) for jet milling. It takes material-dependent breakage properties from single-particle crushing tests. It takes pressure-dependent collision descriptors from coupled CFD-DEM simulations. The model reproduced experimental particle size distributions with accuracy comparable to separately calibrated pressure-specific models.

Calibration time fell by 20% to 47%. The authors also say material needs for calibration could fall, though they describe this as a possibility. For early-stage specialty chemical and pharmaceutical work, where material is scarce, fewer calibration runs per pressure setting is the practical gain.

The authors then trained a neural network surrogate, the population balance neural network (PBNN), on PI-PBM output. It reproduced unimodal and bimodal product size distributions and predicted the product for an unseen feed distribution. It showed only partial transferability to an external material without retraining, so it is not a general tool yet.
