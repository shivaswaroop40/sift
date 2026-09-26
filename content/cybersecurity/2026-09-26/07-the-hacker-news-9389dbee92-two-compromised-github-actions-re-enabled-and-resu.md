---
id: 9389dbee92
title: Two compromised GitHub Actions re-enabled and resumed spreading Mini Shai-Hulud malware
original_title: Compromised GitHub Actions Came Back Online and Resumed Executing Mini Shai-Hulud Malware
url: https://thehackernews.com/2026/09/compromised-github-actions-came-back.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-09-26"
published_at: "2026-09-25T14:44:41.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - github-actions
  - supply-chain
  - mini-shai-hulud
  - npm
  - secret-rotation
  - news
why_read: >-
  You need to know whether your workflows used these two re-enabled actions during the exposure
  window so you can audit and rotate secrets.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Two GitHub Actions from the actions-cool organisation, issues-helper and maintain-one-comment, were re-enabled a week ago after being compromised in the May 2026 Mini Shai-Hulud supply chain campaign. The repositories were accessible again and resumed executing the malware. They have since been disabled a second time, but only after the window in which downstream workflows could have run the malicious code.

If your pipelines pull these actions by name or by pinned commit, the re-enable period means a build could have fetched the tampered version. Treat any past run that used these actions in the last week as untrusted. Audit workflow logs for unexpected network calls, credential reads, or post-run commits, and rotate any secrets available to jobs that invoked these steps.

The repositories currently display a disabled message, but the original article text is truncated and does not detail how GitHub re-enabled them, nor whether the maintainer account was re-secured. The second disable suggests the issue was identified rather than self-resolved.
