---
id: 4671df245c
title: >-
  Anthropic says risk-tiered, AI-assisted review let Claude Code merge twice as many PRs with fewer
  reverts
original_title: Anthropic Outlines Its AI-Powered Code Review Process for Claude Code
url: >-
  https://www.infoq.com/news/2026/11/claude-code-review/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-15"
published_at: "2026-11-15T09:55:00.000Z"
authors:
  - Robert Krzaczyński
comments: null
tags:
  - code-review
  - ai-agents
  - claude-code
  - anthropic
  - developer-workflow
  - quality-assurance
  - news
why_read: >-
  The original is a short read with the specific risk tiers, round caps and before-and-after figures
  if you are designing review policy for agent-written code.
rank: 4
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Anthropic has described how the Claude Code team reviews code as AI agents write more of it. Between June and September, merged pull requests to the repository more than doubled, while the share of changes needing a revert fell by over 40%. The figures are Anthropic's own and come with no baseline detail.

Verification moves earlier. Before a pull request opens, Claude runs tests, builds and linters, and a separate agent reviews the diff in a fresh context. Then several Claude reviewers investigate findings independently, another group verifies them, and a security review can block a merge.

Human approval scales with risk. Documentation and flagged internal features may need none, medium-risk changes need one person, and high-risk changes need two. CI workflow changes always get human review. Review rounds are capped at three, and later passes look only at new changes.

Anthropic reports that pull requests passing after one review and fix round rose from 65% to 78%, and those needing five or more rounds fell from 8.9% to 1.5%. Reverts and incidents feed an evaluation dataset for the reviewers. Accountability stays with the person directing the agent.
