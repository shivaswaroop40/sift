---
id: 263d0f8697
title: OpenAI's faster Fourier transform is mathematically impossible on real computers
original_title: A look at the math that OpenAI claims computes faster Fourier transforms
url: https://www.argmin.net/p/faster-fourier-transforms
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-10-13"
published_at: "2026-10-13T02:46:43.000Z"
authors:
  - mochomocha
comments: https://news.ycombinator.com/item?id=50065932
tags:
  - fourier-transform
  - complexity-theory
  - mathematical-proofs
  - big-o-notation
  - galactic-algorithms
  - community
why_read: >-
  Understand why mathematical proofs of faster algorithms can be meaningless without physical
  feasibility constraints.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

OpenAI claims a faster FFT algorithm in its recent mathematics paper dump. Analysis reveals the algorithm has a hidden constant of approximately 10^100, meaning the standard Cooley-Tukey FFT would be 10^99 times faster for any practically computable input size. The claimed improvement only applies when n exceeds an astronomically large threshold.

The algorithm assumes exact arbitrary-precision complex arithmetic and operations on numbers with superpolynomial magnitude growth as single steps. Real computers cannot perform these operations, making the theoretical result irrelevant to actual signal processing. The mathematical model bears no resemblance to computational reality.

The result exemplifies how big-O notation enables logical laziness in theoretical work. Constants hidden in asymptotic analysis can render theoretically superior algorithms useless in practice. This is known as a galactic algorithm, where improvement only appears for input sizes larger than atoms in the observable universe.
