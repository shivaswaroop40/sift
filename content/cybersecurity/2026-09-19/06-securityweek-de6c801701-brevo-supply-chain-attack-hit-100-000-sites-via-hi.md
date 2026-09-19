---
id: de6c801701
title: Brevo supply chain attack hit 100,000 sites via hijacked Cloudflare API key
original_title: Brevo Supply Chain Attack Injects Malware Into 100,000 Websites
url: https://www.securityweek.com/brevo-supply-chain-attack-injects-malware-into-100000-websites/
source: SecurityWeek
kind: news
section: cloud-and-supply-chain
date: "2026-09-19"
published_at: "2026-09-18T09:46:57.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - supply-chain
  - brevo
  - cloudflare
  - clickfix
  - wordpress
  - saml
  - news
why_read: >-
  You'll see how a stolen Cloudflare API key turned a single vendor breach into malware on 100,000
  downstream sites, and what to check on your own.
rank: 6
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Brevo was first breached on 10 September when an attacker exploited a flaw in its SAML SSO handling to access 138 accounts, including one belonging to Trezor. The attacker sent phishing emails from six accounts and exported contacts from 43. Brevo revoked access, but the attacker returned on 14 September using a compromised long-lived Cloudflare API key.

The second intrusion deployed a Cloudflare Worker that injected malicious JavaScript into brevo.com, sibforms.com, and three customer-facing embed scripts. The code served selected visitors a fake Cloudflare CAPTCHA instructing them to run a command, a ClickFix social-engineering technique. On WordPress sites embedding a Brevo widget, the script attempted to install a plugin when an administrator was logged in.

The malicious worker ran for about five and a half hours before removal. Sansec estimates the malware was served for roughly four hours and impacted more than 100,000 websites. Brevo says no malicious content appeared on customer-facing pages before 14 September and the API key was first misused in late August.
