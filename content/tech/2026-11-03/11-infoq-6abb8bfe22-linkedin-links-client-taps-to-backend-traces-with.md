---
id: 6abb8bfe22
title: LinkedIn links client taps to backend traces with OpenTelemetry and pageForestId
original_title: LinkedIn Uses OpenTelemetry to Trace the Member Journey from Tap to Backend
url: >-
  https://www.infoq.com/news/2026/11/linkedin-opentelemetry-journey/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-03"
published_at: "2026-11-03T12:00:00.000Z"
authors:
  - Craig Risi
comments: null
tags:
  - opentelemetry
  - distributed-tracing
  - observability
  - linkedin
  - clickhouse
  - sampling
  - news
why_read: >-
  The original details the pageForestId model, coordinated head sampling and the Kafka and
  ClickHouse pipeline behind LinkedIn's client-to-backend tracing.
rank: 11
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

LinkedIn has built an OpenTelemetry-based platform that connects member actions in its iOS, Android and web apps with the backend services handling them. Each request keeps its OpenTelemetry traceId. A pageForestId groups requests originating from the same page, giving context above individual traces. Spans travel through Apache Kafka into ClickHouse, correlated by pageForestId, traceId and timestamps.

This matters because standard distributed tracing follows one request, while a member journey spans many. The pageForestId lets engineers start from a member-facing interaction and drill into the backend execution behind it. LinkedIn uses coordinated head sampling, keyed on a pseudonymised member identifier, so client and server activity for the same journey receives one sampling decision rather than being dropped independently.

Sampling is fundamental because capturing every span would generate enormous volume. LinkedIn estimates up to 90% of some backend tracing could count as debug-level data, and it separates that from quality-of-experience telemetry. Mobile clients batch spans and flush when the app moves to the background. Attribute allowlists, denylists and redaction keep sensitive member data out of traces.

The capability itself is not new. Datadog and New Relic already combine distributed tracing with real-user monitoring, and Jaeger and Tempo trace backend requests. LinkedIn's aim is to make OpenTelemetry the common foundation across its Java, Python, Go and Rust services, with wrappers handling mobile lifecycle and export, and to keep instrumentation independent of any commercial backend.
