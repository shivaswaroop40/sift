---
id: 2c4cd44435
title: pCloud confirms attack on its Pass password manager after users report unknown device logins
original_title: pCloud confirms password manager hack after suspicious login alerts
url: >-
  https://www.bleepingcomputer.com/news/security/pcloud-confirms-password-manager-hack-after-suspicious-login-alerts/
source: BleepingComputer
kind: news
section: incidents
date: "2026-11-28"
published_at: "2026-11-27T19:26:04.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - pcloud
  - password-manager
  - data-breach
  - 2fa
  - credential-security
  - news
why_read: >-
  You get the reported indicators, pCloud's claims about what was and was not exposed, and the open
  question on vault theft that determines how much risk users carry.
rank: 3
interest_score: 6.7
depth_score: 5
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Users of pCloud Pass received alerts that a new device named "pd" had connected to their accounts from 45.131.244.7 in Luxembourg, an address users say belongs to pCloud's own infrastructure. Some had 2FA enabled. Some found no unfamiliar device listed. Others got alerts despite never using the product.

pCloud confirmed a cyberattack on Pass, saying it was promptly contained. It said a small number of user email addresses were exposed and login attempts were made. It says cloud storage was unaffected and that vault contents stay encrypted on customers' devices, readable only with master passwords.

pCloud did not say whether encrypted vaults were accessed or stolen. That gap matters because stolen vaults can be cracked offline, free of rate limits and 2FA, as happened after the 2022 LastPass breach. The alert emails also linked to passqa1.pcloud.com, which looks like a QA environment.

The company mentioned AI speeding up vulnerability discovery but did not say this attack was AI-powered. The incident follows an mSecure database theft and a 1Password breach this month, in which 1Password said vaults and keys were not compromised.
