---
id: fef891394f
title: NumPy 2.5 speeds up searchsorted binary search by up to 25 times
original_title: Making np.searchsorted up to 25× Faster in NumPy 2.5
url: https://blog.scientific-python.org/numpy/searchsorted/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-10-11"
published_at: "2026-10-10T23:25:51.000Z"
authors:
  - blog.scientific-python.org via itamarst
  - blog.scientific-python.org via itamarst
comments: https://lobste.rs/s/fbs3k7/making_np_searchsorted_up_25x_faster
tags:
  - numpy
  - binary-search
  - vectorisation
  - performance
  - algorithms
  - community
why_read: >-
  Understand how vectorisation techniques extracted from research can improve core algorithms that
  power scientific computing libraries.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

NumPy 2.5 optimises np.searchsorted, the library's binary search implementation, achieving up to 25× speedup over version 2.4. The improvement uses vectorisation to process multiple searches in parallel using compiled C++ loops rather than sequential Python execution.

The optimisation matters because searchsorted is fundamental to the scientific Python ecosystem. Libraries like SciPy and scikit-learn rely on it for histogram computation and interval lookups. Any performance gain compounds across dependent libraries.

The approach forces all searches to complete in a fixed number of iterations by maintaining invariants about search interval reduction, eliminating the need to track which queries are still active. This removes conditional logic overhead and allows the CPU to process batches uniformly.
