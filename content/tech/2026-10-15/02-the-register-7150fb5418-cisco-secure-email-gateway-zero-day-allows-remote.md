---
id: 7150fb5418
title: Cisco Secure Email Gateway zero-day allows remote attackers to execute commands as root
original_title: Cisco make-me-root email bug exploited as a 0-day by unknown crims
url: >-
  https://www.theregister.com/security/2026/10/14/cisco-make-me-root-email-bug-exploited-as-a-0-day-by-unknown-crims/5303168
source: The Register
kind: news
section: security
date: "2026-10-15"
published_at: "2026-10-14T21:40:29.000Z"
authors: []
comments: null
tags:
  - cisco
  - email-security
  - remote-code-execution
  - zero-day
  - async-os
  - news
why_read: Learn the attack mechanism and required conditions if your infrastructure relies on Cisco SEG.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cisco has issued an emergency patch for CVE-2026-76519, a critical flaw in its Secure Email Gateway that allows unauthenticated attackers to execute arbitrary commands with root privileges by sending a malicious email. The vulnerability affects the Advanced Malware Protection feature and has a CVSS score of 9.8. Cisco and CISA both confirmed active exploitation before any patch was available.

For platform engineers running Cisco SEG appliances, this matters because the attack requires only sending an email and no authentication. The flaw exists in the File Reputation service within AMP, requiring the Content Scanner Tools to be below version 25.3.0.5525 to be exploited. Cisco recommends upgrading to AsyncOS Software 16.5.0-780 or later, with no workarounds available until patching.

This is the second critical SEG zero-day in two months, suggesting either systemic issues in the product or sustained attacker focus on Cisco email infrastructure. The company did not disclose how many appliances were compromised or what attackers did after gaining root access.
