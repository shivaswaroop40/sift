---
id: ddc9d9202a
title: Geographic decentralisation imposes a provable latency floor and a minimum subsidy
original_title: >-
  The Price of Decentralization, Paid Twice: A Latency Floor and a Minimal Subsidy from a Geographic
  Decentralization Invariant
url: https://arxiv.org/abs/2609.20322
source: arXiv cs.DC
kind: paper
section: papers
date: "2026-09-18"
published_at: "2026-09-18T04:00:00.000Z"
authors:
  - Ruiyang Zhang
comments: null
tags:
  - cryptoeconomics
  - byzantine-fault-tolerance
  - latency
  - solana
  - validator-topology
  - proof-systems
  - paper
why_read: >-
  You will see why latency-aware validator rewards are mathematically self-defeating and how much it
  costs a chain to resist re-concentrating.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

The paper proves a protocol-agnostic lower bound on quorum commit latency from the spread of stake across geographic regions. If no radius-rho area holds more than a gamma fraction of stake, every proposer's beta-quorum commit latency is at least rho, and exactly rho*sqrt(beta/gamma) on a plane.

It couples this geometric floor to an incentive one. In a location-choice game with a quorum-latency reward, centralisation emerges as a supercritical O(2) symmetry-breaking bifurcation. Holding a decentralisation target requires an anti-concentration subsidy that scales as Theta(c*rho/sqrt(gamma)), paid as a constant-ratio tax on top of the latency cost.

The authors validate numerically and on a 719-validator Solana dataset measured against a RIPE-Atlas latency matrix. The network has a stake-based Nakamoto coefficient of 19 but a geographic Nakamoto coefficient of 1 to 2, illustrating the gap the theory describes.

The scope is narrow: the latency floor itself is elementary, the contribution is the formal coupling between that floor and the minimum subsidy needed to keep validators apart.
