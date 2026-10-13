---
id: ea27308747
title: Liquid clustering outperforms ZOrder on most lakehouse workloads in benchmark test
original_title: "Article: When Should You Use Liquid Clustering? Benchmarking Lakehouse Layout Strategies"
url: >-
  https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-13"
published_at: "2026-10-12T11:00:00.000Z"
authors:
  - Kushal Kumar Vishwakarma
comments: null
tags:
  - delta-lake
  - lakehouse
  - clustering
  - performance-benchmark
  - data-layout
  - news
why_read: >-
  Concrete benchmark results and a decision framework for choosing between partitioning, ZOrder and
  Liquid Clustering based on your query patterns.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A benchmark across four analytical workloads on Delta Lake found that Liquid Clustering delivered the lowest latency for point lookups, time-range aggregations and large aggregations on a fifty-million-record dataset. ZOrder performed better only when queries consistently filtered on the same two or three stable columns.

The benchmark revealed two hidden trade-offs. ZOrder fails when a date column is a secondary or tertiary clustering key, making time-range queries 78 percent slower than simple date partitioning. Liquid Clustering scans more raw data but achieves lower latency on point lookups because of better intra-file locality.

For teams with diverse or evolving query patterns, Liquid Clustering should be the default. It eliminates the operational burden of manual OPTIMIZE jobs and periodic table rewrites that ZOrder requires. The decision hinges on one question: do your top queries consistently filter on the same two or three columns?
