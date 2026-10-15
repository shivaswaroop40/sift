---
id: 4d973d4877
title: Ivanti patches Connect Secure zero-day as attackers use it in the wild
original_title: Ivanti patches Connect Secure zero-day after researchers confirm in-the-wild attacks
url: >-
  https://www.theregister.com/security/2026/10/14/ivanti-patches-connect-secure-zero-day-after-researchers-confirm-in-the-wild-attacks/5303095
source: The Register
kind: news
section: security
date: "2026-10-15"
published_at: "2026-10-14T17:15:00.000Z"
authors: []
comments: null
tags:
  - ivanti
  - zero-day
  - authentication-bypass
  - credential-theft
  - patch-management
  - news
why_read: >-
  Understand a live zero-day affecting Connect Secure appliances and what the attack chain looked
  like.
rank: 3
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Ivanti released a patch for CVE-2026-104935, an authentication bypass in Connect Secure that allows unauthenticated remote code execution. Researchers at Volexity discovered the flaw and confirmed active exploitation by a previously unknown group tracked as UTA0576. The vendor said the attacks affected a limited number of customers.

For platform engineers running Ivanti appliances, this matters because the flaw is trivial to exploit and attackers are already weaponising it. The group pursued credential theft and data exfiltration rather than malware deployment, suggesting preparation for lateral movement. You need to patch immediately and check logs for signs of compromise.

Ivanti says it partially patched this vulnerability in July but had not finished backporting the fix before attackers began exploiting it. A separate privilege-escalation flaw tied to the same attack chain is still unpatched and will arrive in the coming weeks. This is the third consecutive year Connect Secure has faced zero-day exploitation.
