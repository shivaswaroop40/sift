---
id: 93e99fae74
title: Nine AI platforms breached in October; stolen keys drove 2.5 million Bedrock calls
original_title: “Black October” for AI Developer Platforms
url: https://www.wiz.io/blog/black-october-for-ai-developer-platforms
source: Wiz Blog
kind: research
section: threat-research
date: "2026-10-31"
published_at: "2026-10-30T22:51:44.000Z"
authors:
  - Benjamin Read
  - Benjamin Read
comments: null
tags:
  - llmjacking
  - credential-theft
  - ai-platforms
  - bedrock
  - environment-variables
  - research
why_read: >-
  Wiz's post gives the full incident timeline and both abuse case studies, with token-level
  telemetry for spotting resold keys.
rank: 9
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

At least nine AI developer platforms disclosed breaches in October, from Fireworks AI on 6 October to Northflank on 30 October. Fireworks, OpenCode and Warp reported indications of an agent swarm attack, and OpenCode and CommandCode attributed their incidents to attempted distillation. Every public report describes targeted hunting of stored environment variables, especially those granting AI access. Root causes vary, from credential access at Fireworks, Zeabur and Lightning to privilege escalation in Railway's build infrastructure. Zeabur is shutting down over its incident.

The downstream abuse is the part that reaches production clouds. Wiz observed enterprise credentials, compromised in one of these vendor breaches, being used against Bedrock. In both cases the first unauthorised activity came within 30 minutes of the reported credential access, a single InvokeModel from a residential IP testing stolen keys across multiple organisations in a one-minute sweep. Quiet validation followed, 14 to 120 calls a day from one small Go client. LLM brokers make stolen AI access easily monetisable, likely driving more such operations.

The bulk abuse followed. One key, whose policy allowed global.* cross-region inference profiles, carried roughly 800,000 Bedrock calls over 30 hours, about 90% successful, with only 6% throttled because global routing spread the load. The other, restricted to us.* profiles, carried about 1.7 million calls over 13 hours, over a million successful, the rest mostly throttled by regional quotas. The same boto3 script, identical down to its version string, enumerated quotas against both. Usage resembled resold coding-agent traffic, over $100,000 at list price.

Attribution stays partial. No single vulnerability or dependency links the nine incidents, and most are still being analysed without detailed technical information. Wiz linked the observed key usage to overt reselling organisations but cannot definitively connect them to either the initial compromise or the bulk abuse. Other impact reports remain anecdotal, including an alleged $371,000 cryptocurrency theft using keys stored in Railway and consumer bills of hundreds to thousands of dollars from stolen OpenCode access.
