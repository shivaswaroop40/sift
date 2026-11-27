---
id: aaa13ee930
title: Unpatched Cacti zero-day gives remote code execution through guest access
original_title: Unpatched Cacti Zero-Day Enables RCE in Just Four HTTP Requests via Guest Access
url: https://thehackernews.com/2026/11/unpatched-cacti-zero-day-enables-rce-in.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-27"
published_at: "2026-11-27T05:48:20.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - cacti
  - zero-day
  - rce
  - unauthenticated
  - network-monitoring
  - poc
  - news
why_read: >-
  The original should hold the full exploit chain and affected versions, which this truncated
  excerpt does not include.
rank: 1
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Details have emerged of a zero-day vulnerability in Cacti, the open-source network monitoring tool, that could allow remote code execution. The proof-of-concept exploit has no CVE identifier yet. It is tracked as 4HTTP2SHELL and 4HTTP2ROOT, and the headline says it needs four HTTP requests via guest access.

The researcher quoted in the source says they found a path from a fresh, unauthenticated HTTP session to command execution as the Cacti server. The source text is cut off at that point, so the mechanism, affected versions and any privilege escalation to root are not described here.
