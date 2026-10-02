---
id: 547a41dfca
title: Fine-tuning attacks recover private data without original training set access
original_title: "Sleeping Secrets: How Fine-Tuning Reawakens Privacy Risks in Language Models"
url: https://arxiv.org/abs/2610.01365
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-10-02"
published_at: "2026-10-02T04:00:00.000Z"
authors:
  - Jianhong Li
  - Jiahao Chen
  - Yuwen Pu
  - Chunyi Zhou
  - Oubo Ma
  - Zhou Feng
comments: null
tags:
  - language-models
  - fine-tuning
  - privacy
  - memorisation
  - model-extraction
  - training-data
  - paper
why_read: >-
  Understand how model customisation can expose dormant memorised data and assess your fine-tuning
  workflows.
rank: 6
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers show that fine-tuning can recover private information from language models even without access to the original private data. Their ReGap attack uses model-generated candidates and task structure to recover private associations, improving recovery rates by 6 to 21 percentage points across GPT-2, OPT, and Qwen3 models.

For platform engineers deploying customized models, this means routine fine-tuning for specialised applications introduces privacy leakage risk. An attacker needs only model access and task structure knowledge, not the original training data.

Recovery was substantially higher on models previously exposed to target data, suggesting that adaptation reawakens dormant memorisation rather than creating new leakage. Even disjoint adaptation identities increased recovery rates, indicating fine-tuning generalises privacy risks across the model.
