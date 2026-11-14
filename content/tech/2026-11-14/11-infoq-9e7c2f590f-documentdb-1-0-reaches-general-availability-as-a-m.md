---
id: 9e7c2f590f
title: DocumentDB 1.0 reaches general availability as a MongoDB-compatible layer on PostgreSQL
original_title: Open Source DocumentDB 1.0 Reaches General Availability
url: >-
  https://www.infoq.com/news/2026/11/mongodb-compatible-documentdb/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-11-14"
published_at: "2026-11-14T06:37:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - documentdb
  - postgresql
  - mongodb
  - open-source
  - kubernetes
  - databases
  - news
why_read: >-
  The original links the release notes, upgrade paths, known issues and the community threads, which
  help you judge compatibility and latency claims before testing it against your own workload.
rank: 11
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

DocumentDB 1.0 is the first generally available release of the MIT-licensed document database built on PostgreSQL. It has two parts: a PostgreSQL extension with MongoDB API functionality, and a gateway that translates MongoDB protocol requests into PostgreSQL calls. Container images support PostgreSQL 15 to 18, Linux packages cover 17 and 18, and a Kubernetes operator is included.

Microsoft announced the project in early 2025 and it later joined the Linux Foundation, with backing from AWS, Google, Snowflake, Cockroach Labs and Yugabyte. The MIT licence permits commercial use, modification and hosting without disclosing proprietary code. That contrasts with MongoDB's SSPL, which matters if you want to host or distribute a document store.

Performance evidence is thin. Layerbase ran YCSB benchmarks against FerretDB, which uses the DocumentDB extensions as its backend. It found 20 to 33% higher read throughput for DocumentDB, while FerretDB had lower tail latency on updates in mixed workloads. Layerbase says the results are not conclusive. An open GitHub issue reports higher query latency than MongoDB 9.0.4, but this has not been independently verified.

Compatibility and naming remain sore points. Practitioners on Reddit report FerretDB compatibility as weaker than expected, and a Hacker News thread complains that the name collides with Amazon DocumentDB. Microsoft publishes a disambiguation page covering the open source project, Azure DocumentDB and Azure Cosmos DB. Long-term support and versioning policy are still under discussion.
