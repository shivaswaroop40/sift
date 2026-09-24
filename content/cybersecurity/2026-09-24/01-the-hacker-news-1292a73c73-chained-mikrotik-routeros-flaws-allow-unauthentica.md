---
id: 1292a73c73
title: Chained MikroTik RouterOS flaws allow unauthenticated full takeover
original_title: MikroTrick Chain Let Attackers Take Over MikroTik Routers Without a Password or SSH Key
url: https://thehackernews.com/2026/09/mikrotrick-chain-let-attackers-take.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-24"
published_at: "2026-09-23T16:06:41.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - mikrotik
  - routeros
  - ssh
  - cve-2026-67279
  - cve-2026-86060
  - unauthenticated
  - news
why_read: >-
  You will see how two chained pre-auth flaws give full admin control of internet-exposed MikroTik
  routers and what to check before patching.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Two MikroTik RouterOS SSH vulnerabilities chained together let attackers take full administrative control of internet-exposed routers without a password, SSH key, or completed authentication. CERT Polska calls the chain MikroTrick. It combines an SSH state-machine flaw, tracked as CVE-2026-67279, with an argument-injection bug in the RouterOS login process, CVE-2026-86060.

For defenders, this matters because no credentials are needed and the routers are exposed directly to the internet, so any unpatched device is reachable by mass scanners. Full admin access means an attacker can rewrite firewall rules, pivot into LAN segments, or persist with the RouterOS admin account.

The article is truncated and does not state the affected RouterOS versions, the patch release date, or the earliest observed exploitation date. Practitioners should confirm the patched version against the MikroTik changelog before relying on the report.
