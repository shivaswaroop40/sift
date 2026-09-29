---
id: ee3f4dc852
title: Meta’s ZGateway cuts ZippyDB persistent connections by 19x at 1B+ ops/sec
original_title: Meta’s ZGateway Cuts ZippyDB Connections 19x While Handling 1B+ Operations per Second
url: >-
  https://www.infoq.com/news/2026/09/meta-zgateway-zippydb-proxy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-29"
published_at: "2026-09-28T13:55:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - distributed-systems
  - kubernetes
  - databases
  - proxy
  - scalability
  - meta
  - news
why_read: >-
  You will see how Meta re-architected a million-client connection storm in front of a hyperscale KV
  store and what the concrete reliability and scaling numbers looked like.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Meta has rolled out ZGateway, a stateless proxy tier sitting in front of ZippyDB, its distributed key-value store. It already handles more than 1 billion operations per second and around 40% of ZippyDB traffic, with Meta’s internal model estimating a roughly 19x reduction in total persistent connections and a 97 to 98% drop in per-host connection counts.

The original direct-access model had more than one million clients opening connections to the specific database hosts holding their shards, producing a dense many-to-many mesh that could trigger file descriptor exhaustion and out-of-memory events. ZGateway consolidates this through regional proxy fleets discovered via ServiceRouter, with sticky client-to-gateway connections and a controlled server-side connection pool.

ZGateway also takes on authentication, per-tenant admission control, shard resolution, batching, coalescing and optional read-through caching. In a controlled test above 90% CPU on the gateway, six of roughly 1,350 tenant buckets shed traffic while the rest served 99.9% of requests. Traffic can be migrated progressively by service, shard prefix or region, with a global kill switch for rollback.

The extra network hop is the trade-off. Meta and outside commentators argue it pays off by removing connection-management overhead from database nodes and giving a central place for caching, load balancing and overload protection. Future work includes agent-operated controls, selective co-location with ZServer, and a multi-process design for stronger fault isolation.
