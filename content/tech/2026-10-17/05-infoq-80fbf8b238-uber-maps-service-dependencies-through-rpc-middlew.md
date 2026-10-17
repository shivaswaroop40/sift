---
id: 80fbf8b238
title: Uber maps service dependencies through RPC middleware instead of tracing
original_title: Uber Automates Dependency Analysis Across Its Service Mesh
url: >-
  https://www.infoq.com/news/2026/10/uber-automated-dependency/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-17"
published_at: "2026-10-16T14:39:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - service-mesh
  - observability
  - microservices
  - failure-propagation
  - middleware
  - rpc
  - news
why_read: >-
  Understand how Uber solved dependency failure mapping at scale without the sampling penalties of
  distributed tracing.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Uber built an automated system to classify how failures propagate across its service mesh. It uses middleware in YARPC, its RPC framework, to correlate caller and callee failures in production. Dependencies are classified as fail-close (failure propagates), fail-open (does not propagate), or unknown based on a 0.8 probability threshold.

Distributed tracing with sampling is impractical at Uber's scale. With 99.9% success rates and 500 requests per second, sampling at 0.01% means waiting hours to capture one failed request. The middleware approach trades per-request visibility for faster, production-wide dependency cataloging without storing individual traces.

Inbound middleware generates request IDs and records the caller service. Outbound middleware logs the downstream service and result. At completion, metrics capture failure correlation between caller and callee, avoiding the overhead of trace storage and tail sampling evaluation.
