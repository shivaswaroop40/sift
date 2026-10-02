---
id: f0e2ae9689
title: OpenDP's discrete Laplace sampler produces periodic artifacts due to faulty rational arithmetic
original_title: Detection and Resolution of Periodic Artifacts in OpenDP's Discrete Laplace Sampler
url: https://arxiv.org/abs/2610.01907
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-10-02"
published_at: "2026-10-02T04:00:00.000Z"
authors:
  - Cesare Gerolimetto Fabrello
  - Valeria Rossi
  - Alberto Trombetta
  - Massimo Caccia
comments: null
tags:
  - differential-privacy
  - opendp
  - sampling
  - arithmetic
  - vulnerability
  - paper
why_read: Learn how a differential privacy library's sampling flaw was discovered and fixed.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

OpenDP's discrete Laplace sampler contains systematic periodic distortions in its output distribution. The fault traces to a faulty implementation in the rational arithmetic library used by the bernoulli_exp1 function, which samples from Bernoulli(e^(-x)) distributions. This low-level primitive failure propagates through the sampling hierarchy.

Differential privacy implementations require precise sampling from noise distributions to provide formal privacy guarantees. If the sampler does not match the intended distribution, privacy bounds may not hold as proven. This undermines the core assurance that differential privacy mechanisms are designed to provide.

The authors developed a diagnostic methodology to isolate the faulty component and propose an alternative implementation using exact rational arithmetic. Statistical validation on 10^6 samples confirms the corrected sampler matches the theoretical distribution at the tested precision level.
