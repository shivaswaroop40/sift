---
id: da470407aa
title: Attack success rate metric in agentic AI security papers lacks consistency, researchers say
original_title: "Attack Success Rate Is Not a Number: On Measurement Validity in Agentic AI Security Evaluation"
url: https://arxiv.org/abs/2609.25173
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-09-23"
published_at: "2026-09-23T04:00:00.000Z"
authors:
  - Chetan Pathade
  - Prathamesh Pawar
  - Shubham Patil
comments: null
tags:
  - ai-security
  - llm-agents
  - evaluation
  - metrics
  - benchmarking
  - research
  - paper
why_read: >-
  You will see concrete evidence that most agentic AI attack and defence evaluations are too noisy
  to compare, plus a checklist to make your own evaluations reproducible.
rank: 6
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A meta-analysis of 259 agentic-security papers posted to arXiv between February 2025 and September 2026 found that most evaluations report a single attack success rate without variance estimates or repeated runs. In a hand-coded sample of 50, 58% omitted both, and automated coding of all 259 found 65.3% did the same.

Only 30.9% of papers disclosed enough about decoding to establish whether their evaluation was stochastic. Of 64 papers confirmed to use an LLM judge, 29.7% reported any agreement check against human labels, meaning many headline ASR numbers rest on unvalidated judging.

An analytical study showed these gaps have real consequences. On a 100-instance benchmark, the minimum ASR difference detectable at conventional statistical power is 18.2 percentage points, and two defences with a true 5-point gap are ranked in the wrong order by single-run evaluation around 21% of the time.

The authors argue that ASR is shaped by six design choices that vary across papers and shift results in system-dependent ways, so cross-paper ASR comparison is currently unsupported. They propose a ten-item reporting checklist aimed at each failure they measured.
