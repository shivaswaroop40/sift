---
id: 81863c7b34
title: Cloudflare Traces exports proxy layer as OpenTelemetry spans with volume-based billing
original_title: Cloudflare Traces Turns the Proxy Layer into OpenTelemetry Spans, with New Volume-Based Pricing
url: >-
  https://www.infoq.com/news/2026/10/cloudflare-traces-open-beta/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-10-10"
published_at: "2026-10-10T07:12:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - observability
  - opentelemetry
  - cloudflare
  - tracing
  - pricing
  - news
why_read: >-
  Understand how Cloudflare's new tracing closes visibility gaps in your request path and what the
  volume-based pricing means for your observability costs.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Cloudflare Traces is now in open beta, converting proxy activity into OpenTelemetry spans. Security rules, cache decisions, routing, and Worker execution now appear as spans in a single request timeline without instrumentation. Context propagation via W3C traceparent headers lets traces span from upstream clients through Cloudflare to origin services.

For engineers debugging latency and routing, this closes the gap between client telemetry and application traces. Previous approaches inferred proxy internals from logs; now each decision appears with timing and outcome. A concrete example shows 527ms of a 539ms request spent fetching from origin due to cache miss.

Sampling uses Cloudflare's rules engine to set a baseline rate then override it for specific traffic patterns, hostnames, or debug headers. Pricing shifted from per-span billing to volume-based ingestion on December 1, 2026: paid plans include 50GB ingestion and 10GB-month storage, with overage at £0.25 per GB ingested and £0.10 per GB-month stored.
