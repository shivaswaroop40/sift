---
id: 9671217e1c
title: D-Link warns of unpatched max-severity buffer overflow in DIR-822A routers
original_title: D-Link warns of max severity zero-day bug in DIR-822A routers
url: >-
  https://www.bleepingcomputer.com/news/security/d-link-warns-of-max-severity-zero-day-bug-in-dir-822a-routers/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-23"
published_at: "2026-09-22T12:48:06.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - d-link
  - router
  - buffer-overflow
  - dhcp
  - cve-2026-86296
  - cve-2026-86510
  - news
why_read: >-
  You will learn about two unpatched, publicly disclosed router flaws with working exploits and the
  mitigations D-Link recommends until patches ship.
rank: 11
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

D-Link has disclosed CVE-2026-86296, a maximum-severity stack-based buffer overflow in the DHCP server component (udhcpcd) of legacy DIR-822A dual-band Wi-Fi routers. The flaw is triggered by crafted DHCP packets sent without authentication on the local network and could allow remote code execution. A proof-of-concept exploit is already public, and no patch is available.

The company also flagged CVE-2026-86510, a critical out-of-bounds write in the L2TP control message parser affecting the same router line, with a separate public PoC. Both issues were reported by the same researcher and remain under investigation.

D-Link has not confirmed in-the-wild exploitation but warns that vulnerable D-Link devices are frequently recruited into DDoS botnets. CISA lists 26 D-Link flaws that have been abused, including two used by ransomware groups.

The vendor advised keeping DIR-822A routers off the public internet, disabling remote management, and restricting administrative access to trusted systems until fixes are released.
