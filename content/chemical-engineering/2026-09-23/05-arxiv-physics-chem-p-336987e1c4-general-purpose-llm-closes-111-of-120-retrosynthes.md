---
id: 336987e1c4
title: General-purpose LLM closes 111 of 120 retrosynthesis targets in agentic planning environment
original_title: "Rachel: A general-purpose language model directs and revises retrosynthetic routes"
url: https://arxiv.org/abs/2609.25118
source: arXiv physics.chem-ph
kind: paper
section: modelling-and-control
date: "2026-09-23"
published_at: "2026-09-23T04:00:00.000Z"
authors:
  - Qisheng Li
  - Shunchao Jiang
  - Chen Qi
  - Xin Su
  - Da Han
  - Guangyong Chen
comments: null
tags:
  - retrosynthesis
  - llm
  - planning
  - cheminformatics
  - ai
  - paper
why_read: >-
  It reports an LLM-only agent achieving high closure rates on standard retrosynthesis benchmarks,
  with ablation evidence on where the strategic gain comes from.
rank: 5
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers have built Rachel, a stateful planning environment that lets a general-purpose large language model (LLM) drive retrosynthetic search, with explicit execution and closure checks but no fixed search policy or stopping rule. Tested with GPT-5.5, the system achieved strict closure on 111 of 120 PaRoutes120 targets and 24 of 25 in the RF25 difficult set, where many targets post-date the model's training cut-off. Closure required complete routes plus independent source resolution for every terminal precursor.

The result matters because it shows a general LLM can sustain multi-step route decisions and revise strategy after earlier choices reshape the problem, not just propose local disconnections. On a shared PaRoutes subset, Rachel's forward-model support exceeded most comparator methods, and it scored highest on method-blinded LLM route evaluation.

Replacing LLM route decisions with fixed heuristics cut strict closure to 6 to 15 of 120 on PaRoutes120, confirming that the model's own strategic control is doing the work, not just local chemistry execution. Restricting planning support also reduced RF25 closure, indicating both the coordinator role and the reactive support matter for difficult targets.
