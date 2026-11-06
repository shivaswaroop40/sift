---
id: 50d8c5ebc6
title: Decade-old *sshole flaw lets attackers log into Alpine Linux over SSH with no password
original_title: Meet *sshole, the vulnerability that lets hackers SSH into Linux devices
url: >-
  https://arstechnica.com/security/2026/11/vulnerability-allows-attackers-to-log-into-some-linux-devices-sans-password/
source: Ars Technica
kind: news
section: security
date: "2026-11-06"
published_at: "2026-11-05T23:09:36.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/11/vulnerability-allows-attackers-to-log-into-some-linux-devices-sans-password/#comments
tags:
  - ssh
  - alpine-linux
  - musl
  - openssh
  - vulnerability
  - embedded-devices
  - news
why_read: >-
  You get the exact conditions for exploitation, the salt mechanism, and the patch status across
  OpenSSH, musl and Alpine.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

A decade-old vulnerability named *sshole lets attackers log into Linux devices over SSH without a password. It affects systems running OpenSSH on the musl libc without PAM, a combination typical of Alpine Linux. The target account must be passwordless, marked with an asterisk in /etc/shadow, and another account on the system must have a password hashed with SHA256 or SHA512. The attacker enters more than 256 characters in the password field.

Alpine maintainers said it takes one connection, works every time, and needs no retries. The potential reach is large. The Alpine base image on Docker Hub has more than 1 billion downloads, and Alpine is common in routers, smart TVs, industrial controllers and other embedded devices that are hard to update. Detectify notes Shodan lists about 22 million systems with SSH open on port 22. Only a fraction meet the conditions, but each is quick to test.

The salt is the mechanism. Checkpoint found sshd borrows the salt from the SHA256 or SHA512 hash, and without it the attack fails. The account must also be active, not merely hold a hash. Root is safe under the default PermitRootLogin prohibit-password setting, though reachable accounts with doas or sudo rights can still become root.

The fix is available but responsibility is disputed. OpenSSH, which issued an update on Thursday, says the root cause sits outside sshd but is exploitable there. Alpine has also patched. musl developer Rich Felker calls it erroneous use by the caller, not a musl bug, with changes planned for an upcoming release. OpenWRT, buildroot and yocto may be affected, but that is unconfirmed. There is no CVE yet.
