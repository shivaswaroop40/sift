---
id: ad4f71124f
title: CNCF lab shows backups alone do not recover Kubernetes stateful workloads
original_title: "Kubernetes disaster recovery: Guidance from three reproducible failure scenarios"
url: >-
  https://www.cncf.io/blog/2026/09/10/kubernetes-disaster-recovery-guidance-from-three-reproducible-failure-scenarios/
source: CNCF
kind: blog
section: infrastructure
date: "2026-09-11"
published_at: "2026-09-10T11:37:00.000Z"
authors:
  - Saiyam Pathak
  - Saloni Narang | CNCF Ambassadors
comments: null
tags:
  - kubernetes
  - disaster-recovery
  - backups
  - gitops
  - velero
  - csi-snapshots
  - blog
why_read: >-
  Get three concrete failure scenarios and the checks that separate a completed backup from a
  validated recovery.
rank: 8
interest_score: 7.3
depth_score: 8
novelty_score: 6
utility_score: 8
scored: true
model: deepseek-v4-flash
---

CNCF ambassadors have published guidance from three reproducible Kubernetes failure scenarios that separate having backups from being able to recover. The lab runs two local clusters, an S3-compatible backup store and a Git service, with a PostgreSQL workload containing four known rows. Each scenario is reproducible on a laptop, and the terminal output is captured from the lab.

The first scenario shows that a Completed backup status does not prove volume bytes moved. The lab checks the Velero data mover report and confirms 47,989,888 bytes landed in the store. The second scenario powers off production and syncs the recovery cluster from Git. The dashboard goes green, but the database is empty, because Git holds declarations, not stored state.

The third scenario snapshots two volumes five seconds apart. Each snapshot is ReadyToUse and individually perfect, but restoring both leaves 25 payments with no matching order. The guidance is that recovery fails at the joins between layers: restored cluster with no data, restored data with no traffic path, or an application definition that provisions an empty volume.

The authors use Velero and CSI snapshot APIs as reference implementations, and say the failure modes apply to any tool in the same role. Backup tools restore into a cluster that already exists; recovering Kubernetes itself is infrastructure as code or Cluster API work. In the lab, powering off production to validated data took four minutes live and under two minutes rehearsed.
