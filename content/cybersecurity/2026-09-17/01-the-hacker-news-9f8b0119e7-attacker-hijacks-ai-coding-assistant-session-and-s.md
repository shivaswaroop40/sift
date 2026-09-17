---
id: 9f8b0119e7
title: Attacker hijacks AI coding assistant session and spreads Shai-Hulud worm to about 100 repos
original_title: Attacker Hijacks AI Coding Assistant Session, Spreads Shai-Hulud Across About 100 Repositories
url: https://thehackernews.com/2026/09/attacker-hijacks-ai-coding-assistant.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-09-17"
published_at: "2026-09-16T13:37:07.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - ai
  - supply-chain
  - shai-hulud
  - mandiant
  - prompt-injection
  - secrets
  - news
why_read: >-
  It shows how a hijacked coding-assistant session turned a poisoned recommendation into a
  self-spreading supply-chain worm inside one SaaS provider.
rank: 1
interest_score: 9.3
depth_score: 9
novelty_score: 10
utility_score: 9
scored: true
model: minimax-m3
---

Mandiant reports that an attacker hijacked an active AI coding-assistant session at an unnamed software-as-a-service provider. The assistant had recommended software the attacker had poisoned, the recommendation was accepted, and the resulting worm then spread Shai-Hulud to around 100 internal repositories.

The worm stole repository secrets and source code. The incident shows that prompt-injection or tool-poisoning inside an assistant session can act as a delivery mechanism for a self-propagating supply-chain compromise, not just a single malicious action.

Practitioners should treat recommendations made by AI coding assistants during sensitive workflows as untrusted input. Repository-scoped credential hygiene, audit of recently installed dependencies, and segmentation of assistant sessions from secret-bearing repositories are now baseline controls rather than extras.

Details on the provider and full impact remain undisclosed.
