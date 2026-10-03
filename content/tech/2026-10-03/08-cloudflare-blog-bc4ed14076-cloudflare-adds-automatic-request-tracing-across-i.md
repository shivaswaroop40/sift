---
id: bc4ed14076
title: Cloudflare adds automatic request tracing across its platform
original_title: "Introducing Cloudflare Traces: follow requests through our entire platform"
url: https://blog.cloudflare.com/cloudflare-tracing/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-10-03"
published_at: "2026-10-02T13:00:00.000Z"
authors:
  - Mar Witek
comments: null
tags:
  - observability
  - tracing
  - opentelemetry
  - cloudflare
  - distributed-tracing
  - blog
why_read: >-
  Learn what visibility Cloudflare now exposes for request handling and how to propagate traces
  through your entire stack.
rank: 8
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cloudflare Traces, now in open beta, captures timing and behaviour for supported platform operations in a single request timeline. Security rules, transformations, caching, routing, Worker execution and origin handling now appear in one trace. No additional setup is required beyond enabling the feature on a domain.

This matters because engineers investigating slow or broken requests can see exactly where time is spent and which configuration decisions affected the path through Cloudflare, rather than reconstructing behaviour from separate logs.

Tracing works end-to-end. Cloudflare accepts W3C traceparent headers from incoming requests and forwards them to origins, allowing a single trace to follow a request through Cloudflare, application code, databases and other services. Spans export via OpenTelemetry Protocol to any compatible observability backend.

You can set a baseline sampling rate and use Trace Rules to override it for specific traffic, capturing 100 percent of requests for a customer's hostname or IP during investigation while others remain at one percent.
