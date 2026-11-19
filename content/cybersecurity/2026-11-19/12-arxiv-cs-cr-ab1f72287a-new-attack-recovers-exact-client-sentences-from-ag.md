---
id: ab1f72287a
title: New attack recovers exact client sentences from aggregated federated learning updates
original_title: Stealing Exact Training Data from Other Clients during Federated Learning
url: https://arxiv.org/abs/2611.24689
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-11-19"
published_at: "2026-11-19T05:00:00.000Z"
authors:
  - Omkar Shrikanth
  - Soham Dambalkar
  - Parag Jyoti Pal
  - Advik Raj Basani
  - Arnab K. Paul
comments: null
tags:
  - federated-learning
  - gradient-inversion
  - privacy
  - fedavg
  - training-data-extraction
  - paper
why_read: >-
  The abstract gives the core idea and headline numbers, but the paper is needed to judge the threat
  model, model sizes and how far this carries beyond the tested setups.
rank: 12
interest_score: 6.3
depth_score: 7
novelty_score: 7
utility_score: 5
scored: true
model: claude-sonnet-5-5
---

Researchers describe a gradient inversion attack that a malicious client can run against federated learning with FedAvg. It works iteratively. Sentences recovered exactly in one round have their gradient contributions subtracted from the aggregate, which exposes the remaining sentences for recovery in the next round.

The authors claim the first exact sentence recovery in this setting, with 100% precision. On aggregates holding up to four times more tokens than the model's hidden dimension, they recover up to 80.2% of client sentences exactly. They report that existing attacks recover none exactly in that regime.
