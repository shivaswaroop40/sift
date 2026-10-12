---
id: 04e7ef9135
title: SonicWall SMA 1000 critical flaw attacked 135 times within days of patch
original_title: Critical SonicWall SMA 1000 Flaw Targeted in 135 Exploitation Attempts After Patch
url: https://thehackernews.com/2026/10/critical-sonicwall-sma-1000-flaw.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-12"
published_at: "2026-10-12T10:36:56.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - sonicwall
  - sma-1000
  - ssrf
  - cve-2026-102255
  - exploit
  - remote-access
  - news
why_read: >-
  Understand the exploit chain and timeline to prioritise patching your remote access
  infrastructure.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Attackers exploited CVE-2026-102255, a CVSS 10.0 pre-authenticated server-side request forgery in SonicWall SMA 1000 appliances, within days of the vendor's disclosure. Researchers observed 135 exploitation attempts against the vulnerable devices.

This matters because SMA 1000 appliances are remote access gateways handling sensitive traffic. A pre-auth SSRF lets attackers bypass the appliance entirely and direct it to fetch internal resources or issue requests on the attacker's behalf, potentially compromising networks behind the device.

The flaw requires no credentials, making patching urgent. Organisations running unpatched SMA 1000 units should assume active targeting has begun.
