---
id: e88ac738a8
title: Chinese hacker used ARTEX AI and Claude agents in coordinated attacks on South Korean banks
original_title: ARTEX AI, Claude agents used in cyberattacks on South Korean banks
url: >-
  https://www.bleepingcomputer.com/news/security/hacker-used-artex-ai-and-claude-agents-to-target-south-korean-banks/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-10-11"
published_at: "2026-10-10T14:16:17.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - ai-attacks
  - south-korea
  - banking
  - artex
  - claude
  - deepseek
  - news
why_read: >-
  Understand how attackers are combining open-source penetration frameworks with large language
  models to breach financial institutions at scale.
rank: 2
interest_score: 7.7
depth_score: 6
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A Chinese-speaking attacker exploited ARTEX AI, an open-source penetration testing suite, alongside Claude agents to breach three major South Korean banks including Shinhan, KB Kookmin, and Hana Bank. The attacks exposed customer personal data and credit card information, causing system outages. CrowdStrike found the attacker's infrastructure contained exposed Claude Code session histories, ARTEX configuration files, and memory records.

The attacker used DeepSeek v4.1-flash as the primary language model, supplemented by GLM-5.3 and Grok 4.6 for additional Claude sessions. This demonstrates how commodity AI tools and open-source penetration frameworks can be combined to conduct large-scale financial attacks. The exposed records showed the attacker had no clear monetization strategy and was seeking advice on selling stolen data.

After confirming real-world exploitation, ARTEX's developer made the project closed-source. However, English and Korean language derivatives already exist, meaning the attack surface remains open. CrowdStrike linked the activity to a 26-year-old based in Maoming, China, though the attribution confidence is limited due to inconsistencies in the exposed personal details.
