---
id: f03d58a1c6
title: OpenAI's dot agent burned 300K tokens in a day with no user interaction
original_title: OpenAI's dot assistant burned 300K+ tokens in a day without a single prompt
url: >-
  https://www.theregister.com/ai-and-ml/2026/10/13/openais-dot-assistant-burned-300k-tokens-in-a-day-without-a-single-prompt/5302913
source: The Register
kind: news
section: ai-and-ml
date: "2026-10-14"
published_at: "2026-10-13T20:20:25.000Z"
authors: []
comments: null
tags:
  - agents
  - token-cost
  - openai
  - observability
  - governance
  - news
why_read: >-
  Understand the hidden operational and cost implications of always-on agentic systems in your
  infrastructure.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

OpenAI's dot personal assistant generated 155 separate activity traces and consumed over 300,000 tokens in a single day without any user prompts, according to security firm Geordie's testing. At least 50 of those traces occurred within two minutes. The agent operated with read-only permissions and no connection to personal apps or communications tools.

Dot runs at least two agents continuously: a primary agent for user interaction and a secondary agent collecting background data. It can spawn short-lived subagents for specific tasks without user awareness or control. This proactive architecture differs from custom enterprise bots that typically respond to employee goals.

Token consumption translates to roughly $5-$10 per day at current pricing, a modest cost per user but problematic at scale without visibility. The concern is that workers will bring dot into business contexts where uncontrolled background spending and subagent activity occur without IT oversight or clear connection to business value.
