---
id: 85a40cc39d
title: Coding agent benchmarks miss real engineer workflows and task patterns
original_title: Coding-Agent Benchmarks Should Match Their Users' Task Flows
url: https://arxiv.org/abs/2610.09633
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-10-08"
published_at: "2026-10-08T04:00:00.000Z"
authors:
  - Igor Slinko
  - Yaroslav Golubev
  - Sergey Titov
comments: null
tags:
  - coding-agents
  - benchmarks
  - task-flows
  - evaluation
  - software-engineering
  - paper
why_read: >-
  Learn why your agent benchmarks may not predict real-world performance and what dimension you're
  missing.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers studied 4,782 real software engineer sessions in JetBrains IDEs and found that tasks span diverse activities—questions, planning, review, refactoring, execution—with frequent switching between types. Existing benchmarks derived from issues do not reflect these interaction patterns.

Current benchmarks treat tasks as single isolated problems. Real engineers work through multiple task types in sequence within a session. This matters because the benchmarks cannot predict how agents will perform in actual development environments where context and task patterns differ.

A test on 700 SWE-Bench Pro tasks showed that solving problems sequentially over multiple steps doubled agent cost with no consistent improvement in success rate. The interaction protocol itself significantly affects evaluation outcomes and should not be ignored when comparing agent performance.
