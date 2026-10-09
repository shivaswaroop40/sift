---
id: 98975618a5
title: Coding assistants struggle with non-expert users in realistic long-horizon tasks
original_title: >-
  SWE-Journey: Towards More Realistic Evaluation of Coding Assistants through Long-Horizon,
  Multi-Turn Interaction
url: https://arxiv.org/abs/2610.11559
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-10-09"
published_at: "2026-10-09T04:00:00.000Z"
authors:
  - Hexuan Deng
  - Yue Wang
  - Wenyu Jiang
  - Cheng Yang
  - Haolin Yang
  - Zhaohua Zhang
comments: null
tags:
  - benchmark
  - coding-assistant
  - evaluation
  - llm-agents
  - long-horizon
  - paper
why_read: >-
  See how existing coding assistant benchmarks fail to measure real-world performance across user
  skill levels.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers built SWE-Journey, a benchmark that tests coding assistants through multi-turn interactions mirroring real development work. They simulated four user personas based on real interaction data. Claude and Codex pass over 75% of tests with software architects but fewer than 25% with non-coders.

Current benchmarks test isolated coding problems, not the sustained, back-and-forth work that developers actually do. Long-horizon tasks require assistants to clarify requirements and adapt code through many turns. This gap means existing evaluations overstate what these tools can deliver in practice.

The researchers identify three failure modes: asking right (clarifying requirements), finding right (locating where to implement), and fixing right (making changes that work). The performance cliff between expert and non-expert users suggests assistants rely on implicit domain knowledge to navigate ambiguous requests.
