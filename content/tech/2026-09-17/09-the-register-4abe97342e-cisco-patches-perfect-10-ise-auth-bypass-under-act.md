---
id: 4abe97342e
title: Cisco patches perfect-10 ISE auth bypass under active attack
original_title: Cisco drops another exploited zero-day, this time a perfect 10
url: >-
  https://www.theregister.com/security/2026/09/17/cisco-drops-another-exploited-zero-day-this-time-a-perfect-10/5297180
source: The Register
kind: news
section: security
date: "2026-09-17"
published_at: "2026-09-17T12:40:00.000Z"
authors: []
comments: null
tags:
  - cisco
  - cve
  - ise
  - zero-day
  - authentication-bypass
  - patching
  - news
why_read: >-
  You get the concrete details of the actively exploited ISE zero-day, the patched versions, and the
  audit steps Cisco recommends.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: minimax-m3
---

Cisco disclosed CVE-2026-76460, an authentication bypass in Identity Services Engine and ISE-PIC that scored the maximum CVSS 10.0. The flaw lies in an API endpoint with insufficient authentication controls, letting an unauthenticated remote attacker send a crafted request to bypass the web management interface and gain root command execution. No credentials or user interaction are needed, and vulnerable versions are affected regardless of configuration.

Cisco's PSIRT confirmed active exploitation and CISA added the bug to the Known Exploited Vulnerabilities catalog. Cisco also warned that root access could let attackers remove or conceal traces of intrusion, complicating breach detection. Admins are urged to review ISE access logs for suspicious usernames across all distributed nodes and check external network and firewall logs for unexpected traffic.

Patches are available in ISE and ISE-PIC releases 3.1 Patch 12, 3.2 Patch 11, 3.3 Patch 12, 3.4 Patch 7 and 3.5 Patch 4. ISE 3.0 is out of maintenance and must be migrated. No workaround exists, though infrastructure ACLs can temporarily restrict management and control-plane traffic. Cisco found the bug while resolving a TAC support case and has not disclosed who is exploiting it or how long attacks have run.

The ISE advisory was part of a wider batch that included two other CVSS 10.0 flaws and three remote code execution bugs scoring up to 9.9. It lands days after another actively exploited critical bug, CVE-2026-76461, affecting Secure Email Gateway and Secure Email and Web Manager appliances.
