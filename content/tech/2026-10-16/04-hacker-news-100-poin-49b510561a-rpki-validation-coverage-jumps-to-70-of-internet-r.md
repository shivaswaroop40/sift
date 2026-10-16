---
id: 49b510561a
title: RPKI validation coverage jumps to 70% of internet routes in one year
original_title: RPKI now protects 70% of internet routes
url: https://ipinfo.io/blog/rpki-protects-70-internet-routes
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-10-16"
published_at: "2026-10-16T00:52:35.000Z"
authors:
  - emot
comments: https://news.ycombinator.com/item?id=50112330
tags:
  - bgp
  - routing
  - rpki
  - ipv4
  - security
  - china
  - community
why_read: Learn whether RPKI actually stops route hijacks and which networks remain unprotected.
rank: 4
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

RPKI, which cryptographically authorizes which networks can announce specific IP address blocks, now protects 70% of routed IPv4 prefixes, up from 54% a year earlier. China accounted for most of the 16-percentage-point gain, jumping from 4% to 83% of its addresses in valid routes between September 2025 and September 2026.

For operators, RPKI's growth matters because invalid routes now barely propagate. Routes without RPKI records reach about 596 routers; those failing validation reach only two. Invalid announcements no longer travel far enough to cause widespread outages, making RPKI a functional brake on route hijacks and mistakes.

Nearly 60% of unprotected IPv4 space is in the United States, much of it Department of Defense space announced in 2021 for monitoring misuse. Outside China, adoption rose only five percentage points, suggesting the global jump reflects targeted regulatory or infrastructure changes in a few countries rather than organic growth.
