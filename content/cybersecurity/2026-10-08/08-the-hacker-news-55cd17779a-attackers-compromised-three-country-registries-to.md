---
id: 55cd17779a
title: Attackers compromised three country registries to issue certificates for Google domains
original_title: Attackers Hijack .gh, .sl, and .as Registries to Obtain Certificates for Google Domains
url: https://thehackernews.com/2026/10/attackers-hijack-gh-sl-and-as.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-10-08"
published_at: "2026-10-07T18:48:17.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - certificate-authority
  - registry-compromise
  - google
  - country-tld
  - https-hijacking
  - news
why_read: >-
  Learn how registry compromise enables certificate forgery against major domains and what this
  means for validation chains.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Attackers gained control of the .gh, .sl, and .as country-code registries and used this access to obtain unauthorized HTTPS certificates for Google domains. Google's infrastructure was not breached. The hijacked registries put all domains under those TLDs at risk.

Unauthorized certificates allow attackers to impersonate legitimate sites over encrypted connections, bypassing browser warnings. An attacker posing as Google could intercept traffic and steal credentials or session tokens from users who believe they are communicating securely.

The incident highlights how certificate authorities trust country registries to validate domain ownership. Compromise at registry level bypasses standard validation controls, making the attack effective against high-profile targets.
