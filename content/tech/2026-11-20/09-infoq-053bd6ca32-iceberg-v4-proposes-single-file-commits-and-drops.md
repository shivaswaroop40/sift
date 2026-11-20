---
id: 053bd6ca32
title: Iceberg V4 proposes single-file commits and drops backward compatibility with older readers
original_title: "QCon San Francisco 2026: The Future of Apache Iceberg"
url: >-
  https://www.infoq.com/news/2026/11/iceberg-v4-metadata/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-11-20"
published_at: "2026-11-20T09:17:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - apache-iceberg
  - table-formats
  - data-lake
  - metadata
  - streaming
  - qcon
  - news
why_read: >-
  The article gives the V4 changes in compact form, including the I/O reduction per commit and the
  compatibility break, which matter if you plan Iceberg upgrades or streaming writes.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Daniel Weeks, an Iceberg co-creator now at Databricks, described the proposed V4 table format spec at QCon San Francisco. The main change is a new metadata tree. In V3, adding a data file takes at least four I/O operations, including manifest creation and rewriting. In V4 the tree's root can point straight at data files, so the operation becomes one metadata write.

Weeks said this could allow commits every second or at subsecond intervals. The current advice is to avoid commits more often than every two minutes. V4 also replaces binary column statistics with typed, structured ones, and adds relative file paths, column-level updates, and file and vector data types.

For anyone running Iceberg under streaming ingestion, commit frequency is the pain point. Today that usually means batching, compaction jobs and metadata growth to manage. A cheaper commit path could reduce that work, although this is a proposal and the subsecond figure is the speaker's claim, not a benchmark.

V4 metadata will not be backward compatible. Weeks confirmed that existing V3 metadata can stay in place during an upgrade, but older readers cannot consume the new representation. Teams with mixed engine versions will need to plan reader upgrades first. The spec also proposes constraints such as check, unique and primary key, and expression-based defaults.
