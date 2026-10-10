---
id: 5ecebd28a7
title: Distributed AI training pushes datacenter networks to their limits
original_title: "Growing pains: how distributed AI training changes the network between datacenters"
url: >-
  https://www.theregister.com/networks/2026/10/09/sponsored-growing-pains-how-distributed-ai-training-changes-the-network-between-datacenters/5301554
source: The Register
kind: news
section: infrastructure
date: "2026-10-10"
published_at: "2026-10-09T15:00:00.000Z"
authors: []
comments: null
tags:
  - distributed-training
  - network-architecture
  - datacenter-interconnect
  - gpu-synchronization
  - optical-bandwidth
  - scale-across
  - news
why_read: >-
  Learn how network synchronization becomes a compute bottleneck when training scales across
  regions.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Large-scale model training now spans multiple datacenters across hundreds of kilometres. Google trained Gemini across multiple clusters; Microsoft connected Wisconsin and Georgia as one distributed supercomputer; AWS linked compute for Anthropic; Meta and others built high-capacity interconnects. Single datacenters struggle with power and space demands that training runs of 4-16GW by 2030 will exceed.

Training requires thousands of GPUs to synchronize repeatedly, exchanging gradients and intermediate results. Network delays directly become compute delays because GPUs cannot proceed until all participants finish a synchronization phase. A delayed or dropped flow can prolong collective operations and leave accelerators idle.

Inter-site networks face different constraints than datacenter-internal fabrics. Synchronized bursts of traffic from thousands of accelerators can overwhelm the narrower pipe connecting facilities. Cisco estimates connecting two 100MW AI sites requires 12,000 to 32,000 coherent optical ports versus 1,000 to 2,000 for conventional datacenter interconnects, with aggregate bandwidth reaching 14 times normal DCI baselines.
