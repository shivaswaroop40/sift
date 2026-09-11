---
id: a48a37061b
title: Attackers chain two JFrog Artifactory flaws to take admin control
original_title: Attackers Chain JFrog Artifactory Flaws to Gain Admin Control and Plant Backdoors
url: https://thehackernews.com/2026/09/attackers-chain-jfrog-artifactory-flaws.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-11"
published_at: "2026-09-11T07:31:05.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - jfrog-artifactory
  - supply-chain
  - wiz
  - backdoor
  - admin-takeover
  - patching
  - news
why_read: >-
  Learn that two patched Artifactory flaws are being chained in the wild and why unpatched instances
  need urgent attention.
rank: 10
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Wiz observed attackers chaining two flaws in JFrog Artifactory between August 15 and September 8. The chain gave them administrator control of self-hosted servers and let them plant backdoors. JFrog had already fixed both flaws before the attacks began, so only servers running unpatched versions were exposed.

Artifactory is the repository that build pipelines pull from, so it sits in a trusted position. Admin control there means an attacker can modify packages, replace artifacts, or inject malicious code that flows into builds. For platform engineers, an unpatched self-hosted Artifactory is a direct supply-chain risk, not just a server compromise.

The source text does not name the specific CVEs or describe the exploit mechanism. Wiz's report may contain more detail, but the key action is clear: patch Artifactory and audit for signs of admin-level compromise, including unexpected accounts and modified artifacts.
