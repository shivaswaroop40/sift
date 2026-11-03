---
id: 35efdaa0c5
title: Stolen LLM API keys cost victims over $100,000 a day in token charges
original_title: Token thieves costing companies $100K+ per day in illicit LLM charges
url: >-
  https://www.theregister.com/security/2026/11/02/token-thieves-costing-companies-100k-per-day-in-illicit-llm-charges/5306967
source: The Register
kind: news
section: security
date: "2026-11-03"
published_at: "2026-11-02T16:00:00.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - llmjacking
  - api-keys
  - cloud-security
  - mandiant
  - llm
  - news
why_read: >-
  The Mandiant report gives worked intrusion cases, the Jet Night pricing anomaly and a concrete
  checklist for locking down LLM API keys.
rank: 8
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Google's Mandiant incident responders report that criminals hijacking corporate LLM access are running up fraudulent token charges that can exceed $100,000 a day. Some victims accumulated $1 million before revoking the intruders' access. In one case, a group tracked as UNC6993 stole LLM API keys, generated more keys and enabled services inside the victim's cloud projects. In another, an intruder made over 500,000 LLM API calls in under eight hours using stolen third-party keys.

The report details how thieves sustain the abuse. One subscribed victim accounts to pay-as-you-go agreements, picked premium foundation models and ran high-volume inference. A burn and rotate strategy created and deleted short-lived service accounts to bypass rate limits while the thief watched the billing interface. A separate session hijacking page tricked users into pasting a raw JSON token payload, which bypassed password and MFA controls.

Google documents a division of labour between criminals who gain initial access and 'LLM Mixers' who run monetisation infrastructure such as the token routing service Jet Night. Jet Night sells an unlimited frontier-model plan for about $60 a month, well below the $100 to $250 Google says is typical. Google believes the service only turns a profit on stolen keys.

Google expects criminals to prioritise LLMJacking over cryptojacking. Its recommended defences are least-privilege permissions for users and service accounts, a centralised secrets management platform with rotation, and automated secrets scanning in codebases to catch API keys committed to source.
