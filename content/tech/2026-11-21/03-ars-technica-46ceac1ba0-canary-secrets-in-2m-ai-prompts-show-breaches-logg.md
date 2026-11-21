---
id: 46ceac1ba0
title: Canary secrets in 2m AI prompts show breaches, logging resellers and ignored privacy flags
original_title: Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced.
url: >-
  https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/
source: Ars Technica
kind: news
section: security
date: "2026-11-21"
published_at: "2026-11-20T20:59:08.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/#comments
tags:
  - ai-security
  - ai-gateways
  - data-privacy
  - credentials
  - supply-chain
  - inference
  - news
why_read: >-
  The original gives Moore's method and the detail of each leak path, which is useful if you route
  model traffic through gateways or resellers.
rank: 3
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Researcher HD Moore of Dragos sent nearly two million prompts through AI routers and inference providers. Each held a unique fake secret, such as AWS keys, SSH passwords and private URLs. He controlled the systems that would receive any reuse. Each secret went into one prompt to one provider, so any later use pointed to a specific link in the chain.

He found at least three hosting providers compromised by attackers who copied prompts. One attacker reused a couple of hundred AWS keys, and the bait keys were used tens of thousands of times in API calls. Some stolen requests were rejected before any model ran, which suggests copying at the provider's front door. Two breaches also took requests marked Zero Data Retention.

Some low-priced resellers logged prompts and passed them on to people who used the credentials. One Chinese AI lab fetched secret URLs from more than half of the prompts sent to its models between July and October. That included about two-thirds of those flagged as no data collection or ZDR. US providers reselling its models triggered the same scraper.
