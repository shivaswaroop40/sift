---
id: 1ff071c631
title: Audit finds several conformal-prediction libraries pick the wrong rank for quantile intervals
original_title: >-
  A level is not a rank: an empirical audit of quantile-to-index conversion in 10 released
  conformal-prediction libraries
url: https://arxiv.org/abs/2611.23329
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-19"
published_at: "2026-11-19T05:00:00.000Z"
authors:
  - Shivam Lalakiya
comments: null
tags:
  - conformal-prediction
  - forecasting
  - statsforecast
  - darts
  - uncertainty-quantification
  - library-audit
  - paper
why_read: >-
  You get the audit method, the list of affected code paths, and a conformance suite and review
  checklist for checking how your own helpers turn levels into ranks.
rank: 12
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

An audit of 39 places where a coverage level becomes an index, across 10 pinned conformal-prediction packages, found some resolve to the wrong rank. At n = 20, statsforecast's upper interval end sits at position 18.05, where rank 19 is required for 0.90 coverage. All 7 tabular implementations reached the required rank.

In darts, on one code path, coverage matched the required rank where the two agreed. Where they differed, coverage was 0.0280 to 0.0560 lower. A second archive repeated the split but not the range. Below the feasibility floor, n < 1/alpha - 1, 5 of 14 public call paths silently return a finite number. The rest raise or warn.

The cause is that quantile functions take only a level. The rank needed for the finite-sample guarantee is r/(n + 1), so passing a level to a generic quantile function can land on a different position. Statsforecast's default calibrates below its floor.

The sample is a named set of packages, not a systematic search. Twelve sites were classified by running them, 11 through their shared numpy method, and the rest from source. Of 19 upstream filings, 6 have merged, one fixing a coverage shortfall.
