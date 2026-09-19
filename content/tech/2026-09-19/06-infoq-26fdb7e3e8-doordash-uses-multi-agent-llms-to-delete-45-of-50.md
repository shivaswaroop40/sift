---
id: 26fdb7e3e8
title: DoorDash uses multi-agent LLMs to delete 45 of 50 stale feature flags
original_title: DoorDash Uses Multi Agent LLMs to Clean up 60,000 Feature Flags
url: >-
  https://www.infoq.com/news/2026/09/doordash-feature-flag-cleanup/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-09-19"
published_at: "2026-09-18T13:50:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - llm-agents
  - feature-flags
  - developer-experience
  - mcp
  - automation
  - door-dash
  - news
why_read: >-
  You get a concrete breakdown of an LLM agent system running in production at scale, with real
  numbers on cost, time, and failure modes.
rank: 6
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

DoorDash built a two-phase multi-agent LLM workflow for cleaning up stale feature flags across its codebase. The system uses an orchestrator running Claude Sonnet that pulls Jira tickets, queries the experimentation platform over MCP, and produces a report for engineer review. Cleanup agents running Claude Opus then work in isolated Git worktrees, up to four in parallel per repository, with a one-hour timeout and Gradle run without its daemon to avoid state sharing.

In an evaluation of 50 stale flags drawn from a population of more than 1,000, the system produced usable pull requests for 45, averaging 13.8 minutes and $4.79 per cleanup against DoorDash's estimate of one to two hours for manual work. Simple flags had a 100% single-pass cleanup rate, medium flags 94%, and complex flags 85%. Thirty-one pull requests merged on the first pass, 14 needed revisions, and five required engineer intervention on deep call chains.

The work matters because DoorDash manages more than 60,000 feature flags across roughly 623 repositories and creates around 2,300 new flags each month. A simple boolean flag can span five to 20 files because flag definition, client call, and business logic are split across dependency-injected wrappers. DoorDash rejected Uber's open-source Piranha tool because its AST-based transforms do not cover DoorDash's semantic dependency injection patterns.

DoorDash reported no bugs or regressions in the 50 evaluated changes and plans to add confidence scoring for low-risk cleanups and a post-cleanup code quality pass. The work was accepted for the ICSME 2026 industry track.
