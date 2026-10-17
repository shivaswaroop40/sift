---
id: 8cf181851f
title: Amazon acquires DuckLabs and integrates DuckDB into Aurora PostgreSQL
original_title: Amazon Acquires DuckLabs and Integrates DuckDB in Amazon Aurora PostgreSQL
url: >-
  https://www.infoq.com/news/2026/10/amazon-acquires-ducklabs/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-17"
published_at: "2026-10-17T06:00:00.000Z"
authors:
  - Gianmarco Nalin
comments: null
tags:
  - duckdb
  - aurora-postgresql
  - analytics
  - s3
  - aws
  - acquisitions
  - news
why_read: >-
  Understand how DuckDB's columnar design solves analytical queries under one terabyte and why AWS
  integrated it into Aurora.
rank: 11
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Amazon has acquired DuckLabs, the company behind DuckDB, an analytical database optimised for queries on datasets under one terabyte. DuckDB and related projects remain open source under MIT licence, with the DuckDB Foundation continuing oversight. The founders will lead the team within AWS.

DuckDB addresses a gap for engineers running analytical workloads on modest data volumes, particularly when combining transactional and historical data. The integration into Aurora PostgreSQL eliminates reverse ETL pipelines, reducing data duplication and synchronisation overhead. Queries now combine live transactional data with S3-backed Apache Iceberg or Parquet files within Aurora, incurring only compute and S3 request charges.

AWS identified DuckDB as particularly suited to agentic AI workloads, where agents run small exploratory queries to inspect data before deciding on further action. The relationship evolved over two years, beginning with S3 Tables collaboration and expanding to Lambda integrations and database engine connectors.
