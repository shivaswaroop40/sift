---
id: 734e33fc35
title: Frozen-arcade CFD-DPM cuts spray dryer design-of-experiments cost
original_title: Model-based design of experiments for spray drying using frozen airflow CFD-DPM simulations
url: https://www.sciencedirect.com/science/article/pii/S0009250926017963?dgcid=rss_sd_all
source: Chemical Engineering Science
kind: paper
section: modelling-and-control
date: "2026-09-17"
published_at: null
authors:
  - Nikolai A. Jessen
  - Alexander Findeisen
  - David F. Fletcher
  - Timothy Langrish
  - Krist V. Gernaey
  - Ulrich Krühne
comments: null
tags:
  - spray-drying
  - cfd-dpm
  - design-of-experiments
  - process-modelling
  - computational-fluid-dynamics
  - paper
why_read: >-
  You get a faster surrogate-style CFD workflow for spray dryer scoping studies without giving up
  particle-resolved physics.
rank: 8
interest_score: 7
depth_score: 8
novelty_score: 6
utility_score: 7
scored: true
model: minimax-m3
---

A study in Chemical Engineering Science applies model-based design of experiments to spray drying, using frozen airflow CFD-DPM simulations instead of full transient flow solves. The frozen field approach holds gas-phase flow fixed while tracking droplet trajectories, letting many particle cases run cheaply on the same velocity field.

For practitioners, the point is faster screening of droplet and feed conditions without rerunning the underlying fluid simulation. This matters during early-stage spray dryer development when many injection and formulation options need comparison against limited lab data.

The paper claims this hybrid method reproduces trends from transient CFD-DPM at lower compute cost, though the abstract does not give a quantitative speed-up or error figure. Readers should check the case studies for accuracy bounds before relying on it for scale-up decisions.
