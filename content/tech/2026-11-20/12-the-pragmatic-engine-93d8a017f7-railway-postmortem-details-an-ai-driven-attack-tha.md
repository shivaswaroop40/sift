---
id: 93d8a017f7
title: Railway postmortem details an AI-driven attack that took customer AI provider keys in about a day
original_title: "The Pulse: What can we learn from the Railway hack?"
url: https://blog.pragmaticengineer.com/the-pulse-what-can-we-learn-from-the-railway-hack/
source: The Pragmatic Engineer
kind: blog
section: security
date: "2026-11-20"
published_at: "2026-11-19T18:53:58.000Z"
authors:
  - Ivan Klaric
comments: null
tags:
  - security
  - incident-postmortem
  - railway
  - ai-attacks
  - build-systems
  - secrets-management
  - blog
why_read: >-
  The original has the phase-by-phase attack chain and Railway's reasoning on hard trade-offs, which
  is useful if you run build pipelines, OIDC trust or secret storage.
rank: 12
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Railway, a cloud provider, was breached two weeks ago and customer secrets leaked. Its postmortem describes four phases over roughly 24 hours. The attacker read files on the build system, stole build credentials, reached a Temporal cluster holding build histories, and downloaded the monorepo. They then abused a misconfigured OpenID Connect binding to get cloud access, and called a key management service to decrypt customers' AI provider keys.

Gergely Orosz says infra companies are being targeted by apparently Chinese attackers using abliterated AI models, meaning models with no safeguards. The goal seems to be AI keys, likely to resell cheaply. This is his account from conversations with CTOs and founders, not independently verified. Railway's CEO says the team was only minutes behind at one point, revoking credentials one minute after the attacker used them.

For defenders, the speed is the main point. Six hours after downloading the code, the attacker had a plan to reach the keys. The attacker also returned the same night after being evicted. Railway's defensive models from OpenAI and Anthropic refused security work, and it lacked access to Project Glasswing during the incident.

Some responses worked. Railway stored hashes of customer secrets, so it could send hashes of AI keys to providers for immediate revocation without knowing the keys. It halted builds and moved customers to a nearly finished new build system rather than patch the old one. Both choices caused customer disruption. The excerpt cuts off before the full lessons list.
