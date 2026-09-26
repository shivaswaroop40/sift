---
id: 8d6b5c37fc
title: Roundcube pre-auth SQL injection flaw actively exploited
original_title: Roundcube Pre-Auth SQL Injection Flaw Actively Exploited in the Wild
url: https://thehackernews.com/2026/09/roundcube-pre-auth-sql-injection-flaw.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-26"
published_at: "2026-09-25T10:14:02.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - roundcube
  - sql-injection
  - cve-2026-48842
  - webmail
  - actively-exploited
  - patch-now
  - news
why_read: >-
  You will learn whether your Roundcube deployment needs an urgent patch and which versions are
  vulnerable to live attacks.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

The Canadian Centre for Cyber Security has warned that CVE-2026-48842, a pre-authentication SQL injection in Roundcube Webmail, is being actively exploited. The vulnerability affects the virtuser_query plugin in versions 1.6.x before 1.6.16 and 1.7.x before 1.7.1. It carries a CVSS score of 8.1.

The flaw stems from a preg_replace() backslash handling issue, allowing unauthenticated attackers to inject SQL before logging in. Roundcube is widely deployed for self-hosted email by governments and enterprises, making pre-auth flaws particularly attractive to threat actors.

Operators running Roundcube should confirm they are on 1.6.16 or 1.7.1 or later, or that the virtuser_query plugin is disabled. Given active exploitation, scanning logs for unexpected SQL errors and anomalous authentication traffic is also advisable.
