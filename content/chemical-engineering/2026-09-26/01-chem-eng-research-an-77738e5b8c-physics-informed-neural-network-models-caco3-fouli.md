---
id: 77738e5b8c
title: Physics-informed neural network models CaCO3 fouling across heat exchanger geometries
original_title: >-
  Inverse physics-informed neural network for CaCO 3 crystallization fouling: Integrating initial
  rate and asymptotic resistance across multi-source data
url: https://www.sciencedirect.com/science/article/pii/S0263876226006386?dgcid=rss_sd_all
source: Chem Eng Research and Design
kind: paper
section: modelling-and-control
date: "2026-09-26"
published_at: null
authors:
  - Filipe Fonseca Saboia
  - Cauane Soares Pereira
  - Joao Gabriel Pinheiro Sousa
  - Samuel Jorge Marques Cartaxo
comments: null
tags:
  - fouling
  - heat-exchangers
  - crystallisation
  - neural-networks
  - calcium-carbonate
  - paper
why_read: >-
  You will see how a PINN can consolidate scattered fouling data into one parameter-calibrated model
  usable for exchanger design.
rank: 1
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Researchers trained a physics-informed neural network on CaCO3 crystallisation fouling data drawn from multiple sources, fitting both the initial fouling rate and the asymptotic resistance for different heat exchanger geometries in one model. The inverse formulation lets the network recover the underlying physical parameters from the measured fouling curves rather than treating them as fixed inputs.

For heat exchanger designers the approach matters because asymptotic resistance sets the steady-state penalty that dictates cleaning intervals, while initial rate governs how quickly that penalty develops. A single calibrated model that spans geometries could reduce the need for geometry-specific fouling experiments. The paper does not report field validation, so practical reliability is unproven.
