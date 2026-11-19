---
id: 1190b2b59b
title: >-
  LinkedIn moves Spark and Flink shuffle to Apache Celeborn and cuts daily fetch failures from 750
  to 20
original_title: LinkedIn Cuts Daily Spark Shuffle Fetch Failures from 750 to 20 with Apache Celeborn
url: >-
  https://www.infoq.com/news/2026/11/linkedin-celeborn-remote-shuffle/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-19"
published_at: "2026-11-18T15:05:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - apache-spark
  - apache-flink
  - celeborn
  - shuffle
  - linkedin
  - distributed-systems
  - news
why_read: >-
  The original covers the control-plane design, the storage and compression choices, and how remote
  shuffle fits LinkedIn's move to unified Flink backfills.
rank: 8
interest_score: 7.3
depth_score: 8
novelty_score: 6
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

LinkedIn has deployed Apache Celeborn as a shared remote shuffle service for most of its Spark and Flink workloads. It replaces Magnet, the company's push-based shuffle, whose storage ran on External Shuffle Services inside the compute cluster. Daily shuffle fetch failures fell from about 750 to 20. Compute costs fell 10% and application runtimes improved 14%.

Celeborn uses dedicated workers that receive pushed map output, aggregate partitions and serve reducers directly. Shuffle storage no longer competes with executors for CPU, memory, disk I/O and network. LinkedIn runs a five-node Raft control plane across availability zones, using Apache Ratis for metadata replication and failover. It added network-aware replication and ties worker selection to its host health platform.

Data-plane changes carried much of the gain. NVMe SSDs cut overall shuffle duration by 40%. Zstandard instead of LZ4 shrank the worker fleet by about 35%. Workers have 100 Gbps interfaces, and slot selection is six times faster. LinkedIn reports shuffle cost per task down nearly 90%. Task failures during infrastructure disruptions fell 20-fold against Magnet.

The figures come from LinkedIn's own account and are not independently verified. Patnam says running Celeborn at this scale needed substantial engineering beyond the upstream project. The scale is also large, at over 300,000 Spark jobs a day, so smaller operators should not expect the same results.
