---
id: 4fd4e25f17
title: Atlassian cut incident detection latency from 40 seconds to under 10 with Flink and Kafka
original_title: >-
  From 40 seconds to under 10: rebuilding incident detection on OpenTelemetry, Apache Kafka, and
  Apache Flink on Kubernetes
url: >-
  https://www.cncf.io/blog/2026/09/30/from-40-seconds-to-under-10-rebuilding-incident-detection-on-opentelemetry-apache-kafka-and-apache-flink-on-kubernetes/
source: CNCF
kind: blog
section: systems
date: "2026-10-01"
published_at: "2026-09-30T11:00:00.000Z"
authors:
  - Deepak Biswas
  - Senior Engineering Manager
  - Central Monitoring
  - Disaster Recovery
  - Atlassian
comments: null
tags:
  - kafka
  - flink
  - opentelemetry
  - observability
  - incident-detection
  - kubernetes
  - blog
why_read: >-
  Learn how a large SaaS platform reduced incident detection latency and decoupled it from shared
  queue scaling.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Atlassian rebuilt its incident detection platform to identify problems faster. The system processes billions of operational events daily through Apache Kafka and Flink on Kubernetes, with OpenTelemetry exporting metrics. Event-to-metric latency fell from over 40 seconds to under 10 seconds, though recall fluctuated between 60% and 86% over eighteen months.

Detection speed matters when customers report outages before monitoring systems notice them. The old architecture shared queue infrastructure with other tenants, creating noisy-neighbour failures. A dedicated Kafka topic and isolated Flink job removed that coupling and eliminated scaling costs tied to onboarded products rather than event volume.

The system detects both failures and silence: hard-down database shards produce no events, so the pipeline watches for volume drops as well as errors. Configuration-driven filtering at the Kafka subscription level keeps the pipeline focused, reducing the topic to 45% of bus traffic while retaining seven days for replay and idempotent recovery.
