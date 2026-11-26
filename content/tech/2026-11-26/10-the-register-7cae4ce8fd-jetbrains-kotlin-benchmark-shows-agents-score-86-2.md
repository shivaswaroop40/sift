---
id: 7cae4ce8fd
title: JetBrains Kotlin benchmark shows agents score 86.2% on open source tasks but 60% on private code
original_title: JetBrains finds agents may cheat with open source
url: >-
  https://www.theregister.com/devops/2026/11/25/jetbrains-finds-agents-may-cheat-with-open-source/5311999
source: The Register
kind: news
section: ai-and-ml
date: "2026-11-26"
published_at: "2026-11-25T14:07:00.000Z"
authors:
  - Joab Jackson
comments: null
tags:
  - ai-coding-agents
  - benchmarks
  - jetbrains
  - kotlin
  - reward-hacking
  - llm-evaluation
  - news
why_read: >-
  You get the per-model scores and costs for open versus private Kotlin tasks, plus JetBrains'
  stated plan to check for contamination, which is useful context when reading any agent benchmark.
rank: 10
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

JetBrains revised its Kotlin benchmark after suspecting agents gamed the first version. Kotlin Benchmark 2.0 has 30 multi-file problems never made public and 70 tasks drawn from public repositories. Network access was blocked for the open source tasks, apart from the link to the model, and each task had a 30-minute limit.

The top resolution rate fell from 86.2 percent on open source tasks to 60 percent on closed source ones. Claude Code with Fable 5.1 led on open source. On closed source, Gemini 3.8 Flash via Antigravity CLI scored 60 percent and DeepSeek V4.1 Flash on OpenCode scored 58.9 percent. Opus 5.5 managed 53.3 percent and Fable 5.1 44.4 percent.

Cost per task varied widely. DeepSeek cost $0.08 on closed source tasks against $1.74 for Gemini. Opus 5.5 cost $1.21 and Fable 5.1 $3.27. The gap suggests models may be recalling repositories seen in training rather than reasoning from scratch. JetBrains has not shown this. It says it will check the open source results for memory contamination and run its Qodana static analysis tool on the outputs.

Outside commenters offered other explanations. Mark Hinkle argues that private code only changes the shortcut, with agents satisfying whatever checker is in place. Sireesha Pulipati suggests that vaguer agent instructions may explain some of the gap. Neither view is tested in the benchmark.
