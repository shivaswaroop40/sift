---
id: 5f504e154b
title: Postgres 19 REPACK reclaims table bloat online without extensions
original_title: "Postgres 19 REPACK: Built-In Online Table Bloat Cleanup"
url: https://www.snowflake.com/en/blog/engineering/postgres-19-repack-table-bloat/
source: Lobsters
kind: community
section: systems
date: "2026-11-04"
published_at: "2026-11-03T22:44:48.000Z"
authors:
  - snowflake.com via hongminhee
  - snowflake.com via hongminhee
comments: https://lobste.rs/s/uutnr5/postgres_19_repack_built_online_table
tags:
  - postgres
  - bloat
  - vacuum
  - mvcc
  - logical-decoding
  - community
why_read: >-
  You get the REPACK syntax, its locking behaviour, and its internal mechanism, plus a comparison
  with pg_repack and pg_squeeze.
rank: 1
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Postgres 19 adds REPACK as a first-class SQL command. REPACK (CONCURRENTLY) reclaims bloated space while the table stays readable and writable, taking a brief exclusive lock only at the end for the file swap. It captures concurrent changes through WAL-based logical decoding, so no triggers are installed on the target table. In the post's example, a 493 MB table shrank to 228 MB, a 54% reduction, in about 9.4 seconds.

Until now the options were poor. VACUUM FULL holds a read/write lock for the whole rebuild, which means minutes of downtime on a large table. pg_repack needs an external client binary and installs triggers that add overhead to every write during the rebuild. pg_squeeze avoids triggers but still requires wal_level=logical, a replication slot, and shared_preload_libraries. REPACK needs no extension and no separate configuration tables.

REPACK comes in three forms. Plain REPACK takes an ACCESS EXCLUSIVE lock, like VACUUM FULL. CONCURRENTLY rebuilds online. USING INDEX physically reorders rows to match an index, which may improve locality for workloads that read ranges of related rows. The post's rough rule of thumb is that below 50% bloat is generally acceptable, while above 50% is worth investigating for wasted disk and extra page reads.
