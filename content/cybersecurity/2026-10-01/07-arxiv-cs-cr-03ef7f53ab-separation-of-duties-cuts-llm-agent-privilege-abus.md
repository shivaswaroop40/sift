---
id: 03ef7f53ab
title: Separation of duties cuts LLM agent privilege abuse from 98% to 8%
original_title: >-
  Separation of Duties for Privileged LLM Agents: A Governed Execution Architecture with Measured
  Security-Utility Trade-offs
url: https://arxiv.org/abs/2609.38224
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-10-01"
published_at: "2026-10-01T04:00:00.000Z"
authors:
  - Qishuai Jing
comments: null
tags:
  - llm-agents
  - privilege-escalation
  - separation-of-duties
  - access-control
  - sandboxing
  - paper
why_read: >-
  Learn how to structurally isolate privilege escalation in agent systems and measure the
  security-utility cost.
rank: 7
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers tested an architecture that interposes four roles—planner, policy gate, executor, auditor—between language model agents and the operating system. Actions arrive as structured intents rather than shell commands, and approval is bound to exact bytecode. On a 313-case benchmark, attack success fell from 98.3% under direct execution to 7.7% when deployed.

The finding matters because LLM agents now execute real commands and modify files. Defence has focused on inputs; this work shows the critical gap is the path from candidate action to side effect. Operating system sandboxing accounted for most of the final reduction, from 30.8% to 7.7%.

The false-denial rate of 11.1% signals a real trade-off: blocking legitimate requests alongside malicious ones. The authors found four implementation defects through testing, not design review, indicating the approach is sound but execution remains difficult.
