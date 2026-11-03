---
id: 501a8f89b5
title: Stolen AI access resold underground leaves victims with bills up to $1 million
original_title: Stolen AI access leaves companies with cloud bills of up to $1 million
url: https://www.helpnetsecurity.com/2026/11/03/llmjacking-stolen-ai-access-cloud-bills/
source: Help Net Security
kind: news
section: cloud-and-supply-chain
date: "2026-11-03"
published_at: "2026-11-03T09:39:05.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - llmjacking
  - api-keys
  - ai-security
  - cloud-security
  - mandiant
  - news
why_read: >-
  You get the full intrusion chains, the resale service economics and Mandiant's detection advice
  from the GTIG investigation.
rank: 3
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Google Threat Intelligence Group and Mandiant responded to several LLMJacking incidents in 2026, affecting financial services, retail, technology and transportation firms across North America, South America and Asia Pacific. Attackers used stolen cloud access to run AI models at the victim's expense. In one case a threat actor made more than 500,000 calls in under eight hours, leaving nearly $1 million in token costs. Some bills reached $1 million before access was lost.

Unlike cryptojacking, which drains resources slowly, LLMJacking generates large spikes in fraudulent charges within hours. Entry is most often a stolen cloud credential such as a service account key, a GitHub access token or an active session token. Attackers bypass chatbot front-ends and target backend model resources directly. In several incidents the victim's AI services were switched off, and attackers used stolen keys to turn them back on.

GTIG observed a division of labour. One group breaks into environments; another runs LLM Mixers that resell stolen access. Jet Night sells an unlimited plan for about $60 a month, against $100 to $250 for comparable legitimate subscriptions, so it can only profit from stolen keys. One attacker exploited CVE-2026-40217 in a LiteLLM gateway to turn ordinary access keys into administrator credentials. The group UNC6993 ran a fake portal that harvested active access tokens, bypassing passwords and MFA.

Mandiant's advice for defenders starts with watching for changes to AI accounts and services. One group tested keys harvested from public GitHub repositories with tiny requests, too small to trip security alerts. Attackers also created backdoor accounts, one disguised as an internal billing optimisation tool. GTIG expects criminals to favour LLMJacking over cryptojacking because the resale market pays out quickly while the victim pays the bill.
