---
id: 0b47550a72
title: SolarWinds patches hard-coded key flaw in Access Rights Manager enabling unauthenticated RCE
original_title: SolarWinds Patches ARM Hard-Coded Key Flaw Enabling Unauthenticated RCE
url: https://thehackernews.com/2026/09/solarwinds-patches-arm-hard-coded-key.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-20"
published_at: "2026-09-19T09:31:17.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - solarwinds
  - cve-2026-28326
  - access-rights-manager
  - rce
  - hard-coded-credentials
  - patch-tuesday
  - news
why_read: You will get the CVE, CVSS score, affected versions, and what to do next for SolarWinds ARM.
rank: 5
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

SolarWinds has released updates for Access Rights Manager to fix a high-severity flaw tracked as CVE-2026-28326 with a CVSS score of 8.8. The vulnerability stems from a hard-coded key and allows unauthenticated remote code execution. All ARM versions 2026.2 and prior are affected.

The flaw matters because an attacker does not need credentials or user interaction to run code on an ARM host. Access Rights Manager sits in identity and access management workflows and is typically reachable from internal networks, which raises the impact of a pre-auth RCE in that product. The high CVSS score reflects the ease of exploitation.

SolarWinds has not yet published further technical detail in the truncated advisory. Practitioners should patch ARM immediately and confirm that management hosts are not exposed to untrusted networks.
