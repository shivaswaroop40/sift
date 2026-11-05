---
id: 5d8930f0b0
title: OpenSSH 10.6p2 ships workaround for critical flaw affecting musl systems without PAM
original_title: Critical security vulnerability affects OpenSSH on Alpine Linux systems
url: https://lwn.net/Articles/1105464/
source: LWN
kind: news
section: security
date: "2026-11-05"
published_at: "2026-11-05T11:39:10.000Z"
authors:
  - jzb
comments: null
tags:
  - openssh
  - security
  - alpine-linux
  - musl
  - pam
  - news
why_read: >-
  You get Miller's exact wording on which systems are affected and the recommended immediate action,
  plus the Alpine backport plan.
rank: 2
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: glm-5.3
---

OpenSSH 10.6p2 has been released with a workaround for a critical vulnerability affecting Linux systems that use musl libc with PAM disabled, Alpine Linux being one example. Developer Damien Miller told operators of such systems to set PasswordAuthentication=no or disable SSH immediately. The flaw does not affect non-Linux systems, Linux/glibc systems, or Linux systems using PAM for password authentication.

If you run Alpine or another musl-based distribution without PAM and allow password logins over SSH, you are in the affected set. The OpenSSH developers consider the root cause to lie outside OpenSSH itself, so 10.6p2 is a mitigation rather than a full fix. Miller's instruction to act immediately reflects the severity.

The Alpine Linux project will backport the fix all the way to Alpine 3.16, which was released in May 2022. Operators running long-lived systems on older Alpine releases will therefore receive the patch, though until they apply it the advice to disable password authentication stands.
