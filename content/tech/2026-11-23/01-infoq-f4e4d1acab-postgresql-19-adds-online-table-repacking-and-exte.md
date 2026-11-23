---
id: f4e4d1acab
title: PostgreSQL 19 adds online table repacking and extensions for steering query plans
original_title: PostgreSQL 19 Released with Online Table Repacking and Query Planning Controls
url: >-
  https://www.infoq.com/news/2026/11/postgresql-19-released/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-23"
published_at: "2026-11-22T12:54:00.000Z"
authors:
  - Robert Krzaczyński
comments: null
tags:
  - postgresql
  - database
  - vacuum
  - query-planning
  - replication
  - release
  - news
why_read: >-
  The release notes and this summary give the full list of changes, including MD5 warnings and TLS
  SNI, that you would want to check before planning an upgrade.
rank: 1
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

PostgreSQL 19 adds REPACK, which reclaims unused table space and can reorder rows to match an index. With its CONCURRENTLY option it runs without blocking reads or writes. It could replace common uses of VACUUM FULL and CLUSTER. Two new extensions, pg_plan_advice and pg_stash_advice, let administrators influence plan choice and attach stored advice to queries by identifier, without changing application code.

Other changes touch maintenance and the planner. Index vacuuming can now run in parallel, autovacuum prioritisation has changed, and EXPLAIN ANALYZE reports asynchronous I/O and WAL from full-page images. The project says foreign key check changes made bulk inserts nearly twice as fast in testing. The planner gets more efficient anti-joins for eligible NOT IN clauses and eager aggregation before joins.

Logical replication now covers sequence values, and the effective WAL level rises to logical when the first logical slot is created. WAIT FOR LSN lets an application wait until a standby has replayed a given WAL position, which gives read-your-writes consistency on replicas. JIT is now off by default because its cost estimates proved unreliable. LZ4 becomes the default TOAST compression where the build supports it.
