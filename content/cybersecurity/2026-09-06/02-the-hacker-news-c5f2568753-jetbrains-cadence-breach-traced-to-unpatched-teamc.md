---
id: c5f2568753
title: JetBrains Cadence breach traced to unpatched TeamCity flaw, AWS credentials exposed
original_title: Attackers Breached JetBrains Cadence via Unpatched TeamCity, Extracting AWS Credentials
url: https://thehackernews.com/2026/09/attackers-breached-jetbrains-cadence.html
source: The Hacker News
kind: news
section: incidents
date: "2026-09-06"
published_at: "2026-09-05T16:52:33.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - teamcity
  - cadence
  - aws
  - supply-chain
  - credential-rotation
  - jetbrains
  - news
why_read: >-
  You will see how a single unpatched TeamCity instance at the vendor cascaded into exposed AWS
  credentials for Cadence customers, and what to rotate now.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Unidentified attackers breached JetBrains' Cadence environment last month by exploiting a recently disclosed critical vulnerability in TeamCity. The company is now urging all Cadence users to revoke and rotate any credentials or secrets that may have been used during Cadence executions, warning that AWS credentials in particular were extracted.

The incident matters because JetBrains itself, the vendor of both products, failed to apply a patch promptly enough to prevent compromise. Any organisation running Cadence workflows against AWS, or storing long-lived secrets in execution contexts, should assume those credentials are now in adversary hands and act before tokens are reused.

AWS access keys for CI/CD pipelines typically grant permissions to deploy code, read source repositories and touch production data stores, which raises the blast radius beyond a single build agent. Rotate IAM keys, audit CloudTrail for unexpected use, and review what each Cadence execution role could reach.
