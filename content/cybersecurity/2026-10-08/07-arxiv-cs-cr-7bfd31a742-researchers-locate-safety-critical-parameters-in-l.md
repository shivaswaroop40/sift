---
id: 7bfd31a742
title: >-
  Researchers locate safety-critical parameters in LLaMA-2 language models deployable with minimal
  changes
original_title: >-
  How Fragile Is On-Device Language Model Safety? Localizing Safety-Critical Parameters for Sparse
  Fault Analysis
url: https://arxiv.org/abs/2610.09000
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-10-08"
published_at: "2026-10-08T04:00:00.000Z"
authors:
  - Muhammad Zeeshan Karamat
  - Christiana Chamon Garcia
comments: null
tags:
  - language-models
  - on-device
  - safety
  - fault-injection
  - integrity-protection
  - parameter-localization
  - paper
why_read: >-
  Learn where language model safety actually lives in parameters, and what defenders must protect on
  edge devices.
rank: 7
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers studied LLaMA-2-7B-Chat to find whether safety mechanisms concentrate in a small number of parameters. Using low-rank subspace analysis and parameter importance filtering, they found safety sensitivity is highly non-uniform. The MLP down_proj layer emerged as the most critical component, followed by o_proj.

Modifying just 0.19% of weights in down_proj—around 10,000 parameters—reduced safety by 53 to 56% across tested attack scenarios. General task performance remained largely unchanged at 51.6% accuracy, suggesting the safety mechanisms are genuinely isolated from general capabilities. This sparsity matters: defenders now know where to focus integrity checks and fault protection on resource-constrained devices.

The finding has direct implications for on-device deployment. If so few parameters control safety, fault injection attacks could compromise safety without affecting performance. Practitioners deploying models locally must consider selective integrity protection or parameter-level monitoring for these critical components.
