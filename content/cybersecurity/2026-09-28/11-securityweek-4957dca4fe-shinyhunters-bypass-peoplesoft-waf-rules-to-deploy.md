---
id: 4957dca4fe
title: ShinyHunters bypass PeopleSoft WAF rules to deploy web shells at scale
original_title: Google Warns of ShinyHunters’ Fresh Oracle PeopleSoft Campaign
url: https://www.securityweek.com/google-warns-of-shinyhunters-fresh-oracle-peoplesoft-campaign/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-09-28"
published_at: "2026-09-28T10:56:46.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - peoplesoft
  - shinyhunters
  - waf-bypass
  - cve-2026-35273
  - web-shell
  - oracle
  - news
why_read: >-
  You will see exactly how a URL-encoding trick defeats WAF rules and what post-exploitation tooling
  to hunt for on PeopleSoft servers.
rank: 11
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Mandiant and Google Threat Intelligence Group warned that extortion group ShinyHunters (tracked as UNC6240) is running a fresh mass-exploitation campaign against Oracle PeopleSoft customers, targeting the PSEMHUB endpoint with a modified version of an exploit for CVE-2026-35273.

The attackers evade WAF and reverse proxy rules by inserting '%50', the URL-encoded form of 'P', into the request path. Many WAFs match the literal path before URL decoding, while the PeopleSoft application server decodes the request and routes it to the vulnerable servlet, so defenders who believed their WAF blocked the exposure are still reachable.

After gaining access, the group deploys two single-line JSP web shells, the SideEye backdoor on Windows servers, and uses the Neo-reGeorg tunneling toolkit and MeshCentral for lateral movement. They run commands as root or System, abusing PeopleSoft and WebLogic service accounts to reach configuration files and database connection strings.

Targets have expanded beyond the education sector hit in June to agriculture, government, healthcare, IT services, technology, and transportation. Google advises patching CVE-2026-35273, hunting for IoCs, and preparing for extortion, as UNC6240 follows a data-theft-and-leak model.
