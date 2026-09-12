---
id: bca20538e9
title: Kubernetes v1.37 enables native histograms by default
original_title: "Kubernetes v1.37: Native Histograms Graduates to Beta"
url: https://kubernetes.io/blog/2026/09/11/kubernetes-v1-37-native-histograms-beta/
source: Kubernetes Blog
kind: blog
section: infrastructure
date: "2026-09-12"
published_at: "2026-09-11T18:30:00.000Z"
authors: []
comments: null
tags:
  - kubernetes
  - native-histograms
  - prometheus
  - observability
  - metrics
  - v1-37
  - blog
why_read: >-
  Get the migration details for scraping native histograms in Prometheus 2.x and 3.x without
  breaking existing dashboards.
rank: 7
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Kubernetes v1.37 graduates native histogram support for metrics to beta and enables it by default. The feature, introduced as alpha in v1.36 under KEP-5808, is implemented in k8s.io/component-base/metrics, so all major control plane and node components inherit it. Kubernetes emits classic buckets and native spans in the same Protobuf payload.

Native histograms replace static bucket boundaries with dynamic exponential buckets. That removes the need to guess bucket ranges, cuts the number of exported time series by up to 90%, and gives quantile calculations a worst-case relative error of about 5% under default settings. For operators, this means lower storage and scrape overhead and more accurate latency percentiles.

The default exponential configuration uses a bucket factor of 1.1 and caps buckets at 160 per histogram, following OpenTelemetry recommendations. Dual exposition means existing Prometheus servers and dashboards keep working, but Prometheus 3.x users must set always_scrape_classic_histograms: true during transition, otherwise classic _bucket, _count and _sum series stop being ingested.
