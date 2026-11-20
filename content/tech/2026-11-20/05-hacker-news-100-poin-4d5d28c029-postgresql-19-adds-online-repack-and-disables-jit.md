---
id: 4d5d28c029
title: PostgreSQL 19 adds online REPACK and disables JIT by default, with several breaking changes
original_title: PostgreSQL 19
url: https://www.postgresql.org/docs/release/19.0/
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-11-20"
published_at: "2026-11-20T03:45:45.000Z"
authors:
  - linzhangrun
comments: https://news.ycombinator.com/item?id=50569890
tags:
  - postgresql
  - release-notes
  - pg-upgrade
  - autovacuum
  - logical-replication
  - jit
  - community
why_read: >-
  The release notes list every incompatibility with its reason, which is the checklist you need
  before planning a pg_upgrade or a change to vacuum, JIT or lock settings.
rank: 5
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

PostgreSQL 19 was released on 19 November 2026. The headline features are a REPACK command, with a CONCURRENTLY option that avoids blocking reads and writes, and two extensions, pg_plan_advice and pg_stash_advice, for steering planner decisions. Other additions include logical replication of sequences, a WAIT command for read-your-writes consistency on standbys, and parallel autovacuum of indexes.

Logical replication can now be enabled without a restart when wal_level is replica. Autovacuum gains a scoring system for prioritisation. The I/O worker count now scales automatically, so the io_workers variable is removed and replaced by four new ones. Foreign-key checks are also quicker, though the excerpt gives no figures.

The migration notes matter more than the feature list. JIT is now off by default because its cost-based activation was judged unreliable, so analytical workloads must switch it on. max_locks_per_transaction doubles to 128 because lock size allocation changed. Parallel vacuum workers now share one cost-delay budget, so such vacuums may run slower than before.

Other breaks need checking before an upgrade. standard_conforming_strings is forced on, so old dumps made with it off will not load. RADIUS support is removed. json_array() with no rows returns an empty array rather than NULL. btree_gist inet and cidr indexes block pg_upgrade. Full text search and pg_trgm indexes may need reindexing on non-libc locale providers. The source text is truncated, so the full feature sections are not covered here.
