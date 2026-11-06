---
id: 552f4056f3
title: Long passwords let attackers log in to passwordless SSH accounts on Alpine Linux
original_title: OpenSSH Issues Emergency Fix for Flaw Letting Long Passwords Bypass SSH Auth on Alpine Linux
url: https://thehackernews.com/2026/11/openssh-issues-emergency-fix-for-flaw.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-06"
published_at: "2026-11-05T16:42:46.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - openssh
  - alpine-linux
  - ssh
  - authentication-bypass
  - patching
  - news
why_read: >-
  The original spells out the attack preconditions, the critical rating, and the OpenSSH 10.6p2 fix
  that blocks the bypass.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: glm-5.3
---

Attackers can log in to accounts that have no password, including SSH key-only accounts, on some Alpine Linux servers running the standard openssh-server package. The requirements are network access to the server, a valid account name, and a password between 257 and 1,024 bytes long. OpenSSH rates the flaw critical. It released version 10.6p2 today to block it, and Alpine has published fixed packages.

Key-only accounts are usually treated as safe from password attacks because no password exists to guess. This flaw breaks that assumption. Alpine servers running the standard openssh-server package, with SSH reachable from a network, are the population to check. An attacker needs only a username and a password of the right length, so patching is the direct fix.

The source text is truncated. It does not state which Alpine releases or OpenSSH versions are affected, only that some servers running the standard package are. The sentence naming the scope of Alpine's fixed packages is cut off mid-way. Affected versions should be confirmed against the OpenSSH 10.6p2 release notes and Alpine advisories before rollout.
