---
id: 2d77429e79
title: Abandoned CDN domain re-registration leaves thousands of sites calling it
original_title: An Abandoned CDN Domain Was Re-Registered. Thousands of Sites Still Call It.
url: https://thehackernews.com/2026/09/an-abandoned-cdn-domain-was-re.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-09-19"
published_at: "2026-09-18T11:01:16.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - cdn
  - supply-chain
  - domain-takeover
  - hardcoded-references
  - javascript
  - news
why_read: It shows how stale hard-coded references turn expired domains into live attack infrastructure.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

In July 2025, someone re-registered a domain previously operated by a defunct content delivery network. The CDN had been wound down years earlier, but thousands of websites, code repositories, and documentation pages still contained hard-coded references to hostnames beneath it.

Whoever now controls the domain can serve arbitrary content to any client that resolves those stale hostnames. For defenders, this means an existing, actively used hostname has changed hands without notice, which is a supply-chain risk similar to the Magecart-style attacks on abandoned JavaScript endpoints.

The original reporting appears truncated, so the full mechanism by which the new owner can intercept or inject requests, and the scale of affected sites, is not visible in the available text.
