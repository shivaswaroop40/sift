---
id: ef267957e7
title: LLM context memory stored on disk proves 2.8x faster than recomputation
original_title: "Real Long-Term Memory for AI: A 50-Million-Token Window That Is Faster and Cheaper Than Recompute"
url: https://arxiv.org/abs/2610.10845
source: arXiv cs.DC
kind: paper
section: ai-and-ml
date: "2026-10-09"
published_at: "2026-10-09T04:00:00.000Z"
authors:
  - Sietse Schelpe
comments: null
tags:
  - llm
  - context-window
  - kv-cache
  - inference
  - energy-efficiency
  - paper
why_read: >-
  Understand a practical method to extend effective context length without increasing GPU memory or
  computational cost.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A memory layer for LLMs saves key-value cache blocks to encrypted NVMe disk, loading them back without recompute. Testing with 50 million tokens on Gemma models showed 100% successful retrievals across 100 probed blocks from 0 to 50M token depths.

This matters because KV recomputation is expensive. Loading cached blocks was 2.8x to 4.3x faster than recomputing them and consumed 8.8x to 12.3x less GPU energy, while GPU memory usage remained flat across the entire stream.

The approach retrieves stored state one block at a time rather than widening the attention window. The 12B model answered factual questions about content from millions of tokens earlier with 82% accuracy; the 31B model achieved 98% accuracy without hallucinating.
