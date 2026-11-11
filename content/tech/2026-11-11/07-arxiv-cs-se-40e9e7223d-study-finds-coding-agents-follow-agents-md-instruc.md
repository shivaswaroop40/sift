---
id: 40e9e7223d
title: Study finds coding agents follow AGENTS.md instructions more often than not, but unevenly
original_title: >-
  Do They Do as They Are Told? Investigating Coding Agents' Adherence to Explicit Instructions in
  Context Files
url: https://arxiv.org/abs/2611.13709
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-11-11"
published_at: "2026-11-11T05:00:00.000Z"
authors:
  - Gianmario Voria
  - Yutaro Kashiwa
  - Gemma Catolino
  - Fabio Palomba
comments: null
tags:
  - coding-agents
  - agents-md
  - context-files
  - empirical-study
  - developer-tooling
  - compliance
  - paper
why_read: >-
  You get an empirical basis for deciding which rules in your AGENTS.md can be trusted and which
  need CI checks or other enforcement, with measurement scripts built per instruction.
rank: 7
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Researchers examined real-world agent context files (ACFs) such as AGENTS.md and the commits that coding agents produced for those projects. They extracted explicit, actionable instructions and turned them into executable scripts that check whether a commit complies. Most observable instructions could be turned into checks this way.

Agents followed ACF guidance more often than not. The abstract gives no figures. Adherence was bimodal: some instructions were followed consistently, while others were never respected. Results varied by instruction category and by which coding agent wrote the commit.

The authors read this as a sign that some instruction types may need rewriting, and that some agents may need enforcement outside the ACF. The abstract makes no claim about why particular instructions fail, and it is not clear how well the findings generalise beyond the sampled repositories.
