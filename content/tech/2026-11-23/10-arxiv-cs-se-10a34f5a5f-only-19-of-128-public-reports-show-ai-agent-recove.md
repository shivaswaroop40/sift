---
id: 10a34f5a5f
title: Only 19 of 128 public reports show AI agent recovery fully working in real use
original_title: >-
  Exercised, Rarely Recovered: What Public Reports Say About Recovery in 50 AI Agent Harnesses and
  Runtimes
url: https://arxiv.org/abs/2611.27090
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-11-23"
published_at: "2026-11-23T05:00:00.000Z"
authors:
  - Kaviru Hapuarachchi
comments: null
tags:
  - ai-agents
  - recovery
  - checkpointing
  - rollback
  - coding-agents
  - reliability
  - paper
why_read: >-
  The original grades each recovery mechanism by strength of public evidence, which helps you judge
  how far to trust checkpoint, undo and resume features in agent tooling.
rank: 10
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

A study graded 50 AI agent systems on eight recovery mechanisms: 12 persistent runtimes, 26 coding-agent harnesses and 12 research runtimes. The protocol was frozen before data collection, with two blind coding passes and re-verification against archived sources. Real-use reports of recovery exist for 11 of 12 runtimes and 25 of 26 harnesses.

Those reports are mostly unflattering. Of 128, 19 describe full recovery, 54 partial and 45 failed. Checkpoint and resume recovered once in 27 reports. Rollback recovered once in 15. Features that are widely used are not shown to work when needed.

Research runtimes show the reverse. Saga-style compensation and transactional rollback are evaluated on benchmarks, but none is reported in operation. No harness offers compensation of external effects, which the abstract calls the central research guarantee.
