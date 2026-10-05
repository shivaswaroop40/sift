---
id: f8fb78ae3c
title: Rejetto HFS flaw allows attackers to forge admin sessions and execute code
original_title: Attackers Target Rejetto HFS Flaw That Enables Admin Session Forgery and RCE
url: https://thehackernews.com/2026/10/attackers-target-rejetto-hfs-flaw-that.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-05"
published_at: "2026-10-05T08:09:23.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - session-forgery
  - rce
  - rejetto-hfs
  - weak-prng
  - cve-2026-61500
  - active-exploitation
  - news
why_read: Understand the session forgery mechanism and assess your HFS deployments for immediate patching.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

CVE-2026-61500 in Rejetto HTTP File Server uses a weak random number generator for session tokens, making them predictable. Attackers can forge admin sessions to gain unauthorised access. The vulnerability has a CVSS score of 9.3 and is seeing active exploitation.

The flaw matters because HFS is often used for file sharing in production environments. An attacker who predicts a session token can assume admin privileges without credentials, then execute arbitrary code on the host.
