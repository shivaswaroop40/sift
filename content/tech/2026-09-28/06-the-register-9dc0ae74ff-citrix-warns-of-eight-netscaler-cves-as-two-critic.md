---
id: 9dc0ae74ff
title: Citrix warns of eight NetScaler CVEs as two critical flaws face active exploitation
original_title: "Certainties in life: Death, taxes, and critical Citrix vulns under attack"
url: >-
  https://www.theregister.com/security/2026/09/28/certainties-in-life-death-taxes-and-critical-citrix-vulns-under-attack/5299369
source: The Register
kind: news
section: security
date: "2026-09-28"
published_at: "2026-09-28T06:49:03.000Z"
authors: []
comments: null
tags:
  - citrix
  - netscaler
  - cve
  - patching
  - rce
  - cisa
  - news
why_read: >-
  Get the full CVE list, CVSS scores, attack details, and detection guidance for an actively
  exploited NetScaler patch cycle.
rank: 6
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Citrix disclosed eight NetScaler vulnerabilities on Sunday, with CVE-2026-88771 and CVE-2026-88772 rated critical at CVSS 9.5 and confirmed under active attack. CVE-2026-88771 permits unauthenticated remote code execution, while CVE-2026-88772 is a memory overflow that can lead to remote code execution or denial of service.

CISA issued a Sunday alert confirming global exploitation and noting that patching NetScaler appliances can require downtime. A third critical issue, CVE-2026-88773 at CVSS 9.3, enables HTTP request smuggling that can bypass front-end security controls.

The remaining five bugs include three 8.8-rated memory overflow flaws that can crash appliances, an 8.8-rated TCP ISN prediction issue, and a 7.0-rated feature policy bypass. Citrix has shipped OS refreshes containing fixes, with detection and patch guidance in its bulletin.

NetScaler has appeared on the Five Eyes most-exploited list annually from 2020 to 2023, and Citrix has disclosed critical, quickly-attacked flaws in 2023, twice in 2025, and March 2026.
