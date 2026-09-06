---
id: c087fd329a
title: Google publishes Beyond Zero, a Zero Trust successor aimed at AI agents
original_title: "Beyond Zero: Google Publishes Successor to BeyondCorp"
url: >-
  https://www.infoq.com/news/2026/09/google-beyond-zero/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-09-06"
published_at: "2026-09-05T10:40:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - security
  - zero-trust
  - ai-agents
  - google
  - cloud
  - authorisation
  - news
why_read: >-
  You will see how Google is reframing Zero Trust for a world of millions of agents, and where
  independent practitioners think the model is weak.
rank: 3
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Google has published a research paper describing Beyond Zero, a security model it says extends Zero Trust to autonomous AI agents. The model shifts access decisions from the application boundary to individual resources and actions, mixing static policy with dynamic, AI-driven risk evaluation.

It rests on five principles: action- and resource-level authorisation across APIs, layered static and dynamic controls, enriched context for users and agents, automated investigation on risk signals, and challenges or containment when behaviour looks suspicious. Continuous, per-action checks run at machine speed for both humans and agents.

The paper acknowledges that adoption needs SaaS vendors to expose action-level authorisation, maturing standards, and large engineering capacity. Google says deployments so far are internal only and components are still being built, with further papers planned but no published timeline.

Reception from practitioners has been sceptical. Critics argue that AI-driven authorisation is non-deterministic and harder to audit than the deterministic checks Zero Trust relies on, and that small security teams may struggle with false positives and operational cost.
