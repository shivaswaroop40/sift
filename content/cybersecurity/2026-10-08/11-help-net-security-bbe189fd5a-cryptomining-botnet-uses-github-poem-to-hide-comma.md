---
id: bbe189fd5a
title: >-
  Cryptomining botnet uses GitHub poem to hide command server addresses across 3,400 breached
  systems
original_title: Cryptomining botnet hides C2 addresses in GitHub poem, infects over 3,400 servers
url: https://www.helpnetsecurity.com/2026/10/08/poellm-malware-github-poem-ai-servers/
source: Help Net Security
kind: news
section: threat-research
date: "2026-10-08"
published_at: "2026-10-08T10:24:57.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - cryptomining
  - botnet
  - ai-services
  - c2-evasion
  - github
  - litellm
  - news
why_read: >-
  Learn how attackers hide C2 addresses in plain sight and why AI infrastructure is now a primary
  target for cryptomining botnets.
rank: 11
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

PoeLLM malware has infected over 3,400 servers since April 2026, mostly running exposed AI services like LiteLLM and Ollama. The botnet extracts four words from a poem posted in a GitHub repository to derive the IPv4 address of its command and control server. The poem has been edited eleven times, each change redirecting victims to new infrastructure without requiring malware updates.

For platform engineers, this attack targets the exact systems seeing rapid deployment: internet-exposed AI and LLM services with known vulnerabilities. The attacker chose these targets because they offer both computational power for cryptomining and access to systems with default ports still open and patching delays. The threat actor appears to be in early stages of adding distributed brute-force capabilities.

The novel C2 hiding technique—embedding addresses in public, legitimate repositories—makes detection harder for traditional monitoring. The poem method allows rapid server rotation while remaining invisible to static malware analysis. Black Lotus Labs has blocked current traffic, but the pattern suggests the campaign will continue evolving.
