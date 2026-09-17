---
id: d7d0d65985
title: Tool progress signals beat LRU for KV cache decisions in agent serving
original_title: >-
  Ask the Tool, Don't Guess: Agent Tool Calls Hold Their Progress, and the Serving System Should
  Read It
url: https://arxiv.org/abs/2609.18849
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-17"
published_at: "2026-09-17T04:00:00.000Z"
authors:
  - Yipeng Liu
  - Yingqiang Zhang
  - Feifei Li
  - Huanchen Zhang
comments: null
tags:
  - llm-serving
  - kv-cache
  - agents
  - scheduling
  - benchmark
  - paper
why_read: >-
  It gives a concrete mechanism to cut TTFT after long tool calls without retraining agents or
  changing what they see.
rank: 12
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers argue that LLM serving systems should ask running tools to report their progress instead of guessing call duration from names, history, or pre-declared estimates. They show no pre-call estimate can reliably know how long a tool will run, and such estimates may not even rank calls correctly.

The paper proposes a harness that surfaces a tool's remaining-work signal without altering what the agent observes, at no measurable cost to benchmark scores. Across four public agent corpora, most tool time carries a readable progress signal once revealed.

At the points where a KV cache eviction or retention decision is made, reported progress is between several times and an order of magnitude more accurate than the best published predictors, and it stays accurate when the environment changes.

Plugged into a production engine with small hints, it cuts p90 time to first token after a tool call by 20.7% on HBM only and 20.8% on HBM plus DRAM versus LRU, close to an oracle baseline.
