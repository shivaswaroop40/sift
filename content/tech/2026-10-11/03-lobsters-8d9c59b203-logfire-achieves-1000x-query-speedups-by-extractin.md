---
id: 8d9c59b203
title: Logfire achieves 1000x query speedups by extracting attributes into separate columns
original_title: How shredding JSON is giving Logfire 1000x query speedups
url: https://pydantic.dev/articles/dynamic-shredding-2026-01-26
source: Lobsters
kind: community
section: systems
date: "2026-10-11"
published_at: "2026-10-11T06:16:26.000Z"
authors:
  - pydantic.dev via typesanitizer
  - pydantic.dev via typesanitizer
comments: https://lobste.rs/s/6vjx1k/how_shredding_json_is_giving_logfire
tags:
  - parquet
  - columnar-storage
  - observability
  - json
  - query-optimization
  - semi-structured-data
  - community
why_read: >-
  Learn why extracting semi-structured data into columns beats fast JSON parsing for observability
  workloads.
rank: 3
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Logfire stores OpenTelemetry data as JSON in Parquet, mixing fixed schema fields with semi-structured attributes. The team discovered that querying nested JSON blobs was slow due to parsing overhead and large IO costs from object storage downloads, even with fast parsers like Jiter.

For semi-structured data like attributes, columnar databases normally use zone maps (min-max statistics) to skip row groups that don't match filter predicates. JSON blobs defeat this optimisation because the attributes vary widely and compress poorly. Shredding extracts commonly queried attributes into separate typed columns, enabling statistics-based pruning.

The technique moved from static shredding (hardcoded list of known attributes) to dynamic shredding, where frequently queried attributes are automatically promoted to columns during ingestion. Queries that timed out after 30 seconds now complete in under one second in some cases. The feature rolls out to all customers in February 2026.
