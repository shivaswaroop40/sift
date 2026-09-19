---
id: 040c23b568
title: Check Point patches critical stack buffer overflow in Security Management Server login
original_title: New Check Point flaw lets hackers execute code with root privileges
url: >-
  https://www.bleepingcomputer.com/news/security/check-point-warns-critical-flaw-lets-hackers-execute-code-as-root/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-19"
published_at: "2026-09-18T09:34:33.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - check-point
  - rce
  - buffer-overflow
  - vulnerability
  - patch
  - security-management
  - news
why_read: >-
  You will get a concrete rundown of a new critical Check Point RCE, the practical mitigations, and
  how it sits alongside other recently patched and actively exploited flaws in the same product
  line.
rank: 11
interest_score: 6.7
depth_score: 6
novelty_score: 6
utility_score: 8
scored: true
model: minimax-m3
---

Check Point has released updates for CVE-2026-91843, a critical stack-based buffer overflow in the login process of Security Management Server and Log Server instances. Successful exploitation gives an unauthenticated attacker root remote code execution on the management system.

The flaw requires low attack complexity and no user interaction. Check Point says all Security Management Server deployments are vulnerable regardless of configuration, including systems where VPN is not in use. A LivePatch is available, with mitigations including restricting access via SmartConsole's Trusted Clients settings.

Attacks can be detected by watching for 'Administrator failed to log in: Username too long' entries in Audit and Admin login logs. The vulnerability has not yet been flagged as actively exploited, but Check Point has confirmed in-the-wild abuse of two prior authentication bypass zero-days, CVE-2026-16232 and CVE-2026-50751, by ransomware affiliates since June and July.

The same patch cycle also addresses CVE-2026-85103, a heap overflow in VPN certificate ASN.1 decoding, and CVE-2026-85102, an authentication bypass on firewalls. The Dutch NCSC has warned that exploitation of those two VPN flaws is imminent.
