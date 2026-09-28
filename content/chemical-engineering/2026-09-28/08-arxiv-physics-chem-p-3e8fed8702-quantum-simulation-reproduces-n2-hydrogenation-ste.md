---
id: 3e8fed8702
title: Quantum simulation reproduces N₂ hydrogenation step at single Ru site on Ru(0001)
original_title: Active-Space Quantum Simulation of N$_2$ Hydrogenation at a Ru Single-Atom Site on Ru(0001)
url: https://arxiv.org/abs/2609.30958
source: arXiv physics.chem-ph
kind: paper
section: reaction-engineering
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Geet Gupta
comments: null
tags:
  - quantum-computing
  - heterogeneous-catalysis
  - dft
  - dinitrogen
  - active-space
  - variational-quantum-eigensolve
  - paper
why_read: >-
  It shows a working DFT-to-quantum-simulation pipeline for a real surface hydrogenation step, with
  qubit counts and accuracy you can compare to your own calculations.
rank: 8
interest_score: 5.7
depth_score: 6
novelty_score: 6
utility_score: 5
scored: true
model: minimax-m3
---

Researchers linked periodic DFT with active-space quantum simulations to model N₂ hydrogenation at an isolated Ru site on Ru(0001), focusing on the step RuH₂(N₂)* → RuH(NNH)*. They extracted a first-shell fragment from the relaxed slab, built an AVAS active space around the Ru–N and N–H bond rearrangement, and then compressed it using natural-orbital truncation.

AVAS produced a 22-qubit active space, which truncation reduced to 16 qubits while matching untruncated CASCI state energies to within 0.21 kcal/mol and a reaction-energy error of 0.2 kcal/mol. Statevector ADAPT-VQE converged for both reactant and product states in this reduced space under a fixed pool-gradient stopping criterion.

Dynamic correlation beyond the active space was tested with strongly contracted NEVPT2 and DSRG-MRPT2. NEVPT2 gave anomalously large, state-imbalanced corrections on the finite fragment, while DSRG-MRPT2 kept the reaction endothermic at the default flow parameter, though the magnitude was sensitive to that parameter choice.

For practitioners the value lies in a concrete workflow that takes a periodic heterogeneous-catalysis problem, reduces it to a qubit-count that current hardware can target, and benchmarks the correlated-energy choices that drive any final barrier or reaction-energy prediction.
