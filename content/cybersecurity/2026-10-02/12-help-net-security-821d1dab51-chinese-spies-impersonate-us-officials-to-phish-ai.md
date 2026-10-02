---
id: 821d1dab51
title: Chinese spies impersonate US officials to phish AI policy experts
original_title: Chinese spies impersonate White House, Anthropic figures to phish AI policy experts
url: https://www.helpnetsecurity.com/2026/10/02/china-aligned-ta419-phishing-ai-policy-experts/
source: Help Net Security
kind: news
section: threat-research
date: "2026-10-02"
published_at: "2026-10-02T10:21:55.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - phishing
  - ai-policy
  - china
  - credential-theft
  - mfa-bypass
  - espionage
  - news
why_read: >-
  Learn the multi-stage phishing mechanism targeting policy experts and how the attackers bypass
  MFA.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

TA419, a China-aligned group, ran phishing campaigns in July 2026 targeting US AI policy experts by impersonating a former White House science official and an economist. Earlier, in February, the group posed as an Anthropic employee to target a think tank analyst, referencing Claude's military use.

These campaigns matter because they aim to extract intelligence on US AI policy and regulation during intense US-China strategic competition over model access and export controls. Compromised cloud accounts give attackers direct access to policy deliberations and experts' communications.

The phishing kit uses a multi-stage attack: initial emails invite targets to join committees, follow-up messages contain shortened URLs leading to fake OneDrive pages, and a browser-in-the-browser tool captures credentials and MFA codes. The kit relays all authentication data to Microsoft's servers, then harvests session cookies for account takeover.

TA419 uses Cloudflare to mask backend IPs and registers domains via NameSilo, often themed around file sharing or cloud services. The group has previously impersonated the Heritage Foundation and Japanese officials.
