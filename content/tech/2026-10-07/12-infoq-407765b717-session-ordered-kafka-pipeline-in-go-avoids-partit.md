---
id: 407765b717
title: Session-ordered Kafka pipeline in Go avoids partition-per-session overhead
original_title: "Article: Building a Session-Ordered Kafka Pipeline in Go"
url: >-
  https://www.infoq.com/articles/apache-kafka-golang-session-ordered-pipeline/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-07"
published_at: "2026-10-07T09:00:00.000Z"
authors:
  - Joshua Oluikpe
comments: null
tags:
  - kafka
  - go
  - message-ordering
  - distributed-systems
  - session-affinity
  - news
why_read: Learn how to build session-ordered pipelines without creating one partition per session.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A conversational AI platform built a two-level worker hierarchy to preserve message order within chat sessions while processing thousands of sessions in parallel. Consistent hashing routes messages from the same session to a single per-session goroutine, which processes them sequentially. The system has handled over 40 million messages in production with no ordering violations and reached 100,000 messages per second in testing.

For distributed systems engineers, this matters because Kafka partition ordering alone cannot enforce session-level ordering when many sessions share partitions. The design avoids the operational cost of partition-per-session (which would degrade broker performance with excessive partitions) by handling ordering at the application layer instead.

Retries happen in-place inside each session goroutine, using exponential backoff without a separate retry state machine. Failed messages block subsequent messages in the same session, preventing overtaking. Non-recoverable errors skip retry and go directly to a dead letter queue.
