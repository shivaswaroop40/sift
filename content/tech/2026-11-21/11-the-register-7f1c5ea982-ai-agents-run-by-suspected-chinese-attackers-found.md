---
id: 7f1c5ea982
title: AI agents run by suspected Chinese attackers found and exploited a MONAI Label zero-day
original_title: >-
  China attackers deployed AI agents that autonomously found and exploited a 0-day to take over a
  university server
url: >-
  https://www.theregister.com/security/2026/11/20/china-attackers-deployed-ai-agents-that-autonomously-found-and-exploited-a-0-day-to-take-over-a-university-server/5311382
source: The Register
kind: news
section: security
date: "2026-11-21"
published_at: "2026-11-20T17:30:00.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - ai-agents
  - zero-day
  - cairn
  - monai-label
  - aws-threat-intelligence
  - security
  - news
why_read: >-
  The original has the attack timeline and the sequence of failed and successful techniques, which
  is useful for judging how far autonomous tooling can chain steps without a human.
rank: 11
interest_score: 6.3
depth_score: 5
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Amazon CISO CJ Moses reports that a China-linked attacker used Cairn, an open source penetration-testing framework, to run AI agents against universities in East Asia. The agents found a path traversal zero-day in MONAI Label, a medical imaging application, and took control of a server. The campaign began on 8 September and ran for 48 hours. Amazon notified the maintainers, who released a fix and advisory.

Before the zero-day, the agents spent about 16 hours and 148 actions on a university Redis server. They tried replication abuse, a scripting sandbox escape, config file writes and memory corruption. All failed. They then tried Log4Shell, an SSRF against a Qdrant instance and credential sprays against PostgreSQL and SSH. A separate six-hour operation sprayed a GPU server using 80 harvested user names.

Once the agents found the MONAI Label upload endpoint, they confirmed the filename parameter was vulnerable. Moses says it took about 11 minutes to go from API mapping to arbitrary file writes. They then ran a Python reverse shell as root. A human operator later supplied a proxy into a second university network with the same vulnerable code.

Amazon found the campaign through a publicly exposed Cairn server on 10 September. Gambit Security separately reported a Chinese operator using Cairn in at least 105 attacks, compromising at least 27 companies to varying degrees. Moses says the framework is now used for both espionage and crime.
