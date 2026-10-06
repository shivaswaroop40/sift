---
id: 5b597a2e08
title: Rejetto HFS servers targeted by active scans for session forgery flaw
original_title: Rejetto HFS servers now actively scanned for critical RCE flaw
url: >-
  https://www.bleepingcomputer.com/news/security/rejetto-hfs-servers-now-actively-scanned-for-critical-rce-flaw/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-06"
published_at: "2026-10-05T20:20:05.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - rce
  - session-forgery
  - cryptography
  - rejetto-hfs
  - active-scanning
  - windows
  - news
why_read: >-
  Understand how weak randomness and information leakage combine to enable complete server
  compromise and see a real exploit chain.
rank: 8
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Hackers are scanning for CVE-2026-61500 in Rejetto HFS, a free file-sharing server for Windows, Linux and macOS. The flaw stems from weak session-cookie signing using Math.random() and leaks outputs to unauthenticated clients. An attacker collecting a few login responses can reconstruct the key, forge an admin session cookie, and achieve remote code execution.

The vulnerability chains a cryptographic weakness with information leakage. Rejetto HFS 3.0.0 through 3.2.0 are affected. Horizon3 researchers published proof-of-concept details on 30 September; probing activity from a China Telecom address followed, targeting deployments in Japan and the United States.

With admin access, an attacker can abuse the server's custom JavaScript execution feature to run arbitrary code. Possible exploitation scenarios include stealing files, installing malware, or pivoting to internal systems. Upgrade to version 3.2.1 or later immediately.
