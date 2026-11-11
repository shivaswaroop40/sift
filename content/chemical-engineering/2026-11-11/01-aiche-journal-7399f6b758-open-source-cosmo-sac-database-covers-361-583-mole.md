---
id: 7399f6b758
title: Open-source COSMO-SAC database covers 361,583 molecules with accuracy matching DMol3
original_title: A large‐scale open‐source σ‐profile database for COSMO‐SAC
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70652?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-11-11"
published_at: "2026-11-10T11:50:12.000Z"
authors:
  - Tae Hyun Kim
  - Joseph Sang‐Il Kwon
comments: null
tags:
  - cosmo-sac
  - thermodynamics
  - activity-coefficients
  - open-source
  - solvent-screening
  - dft
  - paper
why_read: >-
  You get the scale, the recalibration method and the benchmark figures for a free COSMO-SAC input
  set that avoids commercial quantum-chemistry software.
rank: 1
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

An AIChE Journal paper presents an open-source σ-profile database for COSMO-SAC covering 361,583 neutral organic molecules. The profiles come from density-functional theory in the conductor-screening limit, run with the PySCF package on PM6-optimised geometries from PubChemQC. It is 162 times larger than the Bell et al. set (2261 molecules) and 6.8 times larger than CHAOS (53,091).

The authors recalibrated the five exchange-energy parameters of COSMO-SAC for PySCF-derived profiles. They used three sequential stages and 24,522 infinite-dilution activity coefficient data points from the NIST/TRC ThermoData Engine.

Against the DMol3-based reference, the paper reports comparable or slightly better results. The infinite-dilution activity coefficient RMSE was 0.898 versus 0.961 on 9748 points. VLE mean pressure deviation was 3.12% versus 3.92% on 12 binary systems. SLE RMSE was 0.412 versus 0.458 on 22 solute–solvent pairs.
