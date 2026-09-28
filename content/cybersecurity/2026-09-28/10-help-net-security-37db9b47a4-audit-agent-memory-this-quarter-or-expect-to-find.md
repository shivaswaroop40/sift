---
id: 37db9b47a4
title: Audit agent memory this quarter, or expect to find plaintext credentials
original_title: If you do one security check this quarter, make it agent memory
url: https://www.helpnetsecurity.com/2026/09/28/chris-latimer-vectorize-agent-memory-security/
source: Help Net Security
kind: news
section: defence
date: "2026-09-28"
published_at: "2026-09-28T06:00:40.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - agentic-ai
  - ai-security
  - memory-poisoning
  - credentials
  - mcp
  - ciso
  - news
why_read: >-
  You will get a practitioner's view of where agent memory breaks down and a concrete audit
  checklist to run this quarter.
rank: 10
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Vectorize CEO Chris Latimer reviewed the memory stores of coding agents and found API keys, database passwords, credentials, and confidential documents stored in plaintext on developer workstations, in cloud memory services, and in markdown files. He argues that the same data companies protect through their SDLC is now sitting unencrypted in agent long-term memory.

Latimer warns that memory poisoning is the main attack vector. Malicious plugins, skills, and MCP integrations can target new coders who install extensions promising free tokens or other unrealistic benefits. Once installed, the plugin scans memory and exfiltrates keys and tokens to an attacker-controlled endpoint.

Access control on agent memory is immature compared to RBAC and ABAC on structured data. Most products can keep one user's session memories from leaking to another, but team-based and graduated access models are still evolving. Latimer ties this to the OWASP Memory Guard reference project, which focuses on detecting and filtering poisoned memories before they are persisted.

Latimer's recommended action is an informal audit of every agent memory solution in use. He expects CISOs to discover unmanaged deployments on individual workstations or small servers and large volumes of sensitive plaintext data, and to treat any finding as something to patch quickly.
