---
id: 690f39d837
title: Anthropic moves Cowork model inference and VM to the cloud
original_title: Quoting Felix Rieseberg
url: https://simonwillison.net/2026/Oct/5/felix-rieseberg/
source: Simon Willison
kind: blog
section: infrastructure
date: "2026-10-06"
published_at: "2026-10-05T23:56:47.000Z"
authors: []
comments: null
tags:
  - anthropic
  - claude
  - cloud-computing
  - inference
  - agents
  - blog
why_read: Learn how Anthropic addressed the trade-offs of local versus cloud execution for agent tooling.
rank: 8
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Cowork shifted from running a local VM for tool execution to cloud-based inference and sandboxing. Each session gets its own isolated sandbox. When the VM needs device resources, the desktop app handles file access calls.

Local VM execution solved safety and capability concerns but drained battery and disk space. Users also lost work when closing their laptop. The cloud model addresses these constraints while preserving feature parity.

The change enables phone access and persistent sessions without local performance cost.
