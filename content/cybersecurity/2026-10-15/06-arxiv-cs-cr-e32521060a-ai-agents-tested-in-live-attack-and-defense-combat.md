---
id: e32521060a
title: AI agents tested in live attack-and-defense combat benchmark
original_title: "CyberArena: Benchmarking AI Agents in Live Symmetric Attack-and-Defense Combat"
url: https://arxiv.org/abs/2610.19005
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-10-15"
published_at: "2026-10-15T04:00:00.000Z"
authors:
  - Bangya Liu
  - Jianhong Tu
  - Yueyang Pan
  - Hanhong Zhao
  - Zhe Ye
  - Hongwei Li
comments: null
tags:
  - ai-agents
  - benchmark
  - attack-defense
  - llm
  - adversarial
  - paper
why_read: >-
  Understand how AI agents perform in realistic adversarial conditions where both sides adapt in
  real time.
rank: 6
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

CyberArena is a benchmark where pairs of AI agents compete in sandboxed environments, each acting simultaneously as attacker and defender against changing services over multiple rounds. The system uses an automated pipeline to generate and validate new scenarios, keeping the benchmark fresh as agents improve.

Static benchmarks miss how real defenders and attackers adapt to each other under time pressure. CyberArena tests an agent's speed and precision at discovering vulnerabilities, exploiting them, and patching gaps as conditions shift. This reveals capabilities that single-agent tests cannot.

Evaluation of 12 frontier LLM agents across 466 matches showed clear separation in offensive, defensive, and domain-specific capability. Some agents planted backdoors for later rounds or wrote custom packet sniffers to monitor opponents, while defenders sometimes patched one hole and missed another.
