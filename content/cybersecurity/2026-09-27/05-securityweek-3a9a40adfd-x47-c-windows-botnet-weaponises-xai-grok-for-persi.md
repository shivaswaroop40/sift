---
id: 3a9a40adfd
title: x47.c Windows botnet weaponises xAI Grok for persistence and API credit theft
original_title: New x47.c Windows Botnet Weaponizes xAI Grok, AI API Draining
url: https://www.securityweek.com/new-x47-c-windows-botnet-weaponizes-xai-grok-ai-api-draining/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-09-27"
published_at: "2026-09-26T12:00:00.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - botnet
  - windows
  - ai-abuse
  - credential-theft
  - ddos
  - persistence
  - news
why_read: >-
  You will see how a commercial botnet turns paid AI APIs into both a DDoS weapon and a persistence
  tool, and what that means for monitoring AI spend and host integrity.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 9
utility_score: 7
scored: true
model: minimax-m3
---

Qrator has reported on x47.c, a Windows botnet advertised by a threat actor called WraithTools. It is sold as a base package for $200, with a DDoS add-on for $150 and the full kit for $950, and offers credential theft, SOCKS5 proxying and an "AI API drain" attack mode.

The botnet's command-and-control panel includes 18 DDoS methods, including one that consumes a victim's paid credits on OpenAI, xAI and compatible providers. Requests go directly to the provider, so the targeted site stays reachable while the account behind its AI features runs out of credits.

An "AI stealth" module uses xAI Grok to pick from a predefined list of persistence actions such as startup entries and scheduled tasks, with optional process hollowing and privilege escalation. The operator embeds an xAI key in the build, and status messages report Defender exclusions and local fallbacks when a model call fails.

Fast-flux C&C uses six domains and eight IP addresses. The panel also supports software updates and removal on infected hosts, a rootkit module for clearing rival malware, and harvesting of browser passwords, cookies, Discord tokens, wallet data and AI-site tokens.
