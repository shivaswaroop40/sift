---
id: 106ad81a3c
title: Akka tests AI-driven code porting on 65 open source projects
original_title: Akka Tests Spec-Driven AI Delivery Across 65 Open Source Projects
url: >-
  https://www.infoq.com/news/2026/10/ai-spec-driven-delivery/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-10-06"
published_at: "2026-10-05T13:58:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - ai-coding
  - code-porting
  - llm-efficiency
  - benchmarking
  - specification
  - automation
  - news
why_read: See the concrete costs and trade-offs of AI-assisted code porting at scale across real projects.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Akka ran a two-tranche experiment using Claude to port code across 65 open source projects. The first phase generated specifications for all 65 projects and implemented up to 10% of each. The second phase completed full ports of 10 selected projects. Total effort was 99.3 hours consuming 9.41 billion tokens, with performance or code improvements in 57 of 65 cases.

For distributed systems engineers, this tests whether LLM-driven porting at scale can reduce migration burden. The workflow—discovery, specification, implementation, benchmarking—shows one model for structuring AI-assisted work. Results varied significantly: some projects improved performance 143,000 times, while others degraded by 100 times.

Smaller models (Claude Sonnet, 61 minutes per port) outpaced larger ones (Opus, 120 minutes) while using 40% fewer tokens. Engineers questioned whether improvements came from dead code removal or language differences, and whether tighter specs constrain the model or reflect genuine efficiency gains.
