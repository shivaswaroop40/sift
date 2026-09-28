---
id: c3425a7838
title: AGATE gates LLM agent tool calls with provenance and parameter-bound grants
original_title: "AGATE: Provenance-Based Runtime Defense Against Compositional Attacks on LLM Agents"
url: https://arxiv.org/abs/2609.30830
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Xiaorui Zhang
  - Zhuoran Cheng
  - Kailin Liu
  - Zhaoxi Sun
  - Shiyu Fan
  - Tongyu Yuan
comments: null
tags:
  - llm
  - agents
  - runtime-defence
  - provenance
  - authorization
  - tool-use
  - paper
why_read: >-
  You will see how a provenance-and-grant gate stops multi-step agent attacks, what it costs in
  utility, and where attackers can still slip past parameter-bound checks.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers propose AGATE, a runtime gate that sits at LLM agent harness boundaries to decide whether individual actions are permitted. Decisions rest on operator declarations, host approval events, and grants that bind to exact parameters, expire, and cap reuse, so a single grant cannot be redirected to other inputs.

The system also tracks data provenance: source registration links inputs to later transfers and an effect ledger counts repeated requests. Judgement runs without an LLM in the decision path and records grounds with execution evidence for forensic replay.

Adapters wrap three production harnesses (DeepSeek Harness, OpenCode, and OpenClaw) without changing host code, sharing one judgement core. Evaluation drew on 153 attack-chain records and 252 runs across 63 sanitised scenarios, where replay matched live graph projections for every scenario on two platforms.

Deployment observations surfaced a bypass through parameter rewriting and showed six of eleven benign file-processing scenarios triggering denial events, a real utility cost of content-based provenance. The authors flag content transformation, legitimate reuse, and observation coverage as open limits.
