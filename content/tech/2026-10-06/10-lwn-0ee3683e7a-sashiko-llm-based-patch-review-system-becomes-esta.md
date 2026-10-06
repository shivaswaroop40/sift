---
id: 0ee3683e7a
title: Sashiko LLM-based patch review system becomes established in kernel development
original_title: "[$] An update on the Sashiko patch-review system"
url: https://lwn.net/Articles/1096963/
source: LWN
kind: news
section: infrastructure
date: "2026-10-06"
published_at: "2026-10-05T15:10:37.000Z"
authors:
  - corbet
comments: null
tags:
  - linux-kernel
  - code-review
  - llm
  - patch-management
  - news
why_read: Understand how the Linux kernel is adapting its review bottleneck with LLM assistance.
rank: 10
interest_score: 7
depth_score: 7
novelty_score: 6
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Sashiko uses large language models to generate automated code reviews for Linux kernel submissions. Roman Gushchin, the system's maintainer, presented an update at Kernel Recipes 2026, indicating the tool has moved from experiment to routine use in the kernel's development workflow.

Patch review has been a persistent bottleneck for the Linux project and others. Sashiko aims to ease reviewer load by automating initial feedback on submitted code, freeing human reviewers for more complex judgement.

The system appears to have achieved adoption within the kernel community's review processes, though the source text does not detail review quality, false positive rates, or which review types the LLM handles best.
