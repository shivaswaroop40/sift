---
id: 50480fa240
title: Hydrogen aero-engine combustor study maps flame transition and NOx scaling across throttle
original_title: >-
  Topological Flame Bifurcation, Aerodynamic Flashback Margins, and Multi-Pathway NOx Scaling in a
  3D Swirl-Stabilized 100% Pure Hydrogen Aero-Engine Combustor
url: https://arxiv.org/abs/2609.17600
source: arXiv physics.chem-ph
kind: paper
section: energy-transition
date: "2026-09-17"
published_at: "2026-09-17T04:00:00.000Z"
authors:
  - Prashant Suresh Kamble
comments: null
tags:
  - hydrogen
  - combustion
  - nox
  - flashback
  - aero-engine
  - cfd
  - paper
why_read: >-
  You get validated operability limits and NOx scaling laws for a 100% hydrogen swirl combustor,
  with enough detail to judge the flashback and emission trade-offs yourself.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Three-dimensional simulations of a dual-swirl 100% hydrogen aero-engine combustor are validated against ASME-grid laser experiments and run across equivalence ratios from 0.55 to 1.00. As throttle advances, the flame topology shifts from a faceplate-attached M-flame at lean idle to a lifted V-flame above an equivalence ratio of 0.895, and wall flashback safety indices stay above 3.42 throughout.

NOx chemistry changes regime across the throttle range. At lean idle, NO is dominated by the water-chaperoned N2O intermediate route at 28.01 ppm and EINOx of 1.85 g/kg. At takeoff, thermal Zeldovich pathways dominate, with NO climbing to 319.21 ppm and EINOx of 35.40 g/kg, and the overall NO versus load scaling follows a power-law exponent of 4.92.

For practising engineers, the paper gives a coherent picture of the two competing problems with neat hydrogen in a swirl combustor: flashback risk near the nozzle and steeply rising NOx as power increases. The 4.92 power-law exponent is a quantitative handle on how quickly emissions grow with load, which matters for any cycle or after-treatment design that must meet landing-and-takeoff NOx targets.

The claimed methodology is workstation-based and uses a curvature-corrected SST closure, dual-rate finite-rate plus eddy-dissipation kinetics, and discrete ordinates radiation, validated against ASME-standard experimental benchmarks. Results are simulation predictions rather than direct rig measurements, and the abstract gives no time-resolved flashback data or full operability map.
