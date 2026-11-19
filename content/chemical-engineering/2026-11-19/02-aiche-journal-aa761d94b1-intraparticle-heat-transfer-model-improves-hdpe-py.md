---
id: aa761d94b1
title: Intraparticle heat transfer model improves HDPE pyrolysis fluidized bed gas yield prediction
original_title: >-
  A multiscale modeling framework for high‐density polyethylene pyrolysis coupling reaction
  kinetics, intraparticle transport, and coarse‐grained discrete element method–computational fluid
  dynamics
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70771?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-11-19"
published_at: "2026-11-18T15:10:53.000Z"
authors:
  - Bing Wang
  - Laura Pires Costa
  - Yihan Wang
  - Oğuzhan Akin
  - Zhiheng Fan
  - Hamed Hoorijani
comments: null
tags:
  - pyrolysis
  - hdpe
  - fluidized-bed
  - cfd-dem
  - reaction-engineering
  - plastic-recycling
  - paper
why_read: >-
  The paper shows how much intraparticle heat transfer matters for plastic pyrolysis yields, and
  gives a regime map for judging when it dominates over kinetics.
rank: 2
interest_score: 7
depth_score: 8
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Researchers built a multiscale model of high-density polyethylene pyrolysis in the open-source code MFiX. It couples a lumped kinetic scheme of 17 species and 17 reactions, a one-dimensional intraparticle heat and reaction model, and coarse-grained discrete element method–computational fluid dynamics. The kinetics resolve C1–C12 products plus C13–C20, C21–C50 and C51+ fractions. Validation used micro-pyrolyzer data at 550–650°C.

In fluidized bed simulations, the nonisothermal intraparticle model gave a C1–C5 gas yield of 17.82%, against an experimental 17.4%. The isothermal model gave 12.63%. Treating particles as uniform in temperature therefore under-predicted light gas by roughly a third in this case.

The simulations also quantified HDPE residence time, axial distribution and HDPE-sand mixing. A Biot-Damköhler map with iso-Fourier lines indicates that fresh particles convert under heat-transfer control, with weak nonisothermality. As particles shrink, the balance moves towards kinetic control.

The abstract claims a predictive basis for design and scale-up. It reports validation against one experimental gas yield figure and micro-pyrolyzer data, so the scale-up claim rests on limited evidence in what is shown.
