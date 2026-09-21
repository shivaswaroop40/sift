---
id: 42d7d1379d
title: LLM agent benchmarks can be cut to 38.5% of full size with 1pp error
original_title: "Efficient Benchmarking in Production: A Study of an Evolving LLM Agent"
url: https://arxiv.org/abs/2609.21267
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-09-21"
published_at: "2026-09-21T04:00:00.000Z"
authors:
  - Yining She
  - Lei Lin
comments: null
tags:
  - llm
  - evaluation
  - benchmarking
  - adaptive-testing
  - production
  - agent
  - paper
why_read: >-
  You get a concrete method and trade-off for cutting recurring LLM agent eval costs in production,
  drawn from a real deployment.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Researchers at a company running an analytics agent used by tens of thousands of monthly users studied how to rerun expensive LLM agent benchmarks as the agent evolves. They compared four approaches across 574 historical production runs, split into calibration and held-out periods.

Multidimensional 2PL adaptive testing performed best, answering 200 of 520 questions (38.5% of the full run) and producing 1.03 percentage points of mean absolute error against the full benchmark score. Random sampling, historical caching and fixed subsets were also evaluated.

The team ultimately deployed difficulty-stratified fixed subsets instead, citing operational simplicity. These subsets transferred to five other agent families without recalibration and stayed stable across calibration windows as short as one day, which matters for teams running continuous evaluation in production.

The paper is a single deployment study, not a general benchmark. The 1pp MAE figure is an average across that company's specific agent and question mix.
