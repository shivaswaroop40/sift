---
id: b6ff77c701
title: Yelp moves 90 Cassandra clusters to EKS by re-pointing EBS volumes, with no downtime
original_title: Yelp Migrates Cassandra to EKS by Moving EBS Volumes
url: >-
  https://www.infoq.com/news/2026/11/kubernetes-cassandra-eks/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-18"
published_at: "2026-11-18T09:00:00.000Z"
authors:
  - Claudio Masolo
comments: null
tags:
  - cassandra
  - eks
  - kubernetes
  - statefulsets
  - ebs
  - migration
  - news
why_read: >-
  You get the detailed mechanism, the failure modes and the pre-migration audit list (repairs,
  backup IAM, alert severity) for moving stateful workloads between clusters.
rank: 4
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Yelp has migrated about 90 production Cassandra clusters from legacy self-managed Kubernetes to Amazon EKS without streaming data. It pre-created PersistentVolumes and claims in EKS pointing at existing EBS volume IDs, then moved pods one at a time. The largest cluster, 54 pods, took about 12 hours. Yelp reports no downtime and no data loss.

The method works because an EBS volume is tied to an Availability Zone, not a cluster. Automation deletes a legacy pod, waits for the volume to detach, and lets the waiting EKS pod claim it. The node rejoins the ring with the same data and token range. Around 1,000 TiB moved by pointer, and no node left the ring, so rollback was the same step in reverse.

The alternative of adding nodes and streaming would have doubled compute temporarily and incurred transfer costs. For the largest clusters it could have taken weeks. Monday.com took that streaming route, adding new data centres and removing old ones. Yelp's route is cheaper and faster but depends on AZ-pinned volumes.

The failures were mostly mundane. The AWS CSI controller left a stale VolumeAttachment that stalled a pod in Pending without an error. Backups failed for 48 hours on an IAM role mismatch, and the alert only filed a ticket. Pausing repairs exposed a cluster with repairs silently disabled for three months. Yelp had Claude turn its validated runbook into an 800-line bash script, which needed minor changes.
