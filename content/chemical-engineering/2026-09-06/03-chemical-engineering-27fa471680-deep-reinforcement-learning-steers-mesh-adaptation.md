---
id: 27fa471680
title: >-
  Deep reinforcement learning steers mesh adaptation in supercritical water fluidised bed
  simulations
original_title: >-
  Deep reinforcement learning-driven mesh adaptation for supercritical water fluidized bed
  simulations
url: https://www.sciencedirect.com/science/article/pii/S0009250926017689?dgcid=rss_sd_all
source: Chemical Engineering Science
kind: paper
section: modelling-and-control
date: "2026-09-06"
published_at: null
authors:
  - Haozhe Su
  - Jie Zhang
  - Hui Jin
  - Liejin Guo
comments: null
tags:
  - cfd
  - reinforcement-learning
  - mesh-adaptation
  - supercritical-water
  - fluidised-bed
  - multiphase-flow
  - paper
why_read: >-
  You will see how a learned policy can replace hand-tuned mesh adaptation in a demanding CFD case
  and judge whether the approach is worth following up.
rank: 3
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

A paper in Chemical Engineering Science proposes using deep reinforcement learning to drive adaptive mesh refinement in CFD simulations of supercritical water fluidised beds. The authors frame it as a way to concentrate grid resolution where it matters during the simulation rather than relying on uniform or static meshes.

For process engineers modelling high-pressure, high-temperature reactors, mesh quality directly affects predicted flow, heat transfer and reaction behaviour. A reinforcement learning agent that refines the grid on the fly could reduce cell count and wall-clock time while keeping accuracy in dense or reacting regions.

Supercritical water fluidised beds are a niche but demanding system, combining near-critical thermophysics with dense multiphase flow. The paper's value sits in demonstrating that a learned policy can control mesh adaptation in this setting, though the abstract gives no concrete speed-up or accuracy figures yet.
