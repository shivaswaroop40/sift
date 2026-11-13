---
id: c0203e99fc
title: Researcher reports PostgreSQL core type-confusion bug, CVE-2026-6460, turned into RCE
original_title: Turning a 22-year-old Postgres type-confusion primitive into RCE
url: >-
  https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-13"
published_at: "2026-11-12T18:22:22.000Z"
authors:
  - ozirus
comments: https://news.ycombinator.com/item?id=50471761
tags:
  - postgresql
  - cve-2026-6460
  - type-confusion
  - memory-corruption
  - pg-clickhouse
  - security
  - community
why_read: >-
  You get a worked explanation of how Datum and OID typing work in PostgreSQL, which is the basis
  for the type-confusion class, though the supplied text stops before the exploit itself.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Mehmet Ince describes a 22-year-old type-confusion flaw in PostgreSQL core, tracked as CVE-2026-6460. He says he put a value inside a composite type, changed the type of one of its fields, and asked PostgreSQL to read the value back. He calls the resulting memory corruption one of the most reliable exploits he has seen.

He did not set out to audit core. He was exploiting the pg_clickhouse extension, which rebuilds ClickHouse values as PostgreSQL Datum values. A mistake in that conversion gave him code execution, and it left him asking how PostgreSQL decides what a value is. The extension bug was reported and fixed on 23 June.

The part of the post supplied here is mostly background. A Datum is an 8-byte carrier that holds no type information. The type comes from an OID, such as 23 for int4, which points at a pg_type row. That row says whether the value is stored by value or as a pointer. The exploit mechanics are cut off.
