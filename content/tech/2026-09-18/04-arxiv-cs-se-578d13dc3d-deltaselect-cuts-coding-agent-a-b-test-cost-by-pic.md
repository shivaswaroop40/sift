---
id: 578d13dc3d
title: DeltaSelect cuts coding-agent A/B test cost by picking tasks that track full benchmarks
original_title: "DeltaSelect: Affordable A/B Testing for Coding Agents"
url: https://arxiv.org/abs/2609.19607
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-09-18"
published_at: "2026-09-18T04:00:00.000Z"
authors:
  - Nicholas J. Conn
comments: null
tags:
  - ai
  - benchmarking
  - evaluation
  - llm
  - cost
  - methodology
  - paper
why_read: >-
  You will see a concrete method for cutting A/B test costs on coding-agent benchmarks while keeping
  results correlated with full runs.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A new method called DeltaSelect picks a subset of benchmark tasks whose single-run scores correlate with full-benchmark performance, aiming to make A/B testing of coding agents cheap enough for development loops. The authors found that only 19.5% of DeepSWE tasks (22 of 113) had a fifth-percentile Pearson correlation of at least 0.50 with full runs, showing most tasks are noisy when sampled once.

For practitioners iterating on prompts, skills, or agent configs, the paper argues that full benchmark suites are too expensive and too slow for day-to-day decisions, and that the harness in a benchmark often differs from the one in production. DeltaSelect selects a fixed task set within a stated dollar budget and uses linear regression to map fractional verifier outputs to a common score.

The method is explicitly for repeated baseline-versus-candidate comparisons, not for ranking models. A case study on a gpt-5.6-luna low-reasoning setup across 13 evaluations recorded a total cost of USD 27.86, with the adopted version costing USD 1.75 per run against USD 4.18 for the initial version, a 58.1% reduction at p=0.008.
