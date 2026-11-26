---
id: e8f2828fb4
title: sqlite3_rsync copies a SQLite snapshot over SSH without a full local duplicate
original_title: "sqlite3_rsync: Database Remote-Copy Tool For SQLite"
url: https://simonwillison.net/2026/Nov/26/sqlite3-rsync/
source: Simon Willison
kind: blog
section: systems
date: "2026-11-26"
published_at: "2026-11-26T06:08:25.000Z"
authors: []
comments: null
tags:
  - sqlite
  - backups
  - rsync
  - databases
  - ssh
  - blog
why_read: >-
  A short note on a disk-space limit in SQLite snapshots and how sqlite3_rsync gets around it, with
  a brief description of the hashing protocol.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 6
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

sqlite3_rsync is a SQLite tool that copies a database snapshot to another machine over SSH. It arrived as experimental in SQLite 3.47.0 in October 2024 and was enhanced in 3.50.0 in May 2025. Simon Willison notes that it needs no full local copy first.

The usual routes are the backup API or VACUUM INTO. Both need enough free disk to hold a duplicate of the database. On a small instance that is already more than half full, neither works. sqlite3_rsync avoids that constraint by streaming the snapshot to the remote side.

It also updates an existing replica without resending everything. The replica sends hashes for pages or groups of pages. The origin returns differing page content, or asks for finer-grained hashes when a multi-page hash does not match. This resembles ordinary rsync.

There is a cost when the two copies differ greatly. Hash exchange can push total bandwidth above the database size, though the source says the excess is a few percent at most. Willison also notes he had written about the tool in 2024.
