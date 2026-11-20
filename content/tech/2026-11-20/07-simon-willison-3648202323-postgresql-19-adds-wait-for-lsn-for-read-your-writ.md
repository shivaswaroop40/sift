---
id: "3648202323"
title: PostgreSQL 19 adds WAIT FOR LSN for read-your-writes on standbys, two months late
original_title: PostgreSQL 19 Released
url: https://simonwillison.net/2026/Nov/19/postgresql-19/
source: Simon Willison
kind: blog
section: systems
date: "2026-11-20"
published_at: "2026-11-19T20:43:57.000Z"
authors: []
comments: null
tags:
  - postgresql
  - replication
  - read-your-writes
  - databases
  - mysql
  - scaling
  - blog
why_read: >-
  You get the exact command syntax and a worked example of the pattern, plus a link to MediaWiki's
  MySQL version for comparison.
rank: 7
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

PostgreSQL 19 was released in November, about two months later than the usual September slot. Simon Willison attributes the delay mainly to the volume of issues the team had to address from AI-reported vulnerabilities. He calls the release worth the wait, and picks one feature as his favourite.

That feature is a new WAIT FOR LSN command. A session on a standby can block until the standby has replayed the write-ahead log up to a given log sequence number. The application takes the LSN from pg_current_wal_insert_lsn() after a write on the primary, stores it, for example in a signed cookie, and passes it to WAIT FOR LSN on the next request.

An optional timeout makes the command return an error if the replica has not caught up in time. Willison's example uses 0.1 seconds. The caller then has to decide whether to retry, fall back to the primary, or fail.
