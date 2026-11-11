---
id: edca2da69f
title: VulnCheck finds only 217 of Anthropic's 37,966 Glasswing findings marked fixed after seven months
original_title: Tracking Anthropic-discovered vulnerabilities
url: https://www.vulncheck.com/blog/anthropic-glasswing-november-update
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-11"
published_at: "2026-11-10T22:17:56.000Z"
authors:
  - panic
comments: https://news.ycombinator.com/item?id=50447074
tags:
  - anthropic
  - project-glasswing
  - vulnerability-management
  - cve
  - open-source
  - curl
  - community
why_read: >-
  You get the ledger figures and the curl triage outcome, which show what AI-found vulnerability
  volume costs the maintainers who have to validate it.
rank: 12
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

VulnCheck, which tracks Anthropic's Project Glasswing, counts 442 CVEs attributable to Anthropic in seven months. That is about 0.5% of the 93,450 CVEs published this year. Only two have appeared in VulnCheck KEV as exploited in the wild. Anthropic's own ledger lists 37,966 findings, 7,349 made public and 217 marked fixed.

Between 8 September and 2 November, the ledger gained 11,813 findings but only 15 fixes. Duplicates rose from two to 1,670, roughly 7.5 times the fixed count, and withdrawn findings reached 419. Anthropic's claimed true positive rate still rose from 91.4% to 94.2%. The author says this suggests duplicates and withdrawals are not counted against it.

Anthropic's OSS Scanner lets maintainers request scans and triage the output themselves. Anthropic says the reports are fully model-generated with no human review. It had earlier said it was bottlenecked on human validation, having reviewed about 6,000 of 29,000 candidates. The author argues the bottleneck has moved to maintainers.

The curl project offers an early data point. Of 34 reports published so far from a batch of 45, 19 were rejected as not vulnerabilities, six were confirmed low severity and nine await assessment. The author is openly sceptical of Anthropic and the sample is small, but the figures come from the public ledger and maintainers.
