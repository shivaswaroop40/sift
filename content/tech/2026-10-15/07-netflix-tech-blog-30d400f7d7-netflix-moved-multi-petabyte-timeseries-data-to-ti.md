---
id: 30d400f7d7
title: Netflix moved multi-petabyte timeseries data to tiered cold storage on Cassandra
original_title: "TimeSeries Tiered Storage Journey: Kafka/Flink Streams to Native Cassandra Cold Reads"
url: >-
  https://netflixtechblog.com/timeseries-tiered-storage-journey-kafka-flink-streams-to-native-cassandra-cold-reads-e59d597c9d60?source=rss----2615bd06b42e---4
source: Netflix Tech Blog
kind: blog
section: systems
date: "2026-10-15"
published_at: "2026-10-14T19:56:08.000Z"
authors:
  - Netflix Technology Blog
comments: null
tags:
  - cassandra
  - tiered-storage
  - kafka
  - flink
  - streaming
  - cost-optimization
  - blog
why_read: >-
  Learn how Netflix reduced costs for petabyte-scale timeseries storage without sacrificing query
  patterns.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Netflix's TimeSeries Abstraction platform stores petabytes of temporal event data across hot and cold tiers. The company migrated data from expensive hot storage tuned for millisecond latency to native Cassandra cold reads, using Kafka and Flink to manage the pipeline.

Keeping massive datasets in low-latency hot storage is costly. Moving infrequently accessed data to cold storage cuts infrastructure spend while maintaining query capability, a common trade-off for platforms handling operational metrics at scale.

The shift uses streaming systems to automatically tier data based on access patterns, reducing storage costs without rebuilding the query abstraction layer.
