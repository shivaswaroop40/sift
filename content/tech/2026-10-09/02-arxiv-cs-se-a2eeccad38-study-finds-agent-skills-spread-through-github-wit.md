---
id: a2eeccad38
title: Study finds agent skills spread through GitHub without versions or tracking
original_title: "Skill Constellations: Tracing the Supply Chain of Agent Skills on GitHub"
url: https://arxiv.org/abs/2610.11169
source: arXiv cs.SE
kind: paper
section: security
date: "2026-10-09"
published_at: "2026-10-09T04:00:00.000Z"
authors:
  - Fahd Seddik
comments: null
tags:
  - agent-skills
  - supply-chain
  - github
  - security
  - ai-coding
  - paper
why_read: Learn how untracked agent skill copies create security gaps and which repositories to audit first.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

AI coding agents like Claude run SKILL.md instructions copied between repositories. Researchers traced 2.2 million skill adoptions across GitHub using git history, finding that a few repositories are the source of almost all copies, but GitHub stars do not identify them.

For security teams, this matters because copied skills almost never change from their source. A fix in the original rarely propagates to copies, creating a supply chain with unknown provenance and no version control.

Reviewing the 100 repositories ranked by the researchers' model prevents 14.9 percent of later adoptions of high-risk skills, compared to 0.5 percent for the 100 most starred repositories. The authors argue platforms should distribute versioned references instead of copies.
