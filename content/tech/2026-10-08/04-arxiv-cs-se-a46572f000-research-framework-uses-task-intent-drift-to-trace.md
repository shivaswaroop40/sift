---
id: a46572f000
title: Research framework uses task intent drift to trace indirect prompt injection attacks in LLM agents
original_title: >-
  AgentTracer: Tracing Indirect Prompt Injection Attack through Fine-Grained Intention-Execution
  Alignment
url: https://arxiv.org/abs/2610.09935
source: arXiv cs.SE
kind: paper
section: security
date: "2026-10-08"
published_at: "2026-10-08T04:00:00.000Z"
authors:
  - Zitong Yao
  - Jiangrong Wu
  - Yixi Lin
  - Anrui Huang
  - Luoyun Zhang
  - Yuhong Nan
comments: null
tags:
  - llm-security
  - prompt-injection
  - tracing
  - incident-response
  - agent-systems
  - paper
why_read: See how researchers approach tracing LLM agent compromises after indirect prompt injection occurs.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers presented AgentTracer, a tracing framework that reconstructs attack chains after indirect prompt injection (IPI) compromises LLM agents. It builds an Intent-Driven Execution Graph connecting tool calls by task intent rather than explicit data flow, identifying which operations diverged from authorised user requests. The method achieved 94 percent accuracy locating injection points across test data combining 1,800 legitimate user requests with 9,000 background tool calls.

Indirect prompt injection remains hard to defend against because malicious instructions hide among normal operations and lack explicit dependencies. Post-incident tracing matters to operators running LLM agents in production: it shows where the attack entered, which resources were compromised, and whether the injection came from external data or user input. This is essential for incident response and remediation.

The thin point: evaluation used synthetic attack data combined with normal logs, not real-world IPI incidents. The framework's practical effectiveness against sophisticated, obfuscated injections remains unclear.
