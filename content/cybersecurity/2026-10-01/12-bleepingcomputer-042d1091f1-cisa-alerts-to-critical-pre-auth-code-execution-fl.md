---
id: 042d1091f1
title: CISA alerts to critical pre-auth code execution flaw in MikroTik RouterOS
original_title: CISA warns of critical pre-auth RCE flaw in MikroTik RouterOS
url: >-
  https://www.bleepingcomputer.com/news/security/cisa-warns-of-critical-pre-auth-rce-flaw-in-mikrotik-routeros/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-01"
published_at: "2026-09-30T15:49:29.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - mikrotik
  - rce
  - pre-auth
  - cve-2026-84411
  - critical
  - news
why_read: >-
  Understand the scope and immediate mitigation steps for a critical pre-auth RouterOS vulnerability
  in your infrastructure.
rank: 12
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

CVE-2026-84411 is a pre-authentication integer underflow in MikroTik RouterOS web management that allows unauthenticated attackers to execute arbitrary code as root or cause denial of service with a single crafted HTTP request. Affected versions are below 7.24; MikroTik recommends updating to 7.23 or later.

RouterOS web management is commonly exposed to untrusted networks, making this pre-auth flaw immediately actionable for attackers without credential compromise. Botnet operators have repeatedly exploited MikroTik vulnerabilities; recent exploit chains gave full device control when SSH was internet-facing.

CISA has not reported active exploitation at publication, but advises keeping control systems offline, isolating networks behind firewalls, and using updated VPNs for remote access.
