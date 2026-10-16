---
id: 3a0c2936ef
title: Provenance marks in AI agent code fail to survive automated rewrites
original_title: "What Survives Self-Evolution: Provenance Marks in Copied Agent Harnesses"
url: https://arxiv.org/abs/2610.21458
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-10-16"
published_at: "2026-10-16T04:00:00.000Z"
authors:
  - Jieyu Li
  - Jingya Li
  - Sheng Li
  - Xinpeng Zhang
  - Zhenxing Qian
comments: null
tags:
  - provenance
  - llm-security
  - agent-security
  - code-reuse
  - supply-chain
  - paper
why_read: >-
  Learn why existing provenance schemes fail when code is evolved by LLMs and what defences hold
  under automated rewrites.
rank: 6
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Claude's Code harness of 512,000 lines was leaked and mirrored within hours. A plagiarist can now run leaked code through published self-evolvers and claim the result as original work. Researchers call this a covert rewriting attack and measured how provenance marks survive it across three evolvers and five model proposers.

Existing marks offer almost no protection. KGW in prompts survived GEPA rewrites in zero of twelve copies. AgentMark survived in five of twelve. The proposer model's rewriting habits determine survival by two orders of magnitude, showing that marking schemes built without accounting for this attack fail in practice.

The researchers built a new mark based on the ordering of near-tied entries in a lookup table. On test games it was detected in 62 of 76 copies whose code was rewritten. An informed attacker can reshuffle the ties without cost or ask the proposer for more general code, removing the key in 75 to 100 percent of rewrites.
