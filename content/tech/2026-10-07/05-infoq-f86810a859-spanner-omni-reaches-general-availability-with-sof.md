---
id: f86810a859
title: >-
  Spanner Omni reaches general availability with software-based replacements for atomic clocks and
  file systems
original_title: Spanner Omni Reaches GA, Replacing Google's Atomic Clocks and File System with Software
url: >-
  https://www.infoq.com/news/2026/10/spanner-omni-deploy-anywhere-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-10-07"
published_at: "2026-10-07T04:43:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - distributed-systems
  - spanner
  - databases
  - operations
  - infrastructure
  - news
why_read: >-
  Understand what Spanner Omni trades off operationally when moving Google's managed database to
  your own infrastructure.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Google has released Spanner Omni, a version of its distributed SQL database that runs on customer infrastructure, other clouds, or laptops. It replaces Colossus, the distributed file system, with a software abstraction layer writing to local file systems. It replaces TrueTime's atomic clock synchronization with error-bounded software time-keeping that tolerates weaker uncertainty bounds by overlapping waits with other work.

For operators, the change is operational rather than architectural. Failure domains shift from Google to the customer: quorum topology must be re-tuned for local latencies, p99 latencies matter more than mean, and patching, upgrades, rollback, backup, key management and audit become in-house responsibilities. Google does not provide availability SLAs, only reference topologies for achieving comparable high availability.

Spanner Omni excludes Google Cloud integrations like BigQuery and Gemini Enterprise, and does not support Azure. The Developer Edition is free for non-production use with a 90-day license. The Commercial Edition uses annual vCPU-based subscriptions with no published pricing. Early adopters are using it for multi-region resilience and on-premises modernization rather than replacing other databases.
