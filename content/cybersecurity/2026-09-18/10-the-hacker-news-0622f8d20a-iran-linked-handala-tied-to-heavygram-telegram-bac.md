---
id: 0622f8d20a
title: Iran-linked Handala tied to HEAVYGRAM Telegram backdoor that steals passwords
original_title: Iran-Linked Handala Hack Tied to HEAVYGRAM Telegram Backdoor That Can Steal Passwords
url: https://thehackernews.com/2026/09/iran-linked-handala-hack-tied-to.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-09-18"
published_at: "2026-09-17T14:03:13.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - iran
  - handala
  - telegram
  - backdoor
  - heavygram
  - dll-sideloading
  - news
why_read: >-
  You will see the concrete capabilities and tradecraft of a newly attributed Telegram-based
  backdoor, useful for tuning detections and hunting.
rank: 10
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Researchers have linked the Iran-linked hacktivist persona Handala Hack to a Telegram-based surveillance backdoor called HEAVYGRAM, alongside a Delphi-based utility known as CRUDEEXCLUDE. HEAVYGRAM offers built-in commands for remote command execution, system and network discovery, process enumeration, exfiltration of data and Telegram session files, screenshot capture, and DLL sideloading.

The backdoor's ability to steal Telegram session files means an attacker with access to a victim's machine can pivot into the victim's Telegram account, harvesting contacts and messages. DLL sideloading and remote command execution give the operator direct control of the host, which matters to defenders because the implant blends into legitimate Telegram client activity on disk and over the network.
