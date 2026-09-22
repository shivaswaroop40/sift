---
id: ecf3f28a59
title: >-
  Hybrid machine learning model predicts self-diffusion coefficients across liquid mixture
  compositions
original_title: Composition-Dependent Self-Diffusion Coefficients in Liquid Mixtures from Hybrid Machine Learning
url: https://arxiv.org/abs/2609.24599
source: arXiv physics.chem-ph
kind: paper
section: separations
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - Jens Wagner
  - Thomas Specht
  - Hans Hasse
  - Fabian Jirasek
comments: null
tags:
  - machine-learning
  - diffusion
  - liquid-mixtures
  - transport-properties
  - molecular-modelling
  - paper
why_read: >-
  It gives you a released, broadly applicable tool for estimating self-diffusion coefficients in
  liquid mixtures when you only know molecular structures and pure-component viscosities.
rank: 5
interest_score: 5.7
depth_score: 6
novelty_score: 5
utility_score: 6
scored: true
model: minimax-m3
---

Researchers have extended a hybrid Stokes-Einstein machine learning approach called HADES to predict self-diffusion coefficients in liquid mixtures of any number of components at any composition and temperature. The architecture uses a deep-set neural network to link pure-component and mixture predictions within one framework, taking only SMILES structures and pure-component viscosities as inputs.

The previous version handled solutes at infinite dilution in pure solvents. The new work broadens this to concentration-dependent behaviour and multi-component solvents, which matters because experimental self-diffusion data in mixtures remain scarce and are needed for reaction engineering, separations, and diffusion-limited process design.

The model was trained on 2526 data points covering 600 systems and outperformed benchmark methods. The authors have released the trained model, source code, and an interactive web application, making the method directly usable by practising engineers for screening and estimation work.

Limitations are not detailed in the abstract, so the reported outperformance should be read as conditional on the training set composition and the temperature and mixture ranges covered.
