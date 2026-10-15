---
id: 7b500a6538
title: LTTng creator faces barriers to merging tracing framework with Linux kernel
original_title: "[$] Collaborating with out-of-tree tracers"
url: https://lwn.net/Articles/1099300/
source: LWN
kind: news
section: systems
date: "2026-10-15"
published_at: "2026-10-14T13:56:50.000Z"
authors:
  - jake
comments: null
tags:
  - tracing
  - kernel
  - lttng
  - ftrace
  - observability
  - licensing
  - news
why_read: >-
  Understand why a mature tracing system cannot integrate with kernel mainline and what that means
  for observability tools.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Mathieu Desnoyers, who created LTTng, presented at Linux Plumbers Conference 2026 about difficulties collaborating with other tracing projects like ftrace and perf. After 21 years of development, he has found no clear path to contribute LTTng or its features to the mainline kernel.

For platform engineers running complex systems, fragmentation between tracing frameworks creates operational burden. Merging capabilities into the kernel would reduce deployment friction and maintenance overhead.

LTTng is GPLv2-licensed, which may complicate integration discussions given existing kernel tracing infrastructure choices.
