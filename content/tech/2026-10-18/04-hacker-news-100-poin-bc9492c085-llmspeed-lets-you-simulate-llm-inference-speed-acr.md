---
id: bc9492c085
title: Llmspeed lets you simulate LLM inference speed across hardware before purchase
original_title: "Show HN: Llmspeed – feel how fast a local LLM runs before you buy the hardware"
url: https://llmspeed.dev/
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-10-18"
published_at: "2026-10-17T04:36:53.000Z"
authors:
  - albinstman
comments: https://news.ycombinator.com/item?id=50127979
tags:
  - llm
  - inference
  - benchmarking
  - local-models
  - hardware
  - community
why_read: Learn whether a given GPU or chip can run your model at acceptable speed without buying hardware.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Llmspeed is a browser tool that estimates token generation speed for local language models across thirty hardware configurations. It combines community benchmarks from r/LocalLLaMA and localscore.ai with projections based on hardware specifications. Users select a device and model to see estimated latency for short prompts.

For engineers evaluating whether to run models locally, this addresses the practical question of whether your hardware will feel fast enough. Inference speed determines whether a service is usable. The tool covers both consumer GPUs and enterprise platforms, plus CPU-only setups.

The site notes estimates come partly from measurements and partly from extrapolation. The source data and simulation code are open source on GitHub.
