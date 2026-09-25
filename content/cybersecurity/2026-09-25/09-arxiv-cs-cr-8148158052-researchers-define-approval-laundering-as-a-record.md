---
id: "8148158052"
title: Researchers define 'approval laundering' as a record-coverage gap in coding agents
original_title: "Agent Approval Laundering: Transitive Effects Beyond the Approved Invocation"
url: https://arxiv.org/abs/2609.28586
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-09-25"
published_at: "2026-09-25T04:00:00.000Z"
authors:
  - Jinqian Zhang (Institute of Information Engineering
  - Chinese Academy of Sciences
  - School of Cyber Security
  - University of Chinese Academy of Sciences)
  - Haojun Xia (Institute of Information Engineering
  - Chinese Academy of Sciences
comments: null
tags:
  - ai-agents
  - approval-systems
  - supply-chain
  - mcp
  - benchmark
  - formal-analysis
  - paper
why_read: >-
  You will get a formal model of approval gaps in agent tooling, measured residuals on real traces,
  and a concrete integration that pre-commits effect predictions before authorisation.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 9
utility_score: 7
scored: true
model: minimax-m3
---

A new paper analyses approval interfaces for coding agents and identifies approval laundering: when a human approves a single command or tool call, but the resulting workflow triggers effects, such as package lifecycle hooks, file writes, or MCP network calls, that the approval record does not name.

The authors formalise closure-bound approval over six effect classes and prove an information limit. Identical policy-visible fields can demand different effect-specific decisions, so a record-only approval policy cannot guarantee both correct coverage and effect specificity.

On 111 fixed approval-trace pairs, residual records drop from 40 with explicit fields to 17 with command semantics and 13 with decision-time metadata. A Claude Code PreToolUse integration carries a frozen, source-backed prediction of transitive effects through the permission path without enabling auto-approval.
