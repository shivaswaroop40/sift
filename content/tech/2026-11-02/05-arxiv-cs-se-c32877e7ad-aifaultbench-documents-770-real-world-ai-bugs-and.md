---
id: c32877e7ad
title: AIFaultBench documents 770 real-world AI bugs and reproduces 652 of them
original_title: "AIFaultBench: A Reproducible Benchmark of Real-World Faults in AI Software Systems"
url: https://arxiv.org/abs/2610.41094
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Mehil B Shah
  - Mohammad Masudur Rahman
  - Foutse Khomh
comments: null
tags:
  - benchmark
  - debugging
  - ai-systems
  - reproducibility
  - fault-reproduction
  - paper
why_read: >-
  The original details how each bug record is structured, how reproduction was attempted, and how
  the corpus breaks down across the six AI system classes.
rank: 5
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

The paper presents AIFaultBench, a benchmark of 770 real-world bugs drawn from 105 AI-based software repositories across 76 organizations. It covers six classes of AI system: machine learning, deep learning, reinforcement learning, LLM-based systems, agentic AI, and AI tooling and infrastructure. Each record links the original report and affected codebase to structured metadata, environment setup scripts, a reproduction trigger, and investigation evidence. The authors report reproducing 652 bugs (84.7%) under the recorded execution conditions.

Failures in AI systems involve interactions among code, models, data, dependencies, hardware, and execution environments, which makes them hard to debug. The authors argue existing benchmarks cover only specific classes of AI system and often lack documented execution conditions, weakening claims of fault realism. A shared corpus with reproduction evidence gives debugging tool authors a grounded way to evaluate against real failures, and gives practitioners replayable cases for investigation.

Not every case reproduced. The remaining 118 attempts, 15.3% of the corpus, did not reproduce under the recorded conditions, and the authors documented their outcomes rather than excluding them. The full 770 therefore mixes reproduced and unreproduced cases, which matters for anyone scoring a debugging tool across the whole set.
