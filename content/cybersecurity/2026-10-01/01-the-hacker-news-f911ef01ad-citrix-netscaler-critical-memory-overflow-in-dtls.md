---
id: f911ef01ad
title: Citrix NetScaler critical memory overflow in DTLS handling actively exploited in wild
original_title: Citrix NetScaler CVE-2026-88772 Exploit Details Show Pre-Auth Path to Shellcode Execution
url: https://thehackernews.com/2026/09/citrix-netscaler-cve-2026-88772-exploit.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-01"
published_at: "2026-09-30T05:30:30.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - citrix
  - netscaler
  - rce
  - memory-overflow
  - dtls
  - unauthenticated
  - news
why_read: >-
  Learn the attack path and mechanism so you can prioritise patching and monitor for signs of
  exploitation.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

CVE-2026-88772 is a memory overflow flaw in DTLS protocol handling within Citrix NetScaler ADC and Gateway. The vulnerability carries a CVSS score of 9.5 and permits unauthenticated attackers to achieve shellcode execution on affected systems.

NetScaler devices are perimeter security appliances that often sit between the internet and production infrastructure. An unauthenticated remote execution flaw in this position represents a direct path to internal network compromise for any organisation running unpatched instances.
