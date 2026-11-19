---
id: f1d788e142
title: NGINX HTTP/2 flaw present since 2015 allows unauthenticated code execution
original_title: 10-Year-Old NGINX HTTP/2 Flaw Lets Unauthenticated Attackers Execute Code on Servers
url: https://thehackernews.com/2026/11/10-year-old-nginx-http2-flaw-lets.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-19"
published_at: "2026-11-18T18:31:17.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - nginx
  - http2
  - cve-2026-123007
  - remote-code-execution
  - f5
  - news
why_read: >-
  Read the original for F5's full description of the affected conditions and any mitigations, which
  the available text does not cover.
rank: 1
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

A flaw in NGINX's HTTP/2 support, tracked as CVE-2026-123007 and dubbed "nginx2root", can let an attacker run code on servers with HTTP/2 enabled. No login is needed. The bug has been in the open-source code since version 1.9.5, released on 22 September 2015.

Fixed versions 1.31.9 and 1.30.7 were released today. F5, the company behind NGINX, says attackers can run code on affected servers. The source text cuts off at that point, so the exact conditions, impact and any workarounds are not stated here.
