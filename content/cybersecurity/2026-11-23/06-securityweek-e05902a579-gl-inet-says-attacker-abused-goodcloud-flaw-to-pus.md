---
id: e05902a579
title: GL.iNet says attacker abused GoodCloud flaw to push malware to routers and KVMs
original_title: GL.iNet Routers, KVMs Compromised via Remote Management Service Flaw
url: https://www.securityweek.com/gl-inet-routers-kvms-compromised-via-remote-management-service-flaw/
source: SecurityWeek
kind: news
section: incidents
date: "2026-11-23"
published_at: "2026-11-23T13:26:22.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - gl-inet
  - goodcloud
  - router-malware
  - kvm
  - supply-chain
  - remote-management
  - news
why_read: >-
  The article gives GL.iNet's remediation steps and RemoteToHome's early analysis of the root cause,
  useful if you manage or have exposed these devices.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

GL.iNet has warned that a threat actor exploited a vulnerability in GoodCloud, its cloud-based remote management service, to deliver malware to some routers and Comet KVM devices. The vendor found the flaw on November 20 and has patched it. It is unclear who is responsible or how many devices were compromised.

The patch does not clean infected devices. Customers must install a separate security firmware to remove the malware. GL.iNet recommends doing this on all devices, including those with no signs of infection. For KVM users, it also advises checking connected computers for unfamiliar programs, extensions, accounts, startup items and unusual network activity.

RemoteToHome Consulting, which manages many GL.iNet routers, says the GoodCloud software on the routers ran commands from cloud messages without validating them. GL.iNet has not confirmed this. Most of the nearly 200 routers RemoteToHome checked appeared affected, either by this attack or by an older backdoor that seems to date to September 2025. How that backdoor was installed is unknown.

It is also unclear whether attackers reached computers attached to compromised KVMs. That matters because a KVM sits with full keyboard and display access to the host.
