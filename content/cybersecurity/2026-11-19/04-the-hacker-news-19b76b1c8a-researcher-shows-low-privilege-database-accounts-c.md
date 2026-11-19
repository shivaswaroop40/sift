---
id: 19b76b1c8a
title: Researcher shows low-privilege database accounts can reach remote code execution
original_title: Researcher Demonstrates Database RCE Exploits Affecting PostgreSQL, MySQL and Oracle
url: https://thehackernews.com/2026/11/researcher-demonstrates-database-rce.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-19"
published_at: "2026-11-19T08:14:00.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - rce
  - postgresql
  - mysql
  - oracle
  - clickhouse
  - memory-corruption
  - news
why_read: >-
  The full article should give the affected versions, the specific bugs and the prerequisites, which
  this truncated excerpt does not include.
rank: 4
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A researcher has published proof-of-concept exploits showing that a low-privilege database account can run code on the database server. The account does not need to read any application table. The exploits reach memory-corruption bugs in the engine code behind ordinary SQL.

The proofs of concept target PostgreSQL, MySQL and ClickHouse. The source also mentions a separate Oracle chain, but the text is cut off before it says what that chain requires or how it works.
