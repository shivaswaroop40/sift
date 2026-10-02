---
id: 324d756502
title: Smaller reviewers can catch flawed code patches if given structured evidence of what executed
original_title: "Groundability, Not Scale Alone: When Weak Reviewers Can Audit Strong Coding Agents"
url: https://arxiv.org/abs/2610.01023
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-10-02"
published_at: "2026-10-02T04:00:00.000Z"
authors:
  - Junyu Guo
  - Shangding Gu
  - Ming Jin
  - Javad Lavaei
comments: null
tags:
  - code-review
  - agents
  - testing
  - verification
  - paper
why_read: >-
  Learn when weak model reviewers can effectively audit strong agents, and what evidence matters
  most.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Coding agents produce patches that appear correct but omit required behaviour. Long execution traces and confident summaries hide these gaps, making review hard. Researchers tested whether weaker reviewers could spot failures using structured execution evidence instead of raw traces.

The study examined 411 traces from three agents. Providing official test results as structured evidence let five of six smaller reviewers improve both their defect detection and reduce false rejections on held-out test sets. Two reviewers achieved perfect classification on validation data.

Without official tests—unavailable in live deployments—a cascading approach using generated tests achieved 76 to 80 per cent defect catch but with 66 to 67 per cent false rejection rate. The main constraint is producing reliable checks without access to official test suites.

Model size alone does not predict review quality. The critical factor is whether reviewers have access to decisive, structured evidence of execution rather than just trace summaries.
