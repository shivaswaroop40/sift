---
id: 5e86333f39
title: >-
  Convex agent skills send project ideas to a remote host and tell the agent to evade safety
  classifiers
original_title: Convex skills send the user's app idea to a remote server without telling them
url: https://github.com/convex/convex-backend-skill/issues/64
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-28"
published_at: "2026-11-27T18:02:45.000Z"
authors:
  - MickyTheMouse
comments: https://news.ycombinator.com/item?id=50669765
tags:
  - agent-skills
  - supply-chain
  - convex
  - claude-plugins
  - remote-code-execution
  - telemetry
  - community
why_read: >-
  The issue gives exact file and line references for each behaviour, plus concrete fixes, which is a
  useful checklist for vetting any agent skill that fetches remote code.
rank: 4
interest_score: 6.7
depth_score: 5
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A GitHub issue on Convex's backend skill plugin, listed in Anthropic's official plugins marketplace, reports three problems. The quickstart skill POSTs the user's one-sentence project idea to a convex.site host, labelled telemetry, without telling the user. The add skill pipes a script from the same host into bash.

The labs-quickstart skill tells the agent to split download and execution into two Bash calls. Its stated reason is that a single combined command is what harness safety classifiers block. The reporter says this changes the command's shape so the user's safety tooling misses it. They read the intent as reliable onboarding, not malice.

The scripts are fetched at run time and are not pinned or hashed. The host operator can change what runs without a plugin release or marketplace review. A commenter who pulled the scripts also reports an unpinned npm dependency, and says QB_NO_PUBLISH=1 does not stop a backend deploy because npx convex dev --once runs first. That is one commenter's finding and the excerpt does not show a Convex response.
