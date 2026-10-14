---
id: 9c67ef1ea9
title: Anthropic built custom source control after code changes jumped from 2,500 to 30,000 per day
original_title: Redesigning source control at Anthropic
url: https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/
source: Simon Willison
kind: blog
section: infrastructure
date: "2026-10-14"
published_at: "2026-10-13T23:00:06.000Z"
authors: []
comments: null
tags:
  - version-control
  - distributed-systems
  - source-control
  - infrastructure
  - anthropic
  - scaling
  - blog
why_read: Learn why a major AI lab abandoned Git and what constraints forced their custom design.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Anthropic built Scion, a centralized source control system to replace Git after their code change rate surged from 2,500 merges per day in May 2026 to over 30,000 by September. Their main branch history alone exceeded 100 GB, with daily CI checkouts reaching 25 million. Naive Git transfers would have required 600 petabytes daily.

For teams operating at Anthropic's scale, distributed version control becomes a bandwidth and storage problem. The system needed to handle compressed working copies over 25 GB and the traffic created by AI agent sandboxes, research jobs, and dense development workflows. A team of seven completed the Git migration in five months.

Scion trades offline support for online efficiency, a deliberate choice since their largest user, Claude, operates continuously online. The new code review system, Antique, also uses adversarial review where models find flaws, though engineers had to prevent over-engineering driven by AI concerns.
