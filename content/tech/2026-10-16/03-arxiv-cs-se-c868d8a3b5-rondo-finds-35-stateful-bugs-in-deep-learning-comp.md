---
id: c868d8a3b5
title: Rondo finds 35 stateful bugs in deep learning compilers by testing invocation sequences
original_title: Stateful Testing for Deep Learning Compilers
url: https://arxiv.org/abs/2610.22003
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-10-16"
published_at: "2026-10-16T04:00:00.000Z"
authors:
  - Jiatao Ge
  - Ruixiang Qian
  - Yibo Hu
  - Yanzhou Mu
  - Yinglong Zou
  - Jiawei Liu
comments: null
tags:
  - testing
  - deep-learning
  - compilers
  - stateful-bugs
  - pytorch
  - tensorflow
  - paper
why_read: >-
  Understand how compiler caching creates invisible state-dependent failures in production
  workloads.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Deep learning compilers cache state across invocations. A defect in PyTorch, JAX or TensorFlow may not appear when tested in isolation because retained state from a prior run alters behaviour. Analysis of 26 public issues shows stateful bugs require sequences that establish state before exposing failure.

Testing one model in one invocation cannot catch these bugs. The compiler state persists and corrupts later runs. Practitioners shipping models need to understand that a model that passes single-invocation tests may fail in production when the same compiler instance handles multiple requests.

Rondo mutates invocation sequences and samples those with rare compiler behaviours. It uses a three-way oracle: uncompiled execution, compiled execution with state reset, and compiled execution with state retained. The tool found 117 bugs across four frameworks, of which 35 were stateful; developers confirmed 16 stateful bugs and fixed 11.
