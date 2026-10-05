---
id: 75b36000b9
title: Multi-agent LLMs consume 6x more energy with modest accuracy gains in code tasks
original_title: "Engineering Sustainable Agents: A Systematic Comparison of Agentic LLMs for Developer Workflows"
url: https://arxiv.org/abs/2610.03010
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Merve Astekin
  - Yan Naing Tun
  - Arda Goknil
  - Erik Johannes Husom
  - Lwin Khin Shar
  - Hasan S\"ozer
comments: null
tags:
  - llm
  - agents
  - energy
  - code-generation
  - efficiency
  - paper
why_read: >-
  Learn whether multi-agent LLM systems justify their computational cost for common development
  tasks.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers compared agentic and non-agentic LLM configurations across five software engineering tasks using six open-weight models on three hardware platforms. Multi-agent systems consumed 6.36 times more energy and ran 6.07 times longer than single-query baselines, with worst-case slowdowns reaching 160 times for particular task-hardware pairs.

For most tasks, simpler configurations dominated the efficiency frontier. Lightweight and single-agent setups accounted for 59 of 66 Pareto-optimal configurations. Accuracy improvements from additional agents were limited and task-specific, improving only vulnerability detection substantially.

Model and prompt choice produced different effects across tasks rather than delivering consistent wins. The findings suggest practitioners should select agentic complexity deliberately rather than default to multi-agent workflows.
