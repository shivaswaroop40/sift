---
id: 8dddd5f4d7
title: Critical Apache mod_http2 flaw allows remote code execution, fixed in 2.4.71
original_title: Critical Apache HTTP/2 Flaw Could Let Unauthenticated Attackers Execute Code Remotely
url: https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-12"
published_at: "2026-11-12T05:12:26.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - apache
  - http2
  - mod-http2
  - rce
  - cve-2026-119618
  - patching
  - news
why_read: >-
  Read the original for the affected version range and fix details, and check whether it covers the
  attack conditions that the excerpt cuts off.
rank: 4
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

A critical flaw in mod_http2, the HTTP/2 module of Apache HTTP Server, can let a remote attacker run code on the server. It is tracked as CVE-2026-119618. It affects versions 2.4.55 through 2.4.70 and is fixed in version 2.4.71, released yesterday.

Red Hat, which ships the server in Red Hat Enterprise Linux, says only servers with HTTP/2 enabled are affected. The source text is cut off after this point, so the attack conditions and any exploitation status are not given here.
