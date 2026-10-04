---
id: fba9247c2b
title: DoorDash moved from OpenAI to open-weights models for its internal GenAI platform
original_title: "Presentation: Building GenAI Platform at DoorDash"
url: >-
  https://www.infoq.com/presentations/doordash-genai-platform-architecture/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-10-04"
published_at: "2026-10-03T11:00:00.000Z"
authors:
  - Siddharth Kodwani
  - Swaroop Chitlur
comments: null
tags:
  - genai-platform
  - llm-inference
  - cost-optimization
  - distributed-systems
  - platform-engineering
  - news
why_read: >-
  See how an infrastructure team made architectural bets and pivots that scaled a GenAI platform to
  thousands of users.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

DoorDash built an internal GenAI platform for over 5,000 users, starting with OpenAI in April 2023 before shifting to open-weights models as the team matured. The platform serves product engineers, data analysts, and non-technical staff across the company, handling automation, recommendations, and personalization use cases.

The platform team optimised for three competing constraints: accuracy, latency, and cost. This trade-off became the core principle guiding architecture decisions. The shift away from vendor-first setups reflects how internal GenAI platforms must balance operational control with infrastructure cost as adoption scales.

The team deliberately focused on business impact over technical novelty, avoiding chatbots and coding agents to concentrate on use cases that reduce costs or increase revenue. This discipline shaped which problems they chose to solve.
