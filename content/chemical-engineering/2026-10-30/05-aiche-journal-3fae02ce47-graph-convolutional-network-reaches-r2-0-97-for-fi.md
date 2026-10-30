---
id: 3fae02ce47
title: Graph convolutional network reaches R² 0.97 for filtered drag in fluidized beds
original_title: >-
  Graph convolutional network‐based filtered drag model for coarse‐grid TFM simulations of gas–solid
  fluidized beds
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70686?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-10-30"
published_at: "2026-10-27T03:03:51.000Z"
authors:
  - Abdul Mateen
  - Qinyu Zhang
  - Fangpei Jin
  - Xiaoxing Liu
comments: null
tags:
  - fluidized-beds
  - drag-closure
  - graph-neural-networks
  - two-fluid-model
  - machine-learning
  - paper
why_read: >-
  You get the graph construction method, the case for spatial message passing over pointwise ANN
  markers, and the cross-particle and cross-filter validation results.
rank: 5
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

A new study presents a graph convolutional network that predicts filtered drag for coarse-grid two-fluid model simulations of gas–solid fluidized beds. Fine-grid TFM data are filtered at multiple scales and converted to graphs, with computational cells as nodes and neighbourhood message passing carrying mesoscale spatial information. Tested over multiple particle systems, flow regimes from dense bubbling to dilute flow, and filter sizes, the model reached a test R² of 0.97.

Coarse-grid TFM needs subgrid drag closures to account for unresolved mesoscale structures. Conventional ANN closures process each cell's markers independently and lose that spatial context. Here, message passing between neighbouring cells lets the model learn spatial dependencies and regime-dependent structures from local hydrodynamic markers. Filter-scale effects are absorbed implicitly from aggregated hydrodynamic information, with no explicit filter-size input. The model also generalises to an unseen particle without retraining.

The reported R² of 0.97 is a test-set figure measured on filtered fine-grid TFM data. The abstract does not report results from coarse-grid simulations that embed the closure, so its effect on predicted bed hydrodynamics and regime behaviour still needs checking.
