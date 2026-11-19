---
id: 97a3bfd94b
title: Two critical unauthenticated RCE flaws in NGINX HTTP/2 disclosed, one dating to 2015
original_title: Unauthenticated remote code execution in Nginx
url: https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-19"
published_at: "2026-11-18T15:19:55.000Z"
authors:
  - speedping
comments: https://news.ycombinator.com/item?id=50547374
tags:
  - nginx
  - http2
  - rce
  - memory-safety
  - cve
  - patching
  - community
why_read: >-
  The original has the affected-version and configuration conditions, plus detection and mitigation
  guidance, which the excerpt cuts off before reaching.
rank: 1
interest_score: 8.7
depth_score: 7
novelty_score: 9
utility_score: 10
scored: true
model: claude-sonnet-5-5
---

Wiz Research and four other teams independently found two critical remote code execution bugs in NGINX's HTTP/2 handling. CVE-2026-123633 is a connection use-after-free. CVE-2026-123007 is an integer underflow in send_window flow-control accounting that causes an invalid memory copy. Both score 9.2 on CVSS 4.0. F5 released fixes on 18 November.

The underflow affects versions back to 1.9.5 from 2015. The use-after-free is nearly six years old. Wiz says it demonstrated code execution against NGINX serving plain static files, with no backend application or third-party modules. Both bugs need HTTP/2 enabled. The post says further conditions apply, but the supplied text is cut off before listing them.

If you cannot upgrade at once, the stated mitigation is to disable HTTP/2. Since NGINX often fronts several services, one vulnerable instance exposes everything behind it. Prioritise internet-reachable deployments, then work through patch validation and rollout with service owners.

Wiz says it found the bugs with its own AI code scanning harness and used commercial models to confirm impact. It argues that AI is removing the complexity barrier to finding memory-safety flaws. That is the vendor's framing of its own product, and the excerpt offers no data on how much the tooling contributed.
