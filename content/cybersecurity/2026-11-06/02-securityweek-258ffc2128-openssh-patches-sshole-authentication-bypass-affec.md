---
id: 258ffc2128
title: OpenSSH patches SSHole authentication bypass affecting Alpine and musl systems
original_title: OpenSSH Rushes Patches for ‘SSHole’ Authentication Bypass
url: https://www.securityweek.com/openssh-rushes-patches-for-sshole-authentication-bypass/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-11-06"
published_at: "2026-11-06T12:07:42.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - openssh
  - ssh
  - authentication-bypass
  - alpine-linux
  - musl
  - vulnerability
  - news
why_read: >-
  The original details the exact account and hash conditions for exploitation, Alpine's affected
  releases, and the patch and restart steps.
rank: 2
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: glm-5.3
---

OpenSSH has released emergency patches for a high-severity authentication bypass tracked as CVE-2026-123158, with a CVSS score of 8.1, and dubbed SSHole. The flaw affects sshd on Linux distributions that use musl libc with PAM disabled, including Alpine, OpenWrt, Buildroot and Yocto. A misinterpretation of whether a string is a password hash lets an attacker log in to certain accounts with any password between 257 and 1,024 characters. Fixes shipped in OpenSSH 10.6p2.

Alpine Linux warns that an attacker who can reach the SSH port logs in without knowing any password. It takes one connection, works every time and needs no retries. Exploitation requires OpenSSH without PAM, password authentication enabled, an account with a '*' password field such as root or the alpine user in tiny-cloud images, and at least one local account with a $5$ or $6$ hash. Every Alpine release checked, 3.16 through 3.24 and edge, is affected.

No exploitation has been reported, but researchers expect scanning within hours because the details are public and each attempt costs one connection. Shodan lists around 22 million systems with SSH open on port 22, and WatchTowr expects brute-forcers to try the bypass by the weekend. OpenSSH developer Damien Miller says the flaw is not in sshd itself but can be exploited through it, and the rushed release reflects concern that AI agents now rediscover bugs within hours.

Alpine Linux urges users to apply the OpenSSH patches and restart sshd to replace the running daemon. Where updating is not immediately possible, disable password logins and restart sshd as a temporary mitigation. Since version 3.16, Alpine uses '*' to secure the root account, which is why root is exposed on every affected release.
