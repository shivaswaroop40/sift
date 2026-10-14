---
id: e0293e89df
title: GitHub cuts secret detection costs by 98% with smaller model over remote LLM
original_title: "GitHub’s model for secret detection: Finding more secrets with less noise"
url: >-
  https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/
source: GitHub Blog
kind: blog
section: security
date: "2026-10-14"
published_at: "2026-10-13T17:56:33.000Z"
authors:
  - Batu Ozturkler
comments: null
tags:
  - secret-scanning
  - llm
  - cost-optimisation
  - ci-cd
  - machine-learning
  - inference
  - blog
why_read: >-
  Learn how GitHub optimised secret scanning for scale and cost without sacrificing detection
  quality.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

GitHub built a compact model for scanning secrets in code rather than calling remote large language models. The new approach cuts serving costs by 98% and scan time by 86% median, while improving alert precision by 11.5% with owner-weighted ranking.

Teams pushing code need fast feedback without false alarms. Slower, costlier remote LLM calls create friction and waste budget on noisy results. GitHub's local model runs post-push and surfaces likely real issues first.

The trade-off is not discussed in this summary, but the numbers suggest the compact model outperforms the remote approach on cost, speed, and developer experience simultaneously.
