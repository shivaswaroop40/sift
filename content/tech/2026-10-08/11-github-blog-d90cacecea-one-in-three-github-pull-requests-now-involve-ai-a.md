---
id: d90cacecea
title: One in three GitHub pull requests now involve AI agents, raising secret leak risks
original_title: Secret protection must scale with software
url: https://github.blog/ai-and-ml/github-copilot/secret-protection-must-scale-with-software/
source: GitHub Blog
kind: blog
section: infrastructure
date: "2026-10-08"
published_at: "2026-10-07T17:45:34.000Z"
authors:
  - Erin Havens
comments: null
tags:
  - ai-agents
  - secrets-management
  - code-review
  - github
  - security
  - blog
why_read: >-
  Understand how AI-driven code velocity is reshaping secret management practices you need to
  enforce.
rank: 11
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

GitHub reports that one in three pull requests now involves an AI agent, up from fewer than one in ten a year ago. At this pace, most code pushed to GitHub could be AI-written within two years, much of it never fully reviewed by humans.

For platform engineers running systems at scale, this matters because unreviewed AI-generated code increases the surface area for credential leaks, API keys, and database passwords entering repositories. The velocity of code creation now outpaces human review cycles.

Secret detection and prevention must evolve faster to match this acceleration. Existing mechanisms designed for human-paced code review become inadequate when the volume of code doubles or triples.
