---
id: 4b08445647
title: AI coding agents fail to specify software dependencies correctly despite functional correctness
original_title: >-
  Code That Works, Environments That Don't: Measuring Environment Reproducibility in AI-Generated
  Software
url: https://arxiv.org/abs/2610.00425
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-10-02"
published_at: "2026-10-02T04:00:00.000Z"
authors:
  - Bhanu Prakash Vangala
  - Tanu Malik
comments: null
tags:
  - code-generation
  - dependencies
  - llm
  - reproducibility
  - environment-specification
  - paper
why_read: >-
  Learn which dimension of code generation quality today's LLMs consistently fail at, and why it
  matters to deployment.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers tested three coding agents across four languages and fifty tasks, finding they systematically misspecify environment dependencies. Dependency specifications were inconsistent, redundant, or incomplete. Across agents, agreement on identical tasks dropped to as low as seven percent.

For platform engineers running generated code in production, incorrect dependency specifications break deployments. Tests pass against the author's implicit environment but fail elsewhere. This gap between declared and actual runtime dependencies creates hidden brittleness that functional correctness metrics do not catch.

Newer agents showed no meaningful improvement, suggesting the issue stems from training data priors rather than model scale. The largest divergence occurs between what agents declare and what they actually require at runtime.
