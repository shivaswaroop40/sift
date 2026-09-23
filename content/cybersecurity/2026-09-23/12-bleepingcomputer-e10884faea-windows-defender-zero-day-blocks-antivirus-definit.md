---
id: e10884faea
title: Windows Defender zero-day blocks antivirus definition and platform updates
original_title: New Windows Defender zero-day blocks Microsoft antivirus updates
url: >-
  https://www.bleepingcomputer.com/news/security/new-windows-defender-zero-day-blocks-microsoft-antivirus-updates/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-23"
published_at: "2026-09-22T09:55:11.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - windows
  - defender
  - zero-day
  - denial-of-defender
  - privilege-escalation
  - patch-tuesday
  - news
why_read: >-
  You'll see how a local-only Defender flaw can pin your endpoints to stale signatures and how it
  fits into a string of related disclosures.
rank: 12
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Security researcher Abdelhamid Naceri has published a proof-of-concept called BigDiskBuster that prevents Microsoft Defender from receiving platform and signature updates while the tool runs in the background. It works on all supported Windows versions, and Naceri describes it as buggy but functional.

The tool resembles UnDefend, an earlier Defender denial-of-defender flaw Naceri released in April that let standard users block updates. It does not give attackers code execution, but it does let anyone with local access freeze Defender's signatures, leaving endpoints exposed to new malware until the machine is rebooted or the process is killed.

Naceri has released close to a dozen Windows zero-days this year as part of an ongoing dispute with Microsoft, including SYSTEM-level privilege escalation chains such as ShieldCrash, ShieldBreak, and RoguePlanet. Microsoft has patched some of them but several, including this latest denial-of-defender issue, remain unpatched, and the company has warned of legal action against malicious use of the disclosures.
