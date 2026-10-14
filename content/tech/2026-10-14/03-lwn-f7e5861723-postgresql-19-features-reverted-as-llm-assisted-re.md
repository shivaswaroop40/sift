---
id: f7e5861723
title: PostgreSQL 19 features reverted as LLM-assisted review surfaces defects faster
original_title: "Eisentraut: The reverts will continue until morale improves"
url: https://lwn.net/Articles/1100182/
source: LWN
kind: news
section: systems
date: "2026-10-14"
published_at: "2026-10-13T13:21:34.000Z"
authors:
  - jzb
comments: null
tags:
  - postgresql
  - code-review
  - quality-assurance
  - release-management
  - llm-tooling
  - news
why_read: Understand why a major database delayed features and what tooling changes forced the decision.
rank: 3
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

PostgreSQL core removed an unusually high number of features from version 19 during beta. Peter Eisentraut attributes this to LLM-assisted code review and fuzzing finding defects in old code much faster than previous development cycles allowed, creating a backlog of fixes that could not be completed in time.

For database engineers, this reflects a genuine shift in how defects surface during release cycles. Code written years ago now fails review against higher quality standards. The discovery rate now outpaces the repair rate during beta, forcing maintainers to defer features rather than ship with known issues.

Eisentraut notes this is not a permanent problem. As LLM tooling stabilises, future features will be written and tested against current standards from the start, reducing the revert rate in subsequent releases.
