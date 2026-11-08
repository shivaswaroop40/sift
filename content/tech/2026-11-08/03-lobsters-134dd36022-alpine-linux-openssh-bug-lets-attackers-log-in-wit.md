---
id: 134dd36022
title: Alpine Linux OpenSSH bug lets attackers log in without a password
original_title: "Alpine Linux : openssh-server password authentication bypass"
url: https://www.alpinelinux.org/posts/2026-11-05-openssh-password-authentication-bypass/
source: Lobsters
kind: community
section: security
date: "2026-11-08"
published_at: "2026-11-07T14:51:26.000Z"
authors:
  - alpinelinux.org via hayalci
  - alpinelinux.org via hayalci
comments: https://lobste.rs/s/7dbarm/alpine_linux_openssh_server_password
tags:
  - alpine
  - openssh
  - musl
  - security
  - authentication-bypass
  - community
why_read: >-
  The advisory lists affected releases and fixed package versions, gives exact remediation commands,
  and explains the musl crypt() mechanism behind the bypass.
rank: 3
interest_score: 6.7
depth_score: 5
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Alpine Linux has issued a security advisory for openssh-server. An attacker who can reach the SSH port can log in without knowing any password. It takes one connection, works every time, and needs no retries. The attack needs an account whose password field is *, such as a key-only user, plus one account with a $5$ or $6$ hash, and a submitted password of 257 to 1024 bytes. Releases 3.16 through 3.24 and edge are affected.

The preconditions are easy to meet. Alpine's openssh-server is built without PAM and PasswordAuthentication defaults to yes. Root has shipped as root:* since about 3.16, key-only users created with adduser get the same field, and directory-service users via musl-nscd have no shadow entry. One account with a real password makes every passwordless account reachable. The tiny-cloud images ship an alpine user with passwordless doas, exploitable once any $6$ hash appears on the machine. Containers without sshd, locked accounts, and UsePAM yes are not affected.

The mechanism is a collision between an error value and a stored field. Without PAM, sshd hashes the attempt with crypt() and compares it to the stored field. For accounts whose field is too short to hold a salt, sshd borrows another account's salt. musl's crypt() returns * as an error indicator when the key exceeds 256 bytes. That * matches the stored field for every no-password account, so the login succeeds. OpenSSH 10.6p2 fixes it; Alpine's stable branches carry a patch for the same problem.

The fix requires a restart. Upgrading the package does not replace the running daemon, so sshd must be restarted after apk upgrade. Fixed packages exist for every branch back to 3.16, including releases out of support. Where updating is not yet possible, setting PasswordAuthentication no and restarting closes the hole. No CVE had been assigned at the time of writing. Attacks leave Accepted password lines in /var/log/messages for accounts with no password set.
