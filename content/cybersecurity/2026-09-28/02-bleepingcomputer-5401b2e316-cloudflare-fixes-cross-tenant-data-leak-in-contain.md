---
id: 5401b2e316
title: Cloudflare fixes cross-tenant data leak in Containers and Sandboxes
original_title: Cloudflare fixes Containers cross-tenant flaw exposing customer data
url: >-
  https://www.bleepingcomputer.com/news/security/cloudflare-fixes-containers-cross-tenant-flaw-exposing-customer-data/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-09-28"
published_at: "2026-09-27T14:13:31.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - cloudflare
  - containers
  - cross-tenant
  - storage
  - vulnerability
  - isolation
  - news
why_read: >-
  Shows how a missing zero-on-reuse step in shared storage produced a practical cross-tenant leak,
  and the fix path Cloudflare took.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Cloudflare has fixed a vulnerability in its Containers and Sandboxes products that let customers with a Workers Paid account read residual data from other customers' containers sharing the same physical host. The flaw stemmed from a shared storage pool that reused 64 KiB blocks without zeroing them when a container's thin volume was deleted.

An attacker writing just 4 KiB to a new container's disk could trigger allocation of a previously used 64 KiB block, leaving 60 KiB of prior tenant data readable. Researchers found residual material on 18 of 24 container placements and 20 of 22 nodes tested, including directory listings, SQLite databases, Chromium profiles, .env files, and credential files.

The vulnerability was reported on 4 September by researcher Oren Yomtov of Accomplish via HackerOne, with Cloudflare completing mitigation by 19 September. The company removed the configuration that skipped block zeroing, retired existing container disks, and cleared cached snapshots. No evidence of real customer data exposure was found in logs or telemetry, and no customer action is required.
