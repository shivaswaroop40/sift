---
id: 50eda9893f
title: Study finds LLMs show mixed results recovering source code from binaries
original_title: "SoK: Are LLMs Reliable at Source Code Recovery? A Taxonomy and Empirical Evaluation"
url: https://arxiv.org/abs/2610.11556
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-10-09"
published_at: "2026-10-09T04:00:00.000Z"
authors:
  - Varun Kohli
  - Lee Bing Cheng
  - Nur Hazim Ghazali
  - Gao Yuze
  - Daryl Poon
  - Dinil Mon Divakaran
comments: null
tags:
  - llm
  - binary-analysis
  - decompilation
  - reverse-engineering
  - code-recovery
  - evaluation
  - paper
why_read: >-
  Learn how reliably LLMs recover source code and which design choices affect success across
  architectures and languages.
rank: 9
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers evaluated large language models for converting assembly and pseudo-C back to source code, testing seven metrics across 45,000 samples from standard and embedded architectures. They tested four mature and two legacy programming languages, with different optimisation levels and symbol-stripped binaries.

Security teams rely on source recovery for malware analysis and vulnerability assessment. Current decompilers produce pseudo-C that lacks semantic fidelity. LLMs promise better recovery, but fragmented research makes it hard to compare methods objectively.

The study varied design choices including input representation, model scale, and contextual enrichment. Recovery performance differed significantly across architectures, languages, and optimisation levels, suggesting no single approach works uniformly well.
