---
id: 76fc678aa3
title: Quantized LLM models cannot be verified to match signed full-precision originals
original_title: "What You Sign Is Not What You Run: The Verifiability Gap in Quantized LLM Supply Chains"
url: https://arxiv.org/abs/2610.19498
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-10-15"
published_at: "2026-10-15T04:00:00.000Z"
authors:
  - Wei-Liang Liu
  - Cheng-Yen Tsai
comments: null
tags:
  - quantization
  - supply-chain
  - model-signing
  - reproducibility
  - llm
  - tampering
  - paper
why_read: >-
  Learn what prevents verification of quantized models in production supply chains and which details
  must be disclosed and pinned.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Model signing certifies full-precision LLM weights, but users run quantized versions whose creation process is not documented. Researchers measured the Independent Verifiability Rate across 198 popular GGUF repositories on Hugging Face and found zero could be reproduced bit-for-bit from disclosed information, since no model card recorded the build environment.

This matters because a quantized artifact could be tampered with and the tampering would be undetectable without reproducibility. Benign floating-point variation can hide deliberate changes, and even targeted embedding edits evade statistical detection when exact re-derivation is not possible.

When four repositories disclosed their full build inputs, researchers reproduced 7 of 8 target quantized files on x86 by adding two undocumented coordinates: the floating-point-contraction compiler setting and the per-tensor quantization recipe. The calibration data also required distribution and hash verification, as recomputing it diverged from the original.
