---
id: "39218384e8"
title: Amazon engineers describe how AWS copes with the kernel CVE flood
original_title: "[$] Managing the kernel CVE flood"
url: https://lwn.net/Articles/1100894/
source: LWN
kind: news
section: security
date: "2026-11-03"
published_at: "2026-11-02T14:28:39.000Z"
authors:
  - corbet
comments: null
tags:
  - kernel
  - cve
  - security
  - aws
  - linux-plumbers
  - news
why_read: >-
  The speakers' account of triaging kernel CVEs across the AWS fleet, and where the
  run-current-kernels advice holds up.
rank: 1
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

At the 2026 Linux Plumbers Conference, Amazon engineers Dylan Johnson and Justinien Bouron discussed the kernel CVE problem from the user's side. Their talk covered the work of keeping AWS running and secure while vulnerability disclosures arrive in a continuous stream. LWN had already covered how the kernel community itself handles the flood of reports. This session addressed what a large fleet operator does with them.

The kernel community's longstanding advice is to run current kernels. The article says that turns out to work, sort of. That partial answer is the crux for anyone running kernel fleets at scale. The piece is subscriber-only and the excerpt carries only the framing, so the detail of AWS's approach is in the full article.
