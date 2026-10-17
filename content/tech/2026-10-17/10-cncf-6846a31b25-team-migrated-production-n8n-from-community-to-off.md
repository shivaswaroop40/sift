---
id: 6846a31b25
title: Team migrated production n8n from community to official Helm chart without downtime
original_title: Deploying, maintaining, and migrating production n8n on EKS
url: https://www.cncf.io/blog/2026/10/16/deploying-maintaining-and-migrating-production-n8n-on-eks/
source: CNCF
kind: blog
section: infrastructure
date: "2026-10-17"
published_at: "2026-10-16T16:39:04.000Z"
authors:
  - Husne Ozmen
  - Fairwinds
comments: null
tags:
  - kubernetes
  - helm
  - n8n
  - eks
  - stateful-migration
  - database
  - blog
why_read: >-
  See how one team handled a Helm chart migration for a stateful workflow engine without downtime or
  data loss.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 6
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

n8n runs in demo mode on a single container, but production requires workers, Redis, PostgreSQL, object storage, and secrets management. A team at Fairwinds ran n8n on EKS in queue mode for a year using a community Helm chart, then migrated to n8n's official chart while keeping the database, queue, storage, and secrets intact through the cutover.

The community chart became harder to maintain as unsupported features accumulated. The official chart offered active support and a clearer upgrade path, but used a different workload model. The main pod shifted from StatefulSet to Deployment with a shared persistent volume, incompatible with AWS gp3 EBS RWO constraints.

The team disabled persistence on the main pod entirely. PostgreSQL, Redis, S3, and AWS Secrets Manager already held all required state, so a replacement pod could reconnect without pod-specific disk storage. They tested rollback in non-production with a database snapshot, kept the n8n image version unchanged to avoid triggering migrations, then cut over the Helm release while leaving all backing services in place.
