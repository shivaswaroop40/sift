---
id: 098cc20ab6
title: Atlassian replaced gostatsd with OpenTelemetry collectors across 100k hosts
original_title: "OpenTelemetry everywhere: Migrating a metrics platform at scale"
url: >-
  https://www.cncf.io/blog/2026/09/17/opentelemetry-everywhere-migrating-a-metrics-platform-at-scale/
source: CNCF
kind: blog
section: infrastructure
date: "2026-09-17"
published_at: "2026-09-17T11:00:00.000Z"
authors:
  - Iris Grace Endozo
  - Farzad Vazirnia
  - Albert Kerr
  - Atlassian
comments: null
tags:
  - opentelemetry
  - observability
  - metrics
  - atlassian
  - migration
  - kubernetes
  - blog
why_read: >-
  You get a concrete, in-place migration plan from a StatsD-based metrics stack to OTel Collector
  stages, with the load-balancing and aggregation details that actually moved the needle.
rank: 5
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Atlassian rebuilt its metrics pipeline on OpenTelemetry Collector distributions across four stages (collection, ingest, aggregation, forward) while keeping the StatsD-over-UDP contract that services use. Apps kept firing StatsD into a sidecar OTel Collector that also accepts OTLP, so no team had to re-instrument on day one. The tracing team had already run OTel at scale, which de-risked the move.

It matters because it turns an org-wide SDK migration into a platform-team swap. Folding metrics into the existing tracing sidecar removed the gostatsd sidecar and cut about 3.9% average CPU per service on their priciest Micros, roughly a 30% reduction in sidecar cost at fleet scale.

Two engineering choices drove the savings. Ingest now routes by time-series stream ID using the loadbalancingexporter, which flattened hot shards that came from a long-tail service-to-metric distribution. Aggregation was rewritten with a custom delta-temporality processor, open-sourced under atlassian-labs, cutting tier CPU by about half.

The trade-off is that gostatsd aggregators and the nomad proxy still consume about 38% of CPU requests in their metrics clusters, with nomad alone at roughly 13% of total resources. Removing those is the final step before the pipeline is OpenTelemetry end to end.
