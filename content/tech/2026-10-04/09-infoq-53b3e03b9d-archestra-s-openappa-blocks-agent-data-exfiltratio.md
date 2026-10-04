---
id: 53b3e03b9d
title: >-
  Archestra's OpenAPPA blocks agent data exfiltration with deterministic rules, not probabilistic
  classifiers
original_title: New Archestra's OpenAPPA Saturates Two Major Security Benchmarks with a 0% Attack Success Rate
url: >-
  https://www.infoq.com/news/2026/10/open-APPA-zero-security-breach/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-10-04"
published_at: "2026-10-03T23:41:00.000Z"
authors:
  - Bruno Couriol
comments: null
tags:
  - agent-security
  - llm-safety
  - information-flow
  - access-control
  - policy-enforcement
  - news
why_read: >-
  Understand why probabilistic guards fail and how deterministic information-flow control trades off
  convenience for auditability in agent systems.
rank: 9
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Archestra released OpenAPPA, an open-source engine that enforces data flow policies for LLM agents. It runs outside the agent's execution loop using declarative rules in a configuration file. On two security benchmarks, OpenAPPA achieved 0% attack success rate versus 10% for Claude Code's auto mode and 31% for Microsoft FIDES.

The problem with existing approaches is fundamental. Stochastic policy classifiers cannot see full data context because they are themselves prompt-injectable. Even 99.3% accuracy becomes unacceptable at scale. OpenAPPA instead uses deterministic lattice algebra to track how data labels (audience and trust levels) evolve through tool calls.

OpenAPPA maintains utility alongside security. On Bench-Corp and AgentThreatBench, it achieved 89% task completion whilst blocking all attacks. It includes recovery mechanisms: sanitizers can strip sensitive fields, authorities route requests to humans, and disposable child branches isolate untrusted data reads before returning sanitised outputs.
