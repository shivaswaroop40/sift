---
id: def7044699
title: Five nginx memory bugs allow remote code execution; Cloudflare says proxied origins are shielded
original_title: >-
  nginx2root: Five new nginx vulnerabilities, and how Cloudflare protects origins from the worst of
  them
url: https://blog.cloudflare.com/nginx2root/
source: Cloudflare Blog
kind: blog
section: security
date: "2026-11-20"
published_at: "2026-11-20T01:58:29.000Z"
authors:
  - Dan Jones
comments: null
tags:
  - nginx
  - vulnerability
  - http2
  - cloudflare
  - linux-kernel
  - patching
  - blog
why_read: >-
  You get the affected configurations per CVE, the exposure figures, the kernel escalation path, and
  the precise limits of Cloudflare's claim that proxying protects your origin.
rank: 1
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

On 18 November 2026, F5 and nginx.org disclosed ten nginx vulnerabilities. Five, published by Xint as nginx2root, are memory corruption flaws. An unauthenticated attacker can use them to crash a worker or, per Xint, run commands. Three are HTTP/2 or HTTP/3 bugs, one needs resolver and subrequest configuration, and one affects the mail proxy. Fixes are in nginx 1.30.7 and 1.31.9.

CVE-2026-123007 is the worst. It needs only HTTP/2 enabled and affects every release since 1.9.5 in 2015. Xint found 98.9% of the 11.94 million version-reporting hosts in its Shodan search were in the affected range. Censys counts about 8.8 million exposed services. Version strings do not prove vulnerability, as distributions backport fixes.

Code execution needs ASLR bypassed, which Xint did using a memory leak in CVE-2026-123007. Xint also found a Linux kernel SCTP use-after-free, present since 4.15, that gives root from an nginx worker, including inside Docker. No kernel fix existed as of 18 November. The SCTP module often autoloads, so hosts not using SCTP may still be exposed.

Cloudflare says its edge is unaffected and that proxied origins are protected from the HTTP/2 and HTTP/3 bugs, because it terminates client connections and sends its own requests to the origin. The resolver and mail proxy bugs are configuration-dependent. No CVE is in CISA's exploited catalogue, and Rapid7's public proof of concept is limited to a fresh local container.
