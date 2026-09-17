---
id: 7b80682f14
title: Study of 37,623 agent pull requests finds vendor-specific quality gaps with human code
original_title: >-
  Not All Agents Are Equal: Code Quality and Post-Merge Maintenance Across Five Autonomous Coding
  Agents in the Wild
url: https://arxiv.org/abs/2609.17598
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-09-17"
published_at: "2026-09-17T04:00:00.000Z"
authors:
  - Obada Kraishan
comments: null
tags:
  - ai-agents
  - code-quality
  - github
  - empirical-study
  - security
  - developer-tooling
  - paper
why_read: >-
  You get large-scale numbers on how agent-authored pull requests compare with human ones on
  reverts, security smells and review latency across five vendors.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers analysed 37,623 provenance-labelled pull requests from five commercial coding agents (OpenAI Codex, Devin, GitHub Copilot, Cursor and Claude Code) plus a matched human baseline, drawn from 2,807 GitHub repositories between December 2024 and July 2025. They combined the AIDev dataset with 58,792 cached GitHub API responses to measure security smells, maintainability, post-merge churn, revert rates and human review behaviour.

Revert rates diverged sharply by vendor. Codex PRs were reverted about half as often as human PRs (6.1% versus 11.5%, odds ratio 0.50). Devin PRs fared worse than humans, at 14.5% with an odds ratio of 1.31. The authors frame this as vendor-specific variance rather than a uniform agent-versus-human gap.

Pooled across vendors, agent code was less likely than human code to contain a security smell (odds ratio 0.63), driven by fewer hardcoded credentials and fewer eval-style constructs. Copilot PRs drew the most human reviews and change requests, while Claude Code PRs waited longest for a first human review at a median of 12.6 hours.

The source is an abstract and the paper has not yet been peer reviewed. Sample size and provenance labelling are the authors' claim, and vendor mix over the eight-month period is not detailed. All pipeline code and figures are released for replication.
