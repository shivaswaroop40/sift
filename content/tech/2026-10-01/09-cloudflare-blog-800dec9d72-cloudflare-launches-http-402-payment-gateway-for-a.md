---
id: 800dec9d72
title: Cloudflare launches HTTP 402 payment gateway for AI agents to charge per request
original_title: "Monetization Gateway beta: charge AI agents for consumption with HTTP 402"
url: https://blog.cloudflare.com/monetization-gateway-beta/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-10-01"
published_at: "2026-09-30T13:00:00.000Z"
authors:
  - Rohin Lohe
comments: null
tags:
  - http-402
  - agents
  - payments
  - cloudflare
  - api-monetization
  - blockchain
  - blog
why_read: >-
  Understand how HTTP 402 enables micropayments for agent-driven APIs and the infrastructure shift
  this requires.
rank: 9
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Cloudflare is releasing Monetization Gateway in closed beta, allowing service providers to charge AI agents per request for APIs, tools, datasets or website access using HTTP 402 status codes. Payments settle on the Base blockchain using USDC stablecoin through Coinbase's x402 Facilitator.

AI agents operate on consumption patterns unlike human users, making subscription and credit models inefficient. Per-request billing aligns with how agents buy: cheap, fast transactions at scale with minimal human oversight.

The gateway handles payment verification, settlement, retries and analytics. Sellers define pricing rules matching request properties like URL or headers. Cloudflare is enabling this on its AI Gateway for model inference, and customers like Ceramic.ai use it for web search APIs.
