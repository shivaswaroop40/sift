---
id: 294716fe35
title: Cisco Talos documents a Windows implant that uses four LLMs as its command infrastructure
original_title: "The Closed Quorum: Inside the first reported autonomous AI C2 implant"
url: >-
  https://blog.talosintelligence.com/the-closed-quorum-inside-the-first-reported-autonomous-ai-c2-implant/
source: Cisco Talos
kind: research
section: threat-research
date: "2026-09-23"
published_at: "2026-09-22T10:00:58.000Z"
authors:
  - Ryan Fetterman
comments: null
tags:
  - c2
  - llm
  - malware
  - windows
  - talos
  - threat-research
  - research
why_read: >-
  You'll see how an autonomous LLM-voting implant is wired, why commercial LLM APIs make a hard C2
  target, and what defenders should track next via Talos's new CAIRN toolkit.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Cisco Talos has publicly documented CLOSEDQUORUM, a 16.4MB 64-bit Windows implant compiled in Go that treats commercial large language model endpoints as its command and control layer. After deployment it queries up to four providers, DeepSeek, Qwen, Mistral and Google Gemini, aggregates their responses via plurality voting and executes the winning action without further operator input. Its stated goal is to harvest user credentials and crypto wallets. The public build shipped with placeholder API keys and a dummy Discord webhook, so Talos did not observe full end-to-end execution. Developer artefacts traced the author to carding forum posts dating back to 2025, but Talos has no evidence of in-the-wild deployment.

The implant matters because it removes the human operator from the C2 loop. Traditional C2 needs attributable infrastructure such as domains, IPs and listeners that defenders can block or sinkhole. By routing instructions through widely used LLM APIs, CLOSEDQUORUM blends implant traffic with legitimate application calls, making takedowns harder and shifting the defender’s problem to API provider abuse handling.

Talos frames the finding as a shift it calls effort displacement, where an entire attack phase is delegated to a system rather than just accelerated. The quorum design also adds resilience: if one or two models refuse, time out or hit guardrails the remaining answers can still produce a decision, and only a complete failure causes a sleep-and-retry fallback. Talos is releasing CAIRN, an open-source toolkit, to track AI-integrated malware and expects further examples to surface.
