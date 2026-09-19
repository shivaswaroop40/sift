---
id: 6805b67068
title: Cloudflare reclaimed 100TB of RAM by tuning Pingora's consistent hashing
original_title: Saving another 100TB of RAM
url: https://blog.cloudflare.com/saving-100-tb-of-ram-with-math/
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-09-19"
published_at: "2026-09-18T18:51:46.000Z"
authors:
  - f311a
comments: https://news.ycombinator.com/item?id=49758580
tags:
  - cloudflare
  - consistent-hashing
  - rust
  - pingora
  - memory
  - load-balancing
  - community
why_read: >-
  You get the maths behind why consistent hashing needs virtual replicas, plus a real-world 100TB
  RAM reclaim from a Pingora-based service.
rank: 1
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

An engineer filed a ticket flagging that pingora-ketama, the consistent hashing library inside Cloudflare's Pingora Backend Router, was consuming more memory than expected. Investigation showed the cost came from per-hash data structures that grew with the number of replicas and servers in the ring.

Replacing those structures with a streaming, sorted representation let the team drop the memory footprint of the service across every node. The result was more than 100TB of reclaimed RAM globally, on top of a separate 100TB saving the DNS team reported last month.

The article walks through the consistent hashing maths that set up the problem: with N servers, the coefficient of variation on each server's share of the ring approaches 100%, which is why operators stack virtual nodes per server. It also previews the hash-replication argument and warns readers that the post is truncated, with the actual memory-saving fix not shown in the source.
