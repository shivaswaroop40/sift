---
id: de592a8dfd
title: Hijacked DebugBear script stole about $2.7 million from Polymarket traders
original_title: Hackers Steal About $2.7 Million From Polymarket Traders via Hijacked DebugBear Script
url: https://thehackernews.com/2026/11/hackers-steal-about-27-million-from.html
source: The Hacker News
kind: news
section: incidents
date: "2026-11-01"
published_at: "2026-11-01T07:25:40.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - supply-chain
  - cryptocurrency
  - web-security
  - polymarket
  - script-hijacking
  - news
why_read: >-
  The original gives the theft date, the refund and wallet counts, and what is known about the
  hijacked DebugBear script.
rank: 4
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

On 29 October, malicious code on prediction market Polymarket's website sold some signed-in traders' positions and moved their funds to the attackers. The code had replaced a page-speed script the site loaded from outside company DebugBear. Polymarket says it is refunding about $2.7 million to 726 affected wallets. Blockchain records show roughly $2.64 million in crypto from the incident.

The compromise shows what a hijacked third-party script can do. Vendor code loaded into a page runs alongside the site's own code and can act within the signed-in session. Here that access was enough to sell positions and move funds as the affected users. Any platform that loads external scripts for signed-in customers carries the same exposure, whatever its own server security.

The report does not say how the DebugBear script was replaced, whether through a breach of the vendor or of the path serving Polymarket's pages. That gap matters for assessing the same risk elsewhere. The refund also runs slightly above the roughly $2.64 million traced on-chain.
