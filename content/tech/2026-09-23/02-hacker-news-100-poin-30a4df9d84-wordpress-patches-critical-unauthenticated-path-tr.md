---
id: 30a4df9d84
title: WordPress patches critical unauthenticated path traversal with conditional RCE
original_title: "WordPress: Unauthenticated path traversal leading to conditional RCE"
url: https://github.com/WordPress/wordpress-develop/security/advisories/GHSA-7hp8-65ch-5whp
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-23"
published_at: "2026-09-22T16:33:45.000Z"
authors:
  - vntok
comments: https://news.ycombinator.com/item?id=49803959
tags:
  - wordpress
  - security
  - rce
  - php
  - docker
  - cve
  - community
why_read: >-
  You will see the exact vulnerable versions, the theme and PHP conditions that make RCE possible,
  and which patch branch covers your site.
rank: 2
interest_score: 9
depth_score: 8
novelty_score: 9
utility_score: 10
scored: true
model: minimax-m3
---

A path traversal flaw in WordPress core allows an unauthenticated attacker to make get_page_template() include a local .php file outside the active theme directories. Under specific conditions this becomes remote code execution. It carries a CVSS v4 score of 9.2 and affects branches from 4.7 through 7.1.1.

This matters to anyone running WordPress because the exploit requires no credentials and no user interaction. Sites using themes with a top-level directory starting with page-, such as Twenty Twelve, Twenty Fourteen, Neve, Hestia or Sydney, are exposed. The official php Docker image and default cPanel setups with PHP under 8.5 provide the readable local .php target via pearcmd.php.

The fix has been released in 7.1.2 and backported across every supported branch back to 4.7.37. Disclosure credit goes to Robert Ressl. Operators should patch now rather than rely on mitigating the conditions, since the conditions are common on shared and container hosts.
