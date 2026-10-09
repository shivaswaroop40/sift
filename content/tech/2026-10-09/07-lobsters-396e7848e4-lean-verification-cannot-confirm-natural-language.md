---
id: 396e7848e4
title: Lean verification cannot confirm natural language mathematical proofs are correct
original_title: >-
  Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not
  guarantee correct natural language proofs
url: https://arxiv.org/abs/2610.08144
source: Lobsters
kind: community
section: ai-and-ml
date: "2026-10-09"
published_at: "2026-10-08T17:16:42.000Z"
authors:
  - arxiv.org via Corbin
  - arxiv.org via Corbin
comments: https://lobste.rs/s/axmhji/navier_stokes_lost_translation_why_lean
tags:
  - formal-verification
  - ai-translation
  - complexity-theory
  - lean
  - community
why_read: >-
  Understand why formal verification of AI-translated mathematics cannot guarantee the original
  argument is correct.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

A paper argues that AI systems translating mathematical text into formal languages like Lean offer no assurance the original natural language argument is sound. The authors prove that resolving ambiguities needed for faithful translation is arbitrarily high in the computational hierarchy, harder than the Halting problem.

To a distributed systems engineer, this matters because it exposes a fundamental limit in using formal verification as a proxy for correctness when the source is natural language. The gap between what a human writes and what a machine formalises can hide substantial errors.

The authors demonstrate the problem with concrete examples, including OpenAI's announced Navier-Stokes proof, showing the Lean formalisation does not match the natural language proof it was meant to verify.
