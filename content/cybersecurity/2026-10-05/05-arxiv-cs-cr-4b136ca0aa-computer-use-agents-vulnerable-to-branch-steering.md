---
id: 4b136ca0aa
title: Computer-use agents vulnerable to branch steering attacks that bypass dual-LLM defences
original_title: Securing Computer-Use Agents Against Branch Steering Attacks
url: https://arxiv.org/abs/2610.03089
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Giulio Zingrillo
  - Hanna Foerster
  - Ilia Shumailov
  - Yiren Zhao
  - Robert Mullins
comments: null
tags:
  - prompt-injection
  - llm-agents
  - architecture
  - defense
  - paper
why_read: >-
  Learn how pre-approved execution branches can be exploited and what architectural fix eliminates
  the vulnerability.
rank: 5
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Computer-use agents that interact with graphical interfaces face a new attack class called branch steering. Adversaries craft untrusted data to force agents down pre-approved but dangerous execution branches without injecting explicit instructions. This bypasses the Dual-LLM architecture, which uses a planner LLM and quarantined LLM to isolate planning from untrusted inputs.

The attack succeeds because CUA plans cannot remain data-independent in graphical environments. Plans must branch based on anticipated web content, covering all possible runtime scenarios. An attacker exploits this by steering the agent into a legitimate-looking branch that performs harmful actions. Standard agents fail 94.4% of the time; Dual-LLM agents fail 89.5%.

The paper proposes COBRA, which adds ahead-of-time capability constraints to branching plans. Each branch specifies strict parameter bounds and permitted destinations before execution. On the authors' 101-task benchmark across nine domains, COBRA reduces attack success to zero while preserving 97% of normal functionality.
