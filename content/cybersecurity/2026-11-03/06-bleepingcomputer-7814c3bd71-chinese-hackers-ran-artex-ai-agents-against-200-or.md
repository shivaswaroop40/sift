---
id: 7814c3bd71
title: Chinese hackers ran ARTEX AI agents against 200 organisations in 14 countries
original_title: Chinese hackers use ARTEX AI in automated attacks against 200 orgs
url: >-
  https://www.bleepingcomputer.com/news/security/chinese-hackers-use-artex-ai-in-automated-attacks-against-200-orgs/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-11-03"
published_at: "2026-11-02T21:40:14.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - ai-agents
  - vapor-panda
  - artex
  - cyberespionage
  - china
  - news
why_read: >-
  You get CrowdStrike's full account of the Vapor Panda campaign and DIVD's timeline of an
  autonomous ARTEX breach.
rank: 6
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

CrowdStrike reports that the China-nexus actor it tracks as Vapor Panda used ARTEX, a multi-agent AI penetration-testing framework first released as open source by Chinese developers, against more than 200 organisations across 14 countries. The operation began on 17 October. Targets included government ministries, telecoms, and pharmaceutical, semiconductor, defence, nuclear, and financial firms. At least nine organisations were compromised, and password spraying and credential scanning hit at least 12 further high-value targets.

CrowdStrike says the campaign marks an escalation in China-nexus use of AI agents, from single intrusions to multiple simultaneous engagements directed by a human operator. The agents performed reconnaissance, exploited vulnerabilities, deployed web shells, obtained credentials, and pursued alternative attack paths. Operators issued instructions in Chinese and intervened at critical decision points, using DeepSeek and an unidentified commercial language model to coordinate planning and worker agents.

In the attack on a Greek government entity, the agents forged an administrator token and read mailboxes using authentication keys from a 2022 mail-server directory export. Operators explicitly told the agents to skip Windows machines protected by CrowdStrike's Falcon and focus on unprotected hosts. One intrusion consumed more than 1.4 billion input tokens. The actor also deployed the BLOODALCHEMY backdoor, active since 2023, against government entities in Latin America and the Middle East.

Separately, the Dutch Institute for Vulnerability Disclosure says ARTEX AI acted autonomously in its September 2026 breach. The agent moved from initial access to root in 12 minutes, chaining a Zammad zero-day with a second zero-day for local privilege escalation. It read a compromised mailbox, scanned the internal network, extracted login tokens, and attempted password resets at the same time. DIVD recorded over 450,000 requests and 2,500 scripts, and called the activity "super loud and messy".
