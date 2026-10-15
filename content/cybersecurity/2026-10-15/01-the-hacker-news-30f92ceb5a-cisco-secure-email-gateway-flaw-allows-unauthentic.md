---
id: 30f92ceb5a
title: Cisco Secure Email Gateway flaw allows unauthenticated file write and root command execution
original_title: Cisco Warns of Active Attacks Exploiting New Critical Secure Email Gateway Vulnerability
url: https://thehackernews.com/2026/10/cisco-warns-of-active-attacks.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-15"
published_at: "2026-10-14T18:38:56.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - cisco
  - email-gateway
  - remote-code-execution
  - unauthenticated
  - critical
  - news
why_read: >-
  Understand the attack mechanism and urgent action needed if you run Cisco email filtering
  appliances.
rank: 1
interest_score: 9
depth_score: 8
novelty_score: 9
utility_score: 10
scored: true
model: claude-haiku-4-5-20251001
---

Cisco has confirmed active attacks exploiting a critical vulnerability in Secure Email Gateway. An attacker with no login credentials can send a malicious email attachment through the gateway to write files to the operating system and execute commands as root.

This vulnerability is particularly dangerous because email gateways sit on the perimeter and see all inbound email traffic. Compromising the gateway gives attackers a privileged foothold inside the network from which to pivot further.

The attack requires only sending a crafted email, making exploitation trivial at scale. Organisations using this appliance should prioritise patching immediately.
