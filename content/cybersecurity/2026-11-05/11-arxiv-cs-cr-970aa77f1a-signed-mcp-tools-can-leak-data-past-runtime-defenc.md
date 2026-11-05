---
id: 970aa77f1a
title: Signed MCP tools can leak data past runtime defences and germline execution bounds it
original_title: "Signed, Sealed, Leaked: Trust Beyond Signature for MCP Toolchains"
url: https://arxiv.org/abs/2611.06585
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-11-05"
published_at: "2026-11-05T05:00:00.000Z"
authors:
  - Yichiet Aun (Universiti Tunku Abdul Rahman)
  - Mohammed A. Alhartomi (University of Tabuk)
  - Jing Jie Tan (National University of Singapore)
  - Waqas Nadeem (Universiti Tunku Abdul Rahman)
  - Adeb Salh (Universiti Tunku Abdul Rahman)
  - Shankar Karuppayah (Bitranger
comments: null
tags:
  - mcp
  - ai-agents
  - exfiltration
  - code-signing
  - sandboxing
  - noninterference
  - paper
why_read: >-
  The paper details the exfiltration technique that defeats MCPGuard-Dynamic, the germline execution
  design, and the proofs and benchmarks behind its noninterference claim.
rank: 11
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Researchers built a signed MCP tool that performs its advertised function while concealing code that leaks confidential data. The tool embeds sensitive information in requests to a destination the security policy already permits. Meta's MCPGuard-Dynamic, described as a state-of-the-art runtime defence, blocked a direct exfiltration attempt in the same run, yet failed to stop this attack in every trial.

This matters because signature verification and runtime policy enforcement are the standard controls for agent toolchains. A tool can satisfy both and still steal data through a channel the policy allows. Teams running third-party MCP servers cannot treat publisher authenticity as evidence of benign behaviour.

The paper proposes germline execution, which limits disclosure without inspecting or trusting tool code. Each invocation runs in an ephemeral copy forked from a data-free germline process, and each copy receives only the information authorised for its destination. Malicious code can still run, but what it can disclose is bounded by the data available to its copy.

Across 153 attack runs, no unauthorised disclosure was detected under germline execution, against 5.9-74.5% of runs under baseline defences and an ablation. Invocations served by a single copy completed in 10-49 ms, 2-28x faster than restarting the tool for every invocation. The authors prove sink noninterference for every signed release, under explicit assumptions on copy confinement and a data-free germline.
