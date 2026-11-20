---
id: 31a41937b7
title: Two critical NGINX HTTP/2 flaws allow unauthenticated remote code execution and root
original_title: Critical NGINX ‘NGINX2Root’ bugs let attackers hijack servers
url: >-
  https://www.bleepingcomputer.com/news/security/critical-nginx-nginx2root-bugs-let-attackers-hijack-servers/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-11-20"
published_at: "2026-11-19T14:57:24.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - nginx
  - http2
  - rce
  - use-after-free
  - container-escape
  - patching
  - news
why_read: >-
  The article gives the affected versions, fixed releases and the conditions that decide whether
  your NGINX deployment is actually exposed, with the debate over real-world risk.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Researchers disclosed two critical NGINX HTTP/2 flaws, dubbed nginx2root. CVE-2026-123007 is a flow-control bug that corrupts worker memory and affects versions 1.9.5 to 1.31.8. CVE-2026-123633 is a use-after-free that affects 1.19.7 to 1.31.8 when NGINX proxies HTTP/2 requests to a backend. Wiz demonstrated unauthenticated code execution. Xint chained the first flaw with a Linux kernel SCTP bug to escape a Docker container and gain host root.

F5 fixed both in NGINX Open Source 1.30.7 stable and 1.31.9 mainline, and in NGINX Plus 37.0.8.1 or 37.3.0.1. It also fixed three more use-after-free bugs, in HTTP/3 proxying, DNS resolution with subrequests and mail proxy authentication, plus five other issues. One of those is a high-severity TLS 1.3 infinite loop that causes denial of service.

Upgrade now. If you cannot, disabling HTTP/2 covers only the two nginx2root flaws, not the other fixes. Exposure depends on configuration. Both need HTTP/2 enabled on a reachable listener, and the second needs backend proxying. Researcher Florian Roth calls the flaws non-default in practice and not an imminent threat for most deployments.

Version-based exposure counts overstate the risk. Xint says 98.9% of hosts that disclose versions are in the affected range, but that ignores HTTP/2 settings and backported fixes. Censys counts about 8.8 million potentially exposed services, and 104 million do not disclose a version. Censys reproduced memory corruption in four of five flaws but did not achieve code execution. Wiz is withholding its exploits.
