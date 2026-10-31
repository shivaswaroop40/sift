---
id: 5476535a9d
title: PostgreSQL 19 delayed after AI finds bugs humans missed
original_title: "Haas: Postgres 19 is late, and it's AI's fault"
url: https://lwn.net/Articles/1104210/
source: LWN
kind: news
section: systems
date: "2026-10-31"
published_at: "2026-10-30T16:52:59.000Z"
authors:
  - corbet
comments: null
tags:
  - postgresql
  - llms
  - bugs
  - release-management
  - databases
  - news
why_read: >-
  Haas's own words on why PostgreSQL 19 slipped, plus a thread naming the reverted features and
  arguing AI can fix what it finds.
rank: 4
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

PostgreSQL developer Robert Haas says PostgreSQL 19 is late, and the cause is AI. LLMs are finding bugs that humans were unable to find across the project's forty-year history. Haas says the delay is not particularly concerning. It is not long in the grand scheme, and it emerges directly from the project's concern for quality.

For practitioners the near-term impact is small. A short slip buys fewer bugs in a database where stability is critical. The harder question is long-term. If forty years of code holds bugs that LLMs can now find, the project faces a large backlog, and Haas is unsure how it will catch up and still innovate.

The discussion names the reverted features. They include temporal database support, property graph queries, GROUP BY ALL, online disabling of database-level data checksums, and several optimisations. Commenters note some are not luxuries. Temporal support is a standard way to do what application code now handles ad hoc in many different ways.

The thread offers a counterpoint. AI can write tests and fixes as well as find bugs, and features only now starting development may have more bugs caught during development. Haas says he and many others are working hard to figure out the long-term answer.
