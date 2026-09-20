---
id: 95ac450130
title: WaterPlum hackers infected 30,000 devices in over 100 countries, advisory says
original_title: North Korean WaterPlum hackers infected 30,000 devices worldwide
url: >-
  https://www.bleepingcomputer.com/news/security/north-korean-waterplum-hackers-infected-30-000-devices-worldwide/
source: BleepingComputer
kind: news
section: incidents
date: "2026-09-20"
published_at: "2026-09-19T14:05:15.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - north-korea
  - cryptocurrency-theft
  - supply-chain
  - npm
  - fraudulent-it-workers
  - malware
  - news
why_read: >-
  You get the specific malware families, social engineering flow and pivot tactics used in a
  large-scale North Korean campaign, plus practical checks for catching fraudulent IT hires.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A joint advisory from Japanese, US, Australian and German authorities reports that North Korean group WaterPlum compromised at least 30,000 devices across more than 100 countries between December 2025 and July 2026, stealing credentials from over 7,000 cryptocurrency wallets and transferring 1.7 billion yen (about $10.7 million) to North Korea.

The campaign, tracked as Contagious Interview, targets job seekers through fake recruiters on freelance platforms and impersonated AI, crypto and NFT firms. Victims are tricked into downloading malicious npm packages, Visual Studio Code projects or running code during fake interviews, which drops BeaverTail, InvisibleFerret, OtterCookie, OtterCandy or StoatWaffle malware.

Once installed, the malware steals browser credentials, clipboard data, keystrokes, crypto keys and seed phrases, and screenshots. Attackers then pivot from compromised developer machines into employer networks for intellectual property theft, and reuse stolen identity documents to place North Korean IT workers at client companies, using AI face-swap software to pass interviews.

Japan's National Police Agency dismantled a North Korean laptop farm in the country for the first time. The advisory urges firms to verify job applicant identity and location, restrict access, and run any unfamiliar code in a sandbox before execution.
