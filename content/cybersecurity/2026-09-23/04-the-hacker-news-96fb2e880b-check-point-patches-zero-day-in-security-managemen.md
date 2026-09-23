---
id: 96fb2e880b
title: Check Point patches zero-day in Security Management Server exploited in July attacks
original_title: Check Point Warns of Management Server Zero-Day Exploited in Targeted Attacks
url: https://thehackernews.com/2026/09/check-point-warns-of-management-server.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-23"
published_at: "2026-09-22T18:29:39.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - check-point
  - zero-day
  - cve-2026-93616
  - firewall
  - patch
  - apt-get
  - news
why_read: >-
  You will learn the CVE, exploitation window and patching status for a zero-day in Check Point's
  policy management plane.
rank: 4
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Check Point disclosed a previously unknown flaw, CVE-2026-93616, in its Security Management Server that was exploited in a small number of targeted attacks on July 23. The vulnerability allows an attacker with access to the server's web service to run scripts without authentication.

The company released a fix on September 22 for the component that manages firewall policies across Check Point deployments. Security engineers running on-premise management servers should confirm whether their appliance is exposed to the public internet, since the flaw is reachable through the web service.

The disclosure does not name the threat actor and the source text is truncated, so details on the attack method and indicators of compromise are not provided.
