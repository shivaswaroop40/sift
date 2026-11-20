---
id: 5d8ac2c3c4
title: F5 ships emergency hotfixes for five critical BIG-IP APM and iRules overflow flaws
original_title: F5 releases emergency patches for critical BIG-IP RCE flaws
url: >-
  https://www.bleepingcomputer.com/news/security/f5-releases-emergency-patches-for-critical-big-ip-rce-flaws/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-11-20"
published_at: "2026-11-20T10:57:43.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - f5
  - big-ip
  - rce
  - buffer-overflow
  - patching
  - apm
  - news
why_read: >-
  The article gives the CVE list, F5's statement that no mitigation exists, and exposure figures to
  help you scope and prioritise BIG-IP patching.
rank: 12
interest_score: 6.3
depth_score: 5
novelty_score: 6
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

F5 has released out-of-band engineering hotfixes for five critical stack-based buffer overflows in BIG-IP: CVE-2026-121805, CVE-2026-120292, CVE-2026-120285, CVE-2026-116953 and CVE-2026-123637. They affect Access Policy Manager (APM) and iRules. Unauthenticated attackers can terminate the Traffic Management Microkernel (TMM) and may execute arbitrary code on systems with vulnerable configurations.

F5 also fixed a high-severity APM SAML flaw, CVE-2026-126822, an integer underflow that allows unauthenticated denial of service. F5 says traffic is disrupted while TMM restarts, and that the issues are data plane only, with no control plane exposure. It has no mitigations, so the hotfixes are the only fix.

Shadowserver tracks more than 177,000 BIG-IP instances and over 14,600 addresses with APM fingerprints exposed online. It is unclear how many are honeypots or already patched. F5 has not flagged these flaws as exploited.

The history argues for speed. CISA lists seven F5 flaws as exploited since November 2021, four used by ransomware gangs. A critical APM flaw, CVE-2026-94127, was exploited as a zero-day after a September patch. F5 also disclosed a state-backed breach that took BIG-IP vulnerability information.
