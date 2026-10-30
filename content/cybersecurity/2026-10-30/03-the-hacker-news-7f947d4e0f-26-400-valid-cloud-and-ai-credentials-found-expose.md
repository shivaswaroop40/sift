---
id: 7f947d4e0f
title: 26,400 valid cloud and AI credentials found exposed in public Gitee repositories
original_title: 26,400 Valid Cloud and AI Credentials Found Exposed in Public Gitee Repositories
url: https://thehackernews.com/2026/10/26400-valid-cloud-and-ai-credentials.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-10-30"
published_at: "2026-10-29T11:33:15.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - leaked-credentials
  - gitee
  - cloud-keys
  - ai-services
  - secret-scanning
  - news
why_read: >-
  The original names the cloud and AI services that led the list and gives the full breakdown of the
  exposed credentials.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Independent researcher Ben Zimmermann scanned 7.25 million public repositories on Gitee, a Chinese code-hosting service, and found 26,400 credentials left in the code. He tested them and they still worked. He reported the results on 28 October. Most were keys for cloud and AI services.

All 26,400 keys were valid when tested, so exposure alone equals compromise. Anyone browsing those repositories could have copied a key and used it directly against the owner's cloud or AI services. For defenders, any credential committed to a public repository should be treated as stolen and rotated. Secret scanning also needs to cover code hosts beyond the ones teams usually watch.
