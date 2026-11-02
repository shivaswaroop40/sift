---
id: cce119a1ce
title: Asymmetric message-passing GNN proposed as surrogate for variable-stage distillation
original_title: >-
  Asymmetric message-passing graph neural network for topology-aware surrogate modeling of
  variable-stage distillation columns
url: https://www.sciencedirect.com/science/article/pii/S0009250926022049?dgcid=rss_sd_all
source: Chemical Engineering Science
kind: paper
section: modelling-and-control
date: "2026-11-02"
published_at: null
authors:
  - Doha Fares
  - Ghulam Hyder
  - Yazed Abdelaziz
  - Junyang Liu
  - Erqiang Wang
comments: null
tags:
  - distillation
  - machine-learning
  - graph-neural-networks
  - surrogate-models
  - column-design
  - paper
why_read: >-
  The paper details the asymmetric message-passing architecture and its use for variable-stage
  distillation surrogates, which this digest cannot cover from the title alone.
rank: 4
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

A paper in Chemical Engineering Science proposes an asymmetric message-passing graph neural network as a surrogate model for distillation columns. The title presents the method as topology-aware and aimed at variable-stage columns, so the network is intended to handle columns whose number of stages differs rather than a single fixed design.

Surrogate models stand in for slow stage-by-stage distillation simulations during optimisation, synthesis and sensitivity work. Most are fitted to one column configuration, so a change in stage count forces retraining. A topology-aware surrogate that accepts variable stage counts would let stage number act as a decision variable in column design rather than a fixed input.

This digest has only the paper title. There are no accuracy figures, training data details or validation cases to report. The claim should be treated as a proposal until the abstract or full text confirms how the asymmetric message passing works and how well the surrogate performs.
