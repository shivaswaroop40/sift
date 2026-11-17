---
id: bef79b875e
title: Google says an attacker's AI agent turned security patches into working exploits unaided
original_title: "Google: AI agent turned a security patch into a working exploit with no human help"
url: >-
  https://www.theregister.com/research/2026/11/16/google-ai-agent-turned-a-security-patch-into-a-working-exploit-with-no-human-help/5309926
source: The Register
kind: news
section: security
date: "2026-11-17"
published_at: "2026-11-16T14:00:00.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - security
  - ai-agents
  - exploits
  - patching
  - threat-intelligence
  - google
  - news
why_read: >-
  The original covers the exploit_agent setup and the other named offensive frameworks GTIG has seen
  in use, though it gives few technical details on exploit success rates.
rank: 8
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Google Threat Intelligence Group says a suspected Russian-speaking operator used an AI agent to turn security patches into working exploits with no human in the loop. GTIG calls it a first. The operator then stole data from victim organisations. The finding is in Google's fourth-quarter 2026 AI threat tracker.

GTIG found an exposed staging server running a multi-agent framework called exploit_agent. It works with several frontier and local models. It was set to run continuous differential analysis of popular web application software. That means comparing code before and after security updates, spotting flaws, writing exploits and running them automatically.

The server also held stolen victim data and several post-compromise scripts. These covered internal reconnaissance, brute-forcing, installing webshells and removing other attackers' webshells. Victim telemetry suggested interest in French media, entertainment and education sites.

The report adds that other actors are using autonomous offensive frameworks, including ARTEX, CAIRN, CyberStrikeAI, HexStrike AI and PentAGI. Users include criminals and suspected PRC-linked espionage groups. GTIG expects this to continue, citing low barriers to entry and easy scaling. That is a forecast, not a measurement.
