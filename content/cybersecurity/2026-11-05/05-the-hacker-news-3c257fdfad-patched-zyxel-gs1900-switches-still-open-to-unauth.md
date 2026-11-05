---
id: 3c257fdfad
title: Patched Zyxel GS1900 switches still open to unauthenticated command execution
original_title: Zyxel GS1900 Patch Fails to Block Zero-Day Exploit Allowing Root Command Execution
url: https://thehackernews.com/2026/11/zyxel-gs1900-patch-fails-to-block-zero.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-05"
published_at: "2026-11-05T07:06:33.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - zyxel
  - gs1900
  - zero-day
  - firmware
  - command-execution
  - patching
  - news
why_read: The original covers the new firmware for the 10 affected GS1900 models and the exploit it closes.
rank: 5
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Binarly researchers found that Zyxel GS1900 switches running the vendor's earlier fix for an actively exploited flaw remain open to the exploit attackers used. The flaw lets anyone who can reach a switch's web management interface run commands on it without logging in. Zyxel has released new firmware for 10 GS1900 models that closes the hole. The earlier fix is version 2.90.

If you applied the earlier patch and treated the switch as fixed, it is not. The web management interface runs commands without authentication, so any attacker with network access to it gets command execution on the switch. Apply the new firmware to the affected models. Until then, limiting which networks can reach the management interface reduces exposure.
