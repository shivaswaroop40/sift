---
id: 212ac414a1
title: Researchers chain 37-year-old OpenBSD integer overflow with kernel flaw for root access
original_title: Researchers Demonstrate OpenBSD Root Exploit Chaining 37-Year-Old Shared-Memory Bug
url: https://thehackernews.com/2026/10/researchers-demonstrate-openbsd-root.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-17"
published_at: "2026-10-16T17:48:45.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - openbsd
  - privilege-escalation
  - kernel
  - integer-overflow
  - mitigation-bypass
  - news
why_read: See how kernel mitigations fall to chained exploitation of old and new bugs.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A local privilege escalation exploit gains root on OpenBSD 7.9 by chaining an integer overflow bug dating back 37 years with a separate kernel vulnerability. The attack bypasses KARL randomization and SMAP and SMEP hardware protections.

This matters because it shows that ancient bugs in core system code remain exploitable when combined with newer flaws, even with modern mitigations in place. Local attackers can escalate to root on current systems.

The vulnerability requires local access. Calif reported the flaws to OpenBSD before publishing the writeup and proof-of-concept code.
