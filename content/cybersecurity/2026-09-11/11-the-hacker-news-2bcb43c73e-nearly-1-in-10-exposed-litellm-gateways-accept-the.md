---
id: 2bcb43c73e
title: Nearly 1 in 10 exposed LiteLLM gateways accept the example sk-1234 admin key
original_title: Nearly 1 in 10 Exposed LiteLLM Gateways Accepted the Example "sk-1234" Admin Key
url: https://thehackernews.com/2026/09/nearly-1-in-10-exposed-litellm-gateways.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-09-11"
published_at: "2026-09-10T07:12:55.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - litellm
  - ai-gateway
  - default-credentials
  - wiz-research
  - exposure
  - news
why_read: >-
  Find out how widespread the default LiteLLM admin key is and whether your exposed gateway is
  affected.
rank: 11
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Wiz Research scanned internet-facing LiteLLM servers in February and found that nearly one in ten accepted sk-1234, the example admin key in LiteLLM's own setup guide. LiteLLM is an open-source AI gateway that sits between an organisation's applications and the model providers it pays for. The key is the gateway's administrator credential.

Because the key is printed in the vendor's documentation, it is trivially guessable. Anyone who holds it has administrator access to the gateway. The scan ran in February, so current exposure may differ, and the source text is truncated before it lists what an administrator can read.
