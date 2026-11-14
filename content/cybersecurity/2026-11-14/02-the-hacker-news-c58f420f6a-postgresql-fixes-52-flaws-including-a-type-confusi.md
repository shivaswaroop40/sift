---
id: c58f420f6a
title: PostgreSQL fixes 52 flaws, including a type confusion bug allowing authenticated code execution
original_title: PostgreSQL Patches 52 Flaws, Including 22-Year-Old Bug Enabling Authenticated RCE
url: https://thehackernews.com/2026/11/postgresql-patches-52-flaws-including.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-14"
published_at: "2026-11-13T16:53:08.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - postgresql
  - cve-2026-6460
  - rce
  - type-confusion
  - patching
  - database-security
  - news
why_read: >-
  The original should give the full list of fixed versions and flaws, plus the exact rebuild steps
  for C extensions that CVE-2026-6460 requires.
rank: 2
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

PostgreSQL has released updates that fix 52 security flaws. One of them, CVE-2026-6460, is a type confusion bug with a CVSS score of 8.8. It lets a database user who can create objects run code on the server. The headline refers to it as 22 years old.

Code run through this flaw has the rights of the operating system account the database runs under. The attacker needs a database account with permission to create objects, so the risk is greatest where untrusted or low-trust users hold that privilege.

Patching alone does not give full protection from this flaw. Any C-language extensions installed on the server must also be rebuilt. Teams that ship or compile their own extensions should add that step to the update. The source text is truncated, so further detail on the other 51 flaws is not available here.
