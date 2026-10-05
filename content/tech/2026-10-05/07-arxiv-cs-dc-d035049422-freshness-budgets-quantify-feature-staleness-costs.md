---
id: d035049422
title: Freshness budgets quantify feature staleness costs in online machine learning inference
original_title: Feature Freshness Budgets for Real-Time ML Inference Under Stream Lag
url: https://arxiv.org/abs/2610.02259
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Amit Rajula
comments: null
tags:
  - feature-stores
  - ml-infrastructure
  - stream-lag
  - freshness
  - inference
  - kafka
  - paper
why_read: Understand how to formally bound and measure feature staleness in streaming inference pipelines.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Online feature stores materialise features from event streams into low-latency storage for model serving, introducing a freshness gap between event occurrence and visibility. The paper models this gap as a bounded, cost-quantified quantity by defining per-feature freshness budgets as the difference between the decision window and imposed staleness, then proves staleness bounds and derives a threshold below which features cannot be served within budget.

This matters because freshness gaps are documented causes of training-serving skew but lack formal treatment. Engineers building real-time inference systems can now quantify whether their feature pipeline meets latency requirements before deployment.

The work validates findings on Apache Kafka, Redis, and PostgreSQL, revealing that simulation-to-infrastructure gaps stem primarily from phase-locking between request clocks and recomputation cadence rather than latency alone. Randomising phase alignment reduces prediction error to within 0.018 mean absolute error in drop rate.
