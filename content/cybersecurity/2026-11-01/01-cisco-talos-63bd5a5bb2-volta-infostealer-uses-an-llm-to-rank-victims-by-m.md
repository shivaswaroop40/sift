---
id: 63bd5a5bb2
title: VOLTA infostealer uses an LLM to rank victims by monetisation value
original_title: "Appraisal by AI: Model-driven victim prioritization in the VOLTA infostealer"
url: >-
  https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/
source: Cisco Talos
kind: research
section: threat-research
date: "2026-11-01"
published_at: "2026-10-31T12:00:00.000Z"
authors:
  - Ryan Fetterman
comments: null
tags:
  - infostealer
  - llm-abuse
  - credential-theft
  - victim-profiling
  - malware
  - research
why_read: >-
  You get the full system prompt, the hardcoded model chain and OpenRouter endpoint, and workflow
  diagrams for this AI-assisted stealer.
rank: 1
interest_score: 7.7
depth_score: 8
novelty_score: 9
utility_score: 6
scored: true
model: glm-5.3
---

Cisco Talos describes VOLTA-AUTODOXER, a self-deleting Windows infostealer surfaced through the CAIRN research effort. It harvests browser credentials, cookies, payment cards, wallet seed phrases, Discord, Telegram, Steam and Roblox sessions, Microsoft OAuth tokens, SSH and cloud keys, and Wi-Fi profiles, then builds a structured evidence bundle about the person behind the machine and POSTs it to OpenRouter. The prompt instructs the model to act as a forensic intelligence analyst, returning a WHAT THEY'RE WORTH ranking of assets by monetisation and a THEIR OPSEC assessment of the victim's security posture.

The AI layer works as an intelligence analyst on behalf of the operator rather than supporting a traditional malware capability. Talos frames the shift as casting a wide net, stealing everything, and letting AI sort out the specifics. The haul includes SSH and cloud-provider keys, Microsoft OAuth tokens and Slack workspaces, so enterprise identities are in scope and get ranked by monetisation value alongside consumer accounts. The inference round-trip runs on the victim's own machine and network before exfiltration.

VOLTA anticipates model guardrails. It checks each response for refusal phrases such as I can't or I'm not able, then falls back from the default anthropic/claude-opus-4.6 to moonshotai/kimi-k2 and then google/gemini-2.5-flash, a chain of up to three models. Temperature is hardcoded at 0.2 for deterministic output. Requests are hand-assembled JSON with a Mozilla/5.0 user-agent, sent to a hardcoded openrouter.ai endpoint that gives defenders a fixed egress signal.

Collection extends beyond credential theft. VOLTA runs an embedded cracker against cryptocurrency vaults inline, dumps every saved Wi-Fi password via WlanGetProfileList, and enriches the bundle through stolen sessions, searching the victim's Gmail for receipts to confirm a home address and pulling Uber Eats and DoorDash order history. The bundle is written to Identity_Report.txt and the model output to AI_Analysis.txt, exfiltrated together as volta_dox.zip. The implant self-deletes, uses no attacker-owned infrastructure, and its six-slot build template suggests a builder model where the author sells access.
