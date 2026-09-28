---
id: f73c8d95ad
title: Citrix confirms two NetScaler RCE zero-days exploited in the wild
original_title: Citrix confirms two NetScaler RCE zero-days exploited in attacks
url: >-
  https://www.bleepingcomputer.com/news/security/citrix-admins-warned-to-shut-down-netscalers-over-2-exploited-zero-days/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-28"
published_at: "2026-09-27T16:02:37.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - citrix
  - netscaler
  - rce
  - zero-day
  - vulnerability
  - edge-security
  - news
why_read: >-
  You get confirmed CVE numbers, affected versions, exploitation status and the NCSC pre-warning
  context needed to prioritise patching edge appliances now.
rank: 6
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Citrix has confirmed that CVE-2026-88771 and CVE-2026-88772, both remote code execution flaws in NetScaler ADC and NetScaler Gateway, are being exploited as zero-days. CVE-2026-88771 stems from improper input validation and affects default deployments, while CVE-2026-88772 is a memory overflow exploitable when DTLS is enabled, on by default for VPN virtual servers. Both carry a severity score of 9.5, and Citrix's bulletin addresses six further NetScaler vulnerabilities.

NetScaler appliances are commonly deployed as internet-facing edge devices for remote access and application delivery, so a compromise gives attackers a perimeter foothold and a path into internal systems without first breaching an endpoint. The Dutch NCSC-NL sent pre-disclosure warnings to Dutch organisations after a European partner CERT reported active exploitation at multiple Citrix customers worldwide. The agency also warned that exploitation attempts are likely to rise once patches and technical details are public.

Patched builds are 14.1-73.37 for 14.1, 13.1-64.23 for 13.1, 14.1-73.37 FIPS, and 13.1-37.279 for FIPS and NDcPP, with Secure Private Access Hybrid deployments also affected. The bulletin covers only customer-managed appliances; Cloud Software Group is handling Citrix-managed cloud services. Administrators who cannot patch immediately are advised to reduce internet exposure of NetScaler instances until updates are applied.
