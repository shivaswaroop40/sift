---
id: 5ad4f5f410
title: Re-testing eleven LLM C-to-Rust translators finds 160 defects their own checks missed
original_title: Re-Testing LLM-Based C-to-Rust Translations Against Their Original C
url: https://arxiv.org/abs/2611.23839
source: arXiv cs.SE
kind: paper
section: languages-and-tools
date: "2026-11-19"
published_at: "2026-11-19T05:00:00.000Z"
authors:
  - Muhammad Hassnain
comments: null
tags:
  - rust
  - c
  - llm
  - code-translation
  - testing
  - differential-testing
  - paper
why_read: >-
  You get a concrete method for re-testing translated code against the original, plus the authors'
  list of checks that a credible translation benchmark should pass.
rank: 9
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

The authors surveyed 34 C-to-Rust translators that use LLMs. Only one reports testing its own correctness check, and eleven release both the original C and the Rust in runnable form. They re-tested all eleven by running both programs on generated inputs and comparing every output. A divergence counted only where the C has no undefined behaviour.

All eleven released defective translations. The authors found 160 defects, 93 of them outright errors on ordinary inputs. The translators' own checks had accepted 86 of the defective translations. In 81 of those, the check never compared the programs on an input that exposes the defect.

Of the other five, the check ran an exposing input in three cases but compared only part of the output. The abstract does not explain the remaining two. The paper's point is that a reported success rate is only as good as the check behind it.
