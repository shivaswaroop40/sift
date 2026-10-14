---
id: bf5b288555
title: Ivanti Connect Secure authentication bypass exploited in active attacks
original_title: Ivanti warns of Connect Secure zero-day exploited in attacks
url: >-
  https://www.bleepingcomputer.com/news/security/ivanti-warns-of-connect-secure-zero-day-exploited-in-attacks/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-14"
published_at: "2026-10-13T15:45:50.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - ivanti
  - zero-day
  - authentication-bypass
  - rce
  - vpn
  - exploit
  - news
why_read: >-
  Learn the patch timeline, affected versions, and active exploitation techniques for this critical
  remote access gateway flaw.
rank: 9
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Ivanti has disclosed CVE-2026-104935, a high-severity authentication bypass in Connect Secure versions 22.8R2.4 and earlier, 25.1.2.2 and earlier, and 25.1.1.1 and earlier. The flaw allows unauthenticated remote code execution with low complexity and no user interaction. Cybersecurity firm Volexity discovered the zero-day being exploited by threat actor UTA0576 since at least October 3.

UTA0576 chained this vulnerability with two other flaws to achieve root-level code execution on fully patched devices. The actor re-exploited the device for every command and tampered with logs to avoid detection by Ivanti's Integrity Checker Tool. Shadowserver tracks over 5,500 ICS instances exposed online, though the number actively compromised remains unknown.

Connect Secure is an SSL VPN providing remote access for enterprise employees and contractors. Authentication bypass flaws in this product grant attackers direct entry to corporate networks, making it a frequent target. Ivanti has patched multiple Connect Secure zero-days in recent years, often exploited in coordinated campaigns.
