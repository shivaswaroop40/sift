---
id: 3892f81a99
title: Cloudflare patches storage-layer data leak in Firecracker containers
original_title: Cloudflare Fixes Cross-Tenant Data Exposure in Containers
url: >-
  https://www.infoq.com/news/2026/10/cloudflare-cross-tenant-exposure/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-10-05"
published_at: "2026-10-05T08:48:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - containers
  - storage-isolation
  - security
  - firecracker
  - multi-tenancy
  - verification
  - news
why_read: >-
  Understand how isolation broke at the storage layer and what practitioners should verify when
  evaluating container platforms.
rank: 3
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cloudflare disclosed a cross-tenant data exposure flaw in Containers where a customer could read residual disk blocks left by other customers' workloads. The issue sat below the Firecracker virtual machine boundary, in the Linux device mapper thin provisioning allocator. A 64 KiB block size combined with skip_block_zeroing allowed uncleared data from previous containers to leak when new blocks were allocated.

The vulnerability matters because isolation claims often skip storage-layer verification. Teams running shared infrastructure typically assume rather than verify that deallocated blocks are zeroed before reuse. The researchers recovered directory structures, database pages and complete SQLite databases across thousands of blocks in production, though an attacker could not choose a victim or guarantee data presence.

Cloudflare's fix removed skip_block_zeroing and then retired all running container disks, drained hosts, and cleared image caches to sanitize previously mapped blocks. The timeline shows the runtime fix deployed within six hours, but full cleanup took until September 19 to eliminate inherited mappings in snapshots and running disks.
