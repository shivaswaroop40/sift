---
id: 5ef8a42d02
title: Large molecular dynamics time-steps bias hydrophobic binding free energies
original_title: >-
  Large integration time-step in molecular dynamics simulation artificially enhances the strength of
  hydrophobic interaction
url: https://arxiv.org/abs/2609.30109
source: arXiv physics.chem-ph
kind: paper
section: modelling-and-control
date: "2026-09-25"
published_at: "2026-09-25T04:00:00.000Z"
authors:
  - Dilipkumar N. Asthagiri
comments: null
tags:
  - molecular-dynamics
  - free-energy
  - hydrophobic-effect
  - time-step
  - simulation-methods
  - paper
why_read: >-
  It warns that a common MD setting, the integration time-step, can shift hydrophobic free energies
  and bias conclusions drawn from simulation.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Molecular dynamics simulations of two united-atom methane molecules in water show that increasing the integration time-step beyond 0.5 fs makes the contact minimum of the potential of mean force more favourable, artificially strengthening the hydrophobic interaction. At a fixed step size the contact minimum still deepens with temperature, as expected for entropy-driven association.

Because relative free energies shift when equipartition breaks, reported PMFs and association strengths depend on a numerical choice rather than the underlying physics. This matters for anyone using MD to rank host-guest binding, solvation, or partitioning behaviour, where small free-energy differences drive design decisions.

Quasichemical analysis attributes the artefact to the hydrophobic component alone. The hydrophilic contribution to association is insensitive to time-step and still opposes binding, so the spurious attraction has a purely hydrophobic origin. The authors link this to how the internal pressure of the liquid changes with temperature under non-equipartition conditions.

The finding is presented for a simple united-atom methane pair, so its effect on all-atom or biomolecular force fields is not directly addressed in the abstract and would need separate checks.
