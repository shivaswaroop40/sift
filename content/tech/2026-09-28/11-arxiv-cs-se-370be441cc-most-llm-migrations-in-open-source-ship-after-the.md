---
id: 370be441cc
title: Most LLM migrations in open source ship after the model is gone
original_title: "When the Model Retires: An Empirical Study of LLM Migration in Open-Source Applications"
url: https://arxiv.org/abs/2609.31288
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Hyungjin Lukas Kim
comments: null
tags:
  - llm
  - deprecation
  - github
  - open-source
  - dependency-management
  - empirical
  - paper
why_read: >-
  Quantifies how often open-source LLM users upgrade after a model is already gone and what drives
  the delay, from a large commit-level dataset.
rank: 11
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

A study of 22,555 commits across 17,703 non-fork GitHub repositories finds that an estimated 82% of migrations away from retired LLM endpoints were committed after the official shutdown date. The share of late migrations ranges from 89% under Anthropic's 60-114-day notice policy to 13% under OpenAI's one-year Assistants API notice, with each e-fold increase in notice length cutting the odds of a post-shutdown migration by roughly three quarters.

For practitioners, the result suggests that longer deprecation windows do not translate into earlier action: even repositories with prior retirements, abstraction layers, or high popularity still migrate late. Model identifiers are hard-coded in 94% of the migrating applications, and only 8% switch provider, so most teams are doing string swaps rather than re-architecting.

Migration effort scales with how the model was used. Prompt-only applications need a median of 6 added lines, while fine-tuned applications need close to 700. The dataset covers OpenAI, Anthropic, and Google endpoints between 2024 and 2026, with 5,139 commits matched to official events and a stratified sample manually labelled by two coders (kappa 0.89-0.95).

The authors release the dataset and mining pipeline and frame the work as input to deprecation policy, LLM dependency-risk assessment, and tooling that flags hard-coded model strings before retirement dates bite.
