---
id: f2284ec8fe
title: Two-stage active learning finds 55 MOFs predicted to beat CALF-20 in PSA CO2 capture
original_title: >-
  Accelerating MOF discovery for CO2 capture: End‐to‐end molecular‐to‐process framework via
  two‐stage active learning
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70748?af=R
source: AIChE Journal
kind: paper
section: papers
date: "2026-11-24"
published_at: "2026-11-24T02:47:04.000Z"
authors:
  - Jiahui Wu
  - Xiaodong Hong
  - Congjing Ren
  - Jingdai Wang
  - Yongrong Yang
  - Zuwei Liao
comments: null
tags:
  - mof
  - co2-capture
  - pressure-swing-adsorption
  - active-learning
  - machine-learning
  - process-optimisation
  - paper
why_read: >-
  Read the paper for the surrogate model design, the active learning scheme and the PSA optimisation
  set-up, which show how process-level screening can be made affordable for large MOF libraries.
rank: 3
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

An AIChE Journal paper describes a framework that links molecular simulation, rigorous pressure swing adsorption (PSA) optimisation and machine learning to screen metal–organic frameworks for carbon capture. A deep learning surrogate predicts process-level metrics directly from a MOF's crystallographic information, rather than from intrinsic adsorption properties alone.

The framework was applied to 50,921 MOFs. Only about 1% of the library was evaluated with high-fidelity simulation. A two-stage active learning strategy with an adaptive mechanism was used to reduce the effect of domain shift between the initial training set and the full target library. It identified 55 candidates with predicted Pareto dominance over CALF-20.

This addresses a known problem. Materials that look good on adsorption capacity or selectivity often perform differently once cycle design and operating constraints are applied. Predicting process metrics directly cuts the number of expensive PSA optimisations needed to rank a large library.

The feature analysis points to accessible surface area, framework density and the N2 affinity constant as the main drivers of PSA performance. The dominance over CALF-20 is predicted, not measured. The abstract gives no experimental validation or synthesis feasibility check for the 55 candidates.
