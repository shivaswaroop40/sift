---
id: 2953224a5d
title: SoLiD26 dataset delivers 15.4 million DFT snapshots for solid-liquid interface MLIPs
original_title: >-
  SoLiD26: A First Principles Solid-Liquid Interface Dataset for Machine-learned Interatomic
  Potentials
url: https://arxiv.org/abs/2609.28013
source: arXiv physics.chem-ph
kind: paper
section: materials
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Jonas Busk
  - Emil J. P. Frost
  - Yogeshwaran Krishnan
  - Henrik H. Kristoffersen
  - August E. G. Mikkelsen
  - Xueping Qin
comments: null
tags:
  - machine-learned-potentials
  - solid-liquid-interface
  - dft
  - dataset
  - electrochemistry
  - mace
  - paper
why_read: >-
  You get a large, ready-made DFT dataset and a MACE benchmark for building or testing MLIPs on
  solid-liquid interfaces.
rank: 7
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

The authors release SoLiD26, a curated dataset of 15.4 million first-principles atomic structures aimed at training machine-learned interatomic potentials (MLIPs) for solid-liquid interfaces. Structures contain up to 576 atoms and 15 chemical elements, with most originating from ab initio molecular dynamics simulations.

All calculations were performed with VASP using the PBE functional with D3 dispersion corrections. The dataset includes aqueous coinage metal interfaces, electrode-electrolyte systems and selected bulk reference structures, giving it relevance to electrochemistry, catalysis and corrosion work.

For a chemical engineer working on MLIPs, the value is having heterogeneous solid-liquid configurations in one place rather than scraping individual studies. The provided MACE training and evaluation suite gives a working baseline for benchmarking new potentials against the same test split.

The abstract does not report model accuracy figures, so quantitative performance is not yet stated. Users should check element coverage and AIMD sampling conditions against their own systems before assuming transfer.
