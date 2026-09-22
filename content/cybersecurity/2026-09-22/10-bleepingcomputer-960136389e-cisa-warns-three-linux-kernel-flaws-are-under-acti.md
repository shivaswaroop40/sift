---
id: 960136389e
title: CISA warns three Linux kernel flaws are under active exploitation
original_title: CISA alerts of active exploitation of three Linux kernel flaws
url: >-
  https://www.bleepingcomputer.com/news/security/cisa-alerts-of-active-exploitation-of-three-linux-kernel-flaws/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-22"
published_at: "2026-09-21T20:12:17.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - linux-kernel
  - cisa
  - vulnerability
  - privilege-escalation
  - tls
  - ebpf
  - news
why_read: >-
  You will learn which three kernel bugs are under attack, which have public exploits, and what to
  patch first.
rank: 10
interest_score: 7.7
depth_score: 7
novelty_score: 7
utility_score: 9
scored: true
model: minimax-m3
---

The US Cybersecurity and Infrastructure Security Agency has flagged three Linux kernel vulnerabilities as actively exploited. One, CVE-2025-39964, is rated critical and is a 14-year-old race condition in the AF_ALG cryptographic socket interface that can corrupt socket data or alter cipher results. The others are an out-of-bounds write in ebtables SNAT (CVE-2026-53266) and a TLS receive-path logic flaw in kTLS handling of zero-length records (CVE-2025-39682).

Federal agencies have been ordered to patch or mitigate by the end of the notification day, with CISA requiring triage of every affected asset to check for prior exploitation. Public exploit code exists for the TLS and ebtables issues, and STAR Labs demonstrated privilege escalation and container escape for the AF_ALG bug against Google's kernelCTF.

Defenders running Linux servers should prioritise these fixes now. Even without known ransomware linkage, kernel-level flaws with public exploits and demonstrated sandbox escapes are a realistic route from web foothold to host takeover, and the 14-year age of the AF_ALG issue means affected kernels span many supported distributions.
