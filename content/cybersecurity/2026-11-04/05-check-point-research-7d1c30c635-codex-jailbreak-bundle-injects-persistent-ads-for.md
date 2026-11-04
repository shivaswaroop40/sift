---
id: 7d1c30c635
title: Codex jailbreak bundle injects persistent ads for its author's LLM gateway
original_title: "Free the Model, Sell the Gateway: Prompt Adware hidden in Jailbreak Bundles"
url: >-
  https://research.checkpoint.com/2026/free-the-model-sell-the-gateway-prompt-adware-hidden-in-jailbreak-bundles/
source: Check Point Research
kind: research
section: threat-research
date: "2026-11-04"
published_at: "2026-11-03T13:57:04.000Z"
authors:
  - stcpresearch
comments: null
tags:
  - prompt-adware
  - jailbreak
  - ai-agents
  - codex
  - prompt-injection
  - research
why_read: >-
  The original details the bundle's prompt modules, jailbreak techniques and encryption design, and
  sets out prompt adware as a class of agent modification to monitor.
rank: 5
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Check Point Research analysed the Haiou jailbreak bundle, a Chinese-language prompt package for OpenAI Codex. It weakens model guardrails through role-play, refusal suppression and reframing security requests as Capture The Flag exercises. It installs six security skills covering penetration testing, license cracking, reverse engineering and game security. It also modifies Codex configuration files so advertisements for the author's website appear in subsequent agent responses. Check Point classifies this as prompt adware.

The advertised service is an opaque, OpenAI-compatible LLM gateway, and the free bundle appears to serve as an acquisition channel for that paid middleware. The prompt content is hidden from casual inspection. The GitHub package ships encrypted blobs, verified with Ed25519 signatures and SHA-256 hashes, and decrypted with an AES-256-GCM key embedded in the launcher script. Check Point speculates this prevents automated crawlers from creating static detections.

The bundle turned up on a misconfigured webserver belonging to a Cobalt Strike operator, alongside the Ladon network scanner and the VulnClaw penetration testing agent. Server logs showed the actor compromising private computers of Chinese-speaking individuals. Check Point notes this does not link the bundle's author to cybercrime, but it shows dual-use AI toolkits are in active use by threat actors.

Check Point defines prompt adware as modification that persistently alters an agent's trusted instructions, such as global prompts, Skills or configuration files, to influence future outputs. It operates through natural language in configuration artifacts rather than executable payloads. A Claude Code version exists under the same GitHub account, but only the Codex version is actively maintained and carries the ad-injection mechanism.
