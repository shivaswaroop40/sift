---
id: adfd49295e
title: Retired instruction counts vary and overcount on x86_64 performance counters
original_title: Non-Determinism and Overcount on Modern Hardware Performance Counter Implementations
url: https://web.eece.maine.edu/~vweaver/projects/deterministic/deterministic_counters.pdf
source: Lobsters
kind: community
section: papers
date: "2026-11-01"
published_at: "2026-11-01T07:55:47.000Z"
authors:
  - web.eece.maine.edu via typesanitizer
  - web.eece.maine.edu via typesanitizer
comments: https://lobste.rs/s/pswl6z/non_determinism_overcount_on_modern
tags:
  - performance-counters
  - pmu
  - x86-64
  - profiling
  - determinism
  - community
why_read: >-
  You will get the paper's evidence on how far real PMU counts drift from exact, and what that means
  for deterministic measurement.
rank: 5
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

A paper on hardware performance counters finds that events which should be exact, such as retired instructions, show run-to-run variation and overcount on x86_64 machines. The variation persists even in strictly controlled environments. The work examines real performance monitoring unit implementations, which do not always match the ideal of exact, deterministic results.

This matters for anyone using PMU counters for profiling, benchmarking or regression detection. If retired-instruction counts differ between identical runs, comparisons built on them can mislead. The paper notes the effects are non-intuitive to casual users, so engineers may attribute counter drift to workload change rather than to the hardware itself.

The excerpt ends before the paper reports magnitudes or mechanisms, so the size of the overcount and its causes are not covered here. The findings are the paper's claims, taken from its opening, and the full detail sits in the PDF.
