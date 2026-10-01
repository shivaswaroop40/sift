---
id: 1b1aa9c63b
title: Cisco patches critical Catalyst SD-WAN authentication bypass under active exploit
original_title: Cisco Patches Exploited Catalyst SD-WAN Zero-Day Vulnerability
url: https://www.securityweek.com/cisco-patches-exploited-catalyst-sd-wan-zero-day-vulnerability/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-10-01"
published_at: "2026-10-01T08:26:03.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - sd-wan
  - authentication-bypass
  - zero-day
  - cve-2026-76504
  - cisco
  - active-exploit
  - news
why_read: >-
  Learn the patch versions needed and detection indicators for an actively exploited SD-WAN
  management vulnerability affecting all enterprises.
rank: 3
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cisco released patches for CVE-2026-76504, a critical authentication bypass in Catalyst SD-WAN Manager affecting all deployments. The flaw exploits improper URI encoding in HTTP requests to reach restricted API endpoints, allowing unauthenticated attackers to gain admin access. Cisco became aware of active exploitation in September 2026.

SD-WAN managers are high-value targets because they serve as single control points for enterprise network management and monitoring. This vulnerability is particularly dangerous because all versions are affected regardless of configuration, and no workarounds exist. CISA added it to its Known Exploited Vulnerabilities catalogue and mandated patching within three days for federal agencies.

Cisco SD-WAN has appeared eight times on the CISA KEV list in 2026 alone, indicating sustained attacker interest. Defenders should hunt for POST requests to URL-encoded variants of '/j_security_check' and review logs for signs of prior compromise.
