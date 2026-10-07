---
id: 139c3310a2
title: Sparse weight synchronisation cuts trillion-parameter model refit from 87 minutes to 2.5 minutes
original_title: "NeMo-DCR: Bit-Exact Delta-Compressed Refit for Scalable Agentic RL at Trillion-Parameter Scale"
url: https://arxiv.org/abs/2610.08430
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-07"
published_at: "2026-10-07T04:00:00.000Z"
authors:
  - Songlin Jiang
  - Zhiyu Li
  - Terry Kong
  - Yu Yao
  - Youngeun Kwon
  - Bernard Nguyen
comments: null
tags:
  - reinforcement-learning
  - distributed-systems
  - model-synchronisation
  - compression
  - trillion-scale
  - paper
why_read: >-
  Understand how sparse synchronisation techniques can eliminate a major latency bottleneck in
  distributed RL systems.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Agentic reinforcement learning requires syncing policy weights across clusters before each rollout batch. Transferring a full 1-trillion-parameter checkpoint between AWS regions takes 87.5 minutes. NeMo-DCR exploits the fact that only about 1 per cent of weights change per training step, sending only deltas while maintaining bit-exact equivalence to a full checkpoint.

The system matters for practitioners running large-scale agentic RL. Cross-cluster policy synchronisation is a hard bottleneck when rollouts cannot start until weights arrive. A 12-40× speedup at realistic sparsity levels (3-5 per cent changes) makes the approach practical; a 1-trillion-parameter refit via relay tree completes in 150 seconds instead of 87.5 minutes.

NeMo-DCR uses fixed affine mappings to project weight changes into canonical coordinates, compressible XOR masks to preserve bit-exact values, and the serving runtime's native loader to place changes. Receivers apply changes in place and retry partial writes atomically, binding the policy to baseline after each delta.
