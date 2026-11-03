---
id: b28e552991
title: Binance loses $6.3 billion after DevOps laptop compromise linked to North Korea
original_title: 2nd November – Threat Intelligence Report
url: https://research.checkpoint.com/2026/2nd-november-threat-intelligence-report/
source: Check Point Research
kind: research
section: incidents
date: "2026-11-03"
published_at: "2026-11-02T15:57:23.000Z"
authors:
  - urias@checkpoint.com
comments: null
tags:
  - binance
  - cryptocurrency-theft
  - brotli
  - linux-kernel
  - ai-agents
  - supply-chain
  - research
why_read: >-
  The full bulletin adds the Japan Airlines and Florida education breaches, Check Point's analysis
  of unexpected Qwen model network activity, and IPS protection details for the Brotli flaw.
rank: 11
interest_score: 6
depth_score: 5
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

Check Point's weekly report leads with the theft of roughly $6.3 billion in digital assets from Binance. Attackers compromised a DevOps engineer's laptop and abused internal wallet infrastructure to authorise withdrawals. The incident, linked to a North Korean group, ranks among the largest cryptocurrency thefts recorded. Polymarket separately disclosed a compromised third-party service that served malicious JavaScript to its website, hijacking authenticated trading sessions, with about $2.7 million traced to a suspected attacker wallet.

For defenders, the patch list is the most actionable section. HTTP2Shell (CVE-2026-111497) is an actively exploited remote code execution flaw in Brotli decompression, and it may reach beyond Node.js into Python packages, .NET and proxies. Linux kernel CVE-2026-98432, scored 9.8, permits unauthenticated root code execution on systems exposing Multipath TCP listeners. Both Drupal's Commerce Core module and Cisco's ASA and Firepower SSL VPN software had flaws exploited before patches shipped.

Offensive AI use is maturing. The GOLD OGRE ransomware group used AI agents during Aur0ra attacks to perform network reconnaissance, identify privileged accounts and support lateral movement, after operators supplied compromised credentials and objectives. It also used AI-assisted development to test endpoint security evasion. The China-linked VAPOR PANDA group used the AI-enabled ARTEX framework against more than 200 organisations in at least 14 countries, stealing credentials and deploying the BLOODALCHEMY backdoor.

Other items include the Yoba campaign, which spreads malicious installers disguised as ChatGPT and Claude desktop apps through fraudulent GitHub projects. Researchers also documented more than 400 incidents in which attackers impersonated internal IT support over Microsoft Teams external chat to gain initial access. The UAT-11473 actor exploited a Cisco Catalyst SD-WAN authentication bypass to deploy KeyDrift, which extracts encryption material from compromised network controllers.
