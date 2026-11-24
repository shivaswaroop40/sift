---
id: a121f1ab2d
title: Unit 42 tracks more than 10 campaigns using autonomous AI agents after web shell access
original_title: Recent Trends and Tactics of Agentic AI Attacks
url: https://unit42.paloaltonetworks.com/autonomous-ai-agent-threat-campaigns/
source: Unit 42
kind: research
section: threat-research
date: "2026-11-24"
published_at: "2026-11-24T15:00:19.000Z"
authors:
  - Noa Dekel
  - Tom Fakterman
comments: null
tags:
  - agentic-ai
  - web-shells
  - lateral-movement
  - credential-harvesting
  - threat-research
  - unit-42
  - research
why_read: >-
  The full report details the observed tactical patterns and the behavioural markers that can help
  you tell agent-driven intrusions from human ones.
rank: 12
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Unit 42 says it tracked more than 10 campaigns between July and September 2026 in which attackers used autonomous AI agents. Targets included government, logistics, hospitality, manufacturing, agriculture and education. In every case the initial foothold was a web shell deployed through a vulnerable web application.

Humans gave the objective and initial access. The agent then ran reconnaissance, credential harvesting, privilege escalation and lateral movement, and reported back through machine-readable output. Agents sometimes ran hundreds of unique commands within minutes, and tried five privilege escalation techniques in sequence when earlier ones failed.

Unit 42 says the techniques were not new. The agents used familiar open-source tools and lightweight custom scripts, and matched proficient human attackers at greater speed. The reported effect is a shorter attack lifecycle, from weeks or days to hours.

The agents were also noisy. Unit 42 lists structured machine-readable output, adaptive exploit selection, iterative refinement and chain-of-thought comments inside shell commands as fingerprints of a non-human operator. The excerpt is truncated, so the fuller list of markers is not visible.
