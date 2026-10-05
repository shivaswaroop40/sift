---
id: 2a80b8806c
title: Qwen 3.8 Flash 125B model runs on RTX 4090 at 53 tokens per second
original_title: Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s
url: https://github.com/Niko1221/Strata
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-10-05"
published_at: "2026-10-04T12:51:53.000Z"
authors:
  - snehesht
comments: https://news.ycombinator.com/item?id=49953495
tags:
  - inference
  - quantisation
  - local-llm
  - gpu
  - community
why_read: >-
  See the speed and compression trade-offs for running a large language model entirely offline on
  gaming hardware.
rank: 11
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Strata, an open source tool, runs the 125-billion-parameter Qwen 3.8 Flash Next model on consumer gaming PCs with 12GB or more VRAM. On an RTX 5070 with 64GB system RAM, it achieves 53 tokens per second for generation and 1,620 tokens per second for reading prompts in the IQ3_S compression. Multiple quantised versions trade speed for model quality.

For engineers running inference locally, this matters because a model typically requiring server infrastructure now fits on a gaming PC at reasonable speeds. The trade-off is clear: faster generation uses more aggressive quantisation, while the full-precision variant runs at 7-8.5 tokens per second on the same hardware. All inference stays local, with no API calls.

System requirements are minimal by modern standards: a compatible GPU with 12GB VRAM, 32GB system RAM minimum (64GB recommended), and 80GB disk space. The installer handles setup and model selection based on available hardware. Multiple cards can share the model for additional throughput.
