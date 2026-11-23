---
id: 195f84217b
title: Dragos bait prompts show three AI inference providers were breached without noticing
original_title: AI Inference Providers Failed to Detect Hacking and Prompt Theft, Says Dragos
url: >-
  https://www.securityweek.com/ai-inference-providers-failed-to-detect-hacking-and-prompt-theft-says-dragos/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-11-23"
published_at: "2026-11-23T12:16:20.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - ai-security
  - inference-providers
  - prompt-theft
  - credential-theft
  - dragos
  - openrouter
  - news
why_read: >-
  The article gives the bait-prompt method Dragos used, the timeline of provider exposures, and the
  named provider disclosures, which help in judging how far prompts sent to AI APIs can be trusted.
rank: 10
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Dragos researchers, led by chief research officer HD Moore, sent about two million prompts to popular AI services between July and November. The prompts held trackable bait, including URLs, hostnames and AWS keys. Dragos then watched for any use of that bait. It found that attackers had breached at least three inference providers and stolen customer prompts. None of the providers had detected this until they were told.

The largest case involved roughly 200 AWS test keys stolen in late October. Some came from requests the provider rejected before any model ran. Moore said this points to copying at the provider's front door, not deeper in the inference stack. Attackers tested which keys worked, then tried to pull data from the linked accounts. One adversary appears to have hit two providers from a single rented server.

OpenRouter, a gateway that routes requests to dozens of providers, said its own systems were not breached. It removed three unnamed providers. Phala said a server running a DeepSeek model was compromised and that requests from October 21 to November 8 should be treated as exposed. Together AI said an AI coding agent leaked credentials on GitHub, which were used to obtain stored prompt samples.

For anyone sending prompts to third-party inference APIs, the risk is that secrets in those prompts may be copied before any model sees them. Moore noted that real customer requests were almost certainly copied too. The attackers have not been identified, and the source does not say how the front-door access was gained in each case.
