---
id: fca6cbc8bb
title: Compression saves little in multi-turn coding agents beyond tool-schema filtering
original_title: An Empirical Cost Attribution of Context-Compression Gateways in Multi-Turn Coding Agents
url: https://arxiv.org/abs/2609.22114
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - Luzhuo Chen
  - Jiayu Shi
comments: null
tags:
  - llm
  - cost
  - context-compression
  - coding-agents
  - benchmarks
  - tokens
  - paper
why_read: >-
  You will see concrete numbers separating which context-compression moves actually cut the bill on
  multi-turn coding agents and which are theatre.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

The paper instruments a production gateway (Paritok) between Claude Code, Codex, Claude Sonnet and GPT-5, and decomposes the token bill of real sessions into three levers: tool-schema filtering, content compression of file reads and outputs, and history summarisation. In controlled A/B runs, the levers save at fundamentally different rates.

Tool-schema filtering removes 21K-57K tokens per turn and is linear in the turn count. It is the only unambiguously positive lever. Content compression only saves about 2% of the cache-priced prefix per turn, and the authors argue earlier evidence is unreliable.

Content compression of file reads grows quadratically at roughly 3350*N^2 tokens, overtaking the fixed tool-filter saving within about 6 turns until the context window caps it. A non-destructive gateway that lets the agent recall original bytes re-sends one segment per recall, so its cost is bounded rather than multiplicative, but heavy recall spends the saving back one segment at a time.

The authors also note that a strong single-shot benchmark of 86.5% SWE-bench quality retained at 25.7% compression is orthogonal to multi-turn cost and should not be used as a cost-saving argument.
