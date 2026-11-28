---
id: d0a787e7b2
title: Netflix builds Quasar to find which repositories use a library API before it changes
original_title: Netflix Builds Quasar to Measure the Blast Radius of Library API Changes
url: >-
  https://www.infoq.com/news/2026/11/netflix-quasar-api-impact/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-28"
published_at: "2026-11-27T14:35:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - netflix
  - api-compatibility
  - scip
  - static-analysis
  - dependency-management
  - mcp
  - news
why_read: >-
  The original shows how Netflix wires SCIP indexing, Parquet and Athena into pull request checks,
  and is candid about where static usage data stops being trustworthy.
rank: 1
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Netflix has built an internal tool called Quasar that shows which repositories use a given library API symbol. Language-specific indexers emit SCIP data during CI builds. Quasar stores it in S3 as Parquet files and queries it with Athena. On pull requests it compares API definitions between commits and looks up references to the changed symbols.

The output lists affected repositories, dependency versions and call sites. One Netflix example had a deprecated method removal touching 137 repositories across three library versions. Findings are exposed through REST, GraphQL and an MCP server, so coding agents can query them as well as people.

This targets a gap that compatibility checkers leave open. Tools such as Revapi flag a removed method but not who calls it. Dependency graphs show declared relationships, not real usage. Text search misses inheritance, overloads and generated code. Building every consumer to test a change costs too much.

The limits are stated plainly. No indexed references does not prove an API is unused, because of reflection, dynamic loading, stale indexes and partial coverage. A commenter noted rare paths such as quarterly batch jobs. The Netflix author says runtime analysis is planned, and that removal is still not guaranteed safe.
