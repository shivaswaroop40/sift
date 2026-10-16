---
id: bfc01bda57
title: Quantum compiler output diverges unpredictably across vendors and devices
original_title: >-
  Realization Divergence in Multi-Provider Quantum Computing: A Pre-Registered Study of What
  Survives Measurement
url: https://arxiv.org/abs/2610.21714
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-10-16"
published_at: "2026-10-16T04:00:00.000Z"
authors:
  - Jouni Peltonen
  - Vlad Stirbu
  - Tommi Mikkonen
comments: null
tags:
  - quantum-computing
  - compilation
  - vendor-divergence
  - hardware-portability
  - observability
  - paper
why_read: Learn where quantum compiler output diverges and what vendors hide in their interfaces.
rank: 11
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Researchers measured how identical quantum circuits behave differently when compiled and run on hardware from three vendors across four devices. They found embedding radius correlates strongly with two-qubit gate overhead at 0.805 Spearman correlation, while circuit size showed weaker correlation at 0.492. The same circuit produced opposite execution patterns on two IQM devices but not on IonQ.

This matters because quantum software stacks involve multiple compilation steps that obscure what actually runs on hardware. Engineers cannot assume their source code behaves identically across vendors or even across device generations from the same vendor. Vendor interfaces hide crucial details, such as changed native operations that go unreported.

The study used pre-registered predictions and identified exploratory analyses separately, tracking silent failures where toolchains report success despite incompatibility. Placement policies and device topology dominate divergence more than circuit size alone, but individual noise mechanisms remain unclear. The findings expose limits to cross-provider portability and gaps in toolchain observability.
