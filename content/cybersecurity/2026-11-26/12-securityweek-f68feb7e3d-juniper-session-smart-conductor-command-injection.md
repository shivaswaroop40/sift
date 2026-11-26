---
id: f68feb7e3d
title: Juniper Session Smart Conductor command injection flaw is now exploited in attacks
original_title: Critical Juniper Session Smart Conductor Flaw Exploited in Attacks
url: https://www.securityweek.com/critical-juniper-session-smart-conductor-flaw-exploited-in-attacks/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-11-26"
published_at: "2026-11-26T13:04:06.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - juniper
  - session-smart-conductor
  - cve-2026-103406
  - command-injection
  - cisa-kev
  - actively-exploited
  - news
why_read: >-
  The piece gives the CVE, the fixed versions and the KEV deadline, so you can check your Conductor
  deployments against them.
rank: 12
interest_score: 7
depth_score: 5
novelty_score: 7
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Juniper Networks and CISA have warned that attackers are exploiting CVE-2026-103406, a critical OS command injection bug (CVSS 9.8) in Session Smart Conductor. The flaw sits in the AutomatedProvisioner service. A specially crafted Salt minion ID, which is a router's unique ID when it registers with the Salt master, can lead to arbitrary command execution as root.

Juniper patched the bug on October 28 with 17 other flaws in Session Smart Router and Conductor. On Tuesday it updated its advisory to say at least one instance of malicious exploitation had been reported to its SIRT. CISA added the bug to its KEV catalog on Wednesday and set a three-day deadline for federal agencies under BOD 26-04.

Conductor orchestrates and manages Session Smart Routers across a network, so root access on it is a serious position for an attacker. The fixed releases are 7.2.3, 7.1.7 and 7.0.5. Juniper urges an upgrade as soon as possible, and mitigation steps in the interim. The source gives no detail on who is exploiting the flaw or how widely.
