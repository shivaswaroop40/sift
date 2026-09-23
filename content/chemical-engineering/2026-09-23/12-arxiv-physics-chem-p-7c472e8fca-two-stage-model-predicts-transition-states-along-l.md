---
id: 7c472e8fca
title: Two-stage model predicts transition states along learned reaction paths
original_title: Learning continuous reaction paths for transition-state prediction
url: https://arxiv.org/abs/2609.25523
source: arXiv physics.chem-ph
kind: paper
section: papers
date: "2026-09-23"
published_at: "2026-09-23T04:00:00.000Z"
authors:
  - Yexiang Yang
  - Linlin Zhong
comments: null
tags:
  - transition-state
  - machine-learning
  - reaction-path
  - quantum-chemistry
  - computational-chemistry
  - paper
why_read: >-
  You will see how a path-based, two-stage ML approach can replace endpoint interpolation to cut
  transition-state search effort for reaction engineering and mechanism work.
rank: 12
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: minimax-m3
---

MARC-TS is a two-stage machine-learning framework that learns a continuous, endpoint-conditioned reaction path and uses local path context to locate a transition-state candidate. The authors built T1x-IRC-8K, containing 8,209 reactions and about 1.09 million path-resolved geometries.

On held-out test reactions, the path model cut complete-path error by 48.4% relative to endpoint interpolation, and the localizer reached a mean aligned structural error of 0.127 angstrom. Quantum-chemical optimisation and vibrational analysis confirmed 405 first-order saddle points from 410 predictions.

In a 100-reaction nudged elastic band comparison, learned-path initialisation reached a joint geometry-and-force target for 66% of reactions, against 12% for geometric interpolation after 100 optimiser steps. The authors frame the path itself as a reusable representation that can feed mechanistic interpretation and quantum-chemical refinement rather than a single auxiliary output.

The claim is from an arXiv preprint and has not been peer reviewed, so reported error reductions should be read as the authors' benchmark rather than an independent result.
