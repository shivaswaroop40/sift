---
id: 8c50254dd9
title: Claude Haiku 5.5 matches GPT-6 Luna pricing but hides cost increases in tokenization
original_title: Claude Haiku 5.5
url: https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/
source: Simon Willison
kind: blog
section: ai-and-ml
date: "2026-10-08"
published_at: "2026-10-07T20:56:21.000Z"
authors: []
comments: null
tags:
  - pricing
  - haiku
  - gpt-6
  - cost
  - tokenization
  - llms
  - blog
why_read: >-
  Understand the real cost structure of Haiku 5.5 and how it compares to GPT-6 Luna for your token
  budgets.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Anthropic released Haiku 5.5, matching OpenAI's GPT-6 Luna pricing at $0.10/$0.50 per million tokens up to 100,000 tokens, then rising 5x beyond that threshold. The new model uses a less generous tokenizer, requiring roughly 25% more tokens for the same prompts compared to its predecessor.

For workloads under 100,000 tokens, Haiku 5.5 offers parity pricing with Luna while reporting higher benchmark scores. Beyond that limit, Luna becomes significantly cheaper, making it the better choice for long-context applications.

Anthropic also halved cache read prices for Sonnet 5.5 and introduced monthly API credits for subscribers: $100 for Max 5x users, $200 for Max 20x users, and up to $500 for Team subscribers. Credits do not roll over and can be spent without auto-reload risk.
