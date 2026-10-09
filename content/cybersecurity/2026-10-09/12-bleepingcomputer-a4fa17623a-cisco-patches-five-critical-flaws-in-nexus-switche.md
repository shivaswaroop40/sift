---
id: a4fa17623a
title: Cisco patches five critical flaws in Nexus switches enabling root code execution
original_title: Cisco warns of critical flaws allowing Nexus switch takeover
url: >-
  https://www.bleepingcomputer.com/news/security/cisco-warns-of-critical-flaws-allowing-nexus-switch-takeover/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-09"
published_at: "2026-10-08T15:26:33.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - cisco
  - nexus
  - nxos
  - critical
  - rce
  - network-infrastructure
  - news
why_read: >-
  Learn which Nexus deployments are exposed, what triggers each flaw, and interim defences if
  immediate patching is not possible.
rank: 12
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cisco disclosed five critical vulnerabilities in NX-OS affecting Nexus 3000 and 9000 Series switches. All stem from input validation failures in NX-API, NGOAM, and MPLS OAM features. Successful exploitation requires at least one of these features to be active and allows arbitrary code execution with root privileges or denial of service.

These flaws matter because Nexus switches are core to data centre networks. An attacker with code execution can fully compromise production infrastructure. NX-API is disabled by default, but NGOAM and MPLS OAM may be enabled in active deployments, particularly those using segment routing or network virtualisation.

Cisco discovered all five flaws internally and reports no active exploitation. Patches are available through the Software Checker tool. For systems that cannot yet upgrade, Cisco provides temporary Live Protect shields. Disabling unused features eliminates the attack vector if patching is delayed.
