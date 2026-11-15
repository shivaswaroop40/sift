---
id: 25b360ab0c
title: DeepSeek V3 architecture reimplemented in 190 lines of JAX, trained on a MacBook Air
original_title: "Show HN: DeepSeek V3 in ~200 lines of pure Jax"
url: https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-15"
published_at: "2026-11-14T15:04:15.000Z"
authors:
  - VaibhaavTiwari
comments: https://news.ycombinator.com/item?id=50497589
tags:
  - deepseek
  - jax
  - mixture-of-experts
  - attention
  - machine-learning
  - apple-silicon
  - community
why_read: >-
  You get a compact, readable JAX implementation of MLA, shared-plus-routed MoE and MTP, plus a
  concrete ablation of bias-based expert balancing that you can rerun on a laptop.
rank: 5
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

A GitHub project implements the DeepSeek-V3 architecture in 190 lines of plain JAX, with no Flax, Equinox or PyTorch. It covers Multi-head Latent Attention, a shared expert plus 16 routed experts with top-4 routing, bias-based balancing, and multi-token prediction. The 36.2M-parameter model (13.6M active per token) trained for about 2.6 hours on a MacBook Air M5 using public-domain detective fiction.

The MLA cache shrinks from 480 to 144 numbers per token per layer in this configuration. In a 2,000-step ablation, the balancing bias kept expert load at 5.7 to 6.9 percent each. Without it, load ranged from 0.09 to 18.6 percent. Validation loss was effectively identical, at 3.921 with the bias and 3.923 without.

This is a readable reference for how the paper's mechanisms fit together, and the ablation is a small, clean check of the auxiliary-loss-free balancing claim. It is one run at toy scale, so it says little about behaviour at production size. The author calls it an architecture demo, not a strong language model, and the sample output reads that way.

Reproduction has constraints. jax-metal 0.1.1 needs JAX pinned to 0.4.34, and the checkpoint is a pickle, so only load it from a source you trust. The same code runs on an AMD GPU via ROCm, reaching a validation loss of 3.527 in about 50 minutes.
