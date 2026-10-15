---
id: 30e1ad39fd
title: curl HTTP/2 upload flaw allows malicious server to corrupt client memory
original_title: curl Patches HTTP/2 Upload Flaw After PoC Demonstrates Client-Side Code Execution
url: https://thehackernews.com/2026/10/curl-patches-http2-upload-flaw-after.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-15"
published_at: "2026-10-14T12:13:36.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - curl
  - http2
  - memory-corruption
  - upload
  - news
why_read: Learn what the curl flaw was, how it worked, and which version fixed it.
rank: 3
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

curl had a flaw in HTTP/2 upload handling that let a malicious server receiving the upload corrupt the client's memory. A researcher built a proof-of-concept that achieved code execution on the uploading machine. curl fixed the issue in version 8.23.0 on October 14.

The vulnerability matters if your infrastructure uploads data to servers you do not fully control. An attacker running a receiving server could corrupt the client process. Reliable exploitation requires exact knowledge of the target's build and memory layout, so most real attacks would likely crash the client instead.
