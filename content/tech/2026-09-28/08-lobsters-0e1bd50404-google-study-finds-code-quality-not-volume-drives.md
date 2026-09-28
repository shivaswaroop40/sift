---
id: 0e1bd50404
title: Google study finds code quality, not volume, drives developer productivity
original_title: What Improves Developer Productivity at Google? Code Quality (2022)
url: https://dl.acm.org/doi/pdf/10.1145/3540250.3558940
source: Lobsters
kind: community
section: papers
date: "2026-09-28"
published_at: "2026-09-27T12:52:57.000Z"
authors:
  - dl.acm.org via typesanitizer
  - dl.acm.org via typesanitizer
comments: https://lobste.rs/s/mwc2fu/what_improves_developer_productivity_at
tags:
  - developer-productivity
  - code-quality
  - research
  - engineering-management
  - community
why_read: >-
  You will see what Google's internal data says actually moves developer productivity, and why your
  commit count metrics are probably measuring the wrong thing.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Researchers at Google analysed panel data and survey responses from its software engineers to separate correlation from causation in developer productivity. Code quality, measured by factors such as complexity and churn, was the strongest causal lever. Output volume, often used as a proxy for productivity, correlated with speed but did not cause it.

The finding matters because most engineering organisations still measure individual contribution by lines shipped, commits or story points. The paper suggests those metrics reward noise rather than useful work and that tooling and review practices targeting quality are a better investment than pressure to ship more.

The paper was presented at ICSE 2022. Sample sizes and the exact effect sizes are behind a paywall, so the strength of the causal claim is not verifiable from the abstract alone.

The framing as causal relies on panel methods applied to a single firm, so generalisability to other engineering cultures is not established.
