---
id: ddd56c8e0b
title: Token spend at JetBrains tracks who uses agents, not how much they ship
original_title: The AI Era's Lines of Code? A Case Study on What an Engineer's Token Spend Measures
url: https://arxiv.org/abs/2611.13396
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-11"
published_at: "2026-11-11T05:00:00.000Z"
authors:
  - Shyam Agarwal
  - Olga Lvova
  - Agnia Sergeyuk
  - Anastasiia Serova
  - Timofey Bryksin
  - Thomas Zimmermann
comments: null
tags:
  - ai-agents
  - developer-productivity
  - metrics
  - token-spend
  - jetbrains
  - engineering-management
  - paper
why_read: >-
  You get the actual numbers on spread and correlation to use when someone proposes token
  leaderboards or spend targets as a productivity measure.
rank: 1
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Researchers linked five weeks of coding-agent token usage to commits for 404 JetBrains engineers, and analysed a survey of 412 employees. Spend varied mostly between engineers, and the heaviest spenders stayed largely the same across the five weeks. Among weeks with similar commit counts, the 90th percentile of spend was 39 to 240 times the 10th.

Within one engineer, doubling spend was associated with about 10% more commits. Available work metrics explained 38% of the variation in spend between engineers. They explained only 13% of the week-to-week variation within an engineer. Most of what drives spend is therefore not captured by output data.

In the survey, technical respondents reported using agents for tasks beyond coding in nearly nine of ten agent evaluations. Examples were analysis, research and planning. Commits would miss that work entirely, which partly explains the weak link. The authors conclude that token spend measures usage, not outcome or value.

The authors recommend using token spend at most for resource accounting. They suggest judging agent-assisted work with evidence about tasks and outcomes. The data comes from one company over five weeks, so the findings may not transfer elsewhere.
