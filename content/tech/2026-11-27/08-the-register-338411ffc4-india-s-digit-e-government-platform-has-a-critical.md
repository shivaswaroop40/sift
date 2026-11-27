---
id: 338411ffc4
title: India's DIGIT e-government platform has a critical unauthenticated SQL injection flaw
original_title: >-
  Free e-government platform that serves two billion people in ten countries has critical SQL
  injection bug
url: >-
  https://www.theregister.com/security/2026/11/27/free-e-government-platform-that-serves-two-billion-people-in-ten-countries-has-critical-sql-injection-bug/5312449
source: The Register
kind: news
section: security
date: "2026-11-27"
published_at: "2026-11-27T01:19:31.000Z"
authors:
  - Simon Sharwood
comments: null
tags:
  - sql-injection
  - cve
  - india
  - digital-public-goods
  - public-sector
  - patching
  - news
why_read: >-
  The article gives the CVE details, the CERT-IN description of the attack and a sense of how widely
  DIGIT is deployed, which helps if you run or audit public sector systems.
rank: 8
interest_score: 6
depth_score: 5
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

India's DIGIT platform, a free modular suite for government services such as authentication and payment collection, has a critical SQL injection flaw rated 9.3. The bug, CVE-2026-136706, sits in the User and Access Control Service components. User input is not neutralised when SQL queries are built.

CERT-IN says an unauthenticated remote attacker could send crafted input to an affected API endpoint and run arbitrary SQL. That could allow data to be disclosed, changed or deleted. eGov India, which oversees DIGIT, has released source code for an update that fixes the problem.

Reach is wide. All Indian state and union territory governments use DIGIT, along with over 20,000 local government bodies. Nine other countries have implemented it to some degree, including Nigeria, Indonesia and Ethiopia. The Register estimates the governments involved serve over two billion people.
