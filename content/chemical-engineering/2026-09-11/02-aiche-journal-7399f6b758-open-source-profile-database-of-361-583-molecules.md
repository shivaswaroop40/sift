---
id: 7399f6b758
title: Open-source σ-profile database of 361,583 molecules recalibrates COSMO-SAC
original_title: A large‐scale open‐source σ‐profile database for COSMO‐SAC
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70652?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-09-11"
published_at: "2026-09-11T04:19:40.000Z"
authors:
  - Tae Hyun Kim
  - Joseph Sang‐Il Kwon
comments: null
tags:
  - sigma-profiles
  - cosmo-sac
  - open-source
  - thermodynamics
  - activity-coefficients
  - solvent-selection
  - paper
why_read: >-
  Get the new σ-profile database and recalibrated COSMO-SAC parameters to test against your own
  solvent-selection problems.
rank: 2
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Researchers have released an open-source σ-profile database covering 361,583 neutral organic molecules. The profiles were computed with density-functional theory in the conductor-screening limit using PySCF, starting from PM6-optimised geometries in PubChemQC. The set is 162 times larger than the Bell reference and 6.8 times larger than CHAOS. The authors recalibrated the five COSMO-SAC exchange-energy parameters using 24,522 infinite-dilution activity coefficient data points from NIST/TRC ThermoData Engine.

The database gives process engineers a much wider pool of molecules for solvent screening and phase-equilibrium predictions without relying on commercial software. Accuracy is comparable to the established DMol3-based reference. Infinite-dilution activity coefficients gave an RMSE of 0.898 against 0.961. Vapour-liquid equilibria showed a mean pressure deviation of 3.12% against 3.92%. Solid-liquid equilibria gave an RMSE of 0.412 against 0.458.

The work covers neutral organic molecules only, so ions and charged species are outside its scope. The reparametrisation is specific to PySCF-derived σ-profiles, not a general COSMO-SAC parameter set. Validation used 9,748 activity coefficient points, 12 binary VLE systems and 22 solute-solvent pairs. The database, parameters and code are openly available.
