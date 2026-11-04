---
id: f56ebfc7bc
title: Qwen 3.8 27B on a laptop identifies games from raw policy network weights
original_title: Qwen 3.8 27B on my laptop can interpret model weights, too
url: https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-04"
published_at: "2026-11-03T17:40:00.000Z"
authors:
  - theanonymousone
comments: https://news.ycombinator.com/item?id=50355251
tags:
  - qwen
  - llms
  - interpretability
  - weight-space-programming
  - local-models
  - community
why_read: >-
  Willison shares the exact commands, prompts and reasoning traces, with links to the paper's GitHub
  logs for all four games.
rank: 5
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Simon Willison replicated part of a paper claiming that LLMs can read raw neural network weights. The paper, Sparks of Weight-Space Programming, reports that GPT-6 Astra can tell what a network was trained to do from raw weights alone. Willison gave Qwen 3.8 27B, running locally in LM Studio, the floating-point weights of policy networks trained on 10x10 grid versions of four Atari games. No tools or code execution were allowed. It identified Pac-Man, Pong and Breakout correctly. It failed on Freeway, reading it as a Pac-Man-like grid game.

The runs were slow. Pac-Man took 46 minutes 12 seconds and 43,506 reasoning tokens, at 72% confidence. Pong took 1 hour 4 minutes at 75% confidence, and Breakout 52 minutes at 88%. The 17GB model needed a long context window because the default 8192 tokens failed. Kimi K3.1 Pro, run via OpenRouter, identified Breakout in 9 minutes 41 seconds using 19,493 reasoning tokens.

The result matters because a capability claimed for a frontier proprietary model appeared in an open model small enough for a laptop. The prompts are self-contained and published on GitHub, so the experiment is cheap to reproduce. The wider paper deserves caution. Matthew Honnibal called it misleading for conflating no-tools weight reading with code-assisted editing. Sean Goedecke argued that the weight-editing result, where Astra edits 0.016% of Qwen3.5-0.8B's weights to raise MATH-500 from 7.9% to 48.1%, follows steps a human ML researcher would take.
