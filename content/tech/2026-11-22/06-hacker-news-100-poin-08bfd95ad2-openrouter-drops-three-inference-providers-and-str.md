---
id: 08bfd95ad2
title: OpenRouter drops three inference providers and strips 125 endpoints of zero data retention status
original_title: Data Processing Incidents on Inference Providers
url: https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-22"
published_at: "2026-11-22T02:14:14.000Z"
authors:
  - sdko
comments: https://news.ycombinator.com/item?id=50595554
tags:
  - openrouter
  - llm-inference
  - data-retention
  - security-incident
  - zdr
  - third-party-risk
  - community
why_read: >-
  The post lists the actions taken and links the three provider incident notices, which is the
  quickest way to check whether your traffic went through an affected endpoint.
rank: 6
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

OpenRouter says security researchers, with a report from Dragos, found that some inference providers had compromised data or were not upholding their data policies. OpenRouter off-boarded three providers and removed 125 endpoints from Zero Data Retention (ZDR) eligibility. It has notified all potentially affected customers. It says its own systems were not breached.

The 125 endpoints include those from providers the researchers flagged, plus others removed as a precaution. Three providers have posted notices: Novita (MiniMax requests), Phala (a preliminary incident report) and Together (prompt leakage for requests in June and July 2026). OpenRouter says not all affected providers have posted publicly.

For anyone routing prompts through an aggregator, a ZDR flag is a claim by the provider, not something the router had verified. OpenRouter now says it will adapt the researchers' testing to run continuously. It is also checking network paths for requests and responses forwarded to third parties.

The post is thin on detail. It does not name the three removed providers, say what data was exposed, or explain how the researchers tested. It gives no timeline for restoring ZDR status beyond requiring assurances and validation first.
