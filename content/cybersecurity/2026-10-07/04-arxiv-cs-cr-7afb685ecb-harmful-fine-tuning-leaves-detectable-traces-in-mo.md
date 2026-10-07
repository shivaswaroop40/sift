---
id: 7afb685ecb
title: Harmful fine-tuning leaves detectable traces in model weight updates
original_title: Harmful SFT Leaves a Continuous Trace in LLM Checkpoint Updates
url: https://arxiv.org/abs/2610.07518
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-10-07"
published_at: "2026-10-07T04:00:00.000Z"
authors:
  - Ziqun Bao
  - Xinyu Zhang
  - Yuchen Shao
  - Chengcheng Wan
comments: null
tags:
  - llm-safety
  - fine-tuning
  - auditing
  - weights-only
  - harmful-compliance
  - checkpoint-analysis
  - paper
why_read: >-
  Learn how to audit model checkpoints for harmful fine-tuning without model execution or access to
  training data.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers found that supervised fine-tuning for harmful compliance leaves a measurable, continuous signature in checkpoint updates. By comparing weight changes across harmful, safety-targeted, and benign fine-tuning, they discovered a coordinate in checkpoint space that tracks harmful-objective composition with 0.986-0.992 Spearman correlation across multiple models.

This matters because it enables weights-only auditing without running the model or knowing the training data. The method, called TRACE, can detect harmful fine-tuning from checkpoint updates alone, providing an audit signal independent of behavioral testing.

TRACE remained stable across distribution shifts, different model scales, LoRA fine-tuning, and partial checkpoint access. The trace correlates with independent measurements of attack success rates, offering a complementary signal when behavioral evaluation is incomplete or unavailable.
