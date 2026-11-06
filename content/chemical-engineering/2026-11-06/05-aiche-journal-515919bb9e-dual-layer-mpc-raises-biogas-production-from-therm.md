---
id: 515919bb9e
title: Dual-layer MPC raises biogas production from thermophilic digesters in simulation
original_title: >-
  Enhanced biogas production via dual‐layer model predictive control for thermophilic anaerobic
  digesters
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70751?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-11-06"
published_at: "2026-11-05T10:12:42.000Z"
authors:
  - Ali Moradvandi
  - Mohammad Amin Ghanavati
  - Merle de Kreuk
  - Ralph E. F. Lindeboom
comments: null
tags:
  - anaerobic-digestion
  - model-predictive-control
  - biogas
  - thermophilic
  - chp
  - paper
why_read: >-
  You will get the supervisory layer designs, the adaptive MPC formulation, and the simulation
  results behind the claimed performance gain.
rank: 5
interest_score: 5.7
depth_score: 6
novelty_score: 6
utility_score: 5
scored: true
model: glm-5.3
---

The paper proposes a dual-layer control architecture for thermophilic anaerobic digesters, pairing a decision-making layer with an adaptive model predictive controller. A gain-scheduling supervisory layer generates a startup trajectory that ensures a smooth transition to steady-state operation. A second, demand-oriented supervisory layer uses an optimisation framework to align biogas conversion into combined heat and power with grid requirements.

The MPC layer beneath them uses an adaptive linear input-output model to track optimal trajectories while rejecting disturbances. A circular element is built in as well. The controller stimulates additional biogas production to satisfy the digester's internal heating requirements, so the plant partly fuels the higher heat demand that thermophilic operation carries.

Thermophilic digestion yields more biogas than mesophilic digestion, but brings higher heating demand and a risk of process instability. The proposed architecture targets both drawbacks. For plants with combined heat and power, the demand-oriented layer offers a way to match output to grid requirements rather than run at constant load.

The evidence is simulation only. The abstract gives no figures for the improvement in biogas output, the net heating demand, or the disturbances rejected. No pilot or plant trial is reported, so the claimed performance gain rests on the model used in the study.
