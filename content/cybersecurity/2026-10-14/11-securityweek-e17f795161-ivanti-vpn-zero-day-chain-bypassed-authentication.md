---
id: e17f795161
title: Ivanti VPN zero-day chain bypassed authentication on fully patched systems
original_title: Ivanti Zero-Day Chain Gave Attackers Root Access to Fully Patched VPN
url: >-
  https://www.securityweek.com/ivanti-zero-day-chain-gave-attackers-root-access-to-fully-patched-vpn/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-10-14"
published_at: "2026-10-13T18:43:43.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - ivanti
  - zero-day
  - authentication-bypass
  - vpn
  - root-access
  - incident
  - news
why_read: >-
  Understand how a VPN perimeter defence was fully compromised and what post-exploitation techniques
  the attackers employed.
rank: 11
interest_score: 7.7
depth_score: 7
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Ivanti Connect Secure VPN appliances were exploited by threat actor UTA0576 using a chain of three zero-day vulnerabilities. CVE-2026-104935 covers an authentication bypass and remote code execution flaw that allowed unauthenticated root-level access to fully patched devices. Two vulnerabilities have been patched in versions 22.8R2.5, 25.1.1.2, 25.1.3.0, and 25.1.3.1. A third privilege escalation flaw remains unpatched.

The attack demonstrates a production risk for VPN appliance operators. An unauthenticated attacker could gain root access regardless of patch status, making network perimeter defence through Ivanti devices unreliable during the disclosure window.

Once inside, the attackers stole domain credentials and Active Directory metadata, searched for LAPS passwords and BitLocker keys, and ran password-spraying attacks. They tampered with logs and scanned the network, suggesting preparation for lateral movement before the incident was detected and disrupted.
