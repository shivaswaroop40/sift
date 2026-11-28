---
id: 461efe2713
title: PyTorch's GreenLight lets an AI reviewer approve maintainers' pull requests, based on Meta's RADAR
original_title: Meta Brings Code Review Auto-Approval More Mainstream with PyTorch GreenLight
url: >-
  https://www.infoq.com/news/2026/11/uber-agent-spend-steady/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-28"
published_at: "2026-11-27T14:36:00.000Z"
authors:
  - Andrew Hoblitzell
comments: null
tags:
  - code-review
  - pytorch
  - meta
  - ai-coding
  - auto-approval
  - open-source
  - news
why_read: >-
  You get the specific RADAR gates, thresholds and the author-trust rule GreenLight uses, which is a
  concrete template for scoping automated approval in your own review process.
rank: 3
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

GreenLight is an open-source version of RADAR, Meta's Risk Aware Diff Auto Review system. It lets an AI reviewer approve PyTorch pull requests, but only from maintainers already named in PyTorch's merge rules. Everyone else is reviewed in shadow mode, and those reviews never become approvals. A scan runs every five minutes, and a reverted PR is permanently dropped.

Meta's paper gives the reason. Significant lines of code per human-landed diff rose 105.9% year on year, and Meta attributes over 80% of the rise to agentic AI assistance. Review has not kept pace. RADAR therefore automates only diffs that meet conservative safety criteria, rather than replacing review broadly.

RADAR stacks several gates. Open-source and SOX-scoped code is excluded. Runbooks need a clean 60-day record. A Diff Risk Score applies percentile cut-offs, from the 5th for human authors to the 50th for allowlisted runbooks. An LLM reviewer must score at least 8 out of 10. Approved bot diffs wait in a queue, shown as 24 hours in the paper, where a human can still reject them.

OpenAI, Anthropic and Sonar describe similar scoped approval. OpenAI's Brian Yang targets at least 90% auto-approval for routine PRs. Sonar's survey found 76% of over 1,000 developers generate AI code faster than they can verify it. These are talks, a paper and a survey, not independent evidence that auto-approval works.
