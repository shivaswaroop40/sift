---
id: 5759365cc9
title: Attackers target SSHole OpenSSH flaw allowing sign-ins to passwordless accounts
original_title: Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot
url: https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-07"
published_at: "2026-11-06T15:21:49.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - openssh
  - sshole
  - musl
  - pam
  - active-exploitation
  - news
why_read: >-
  You will get Previdian's details on the SSHole exploitation attempts and the exact affected
  OpenSSH configuration.
rank: 4
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Threat actors are already attempting to exploit a newly disclosed OpenSSH vulnerability, according to Previdian. The flaw is tracked as CVE-2026-123158, carries a CVSS score of 8.1, and is codenamed SSHole. It allows sign-ins to accounts that have no password set. The bug affects Linux systems running OpenSSH on the musl C library with Pluggable Authentication Modules disabled.

The affected configuration is narrow, but hosts that match it face a direct path to unauthenticated access. Any account without a password on such a system becomes reachable. Engineers should check whether their Linux hosts run OpenSSH against musl with PAM disabled, and confirm that no passwordless accounts exist on them.

The report says attackers gained root on a honeypot within hours of disclosure, which signals fast scanning for the flaw. The excerpt is truncated, so details on the exploitation chain, affected package versions, and the scale of attempts are not available here. Treat the exposure window as already open rather than pending.
