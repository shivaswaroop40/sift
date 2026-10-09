---
id: 85ee2867aa
title: Coding agents silently swap similar skills, losing safety constraints
original_title: "One Skill Too Many: How Co-Installed Skills Conflict in Coding Agents"
url: https://arxiv.org/abs/2610.11647
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-10-09"
published_at: "2026-10-09T04:00:00.000Z"
authors:
  - Chaoliang Yan
  - Zihao Xu
  - Yuekang Li
  - Shangzhi Xu
  - Yi Liu
  - Gelei Deng
comments: null
tags:
  - agents
  - skills
  - safety
  - benchmarks
  - ai-systems
  - paper
why_read: See how agent skill conflicts silently undermine safety and what systems need to fix it.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers studied 20,947 repositories and found that coding agents often co-install multiple skills that do the same job. When an agent must choose between them, it picks based only on name and description. A similar skill can run instead of the intended one, bypassing its core functions like git restrictions, yet task completion benchmarks miss this entirely.

This matters because safety-critical skills lose their force without obvious failure. The study confirmed 312 conflicting skill pairs across three models over 542 agent-hours. In one in five runs, an unwanted similar skill ran instead of the installed one. When that happened first, it stripped away over a third of exclusive functions the original skill provided.

Installation order determines which skill runs, and agents name the skill they actually used only 0.9 per cent of the time. Conflicts are decided when skills are first read, before any files change. A pre-read hook can restore fidelity completely, and benchmarks need to score exclusive core functions, not just task completion.
