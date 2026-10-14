---
id: 52a8128690
title: Anthropic builds custom version control to handle 30,000 daily code merges from Claude
original_title: Anthropic reinvents source control as Claude floods the world with code
url: >-
  https://www.theregister.com/devops/2026/10/13/anthropic-reinvents-source-control-as-claude-floods-the-world-with-code/5302943
source: The Register
kind: news
section: infrastructure
date: "2026-10-14"
published_at: "2026-10-13T22:37:04.000Z"
authors: []
comments: null
tags:
  - source-control
  - monorepo
  - ai-infrastructure
  - claude
  - version-control
  - scaling
  - news
why_read: >-
  Learn what infrastructure breaks when AI agents generate code at scale and how one company solved
  it.
rank: 7
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Anthropic deployed Scion, a centralized monorepo system, after code merges jumped from 2,500 per day in May to over 30,000 by September. Claude helped design the system, which uses changesets and server-side APIs instead of Git's distributed model. The company expects the rate to continue rising.

For teams running AI code generation at scale, Git's distributed architecture becomes a bottleneck. Anthropic's 100 GB main branch generates 600 petabytes of daily traffic under naive checkout patterns. Centralized systems with server-side queries suit agent workloads better than requiring local repository copies.

Anthropic says its engineers now spend time rejecting Claude's code rather than writing it, catching violations of system constraints. The company has no plans to open source Scion but predicts other organizations will face similar scaling problems soon.
