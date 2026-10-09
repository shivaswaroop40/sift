---
id: b25ce425e7
title: OAuth grants accumulate faster than security teams can review them
original_title: OAuth grants pile up faster than you can review them. Here's how to keep up.
url: >-
  https://www.bleepingcomputer.com/news/security/oauth-grants-pile-up-faster-than-you-can-review-them-heres-how-to-keep-up/
source: BleepingComputer
kind: news
section: defence
date: "2026-10-09"
published_at: "2026-10-08T14:00:10.000Z"
authors:
  - Sponsored by Nudge Security
comments: null
tags:
  - oauth
  - grant-governance
  - access-control
  - saas-risk
  - identity-security
  - news
why_read: >-
  Learn why OAuth grants require dedicated governance separate from identity controls and what your
  team can audit without manual review.
rank: 5
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Employees routinely grant third-party apps access to corporate data via OAuth consent screens. Each grant creates a standing trust relationship independent of user authentication. At a typical 1,000-person company, 88,000 such grants exist, with 31,000 carrying direct access to sensitive data. A single compromised grant, like the OAuth token in the Vercel breach via Context.ai, can breach enterprise systems.

OAuth grants operate outside SSO and MFA controls. They persist after user credentials are disabled and can remain dormant for months while staying fully valid. Gartner forecasts 50% of SaaS breaches will stem from overprivileged OAuth tokens by 2027. Manual review of a single grant takes 45 minutes, making comprehensive auditing impossible at scale.

A thorough review requires checking vendor security history, verifying appropriate scopes, confirming business need with the grantor, and assessing their MFA status. No security team has the headcount to audit tens of thousands of grants this way. Automated risk scoring and analysis agents are essential to cover the full attack surface.
