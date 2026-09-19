---
id: c3b92c2d13
title: Microsoft ports Copilot runtime to Rust with AI agents for $120k in tokens
original_title: Microsoft agentically ports Copilot runtime to Rust for $120K
url: >-
  https://www.theregister.com/devops/2026/09/18/microsoft-agentically-ports-copilot-runtime-to-rust-for-120k/5297549
source: The Register
kind: news
section: languages-and-tools
date: "2026-09-19"
published_at: "2026-09-18T21:11:05.000Z"
authors: []
comments: null
tags:
  - rust
  - typescript
  - ai-agents
  - copilot
  - microsoft
  - devops
  - news
why_read: >-
  You will get a candid account of the cost, performance gains, and hidden failure modes of using AI
  agents to port a large production runtime.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

The software engine behind GitHub Copilot and a growing list of Microsoft products has been rewritten from TypeScript to Rust, with AI agents doing most of the work. The project converted 430,000 lines of TypeScript into 800,000 lines of Rust across 135 releases over 14.5 weeks, costing about $120,000 in tokens plus three weeks of developer time.

The performance case is concrete. A benchmark of 1,000 one-turn session lifecycles with 100 concurrent pipelines rose from 7.55 per second in TypeScript to 120 per second in Rust, a 15.9x speedup. Memory use for a 10-client agent batch fell from 1,383 MB to 126 MB, since the Rust rewrite runs in-process rather than spawning external completion processes.

The port was deliberately module-by-module and avoided structural changes to the runtime. Agents used Copilot itself to coordinate the work, with GPT-5.6 Sol and Claude Opus 4.8 handling different tasks. Toub noted agents spent far more time investigating than writing code, with one session reading documentation for 56 minutes and spawning 15 child sessions on the 30,000-line session.ts file.

The catch is regressions. Toub flagged a few dozen regressions in the ported code, including branch drift, missing features, and semantically wrong code that still compiled. Toub and RustConf speaker Lisa Crossman both warn that treating the Rust compiler as an oracle is a mistake for both LLMs and humans, since compilation only proves the code is valid Rust, not that it is the right program.
