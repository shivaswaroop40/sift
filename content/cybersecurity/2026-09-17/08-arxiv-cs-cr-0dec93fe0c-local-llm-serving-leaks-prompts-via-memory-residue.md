---
id: 0dec93fe0c
title: Local LLM serving leaks prompts via memory residue and a llama.cpp authorization flaw
original_title: "The Illusion of Local Privacy: Confidentiality Boundary Failures in Consumer LLM Serving Systems"
url: https://arxiv.org/abs/2609.18526
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-09-17"
published_at: "2026-09-17T04:00:00.000Z"
authors:
  - Youssef Hamdi Zafan Ibrahim
  - Muhammad Ikram
  - Mohammed Khalaf Salama
comments: null
tags:
  - llm
  - llama-cpp
  - local-inference
  - prompt-leakage
  - authorization
  - timing-attack
  - paper
why_read: >-
  You will see concrete failure modes in local LLM stacks, including a reliable cross-tenant
  authorisation bug in llama.cpp and measured prompt recovery from runtime memory.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers tested whether running LLMs locally keeps prompts confidential and found that it does not. Prompt data can leak at four boundaries: model loading, runtime memory, wrapper-level persistence, and the serving interface.

They built LLAnalyzer and applied it to four open-weight model families across two consumer deployment platforms. A 24-hour AFL++ campaign with over 12 million executions found no parser crashes or malformed GGUF loads. Runtime memory was the main problem: plaintext prompt residues survive in allocator-managed memory after inference, and sanitisation only reduces them.

They also found that consumer wrappers can persist prompts to disk in plaintext. At the serving boundary, they uncovered a previously undocumented authorisation flaw in llama.cpp that lets one authenticated client restore another tenant's saved conversation state, succeeding in 200 out of 200 controlled trials. A separate shared prompt-prefix cache exposes a remote timing oracle still distinguishable over WAN conditions.

The authors argue that local LLM systems need explicit guarantees for prompt lifetime, persistent storage, and tenant isolation, not just local inference.
