---
id: 1d265e4cf9
title: Citrix NetScaler attackers deploy web shells and extract configuration data
original_title: Citrix NetScaler Post-Exploitation Payload Creates Superuser, Maps Web Shell to CSS-Like URLs
url: https://thehackernews.com/2026/10/citrix-netscaler-post-exploitation.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-01"
published_at: "2026-10-01T04:35:34.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - citrix
  - netscaler
  - command-injection
  - web-shell
  - pre-auth
  - exploitation
  - news
why_read: >-
  Learn the post-exploitation techniques observed in active NetScaler attacks and what configuration
  data threat actors are targeting.
rank: 6
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Threat actors are exploiting a critical pre-authentication command injection flaw in Citrix NetScaler ADC and Gateway to install web shells and steal configuration files. LevelBlue's threat research team observed this activity across multiple customer environments.

The vulnerability allows unauthenticated code execution on a perimeter device that often holds credentials and access tokens to internal systems. Successful exploitation gives attackers a foothold to move laterally and access sensitive data.

Post-exploitation payloads create superuser accounts and map web shells to URLs disguised as CSS files to evade detection. This technique reduces the likelihood that security monitoring will flag the shells as web-based threats.
