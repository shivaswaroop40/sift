---
id: 8ea3a46ea4
title: Enroute replaces per-repository Raft groups with a root log that appoints sequencers
original_title: "Scaling Git horizontally: how we moved beyond Multi-Raft"
url: https://enroute.sh/blog/scaling-horizontally-how-we-moved-beyond-multi-raft
source: Lobsters
kind: community
section: systems
date: "2026-11-21"
published_at: "2026-11-21T04:14:02.000Z"
authors:
  - enroute.sh via pksunkara
  - enroute.sh via pksunkara
comments: https://lobste.rs/s/79x708/scaling_git_horizontally_how_we_moved
tags:
  - raft
  - multi-raft
  - consensus
  - vertical-paxos
  - git
  - distributed-systems
  - community
why_read: >-
  You get measured failure points for Multi-Raft at high group counts, and a clear account of which
  Raft parts the authors kept and which Vertical Paxos ideas they swapped in.
rank: 2
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Enroute, a Git hosting system, ran one Raft group per repository across three ledger nodes. At 2,048 concurrent writers over 100,000 repositories, heartbeats ran late and followers started elections by the thousands. Throughput fell to about 1,500 pushes per second and p99 latency reached 83 seconds. The post says the heartbeat and election machinery had become the workload.

The team first applied the usual Multi-Raft remedies. Idle logs sleep, liveness moves from each log to the node, and a failed node's logs wake only on demand. That took the same test to about 14,000 pushes per second with no failures. They judged the added complexity, and the new failure modes it brought, too costly to keep stacking up.

Their alternative follows Vertical Paxos. A single root log tracks membership and appoints a sequencer for each repository's shard log. Replicas never time out or campaign. Raft's replication and commit rules stay. The root log moves to a new term only after a quorum of the old configuration is sealed, so failover needs no lease or clock.
