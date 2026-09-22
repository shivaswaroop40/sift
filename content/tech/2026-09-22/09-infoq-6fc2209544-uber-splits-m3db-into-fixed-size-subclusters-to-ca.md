---
id: 6fc2209544
title: Uber splits M3DB into fixed-size subclusters to cap blast radius of topology events
original_title: Uber Redesigns M3DB Sharding with Subclusters to Limit Failure Impact
url: >-
  https://www.infoq.com/news/2026/09/uber-m3db-subcluster-sharding/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-09-22"
published_at: "2026-09-21T14:37:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - m3db
  - uber
  - sharding
  - time-series
  - distributed-systems
  - placement
  - news
why_read: >-
  You will see how M3DB reframes shard placement to bound the fan-out of topology changes, and the
  concrete constraints that come with subcluster sizing.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Uber has reworked shard placement in M3DB so that nodes belong to fixed-size subclusters, each owning a non-overlapping slice of the shard space, while replicas within a subcluster are still spread across isolation groups such as zones. In the previous model any node could own any shard provided replicas avoided the same isolation group, so a single node failure could touch up to two-thirds of the cluster in a three-zone, replication-factor-three setup.

For a distributed systems engineer the point is the dependency fan-out. With permissive placement a topology change could affect O(N) nodes, which lengthens recovery and forces serialised maintenance. The new model limits how many peers a node shares data with, and a greedy scaler picks donor shards that keep the remaining nodes balanced, avoiding a second rebalancing round. Complexity is O(S log S) for sorting and O(S × N) for simulation per candidate.

There are real trade-offs. Subcluster size must be a multiple of the replication factor, instances must have equal weights, scale-out happens in multiples of the subcluster size, replica factor changes via AddReplica are not supported, and during scaling at most one partial subcluster is allowed. Uber kept the existing instance-level placement API to stay compatible with operators and avoid a mass bootstrap.
