---
id: 811fb88cec
title: Over 1,000 exposed GitLab servers still unpatched against actively exploited RCE flaw
original_title: Over 1,000 GitLab servers vulnerable to ongoing RCE attacks
url: >-
  https://www.bleepingcomputer.com/news/security/over-1-000-gitlab-servers-vulnerable-to-code-execution-attacks/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-11-02"
published_at: "2026-11-02T12:47:00.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - gitlab
  - rce
  - cisa
  - kev
  - ci-cd
  - patching
  - news
why_read: >-
  The original gives Shadowserver's exposure counts for both exploited GitLab CVEs and the patched
  version numbers to check against.
rank: 12
interest_score: 6.3
depth_score: 5
novelty_score: 6
utility_score: 8
scored: true
model: glm-5.3
---

CISA added CVE-2026-97229 to its Known Exploited Vulnerabilities catalogue on Friday after confirming attacks in the wild. The flaw is an integer overflow in GitLab's CI/CD Regular Expression Compiler, which parses regular expressions in pipeline configuration files. An unauthenticated attacker can run arbitrary code through a crafted regex. Patches shipped on 12 October in versions 19.4.2, 19.3.5 and 19.2.8.

Shadowserver reported at the weekend that it tracks more than 1,000 internet-exposed GitLab servers still unpatched against this flaw, three weeks after the fixes landed. Exploitation needs no authentication, so any exposed self-managed instance is a direct code-execution target. GitLab.com already runs the patched version and GitLab Dedicated customers need no action. CISA ordered federal agencies to secure their servers by Sunday.

The backlog is larger than one CVE. Shadowserver also tracks over 11,300 instances vulnerable to CVE-2026-110264, another maximum-severity Regular Expression Compiler bug fixed last month that allows arbitrary code execution, out of roughly 39,000 GitLab instances it sees daily. Since November 2021 CISA has listed six GitLab flaws as actively exploited, one of them used in ransomware attacks.
