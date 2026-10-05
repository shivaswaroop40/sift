---
id: 3957a5b433
title: Stateful honeypot reduces autonomous agent attack success from 96% to 79%
original_title: "AgentTrap: Stateful Feedback Deception against Autonomous Penetration Testing Agents"
url: https://arxiv.org/abs/2610.02869
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Yuelin Wang
  - Jiongchi Yu
  - Yanbang Sun
comments: null
tags:
  - honeypot
  - autonomous-agents
  - deception
  - penetration-testing
  - adversarial-defence
  - paper
why_read: >-
  Understand how stateful deception can degrade autonomous agent attacks and what defensive
  mechanisms matter most.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

AgentTrap is a closed-loop honeypot designed to deceive autonomous penetration testing agents. It uses sentinel endpoints to filter benign traffic, stateful deception grounded in the target application, and behaviour-guided escalation to sustain agent engagement and extract forensic evidence.

Conventional honeypots deploy static artefacts and fixed responses, unable to adapt as agents refine their strategies. AgentTrap closes this gap by simulating legitimate application behaviour that changes in response to agent actions, making deception harder to distinguish from reality.

Evaluated against eight autonomous agents on a web application, AgentTrap reduced real-target attack success from 95.8% to 79.2%. It also extracted attacker API keys in 18.8% of runs. Static deception and fixed escalation performed worse, suggesting that adaptive response is critical.

The paper notes that agent resilience to such counterattacks depends on two factors: whether the model recognises deceptive requests, and whether the system architecture isolates sensitive resources. Neither factor alone is sufficient.
