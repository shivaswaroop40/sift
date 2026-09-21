---
id: cb13a4adee
title: Study probes heat-transfer errors in coarse-grained CFD-DEM for fluidized beds
original_title: >-
  Mechanism and temperature-dispersion correction of heat-transfer errors in coarse-grained CFD-DEM
  of gas-solid fluidized beds
url: https://www.sciencedirect.com/science/article/pii/S1385894726091989?dgcid=rss_sd_all
source: Chemical Engineering Journal
kind: paper
section: modelling-and-control
date: "2026-09-21"
published_at: null
authors:
  - Yuxuan Liu
  - He Lei
  - Zheng-Hong Luo
comments: null
tags:
  - cfd-dem
  - fluidised-beds
  - heat-transfer
  - coarse-graining
  - simulation
  - paper
why_read: >-
  You will see where coarse-graining distorts heat transfer in fluidised-bed CFD-DEM and how the
  authors propose to fix it.
rank: 6
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Researchers examined why coarse-grained CFD-DEM simulations of gas-solid fluidized beds give inaccurate heat-transfer results, focusing on the artificial temperature-dispersion effect that arises when fine particle-scale physics is mapped onto larger computational parcels.

They report that the coarse-graining procedure smooths local temperature gradients, which suppresses the predicted heat-transfer coefficient between gas and particles. A correction scheme that restores the missing temperature fluctuations is proposed and tested.

For practitioners running reactor or dryer simulations, the work identifies a known source of error when coarse-graining is used to cut computational cost, and offers a route to recover more reliable thermal predictions without returning to full-resolution DEM.

The paper claims the correction improves agreement with fine-grid simulations, though quantitative validation data are not shown in the abstract.
