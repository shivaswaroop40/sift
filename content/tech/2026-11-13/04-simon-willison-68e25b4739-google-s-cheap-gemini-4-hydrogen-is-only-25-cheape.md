---
id: 68e25b4739
title: Google's cheap Gemini 4 Hydrogen is only 25% cheaper than its larger siblings until December
original_title: llm-gemini 0.37
url: https://simonwillison.net/2026/Nov/12/llm-gemini/
source: Simon Willison
kind: blog
section: ai-and-ml
date: "2026-11-13"
published_at: "2026-11-12T22:55:19.000Z"
authors: []
comments: null
tags:
  - gemini
  - llm-pricing
  - google
  - llm-plugin
  - model-comparison
  - blog
why_read: >-
  You get the full price table with the 1 December change, plus Willison's quick comparison of
  Hydrogen against Carbon and Argon.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Google released Gemini 4 Hydrogen, the lowest-cost model in the Gemini 4 family, and Simon Willison shipped llm-gemini 0.37 to support it. Hydrogen costs $1.50 per million input tokens, $0.075 cached and $7.50 output. Carbon and Argon cost $2.00, $0.10 and $10.00 until 30 November, then double to $4.00, $0.20 and $20.00.

Carbon and Argon share a price. Google says Argon gives Carbon-level intelligence with faster responses and fewer tokens per turn. So the real cost difference would show up in token use, not the price list. Willison calls the scheme confusing.

Hydrogen is only a 25% discount today, rising to 75% after the December increase. It is still about 15 times the $0.10/$0.50 price of Claude Haiku 5.5 and GPT-6 Luna. Willison also notes Hydrogen's pelican drawings are noticeably worse than its siblings'. That is an informal test, not a benchmark.

Google positions Hydrogen as an execution model for writing code and running tests, paired with Carbon or Argon for design judgement. It is also the new free-tier model and will power AI features in Google Search.
