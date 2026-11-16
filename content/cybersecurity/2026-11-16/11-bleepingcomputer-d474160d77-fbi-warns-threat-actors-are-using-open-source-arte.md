---
id: d474160d77
title: FBI warns threat actors are using open-source ARTEX AI framework to automate intrusions
original_title: FBI warns ARTEX AI hacking tool is powering global cyberattacks
url: >-
  https://www.bleepingcomputer.com/news/security/fbi-warns-artex-ai-hacking-tool-is-powering-global-cyberattacks/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-11-16"
published_at: "2026-11-15T18:29:53.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - artex
  - ai-agents
  - fbi
  - microsoft-365
  - supply-chain
  - detection
  - news
why_read: >-
  The advisory has indicators of compromise and defensive guidance, and the article links the
  framework to specific campaigns such as the ConnectWise breach.
rank: 11
interest_score: 6.3
depth_score: 5
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

The FBI has issued a FLASH advisory saying multiple threat actors have used ARTEX, an open-source autonomous penetration testing framework written in Go, since at least August 2026. It drives external LLMs such as Claude, GPT, DeepSeek, GLM, Grok and Kimi through specialised agents. Some intrusions reached privileged access in under three hours.

Known uses include the October ConnectWise Cloud Backup supply-chain attack. Attackers compromised application identities and tried to authenticate to more than 2,250 downstream Microsoft 365 tenants. Huntress found at least 162 compromised tenants. Microsoft attributed the campaign to Storm-0940. Other cases include attacks on South Korean banks and a Vapor Panda campaign against more than 200 organisations.

The FBI says ARTEX is good at finding weak spots in partner portals, employee apps, legacy services and third-party integrations. Automated attacks can be noisy, but their speed leaves little time to respond. The original developer removed the repository on 8 October. Forks, archived copies and a commercial edition, ARTEX PRO, remain available, and more than 1,600 exposed consoles were found by early November.

The advisory includes indicators of compromise, though the FBI warns the IP addresses may be out of date. MalwareMustDie has released an open-source detection signature pack and a playbook that rates indicators by confidence. Recommended steps include rate limits on sensitive APIs, restricted cloud admin access, and reviews of application permissions and authentication logs.
