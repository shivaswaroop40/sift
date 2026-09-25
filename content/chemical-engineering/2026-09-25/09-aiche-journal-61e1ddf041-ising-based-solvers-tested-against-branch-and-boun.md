---
id: 61e1ddf041
title: Ising-based solvers tested against branch-and-bound for discrete process design subproblems
original_title: >-
  A computational study of Ising‐based solvers for discrete landscape exploration in process
  optimization
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70656?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-09-25"
published_at: "2026-09-24T10:52:18.000Z"
authors:
  - Yirang Park
  - David E. Bernal Neira
comments: null
tags:
  - process-optimisation
  - ising-solvers
  - quantum-annealing
  - mixed-integer
  - process-systems-engineering
  - paper
why_read: >-
  You will see how three Ising-based solver families stack up against branch-and-bound on two real
  process design cases and where sequential decomposition breaks down.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

This computational study evaluates Ising-based solvers (simulated annealing, quantum annealing, entropy computing) against deterministic branch-and-bound on two process design case studies: an ionic-liquid reactor-separator network and a drug-substance manufacturing process.

Branch-and-bound quickly recovers optimal discrete solutions, whereas the Ising-based methods produce distributions of feasible candidate configurations rather than guaranteed optima. The authors frame these solvers as candidate tools for discrete subproblems embedded in a sequential process systems engineering workflow.

A key finding is that rankings on the discrete subproblem objective can diverge from rankings on the full integrated process objective. This coupling effect limits how far sequential decomposition can be pushed when discrete and continuous decisions interact strongly.

The paper also documents QUBO and Ising reformulation requirements and practical implementation considerations for applying these emerging solvers inside process systems engineering workflows. The source is an abstract, so solver performance figures and case-study metrics are not available here.
