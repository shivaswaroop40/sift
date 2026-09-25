---
id: 5c180febb4
title: Analysis of a 21,000-line AI-authored Python codebase finds 14.3% of code events contain errors
original_title: "Between the Commits: Process, Error, and Claim Reliability in a Wholly AI-Authored Codebase"
url: https://arxiv.org/abs/2609.29744
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-09-25"
published_at: "2026-09-25T04:00:00.000Z"
authors:
  - Douglas Leith
comments: null
tags:
  - ai-coding
  - agents
  - code-quality
  - evaluation
  - software-engineering
  - paper
why_read: >-
  You will see measured error rates and a reproducible dataset for a fully agent-built codebase,
  useful for sizing risk in unattended AI coding.
rank: 3
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers released the full commit history of a 21,000-line Python tool written end-to-end by Claude, with no human-written code or tests, along with two provenance tracing tools and three taxonomies covering instruction intent, commit provenance, and response reliability.

Applying the tools to the dataset, they found user prompts to coding agent CLIs are qualitatively different from IDE chat, leaning more toward comprehension, planning, and consultation, and that development was mostly proactive rather than reactive.

14.3% of AI code-generation events contained a real error later caught by the AI's own test suite, and roughly 1 in 4 to 5 interactive responses from the model contained one or more factual errors.

The work gives a concrete look at failure rates in unattended agent runs, though it reflects a single project and model, so the numbers are illustrative rather than benchmark figures.
