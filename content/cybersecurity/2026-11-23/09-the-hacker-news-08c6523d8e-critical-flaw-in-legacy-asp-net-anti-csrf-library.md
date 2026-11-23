---
id: 08c6523d8e
title: Critical flaw in legacy ASP.NET anti-CSRF library Idunno.AntiCsrf is exploited in the wild
original_title: Hackers Exploit Critical ASP.NET Anti-CSRF Library Flaw Allowing Unauthenticated RCE
url: https://thehackernews.com/2026/11/hackers-exploit-critical-aspnet-anti.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-23"
published_at: "2026-11-23T09:11:56.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - asp-net
  - anti-csrf
  - rce
  - actively-exploited
  - cve-2026-131914
  - news
why_read: >-
  The original should explain the vulnerable mechanism, the exploitation seen, and any mitigation
  steps, none of which are in the truncated text available here.
rank: 9
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Researchers have urged users to stop using Idunno.AntiCsrf, a legacy ASP.NET anti-CSRF library shipped as Idunno.AntiCsrf.dll. A critical vulnerability in it has been exploited in the wild. It is tracked as CVE-2026-131914 and scores 9.3 out of 10.0 on CVSS.

The flaw affects versions 0.9.1.0 and 0.9.1 Beta. The headline describes the impact as unauthenticated remote code execution. The source text is cut off mid-sentence, so the underlying weakness and the exploitation details are not available here.

Anti-CSRF code sits in the request path of the applications that use it, so a flaw there can be reached before authentication. If you run ASP.NET applications, check whether they reference this DLL, including through older dependencies. The advice to discontinue use suggests no simple patch path, but the excerpt does not confirm this.
