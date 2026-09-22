---
id: 3b1e00ab4a
title: WordPress fixes Comment2Shell flaw that could turn a comment into server code execution
original_title: WordPress Comment2Shell Flaw Can Turn Anonymous Comment XSS Into RCE via Admin Session
url: https://thehackernews.com/2026/09/wordpress-comment2shell-flaw-can-turn.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-22"
published_at: "2026-09-22T06:03:14.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - wordpress
  - xss
  - rce
  - cve-2026-93485
  - patch-now
  - news
why_read: >-
  You will see how a stored XSS in comments escalates to RCE via an admin session, and which version
  you need to be on.
rank: 5
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

A flaw in WordPress core, tracked as CVE-2026-934885 and dubbed Comment2Shell, let an anonymous visitor leave a comment that planted a hidden script on the site. If a logged-in administrator later opened the page, the script ran code on the server under the admin's session.

The bug matters because it chains stored cross-site scripting with administrative privileges to reach remote code execution, a serious outcome from a low-effort, unauthenticated input. Defenders should treat any site where administrators view unfiltered comments as exposed.

WordPress released a fix in version 7.1.1 on September 17 and told site owners to update at once. Operators running older 7.0.x branches should patch before any admin opens a comments page.
