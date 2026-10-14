---
id: b4512d9a70
title: Three chained Ivanti zero-days let attackers reach root on patched VPN appliances
original_title: Attackers chained three Ivanti zero-days to gain root on fully patched VPN appliances
url: https://www.helpnetsecurity.com/2026/10/14/ivanti-zero-days-gain-root-patched-vpn-appliances/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-10-14"
published_at: "2026-10-14T08:59:19.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - ivanti
  - zero-day
  - rce
  - vpn
  - root-access
  - active-exploitation
  - news
why_read: >-
  Learn how a multi-stage zero-day chain bypasses patched defences and what forensic evidence to
  hunt for.
rank: 6
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Threat actor UTA0576 exploited three zero-day vulnerabilities in Ivanti Connect Secure appliances in early October 2026 to compromise fully patched systems running version 22.8R2.4. The chain combined authentication bypass in welcome.cgi, file write flaw in wu.cgi, and privilege escalation via DSCache configuration trust to execute commands as root.

Production VPN appliances are now a proven path to full network compromise. Attackers extracted credentials, Active Directory metadata, BitLocker keys, and LDAP traffic, then modified logs to cover their tracks. This affects organizations that believed current patches protected them.

Ivanti patched the authentication bypass and RCE portion but a fix for privilege escalation is still pending. Volexity notes the exploit modifies only in-memory code, so Ivanti's Integrity Checker Tool cannot detect it. Forensic investigation is required to identify compromise.
