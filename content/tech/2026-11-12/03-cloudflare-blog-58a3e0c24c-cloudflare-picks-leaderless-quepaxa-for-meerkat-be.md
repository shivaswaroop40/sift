---
id: 58a3e0c24c
title: >-
  Cloudflare picks leaderless QuePaxa for Meerkat because leader-based consensus stalls on flaky
  wide-area networks
original_title: Choosing QuePaxa, an unusual consensus algorithm
url: https://blog.cloudflare.com/choosing-quepaxa/
source: Cloudflare Blog
kind: blog
section: systems
date: "2026-11-12"
published_at: "2026-11-11T14:24:46.000Z"
authors:
  - João Pedro Leite
comments: null
tags:
  - consensus
  - quepaxa
  - raft
  - paxos
  - cloudflare
  - distributed-systems
  - blog
why_read: >-
  You get a clear account of why leader-based consensus degrades under network faults, and the
  reasoning behind choosing an unusual algorithm; the QuePaxa mechanism itself is not covered in the
  excerpt.
rank: 3
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Cloudflare says its experimental global consensus service, Meerkat, uses QuePaxa, a 2023 algorithm by Tennage, Băsescu and others, rather than Raft, Multi-Paxos or Viewstamped Replication. The stated reason is that leader-based algorithms slow down or stop when the leader fails, lags or is cut off, until a replacement is elected. QuePaxa promises stability under volatility largely by not needing a leader to make progress.

Meerkat replicates an ordered log, from which it builds a key-value store, in the manner of etcd, Consul or ZooKeeper. Unlike those, it is meant to span continents over links with high and variable latency. Cloudflare cites a 2020 incident in which a partial switch failure left a consensus-backed system 80x slower for six hours. No data was lost, but writes were unavailable.

The post argues that Paxos can fail to make progress when several proposers keep blocking each other with higher ballot numbers, which it calls destructive interference. Leaders avoid this and allow decisions in one round trip. The cost is dependence on one healthy, reachable node, and electing a replacement can bring the same interference back, as with competing Raft candidates.
