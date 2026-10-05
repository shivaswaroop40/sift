---
id: 431791c4ba
title: LLMs fail silently when coding trading strategies despite passing unit tests
original_title: >-
  MintEval: Do LLMs Implement the Trading Strategy You Asked For? A Behavioural-Equivalence
  Benchmark for Natural-Language-to-Strategy Code
url: https://arxiv.org/abs/2610.03080
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Siyu Wang
  - Yifan Wang
  - Yuecheng He
comments: null
tags:
  - code-generation
  - llm
  - testing
  - trading-systems
  - validation
  - paper
why_read: Understand how code generation benchmarks miss silent failures that execute without crashing.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers created MintEval, a benchmark where reference trading strategies are converted to natural language instructions, then re-implemented by language models. The generated code is executed against identical market data and compared action-by-action, not by profit or code similarity. This reveals implementation failures that backtests and existing code benchmarks miss.

For platform engineers deploying LLM-generated code in production systems, silent failures matter. A frontier model correctly identifies strategy intent 79.2% of the time but still diverges from specified behaviour on over 10% of trading bars. Existing LLM judges accept all these failures, masking a systemic problem in how we validate code generation.

Claude Opus reaches 0.889 ActionMatch on 200 tasks, yet fails on 27.5% silently. Lower-cost models plateau at 0.544. The benchmark stratifies by execution complexity rather than description length, surfacing cases where models handle logic correctly in isolation but fail in sequence.
