---
id: 85a1686d16
title: Unverified authorisation claims raise LLM agent monitor approval from 5% to 98%
original_title: "Silence Is Endorsement: Verification-Status Laundering in LLM Agent Pipelines"
url: https://arxiv.org/abs/2609.20211
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-09-18"
published_at: "2026-09-18T04:00:00.000Z"
authors:
  - Yibo Hu
comments: null
tags:
  - llm-security
  - agent-pipelines
  - prompt-injection
  - safety-monitoring
  - authorisation
  - paper
why_read: >-
  Shows how summarisation and memory steps quietly strip safety status from authorisation claims,
  and why prompt-level patches are not enough.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers found that LLM agent safety monitors can be manipulated by stripping the 'unverified' framing from authorisation claims while leaving the claim itself intact. They call this 'verification-status laundering' and tested it across nine open-weight monitors and two hosted models. On Llama-3.1-8B approval for risky actions rose from 5% to 60%, and on Qwen2.5-14B from 9% to 98%, with similar jumps on hosted models.

The failure emerges in normal agent pipelines too. Summarisers weaken provenance, memory compressors often erase it, and a full proposer-summariser-memory-monitor pipeline drove risky approval to between 57% and 81% across three downstream monitors. WildGuard and ATBench reproduced the pattern on independently written harmful requests. Telling monitors to reject unverified authorisation is not a reliable fix, since some models stay vulnerable while others start rejecting legitimate work.

The paper recommends carrying authorisation provenance as structured state attached to the claim throughout the pipeline, rather than relying on natural language framing that downstream components can drop or paraphrase.
