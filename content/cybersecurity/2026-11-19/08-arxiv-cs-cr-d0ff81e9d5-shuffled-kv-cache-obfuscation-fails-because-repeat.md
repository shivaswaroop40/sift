---
id: d0ff81e9d5
title: Shuffled KV cache obfuscation fails because repeated tokens collapse the permutation space
original_title: "When Shuffling Fails: Token Recovery from Obfuscated KV Caches"
url: https://arxiv.org/abs/2611.24276
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-11-19"
published_at: "2026-11-19T05:00:00.000Z"
authors:
  - Chengzhi Yi
  - Xiao Cheng
  - Wei Song
  - Haoyu Wang
comments: null
tags:
  - llm-security
  - kv-cache
  - obfuscation
  - side-channel
  - kv-cloak
  - privacy
  - paper
why_read: >-
  The paper shows why counting permutations overstates security when inputs are symmetric, and it
  gives a concrete test for any KV cache obfuscation scheme you evaluate.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

The paper attacks shuffled obfuscation of LLM KV caches, which pairs secret linear transforms with fresh permutations. Its claimed security rests on b! possible shufflings. The authors argue this count is wrong. Repeated tokens give identical first-layer Value rows, so row permutations change nothing. Only auxiliary structures such as a single-row recovery marker vary, cutting the effective state space from b! to b.

The attack, Repeat-to-Reveal, collects the b distinguishable states from the attacker's own probes. It uses their rank-one differences to build an equivalent denoiser without the defender's secrets. One calibration transfers across requests in the same secret epoch. The attacker can then passively recover token multisets from observed cache blocks by matching against a public-model dictionary.

The authors test it on official KV-Cloak with 3,000 WildChat prompts, nine models and eleven configurations. They report accurate secret recovery and 100 percent token-multiset recovery on GPU. They also report the same orbit collapse in the sequence-permutation implementation of Thomas et al. and in PermLLM.

Refreshing row-level secrets between epochs breaks cross-request transfer, which the authors take as showing that secret reuse scope is the real weakness. The KV-Cloak developers were invited to receive a detailed report privately. These are the authors' claims from the abstract.
