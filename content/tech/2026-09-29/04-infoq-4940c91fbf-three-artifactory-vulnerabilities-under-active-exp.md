---
id: 4940c91fbf
title: Three Artifactory vulnerabilities under active exploitation grant unauthenticated admin access
original_title: >-
  Artifactory Vulnerabilities Under Active Exploitation Enable Authentication Bypass and Admin
  Access
url: >-
  https://www.infoq.com/news/2026/09/artifactory-vulnerabilities/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-09-29"
published_at: "2026-09-28T19:00:00.000Z"
authors:
  - Sergio De Simone
comments: null
tags:
  - artifactory
  - supply-chain
  - cve
  - authentication-bypass
  - jfrog
  - self-hosted
  - news
why_read: >-
  You will see exactly which Artifactory CVEs are exploited, how the unauthenticated-to-admin chain
  works, and which versions close the hole.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Security firm Wiz.io disclosed three CVEs in self-hosted JFrog Artifactory that are being actively chained by attackers to gain full administrator control. CVE-2026-42018 leaks an internal anonymous-user JWT to unauthenticated requests even when anonymous access is disabled, CVE-2026-42016 fails to validate token scope allowing privilege escalation, and CVE-2026-82329 yields an admin token directly. Exploitation takes a handful of unauthenticated HTTP requests and Wiz has observed full admin access established in under five minutes.

The risk is concentrated in self-hosted instances exposed to the internet. Once inside, attackers have been seen creating persistent admin accounts, deploying malicious Groovy plugins, harvesting credentials and signing keys, planting backdoors, and clearing forensic traces. Because Artifactory sits inside build pipelines, a compromise exposes every artefact and downstream consumer, turning a single vulnerable host into a supply-chain incident.

Patched builds are 7.111.21, 7.117.28, 7.125.20, 7.133.29, 7.146.38, 7.161.20 or newer on each release branch. Wiz warns that upgrading closes the door but does not evict an attacker already inside, so post-exploitation hunting is required if the instance was exposed while vulnerable.
