---
id: 0d91b5c5bd
title: Trezor says 347,000 customers got phishing emails after Brevo hack
original_title: Trezor Says 347,000 Users Received Phishing Emails After Brevo Hack
url: https://www.securityweek.com/trezor-says-347000-users-received-phishing-emails-after-brevo-hack/
source: SecurityWeek
kind: news
section: incidents
date: "2026-09-12"
published_at: "2026-09-11T12:48:04.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - trezor
  - brevo
  - phishing
  - saml-sso
  - supply-chain
  - cryptocurrency
  - news
why_read: >-
  Learn how a SAML SSO misconfiguration in Brevo led to phishing emails sent to 347,000 Trezor
  customers.
rank: 12
interest_score: 5.3
depth_score: 5
novelty_score: 6
utility_score: 5
scored: true
model: deepseek-v4-flash
---

Trezor says roughly 347,000 customers received phishing emails after Brevo, the marketing platform it uses for newsletters, was hacked. Brevo said the attacker exploited its SAML single sign-on handling to access 138 accounts. The attacker created a Brevo account, enabled SSO, invited legitimate users into that configuration, and signed in as them using their own identity provider. The access was not scoped to a single organisation.

The phishing emails carried the subject line 'Critical Security Alert: STM32 Entropy Vulnerability' and linked to a malicious website. Trezor warned that customers could lose funds if they clicked and entered their wallet backup. About 2,500 users clicked before the site was taken offline 20 minutes after detection. It is unclear how many lost funds.

BitBox and CoinTracking also appear to have been affected by the Brevo hack, but have not shared details. The incident follows a Trezor data breach via shipping provider ShipMonk, which affected nearly 14,000 people and later an additional 67,000 US customers. Trezor says both incidents could lead to a surge in phishing attacks.
