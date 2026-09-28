---
id: af31a009af
title: Provenance fixes moved 98% of rows but did not change either verification decision
original_title: "Empty Intersection: Provenance Coverage Rose to 98% and Neither Verification Decision Moved"
url: https://arxiv.org/abs/2609.30308
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Dong Hyeon Jeon
comments: null
tags:
  - provenance
  - data-quality
  - verification
  - measurement
  - observability
  - paper
why_read: >-
  It shows why compliance-style interventions can move the bulk of a dataset and still leave the
  specific queries a system runs untouched.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Two structural fixes for provenance, a grade on every row and a single write ingress, were measured against a frozen snapshot of 194,620 rows. Neither prescription moved either of the two verification decisions the snapshot supports.

Widening the grade vocabulary raised classified coverage from 36.1% to 98.4% across 121,296 rows, and the single ingress refused 3,070 writes. Each prescription is stated over the whole population and makes no reference to any decision, so neither says which rows a decision will read.

The rows each intervention repaired and the 32 rows the decisions read do not intersect. The bulk fix showed the gap most plainly, as all 121,296 rows it moved from unnameable to named fall outside both query windows, so none of the three changes gave either decision admissible input.

The two decisions are blocked for different reasons, and the paper claims no prior work had measured whether either prescription changes a verdict. Both prescriptions were drawn from established practice in fields that do not cite one another, and the paper offers the measurement rather than the fixes.
