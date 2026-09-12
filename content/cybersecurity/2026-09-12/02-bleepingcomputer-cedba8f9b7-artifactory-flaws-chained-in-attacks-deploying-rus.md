---
id: cedba8f9b7
title: Artifactory flaws chained in attacks deploying Rust backdoor
original_title: Artifactory flaws chained in attacks deploying backdoor malware
url: >-
  https://www.bleepingcomputer.com/news/security/artifactory-flaws-chained-in-attacks-deploying-backdoor-malware/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-12"
published_at: "2026-09-11T16:29:44.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - jfrog-artifactory
  - cve-2026-42018
  - cve-2026-42016
  - cve-2026-82329
  - rust-backdoor
  - authentication-bypass
  - news
why_read: Get the exploit chain details, affected versions, and the post-compromise indicators to check for.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: deepseek-v4-flash
---

Wiz reports that attackers are chaining two JFrog Artifactory vulnerabilities, CVE-2026-42018 and CVE-2026-42016, to bypass authentication and gain admin rights on self-hosted servers. Between August 15 and September 8, multiple actors used the chain to obtain a JWT for the internal anonymous user and exchange it for an admin-scoped token. A third flaw, CVE-2026-82329, was also exploited to mint admin tokens.

The impact is direct for defenders. Wiz estimates that 49 to 62 percent of reachable Artifactory instances are vulnerable to at least one of the three flaws. In some observed cases, attackers created an administrator account in under five minutes, then installed malicious Groovy plugins and deployed a Rust backdoor with command-and-control capabilities.

Post-exploitation included downloading payloads into /dev/shm, /tmp and /var/tmp, uploading webshells, stealing configuration data and cluster join keys, and adding SSH keys to new accounts. JFrog has not commented. Wiz has published indicators of compromise and recommends upgrading to specific Artifactory releases, then checking for rogue accounts, unexpected tokens and suspicious plugin activity.
