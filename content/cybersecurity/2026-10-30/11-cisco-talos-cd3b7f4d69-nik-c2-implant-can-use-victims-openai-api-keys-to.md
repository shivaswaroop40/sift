---
id: cd3b7f4d69
title: NIK C2 implant can use victims' OpenAI API keys to analyse stolen data in session
original_title: "NIK C2: The new AI-enabled command-and-control framework"
url: https://blog.talosintelligence.com/nik-c2-new-ai-enabled-framework/
source: Cisco Talos
kind: research
section: threat-research
date: "2026-10-30"
published_at: "2026-10-29T10:00:00.000Z"
authors:
  - Chetan Raghuprasad
comments: null
tags:
  - malware
  - command-and-control
  - openai
  - ransomware
  - cisco-talos
  - research
why_read: >-
  Talos's write-up gives the implant's architecture, the ai_generate handler logic, IOCs including
  the C2 IP and JARM hash, and a version timeline.
rank: 11
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Cisco Talos has observed a new AI-integrated command-and-control framework, NIK C2, active in the wild. The implant is a Go-based, 64-bit Windows remote access tool. It uses TLS-secured WebSockets on port 443 with an HTTP fallback polling every 250 milliseconds, all encrypted with AES-256-GCM from a hardcoded seed. It routes traffic across three prioritised C2 tiers, runtime-updated URLs, an embedded encrypted server list, and a hardcoded fallback address. Capabilities include credential dumping, keystroke streaming, RDP session hijacking, process hollowing, and screen-locking ransomware demanding Bitcoin or USDT.

The implant's ai_generate command sends operator prompts to the OpenAI Chat Completions API from the victim machine, with a 60-second timeout. If the operator supplies no key, the implant reads the OPENAI_API_KEY environment variable and uses the victim's key. OpenAI bills the victim's payment method, and its logs show only the victim's key, leaving no trace of the actor. Talos also notes the framework collapses collection and exploitation into one session, removing offline processing delays that gave defenders detection windows.

Talos observed the framework hosted at 87.120.196[.]120, resolving total-sitevv[.]lol, with a TLS certificate whose common name, nik-panel, matches strings in the implant. Talos assesses with moderate confidence that NIK C2 is fully functional rather than a proof of concept. At least three versions exist, all compiled with Go 1.23.4, released in December 2024, so no sample predates late 2024. The default AI model is gpt-4, though operators can pass any valid OpenAI model identifier.
