---
id: 942cba077b
title: Jepsen finds ParticleDB's Full ACID and formal proof claims unsupported
original_title: "Jepsen: ParticleDB 1.1.4"
url: https://jepsen.io/analyses/particledb-1.1.4
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-11-01"
published_at: "2026-10-31T13:39:52.000Z"
authors:
  - aphyr
comments: https://news.ycombinator.com/item?id=50316100
tags:
  - jepsen
  - particledb
  - isolation
  - transactions
  - database
  - community
why_read: >-
  The original maps every --txn-mode to its real consistency model and shows how Jepsen designed its
  test suite for versions 1.1.4 onward.
rank: 1
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Jepsen has published an analysis of ParticleDB 1.1.4, a Rust database from Orkes that backs the Conductor orchestration platform and accepts Postgres and Redis protocol clients. Orkes claims it is orders of magnitude faster than Postgres with the same safety, and advertises "Full ACID" plus a TLA+ formal proof. Jepsen saw no TLA+ specification during the collaboration, and the default transaction mode offers snapshot isolation, which is not fully isolated.

Anyone pointing a Postgres client at ParticleDB cannot choose isolation per transaction. The database ignores or rejects SET TRANSACTION ISOLATION LEVEL, in some cases telling users to pick READ COMMITTED. Isolation is instead fixed by the --txn-mode flag at startup, and the documentation contradicts itself on what each of the seven modes actually guarantees.

An unpublished Orkes operator guide maps the modes. Fast is unknown, occ and zero-copy-occ provide snapshot isolation, serializable-ssi is serializable, and table-2pl is strong serializable. The CLI wrongly describes occ as taking table locks, and the docs disagree on whether the groupsync WAL mode matches sync's durability. Jepsen tested versions 1.1.4 through 1.1.18.11.rc-22 on single Debian nodes only, since replication was absent from the provided builds.
