---
id: 37f1f11c32
title: Government and finance organisations targeted in weeks-long NetScaler zero-day attacks
original_title: Government, Finance Orgs Targeted in Weeks-Long NetScaler Zero-Day Attacks
url: >-
  https://www.securityweek.com/government-finance-orgs-targeted-in-weeks-long-netscaler-zero-day-attacks/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-10-01"
published_at: "2026-09-30T12:48:20.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - netscaler
  - rce
  - zero-day
  - web-shell
  - lateral-movement
  - supply-chain
  - news
why_read: >-
  Learn what attackers did post-compromise and what detection indicators Mandiant and GreyNoise
  observed.
rank: 4
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Citrix patched two critical NetScaler vulnerabilities, CVE-2026-88771 and CVE-2026-88772, affecting ADC and Gateway instances after Google Threat Intelligence and Mandiant documented in-the-wild exploitation dating to early September. The flaws enable unauthenticated remote code execution. Dozens of organisations across government, finance, education, legal and professional services in North America and Europe have been compromised.

Your NetScaler appliances are a direct pivot point into internal networks. Attackers gain root access, plant web shells, then use custom tools named WHIPSHOT and SLAPSHOT to tunnel into your systems for reconnaissance, lateral movement and credential theft. At least one victim organisation saw manual exploration and theft of credentials through the tunnel.

Mandiant expects broad opportunistic exploitation by multiple threat actors in coming weeks. Security researcher Kevin Beaumont tracked over 100 victim organisations as of the disclosure date, with suspected state-sponsored actors involved in the campaign.
