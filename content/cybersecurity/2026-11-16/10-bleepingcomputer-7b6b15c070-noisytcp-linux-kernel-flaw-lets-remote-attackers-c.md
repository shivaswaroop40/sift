---
id: 7b6b15c070
title: NoisyTCP Linux kernel flaw lets remote attackers crash servers with default Nginx, Apache or SSH
original_title: New NoisyTCP vulnerability lets attackers crash Linux servers
url: >-
  https://www.bleepingcomputer.com/news/linux/new-noisytcp-linux-kernel-flaw-lets-attackers-crash-servers/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-11-16"
published_at: "2026-11-16T09:30:04.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - linux-kernel
  - cve-2026-99288
  - noisytcp
  - denial-of-service
  - tcp
  - syn-cookies
  - news
why_read: >-
  The article gives the CVE, the race condition conditions for exploitation, and the two interim
  mitigations with their trade-offs if you cannot patch straight away.
rank: 10
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

An 11-year-old Linux kernel bug, named NoisyTCP and tracked as CVE-2026-99288, lets unauthenticated remote attackers crash a host. It is a NULL pointer dereference in the TCP subsystem, found by Hyunwoo Kim. Crafted TCP packets exploit timing between SYN cookie handling and socket hashing, causing a kernel panic.

The flaw affects almost all Linux distributions and servers running Nginx, Apache or SSH in default configurations. Per the report, it does not allow data alteration or code execution. The impact is denial of service, but a full host crash is more disruptive than a service restart.

Exploitation needs a narrow race window, so Kim says it can take a long time against a quiet bare-metal server. It needs packet processing spread across CPUs, so servers with two or more RX queues, or with RPS distributing packets, are exposed. A fix was merged into mainline Linux two weeks ago.

If you cannot patch or upgrade yet, Kim advises disabling SYN cookies and serialising to a single RX queue. Disabling SYN cookies lowers protection against SYN floods, so that is a real trade-off for internet-facing hosts.
