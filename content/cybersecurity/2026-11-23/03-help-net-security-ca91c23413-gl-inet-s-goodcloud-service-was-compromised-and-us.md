---
id: ca91c23413
title: GL.iNet's GoodCloud service was compromised and used to push malware to routers and KVMs
original_title: GL.iNet cloud compromise hits routers and KVMs, older backdoors also found
url: https://www.helpnetsecurity.com/2026/11/23/gl-inet-cloud-compromise-malware-backdoors/
source: Help Net Security
kind: news
section: incidents
date: "2026-11-23"
published_at: "2026-11-23T15:05:50.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - gl-inet
  - goodcloud
  - router
  - kvm
  - backdoor
  - supply-chain
  - news
why_read: >-
  It gives the indicators of compromise, the partner's infection figures, and the remediation
  caveats for anyone running GL.iNet routers or KVMs with GoodCloud enabled.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Attackers compromised GoodCloud, GL.iNet's cloud remote management service, through an unspecified cloud vulnerability found on 20 November 2026. They used it to install malware on connected routers and KVM devices. GL.iNet has fixed the cloud side, is still investigating, and has not said how many devices are affected.

The cloud fix does not clean infected devices. GL.iNet says the latest stable firmware removes that malware without a factory reset. The known indicator is a process running as crond -i /tmp/.log, but the company admits other indicators exist that its official quick checks miss. A community script covers more, and GL.iNet says neither approach guarantees a clean device.

RemoteToHome Consulting, a GL.iNet services partner, checked 199 routers it manages. Of 166 showing the 20 November attack, an older backdoor, or both, 24 had a root remote shell, 49 had an older backdoor running, and 93 more had an attacker command run as root. It could not determine how the older backdoors arrived. It also published an analysis of a command injection flaw in the GoodCloud client that it believes was the entry point. GL.iNet has not confirmed this.

With root access, an attacker could copy every key, password and profile on the device. RTH warns that reinstalling the router does not undo that, so credentials must be rotated. Owners of infected KVMs should also inspect the attached computer for unfamiliar programs, accounts, startup items and network activity.
