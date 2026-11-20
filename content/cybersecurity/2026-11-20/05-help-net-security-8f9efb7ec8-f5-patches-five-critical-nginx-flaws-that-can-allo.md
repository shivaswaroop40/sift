---
id: 8f9efb7ec8
title: F5 patches five critical NGINX flaws that can allow remote code execution
original_title: "NGINX2Root: F5 patches five critical NGINX vulnerabilities"
url: https://www.helpnetsecurity.com/2026/11/19/nginx2root-nginx-vulnerabilities/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-11-20"
published_at: "2026-11-19T18:25:50.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - nginx
  - f5
  - rce
  - http2
  - use-after-free
  - patching
  - news
why_read: >-
  The article gives the fixed versions, the restart requirement and the conditions that limit the
  public exploit, so you can set patching priority.
rank: 5
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

F5 has fixed five critical NGINX vulnerabilities, named NGINX2Root by Xint researchers. Four are use-after-free bugs, in HTTP/2 upstream forwarding, the DNS resolver, QUIC/HTTP/3 and the mail proxy auth_http path. CVE-2026-123007 is an integer underflow in HTTP/2 flow control. If ASLR is disabled or bypassed, any of them can give code execution as the worker process.

None is known to be exploited, and none was on CISA's KEV catalog as of 19 November. A public proof-of-concept exists for CVE-2026-123007, published by Rapid7. Xint and Wiz hold exploits for all five but have not released them. Getting to root needs a sixth flaw, an unpatched Linux kernel SCTP bug with no CVE yet.

Rapid7's exploit is constrained. It relies on a glibc memory-copy routine specific to x86-64 builds, needs roughly 128 GB of HTTP/2 traffic and must recover heap addresses to beat ASLR. Tenable says it is unlikely to work behind HTTP/2-terminating proxies or on slow connections that hit NGINX's one-hour limit.

Fixed releases are NGINX Open Source 1.30.7 and 1.31.9, and NGINX Plus 37.0.8.1 and 37.3.0.1. Restart NGINX after upgrading, as a configuration reload does not replace the running executable. Distro users should check for backported fixes. NGINX Instance Manager, Ingress Controller and Gateway Fabric are also affected, and some updates are still pending.
