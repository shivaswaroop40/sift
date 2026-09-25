---
id: a573d1c024
title: Tool-calling LLM agents face denial-of-wallet attacks via persistent billable state
original_title: "Persistent Billable State: Denial-of-Wallet Attacks and Defenses in Tool-Calling LLM Agents"
url: https://arxiv.org/abs/2609.28585
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-09-25"
published_at: "2026-09-25T04:00:00.000Z"
authors:
  - Jinqian Zhang (Institute of Information Engineering
  - Chinese Academy of Sciences
  - School of Cyber Security
  - University of Chinese Academy of Sciences)
  - Haojun Xia (Institute of Information Engineering
  - Chinese Academy of Sciences
comments: null
tags:
  - llm-security
  - prompt-injection
  - denial-of-wallet
  - mcp
  - agentic-ai
  - cost-control
  - paper
why_read: >-
  You will see a concrete attack class that turns one tool return into runaway LLM billing and the
  specific host-side invariants that block it.
rank: 5
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers define persistent billable state as content a host runtime carries from earlier tool returns into later billed model inputs. A malicious or compromised tool can inflate victim billing without victim credentials or local runtime privilege, framing the host's decision as a new security boundary.

They derive six denial-of-wallet attack vectors and build DOW-BENCH, tested across six model families in 243 executions. Worst-case per-session cumulative input reached 14,293 times the first-call input. Retaining raw history increased mean effective session cost by 21.2 to 35.9 percent, while compression preserved performance where deletion did not.

The proposed kernel combines deterministic history transformation with four invariants bounding prompt mass, context growth, recursive opportunity, and cumulative spend before reingestion. It contained every recurring attack in a 123-evaluation replay corpus, and a progress-authorised policy reached 22 of 24 oracle-verified task successes versus 13 of 24 under a fixed cap.

Only 71 of 3,830 scanned MCP server and transport repositories expose any code-visible safeguard, and none covered all four safeguard families. The authors argue pre-reingestion controls should be treated as a host-owned security primitive.
