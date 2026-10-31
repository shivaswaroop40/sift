---
id: 5c9e282a6c
title: DoorDash cut grocery reorder latency from 16 to 2 seconds by precomputing purchases
original_title: DoorDash Cuts Grocery Reorder Latency from 16 to 2 Seconds with AI Agents
url: >-
  https://www.infoq.com/news/2026/10/doordash-ai-grocery-reorder/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-10-31"
published_at: "2026-10-30T13:31:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - doordash
  - ai-agents
  - latency
  - llm
  - precomputation
  - news
why_read: >-
  The original sets out the batch inference and catalog resolution design, and the shared platform
  that let DoorDash add a new agent in one week.
rank: 9
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

DoorDash cut latency in its AI grocery reorder flow from about 16 seconds to 2 seconds by precomputing recurring purchase needs instead of rebuilding them per request. Batch LLM inference over 90 days of purchase history and consumer profile signals identifies likely recurring purchases. Deterministic validation checks the results before the system stores them as reusable shopping list data. The change doubled shopping list views and raised the flow's order rate by about 34%.

The serving path retrieves this prepared data and resolves each item against the current catalog. It first tries the original store item, then a catalog product identifier, then a search term. That accommodates changing listings and unavailable products without repeating historical reasoning on every request. DoorDash engineer Twisha Jain frames the rationale as deciding what belongs in the agent loop and what can happen ahead of time.

The Grocery agent still handles requests that need live reasoning, such as finding cheaper alternatives using current prices, promotions, package sizes and inventory. Simple edits, like changing quantities or removing products, update the shopping list directly with no extra LLM round trip. The list is a structured artifact that both consumer and agent can update, and a consumer's direct edit is authoritative for the next agent turn.

The flow runs on DoorDash's shared agent platform, which supplies orchestration, memory, model access, tracing, evaluation infrastructure and rollout controls. Domain teams keep ownership of agent instructions, skills, tools and evaluation criteria. DoorDash reports that adding its Reservations agent took one week, roughly ten times faster than building its initial domain agents.
