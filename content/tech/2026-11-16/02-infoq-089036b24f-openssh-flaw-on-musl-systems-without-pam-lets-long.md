---
id: 089036b24f
title: OpenSSH flaw on musl systems without PAM lets long passwords log into locked accounts
original_title: Alpine Linux Users Urged to Patch OpenSSH Authentication Flaw
url: >-
  https://www.infoq.com/news/2026/11/alpine-linux-openssh-sshhole/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-11-16"
published_at: "2026-11-16T09:00:00.000Z"
authors:
  - Matt Saunders
comments: null
tags:
  - openssh
  - alpine-linux
  - musl
  - cve
  - vulnerability
  - ssh
  - news
why_read: >-
  You get the exact preconditions, the mechanism behind the bug, the mitigation steps and a
  checklist for finding affected musl-based hosts and containers.
rank: 2
interest_score: 8
depth_score: 6
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

A flaw named *sshole, tracked as CVE-2026-123158, lets an unauthenticated attacker log into accounts with no usable password. It affects OpenSSH before 10.6p2 built against musl, with PAM disabled. A password of 257 to 1,024 characters makes musl's crypt() return an asterisk, which OpenSSH treats as a match for accounts marked with an asterisk in /etc/shadow.

The root cause is two old changes meeting. In 2012 musl made crypt() return an asterisk on error and capped SHA-512 input at 256 bytes. OpenSSH's 2016 timing-attack fix for CVE-2016-6210 hashes the supplied password against another account's salt, and that also applied to asterisk-locked accounts. The server also needs at least one account with a SHA-256 or SHA-512 hash.

Alpine Linux is the main casualty, since it uses musl and does not enable PAM by default. On Alpine's official AWS and Azure images, the default alpine user is passwordless and has passwordless doas, so access means root. OpenWrt, Buildroot and Yocto may be affected under the same configuration. glibc, PAM, Dropbear and OpenBSD systems are not.

Exploitation is reported in the wild. GreyNoise saw attacks on honeypots from a group it tracks as GT10, and Previdian counted 20 attempts from 13 IPs. CISA added the CVE to its Known Exploited Vulnerabilities catalogue on 9 November. The fix is OpenSSH 10.6p2. Setting PasswordAuthentication no is the stopgap.
