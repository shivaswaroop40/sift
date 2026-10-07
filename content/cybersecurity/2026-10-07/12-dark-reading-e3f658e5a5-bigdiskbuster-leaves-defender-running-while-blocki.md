---
id: e3f658e5a5
title: BigDiskBuster leaves Defender running while blocking security updates
original_title: "'BigDiskBuster' Leaves Microsoft Defender Running While Blocking Updates"
url: >-
  https://www.darkreading.com/application-security/bigdiskbuster-microsoft-defender-running-blocking-updates
source: Dark Reading
kind: news
section: defence
date: "2026-10-07"
published_at: "2026-10-06T16:59:24.000Z"
authors:
  - Alexander Culafi
comments: null
tags:
  - microsoft-defender
  - edr-evasion
  - windows-security
  - malware-detection
  - update-blocking
  - news
why_read: Learn how a running antivirus can silently stop protecting while appearing functional.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

A proof-of-concept technique called BigDiskBuster disables Microsoft Defender updates while keeping the service visibly active. The method requires no exploit or privilege escalation, creating a silent detection gap that allows malware to operate undetected.

For defenders, this matters because the attack bypasses the assumption that a running Defender service is actively protecting the system. An attacker can leave Defender in a frozen state where it appears operational to both users and monitoring tools, while malicious activity proceeds undetected.
