---
id: dfea42a41e
title: Ivanti patches two more Connect Secure zero-days used to root fully patched VPNs
original_title: Ivanti Patches Two More Zero-Days Exploited in Connect Secure Attack Chain
url: >-
  https://www.securityweek.com/ivanti-patches-two-more-zero-days-exploited-in-connect-secure-attack-chain/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-11-02"
published_at: "2026-11-02T07:57:49.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - ivanti
  - connect-secure
  - zero-day
  - vpn
  - privilege-escalation
  - kev
  - news
why_read: >-
  The original spells out the CVSS scores, affected and fixed versions, CISA KEV deadlines and
  Volexity's UTA0576 attribution.
rank: 4
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: glm-5.3
---

Ivanti has patched two more zero-days in Connect Secure, CVE-2026-111357 and CVE-2026-118527, both exploited in the wild alongside the CVE-2026-104935 authentication bypass disclosed on 13 October. The first, rated 8.8, stems from missing authentication on a critical function and lets an authenticated attacker with local access elevate privileges. The second, rated 4.3, involves predictable identifiers, allowing an authenticated attacker to remotely upload chosen file content to a known disk location.

Fixes land in versions 25.1.1.3 and 22.8R2.6. The newest affected releases, 25.1.1.2 and 22.8R2.5, are the exact builds that patched CVE-2026-104935, so organisations that upgraded after the initial advisory must upgrade again. Chaining the three flaws gave attackers unauthenticated code execution with root privileges on a fully patched appliance. CISA added both bugs to its KEV catalog, with federal deadlines of 2 November and 13 November.

Volexity uncovered the exploitation and attributes it to a previously unknown actor it tracks as UTA0576, assessed with low confidence as criminally motivated. The attackers stole credentials, exfiltrated data, scanned networks and tampered with logs. Volexity saw the first signs on 3 October, while Defused reported hits on its decoys from 1 October, before disclosure. Ivanti says a limited number of customers were affected.
