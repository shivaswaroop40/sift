---
id: 91e6c9b30e
title: ECENet uses O(2)-equivariant edge features to cut MLIP cost without losing accuracy
original_title: "ECENet: An Edge Cluster Expansion Line-Graph Neural Network"
url: https://arxiv.org/abs/2609.23134
source: arXiv physics.chem-ph
kind: paper
section: modelling-and-control
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - R. Allen LaCour
  - Teresa Head-Gordon
comments: null
tags:
  - machine-learning
  - interatomic-potentials
  - graph-neural-networks
  - molecular-simulation
  - computational-chemistry
  - paper
why_read: >-
  You will see how edge-centred O(2) equivariant features compare with standard O(3) MLIPs on the
  MD22 and SPICE benchmarks, including dipole and IR predictions.
rank: 4
interest_score: 5.7
depth_score: 6
novelty_score: 6
utility_score: 5
scored: true
model: minimax-m3
---

ECENet is a line-graph neural network for machine-learned interatomic potentials built on an edge cluster expansion (ECE). The ECE is an analogue of the atomic cluster expansion but expanded around edges between atom pairs rather than single atoms. Features are O(2)-equivariant and persist on the edges, which the authors say gives cheaper, less restrictive operations than O(3)-equivariant models.

The paper reports state-of-the-art performance on the MD22 benchmark for molecular energies and forces, and places ECENet on the accuracy-cost Pareto frontier when trained on the SPICE-MACE-OFF dataset. Latent Ewald summation is used to add long-range electrostatics, enabling prediction of molecular dipole moments and the infrared spectrum of liquid water.

For practising engineers, the practical claim is a potential reduction in compute for surrogate force fields at competitive accuracy on benchmark datasets. The reported tests are on small molecules and liquid water rather than industrial process streams, so direct application to, say, distillation or reactor modelling is not demonstrated in the abstract.
