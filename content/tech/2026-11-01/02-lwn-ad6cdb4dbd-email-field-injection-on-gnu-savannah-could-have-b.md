---
id: ad6cdb4dbd
title: Email field injection on GNU Savannah could have backdoored upstream Bash
original_title: How We Could Have Backdoored Bash (Hacktron blog)
url: https://lwn.net/Articles/1104262/
source: LWN
kind: news
section: security
date: "2026-11-01"
published_at: "2026-10-31T14:00:42.000Z"
authors:
  - corbet
comments: null
tags:
  - security
  - supply-chain
  - command-injection
  - bash
  - gnu-savannah
  - disclosure
  - news
why_read: >-
  The Hacktron write-up gives the injection payload, the escalation steps and the kernel path from a
  Savannah account to upstream Bash push access.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

The Hacktron group has documented a compromise of GNU Savannah, the forge that hosts Bash and other GNU projects. Any registered user could gain code execution on the backend by setting an email address such as `touch${IFS}/tmp/savane-rce-proof`@attacker.example. From there the group made its own account a superuser, impersonated Bash's maintainer, and confirmed it could add an SSH key with push access to the upstream Bash repository.

The supply chain reach is the point. One unsanitised field, open to any registered account, was enough to reach push access on upstream Bash, and the same path applied to every project hosted on Savannah. An unpatched kernel then gave the group root and access to a GNU backup server, so the blast radius extended beyond the forge.

This was a disclosure rather than an attack. The group reported the chain to the FSF on May 11, 2026 and pushed no malware. The write-up maps each step from a low-privilege registered account to upstream push access, a pattern relevant to any forge or CI setup that handles user-supplied strings.
