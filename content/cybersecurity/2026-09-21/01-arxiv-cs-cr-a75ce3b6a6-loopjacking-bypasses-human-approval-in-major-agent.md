---
id: a75ce3b6a6
title: Loopjacking bypasses human approval in major agent frameworks
original_title: "Loopjacking: Hijacking Human-in-the-Loop Approval"
url: https://arxiv.org/abs/2609.21081
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-09-21"
published_at: "2026-09-21T04:00:00.000Z"
authors:
  - Adithyan Arun Kumar
comments: null
tags:
  - ai-security
  - human-in-the-loop
  - prompt-injection
  - agent-frameworks
  - vulnerability
  - paper
why_read: >-
  You will see concrete reproductions of approval-bypass attacks in released agent frameworks and
  learn two mitigations that preserve normal execution.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers define Loopjacking as a failure in human-in-the-loop agent approval, where a human approves operation A but the system executes a materially different operation B. They identify two variants: representation-based attacks where B is hidden or misrepresented at approval time, and post-approval state-substitution attacks where mutable workflow state replaces A with B after review.

The team reproduced post-approval substitution in seven Agno AgentOS releases up to 3.0.9 and twelve LangGraph Agent Server conditional compositions up to 0.14.0. They also reproduced representation mismatch in OpenClaw 2026.2.23, which was rejected in the 2026.2.24 release. OpenAI Agents SDK 0.22.0 and 0.22.2 served as negative controls, enforcing exact per-call binding.

The researchers propose two mitigations: rendering the complete canonical approval view to the human, and performing exact use-time comparison against that canonical record, or blocking unauthorised mutation of pending approval state. Both preserve legitimate execution. The paper notes that these results do not estimate ecosystem-wide prevalence, as the tested set was purposive rather than random.
