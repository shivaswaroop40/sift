---
id: 17cb447edb
title: Cisco ISE authentication bypass flaw rated 10 out of 10 severity
original_title: Cisco Zero-Day Highlights API Endpoint Authentication Issues
url: >-
  https://www.darkreading.com/vulnerabilities-threats/cisco-zero-day-api-endpoint-authentication-issues
source: Dark Reading
kind: news
section: vulnerabilities
date: "2026-09-19"
published_at: "2026-09-18T19:26:47.000Z"
authors:
  - Rob Wright
comments: null
tags:
  - cisco
  - ise
  - cve-2026-76460
  - authentication-bypass
  - api
  - network-access-control
  - news
why_read: >-
  You will get the specific CVE, the affected product, and why an auth bypass on ISE API endpoints
  matters for network access control.
rank: 5
interest_score: 7.7
depth_score: 7
novelty_score: 7
utility_score: 9
scored: true
model: minimax-m3
---

CVE-2026-76460 is an authentication bypass in Cisco's Identity Services Engine that affects API endpoints, and carries the maximum CVSS score of 10 out of 10.

The issue sits in how ISE handles API endpoint authentication, allowing an unauthenticated attacker to bypass checks and act as a privileged user. ISE is widely used to enforce network access policy, so a flaw here undermines the layer that decides who can connect and what they can reach.

Practitioners running ISE should treat any exposed management or API interface as a critical asset and look for evidence of pre-patch exploitation while Cisco ships a fix.
