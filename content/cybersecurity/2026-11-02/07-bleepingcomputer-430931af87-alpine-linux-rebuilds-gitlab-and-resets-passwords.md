---
id: 430931af87
title: Alpine Linux rebuilds GitLab and resets passwords after attempted RCE exploit
original_title: Alpine Linux rebuilds GitLab after attempted RCE attack
url: >-
  https://www.bleepingcomputer.com/news/security/alpine-linux-rebuilds-gitlab-after-attempted-rce-attack/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-02"
published_at: "2026-11-01T15:11:21.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - gitlab
  - alpine-linux
  - supply-chain
  - rce
  - patching
  - incident-response
  - news
why_read: >-
  The original details the incident timeline, the patching failure that left the flaw open, and
  Alpine's rebuild and remediation steps.
rank: 7
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Attackers tried to exploit CVE-2026-97229, a maximum-severity remote code execution flaw in GitLab's CI/CD regular expression compiler, against Alpine Linux's development infrastructure on 20 and 21 October. The attempts caused eight worker crashes, four of them partially successful. Alpine found no evidence of code execution or tampering with packages and releases, but missing logs meant it could not rule out a compromise. It rebuilt the GitLab instance from scratch and reset all passwords.

Alpine Linux is the base for many Docker container images, and its GitLab hosts development repositories, code reviews, CI jobs, and the aports build recipes used to produce its packages. That makes it a supply-chain target. The attackers also downloaded Alpine's GitLab container image, which the team read as possible preparation for a supply-chain attack.

The flaw stayed open by accident. Alpine initially installed GitLab 19.3.4 instead of the patched 19.3.5. A later upgrade to 19.3.6 also failed because the fix required a Ruby patch that GitLab bundles in its official packages but Alpine's custom container image did not include. Custom builds can silently miss vendor fixes that ship as bundled dependency updates.

If exploitation succeeded, user details, password hashes, 2FA secrets, CI/CD secrets, integration credentials, and private project content could have been exposed. No compromise of these has been confirmed, and signing keys were not at risk because they are not stored on the GitLab server. Alpine advises users to reset passwords and pull the alpinelinux/gitlab:19.3.6 image published on 27 October, which contains Ruby 3.3.13.
