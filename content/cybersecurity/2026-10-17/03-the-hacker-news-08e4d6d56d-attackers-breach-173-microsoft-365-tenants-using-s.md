---
id: 08e4d6d56d
title: Attackers breach 173 Microsoft 365 tenants using stolen ConnectWise backup credential
original_title: Hackers Use Compromised ConnectWise Credential to Sign In to 173 Microsoft 365 Tenants
url: https://thehackernews.com/2026/10/hackers-use-compromised-connectwise.html
source: The Hacker News
kind: news
section: incidents
date: "2026-10-17"
published_at: "2026-10-17T06:16:46.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - m365
  - supply-chain
  - connectwise
  - breach
  - msp
  - credential-theft
  - news
why_read: Learn how this breach works and what tenants should audit in their M365 logs.
rank: 3
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Unknown threat actors are using a compromised Microsoft 365 credential from ConnectWise Cloud Backup to gain unauthorized access to customer tenants. The campaign has affected 173 M365 environments so far. ConnectWise Cloud Backup is a backup and recovery service used by managed service providers.

This is a supply-chain attack vector. MSPs use ConnectWise to manage customer environments, so a single compromised credential grants access to multiple downstream organisations. An attacker with this foothold can move laterally through affected tenants.

The incident shows the risk of ambient credentials in third-party backup services. Defenders should assume any MSP-held credentials could be compromised and review M365 sign-in logs for suspicious ConnectWise authentication, especially from unusual locations or times.
