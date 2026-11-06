---
id: 34e80fa49b
title: Check Point finds 1,608 live ARTEX panels driving autonomous cybercrime campaigns
original_title: "Hacking on Autopilot: Inside ARTEX Cybercrime Campaigns"
url: https://research.checkpoint.com/2026/hacking-on-autopilot-inside-artex-cybercrime-campaigns/
source: Check Point Research
kind: research
section: threat-research
date: "2026-11-06"
published_at: "2026-11-05T17:22:06.000Z"
authors:
  - stcpresearch
comments: null
tags:
  - artex
  - agentic-attacks
  - llm-abuse
  - cybercrime
  - code-signing
  - research
why_read: >-
  The original breaks down model usage across the exposed consoles and details observed campaigns,
  including the iOS signing certificate heist.
rank: 3
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Check Point Research obtained artifacts from ARTEX operator consoles, including 10 misconfigured instances that exposed full databases of prompts, model choices and attack steps. A scan found 2,557 systems hosting ARTEX panels, with 1,608 live and publicly reachable. Chinese models dominated the configured LLMs, led by the Deepseek Flash family. Guardrails triggered only on Anthropic's Opus 5.5, and that operator then switched to more permissive Chinese models.

The attacks were almost fully autonomous once the operator set the initial goal. Operators mainly checked progress. Goals were exclusively opportunistic, financially motivated cybercrime at broad scale, abusing web vulnerabilities such as remote code execution, sometimes pivoting to supply chain attacks. Check Point notes such frameworks let actors attack at previously impossible speed and scale, without technical knowledge. Many operators also configured residential proxies to bypass WAF restrictions and IP blocks.

The economics stand out. One operator ran two ARTEX consoles in parallel for roughly two weeks, targeting 10 grey-market iOS signing shops to steal .p12 code-signing certificates for resale. The agent fleet consumed 36 billion tokens, costing an estimated $700 to $1,500 at DeepSeek API prices. Sustained autonomous attack campaigns are cheap to run at this scale.

ARTEX's developer made the project closed-source on 8 October after attacks on South Korean banks, but maintained forks and backups keep it available to threat actors. Check Point also observed similar frameworks such as CyberStrike, Cairn and PentAGI, plus custom agentic tools built from scratch.
