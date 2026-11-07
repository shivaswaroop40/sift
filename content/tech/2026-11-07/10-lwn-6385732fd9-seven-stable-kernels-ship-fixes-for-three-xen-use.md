---
id: 6385732fd9
title: Seven stable kernels ship fixes for three Xen use-after-free flaws
original_title: Seven stable kernels with fixes for three Xen vulnerabilities
url: https://lwn.net/Articles/1105902/
source: LWN
kind: news
section: security
date: "2026-11-07"
published_at: "2026-11-06T18:48:34.000Z"
authors:
  - jzb
comments: null
tags:
  - xen
  - linux-kernel
  - security
  - cve
  - use-after-free
  - news
why_read: The LWN note names all seven kernel versions and maps each Xen CVE to its impact.
rank: 10
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Greg Kroah-Hartman has released seven stable kernels (7.3.3, 6.18.62, 6.12.116, 6.6.162, 6.1.192, 5.15.225 and 5.10.274). Each contains only the fixes for three use-after-free vulnerabilities disclosed by the Xen security team. Two of them, CVE-2026-100080 and CVE-2026-100082, could let an attacker deny service to the entire Xen host, with possible information leakage. CVE-2026-100081 may also allow privilege escalation.

These bugs affect the whole host, not just a guest. An attacker who triggers one can take down the entire machine, and in the worst case escalate privileges on it. If you run Xen on any of these kernel series, patch promptly. If you do not, these releases carry nothing beyond the three fixes, so there is little reason to prioritise them over your normal update cycle.
