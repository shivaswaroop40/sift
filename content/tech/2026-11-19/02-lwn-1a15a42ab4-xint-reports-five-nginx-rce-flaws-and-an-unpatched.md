---
id: 1a15a42ab4
title: Xint reports five nginx RCE flaws and an unpatched SCTP kernel bug that chains to root
original_title: "NGINX2Root: Remote Code Execution vulnerabilities in nginx"
url: https://lwn.net/Articles/1108362/
source: LWN
kind: news
section: security
date: "2026-11-19"
published_at: "2026-11-18T16:13:34.000Z"
authors:
  - jzb
comments: null
tags:
  - nginx
  - vulnerability
  - rce
  - sctp
  - linux-kernel
  - containers
  - news
why_read: >-
  The original, via Xint's report, should give the mitigation steps and technical detail on the
  nginx flaws and the SCTP bug that the LWN item only summarises.
rank: 2
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Xint says it found five critical vulnerabilities in the NGINX web server. The worst would let an unauthenticated attacker run commands on a server with HTTP/2 enabled. Xint also reports a local privilege escalation in the kernel's SCTP subsystem, introduced in 4.15. A kernel patch is not yet available.

Chained together, the two flaws give an attacker root on the host. Xint says it also got a root shell where nginx ran inside a Docker container. Containers share the host kernel, so taking the kernel means control of the host and every container on it.

Reachability of SCTP varies. On many distributions the module is installed by default and loads automatically when a program opens an SCTP socket. Whether it can be used still depends on the kernel, the available modules and the container's restrictions. This is a vendor report, and the source text gives no detail on the five nginx flaws beyond the worst one.

Xint recommends updating to NGINX 1.31.9, just released, and blocking the SCTP module on hosts that do not need it until a kernel fix arrives. Its report has a mitigations section with more detail.
