---
id: 57a6dcddd9
title: Carbon accounting gap between cloud workload metrics and provider reports remains hard to close
original_title: Reconciling Bottom-Up Metrics with Top-Down Reporting for Cloud Carbon Accounting
url: https://arxiv.org/abs/2610.10148
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-08"
published_at: "2026-10-08T04:00:00.000Z"
authors:
  - Philipp Wiesner
  - Lo\"ic Lannelongue
  - Alexander Acker
  - Odej Kao
comments: null
tags:
  - cloud
  - carbon-accounting
  - metrics
  - infrastructure
  - observability
  - paper
why_read: >-
  Understand why your carbon optimizations may not align with corporate carbon reports, and what
  would fix it.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Engineers can measure software carbon intensity per workload, but cloud providers report total tenant footprint in ways that hide infrastructure overhead and embodied carbon. The two signals diverge in scope and frequency, creating a measurement gap that undermines accountability.

If an engineer optimizes a workload's carbon efficiency but the provider's audited report shows no improvement, the organization will not trust carbon-aware development for real. Bottom-up metrics lose credibility without reconciliation to top-down reporting.

The authors propose reconciled SCI: a per-workload metric that anchors optimizations to the provider's audited footprint through residual allocation. This requires providers to report consistently and transparently enough to attribute idle capacity and embodied carbon to specific workloads.
