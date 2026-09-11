---
id: 26e5d35919
title: Silent failures in LLM code repair pass tests but keep vulnerabilities
original_title: "When Passing Tests Hides Vulnerabilities: An Empirical Study of Silent Failures in Agentic Systems"
url: https://arxiv.org/abs/2609.10548
source: arXiv cs.SE
kind: paper
section: security
date: "2026-09-11"
published_at: "2026-09-11T04:00:00.000Z"
authors:
  - Wenji Bai
  - Muhammad Waseem
  - Zeeshan Rasheed
  - Jaakko Peltonen
  - Pekka Abrahamsson
comments: null
tags:
  - llm-agents
  - code-repair
  - security
  - silent-failures
  - empirical-study
  - vulnerabilities
  - paper
why_read: >-
  Learn how LLM-based code repair can pass tests while leaving or introducing vulnerabilities, and
  what categories to check.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: deepseek-v4-flash
---

A study of 1,030 execution traces from seven agent frameworks using GPT-4o-mini found 170 cases where patches passed tests but still had security vulnerabilities. The traces came from SecurityEval and CVEfixes. The authors call these silent failures and confirmed them through three rounds of qualitative coding and manual verification.

For engineers, this means a green test suite is not evidence of secure repair. The failures split into three categories: omission of required security controls at 48.2%, introduction of new vulnerabilities at 30.6%, and inadequate defenses at 21.2%. Ten finer-grained failure codes were defined under these categories.

The paper reports that current test-passing evaluation and LLM-based reviewer roles did not expose or intercept these failures. Similar insecure solutions appeared across different frameworks, suggesting shared model, prompt, or task-level influences. Single-agent and multi-agent systems showed different failure profiles.
