---
id: 2e255669be
title: AI coding agents execute different actions than humans approved
original_title: >-
  Approval Laundering: Systematizing Approval--Execution Binding Failures in AI Coding-Agent
  Harnesses
url: https://arxiv.org/abs/2609.38983
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-10-01"
published_at: "2026-10-01T04:00:00.000Z"
authors:
  - Yang Wang
comments: null
tags:
  - ai-agents
  - credential-binding
  - approval-systems
  - claude-code
  - supply-chain
  - paper
why_read: Understand why approval alone cannot secure AI agent execution and what mitigations are possible.
rank: 9
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Modern AI coding harnesses like Claude Code and Cursor claim to execute only the actions humans approve. Researchers found this assumption fails systematically. They identified six failure modes where the harness silently substitutes a different action after approval, including scope, argument, temporal, tool, delegation, and semantic laundering.

This matters because these harnesses often have broad credential grants and system access. If approved action A becomes unapproved action A' after the human signs off, the security boundary collapses. Attackers or drift in agent behaviour can then operate outside stated policy.

An approval token system using keyed capabilities eliminated delegation and temporal laundering in testing. However, scope and argument laundering remain undetectable at the tool-invocation boundary because they leave all recorded fields unchanged. Defenders must bind credentials deeper in the execution stack.
