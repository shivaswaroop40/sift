---
id: 559175e6e4
title: VulnCheck finds only 217 of 37,966 Project Glasswing findings are marked fixed
original_title: Glasswing overwhelms maintainers with underwhelming findings (VulnCheck)
url: https://lwn.net/Articles/1107173/
source: LWN
kind: news
section: security
date: "2026-11-13"
published_at: "2026-11-12T16:26:09.000Z"
authors:
  - jzb
comments: null
tags:
  - project-glasswing
  - vulnerability-management
  - open-source
  - ai-security
  - maintainers
  - vulncheck
  - news
why_read: >-
  You get the raw counts for duplicates, withdrawals and fixes, and a sceptical read on whether the
  headline true positive rate means anything for maintainers.
rank: 3
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Patrick Garrity of VulnCheck has analysed the vulnerabilities reported by Anthropic's Project Glasswing since its launch on April 7. Of 37,966 findings, 7,349 (19.4%) are public and just 217 are marked fixed. Another 1,654 (4.4%) are marked as duplicates, which is 7.5 times the number of fixes. A further 419 have been withdrawn.

Garrity questions the project's claimed true positive rate of 94.2%, up from 90.8% at launch. He notes that withdrawals and duplicates outnumber fixes, and suggests the triage figures lack a feedback loop. He also says the CVEs are a sliver of this year's total, almost none are being exploited, and fixes have stalled.

His main concern is that triage work is moving onto open source maintainers, the people Glasswing said it would help. He accepts that AI is a valuable tool for finding vulnerabilities. His argument is that seven months in, the evidence does not match the launch claims.
