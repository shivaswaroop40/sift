---
id: 7261e1135d
title: Ajar measures unused privilege left open by agent defenses
original_title: "Ajar: Measuring Open Privilege in Agent Defenses"
url: https://arxiv.org/abs/2609.26900
source: arXiv cs.SE
kind: paper
section: security
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Reshabh K Sharma
  - Linxi Jiang
  - Shuo Chen
  - Zhiqiang Lin
comments: null
tags:
  - ai-agents
  - security
  - benchmarks
  - prompt-injection
  - tool-use
  - paper
why_read: >-
  You will see how a third metric exposes privilege a defense leaves open that attack success and
  utility scores miss.
rank: 11
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers introduce Ajar, a tool that measures the "open privilege" left by defenses that sit between a language model agent and its tools. It attaches to existing benchmarks such as AgentDojo, reusing their tasks and tool schemas, then presents candidate tool calls that a benign task does not need. Any call the defense allows counts as privilege left open.

The work argues that current agent-security benchmarks judge defenses only on attack success and benign utility, so a defense can score well on both while still permitting transfers, deletions or broad reads that no task required. Ajar adds open privilege as a third axis for evaluation.

Evaluated on five defenses, Ajar finds they leave widely different amounts of privilege open. Two defenses leak by similar amounts yet differ widely in benign task completion, and one buys part of its tightness by refusing calls its tasks were entitled to make. The authors note this signal cannot be derived from attack success or utility alone.
