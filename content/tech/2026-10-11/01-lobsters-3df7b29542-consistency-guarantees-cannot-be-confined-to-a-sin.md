---
id: 3df7b29542
title: Consistency guarantees cannot be confined to a single component
original_title: Consistency is not a localized property
url: https://n-the-loop.com/blog/consistency-is-not-a-localized-property/
source: Lobsters
kind: community
section: systems
date: "2026-10-11"
published_at: "2026-10-11T00:51:28.000Z"
authors:
  - n-the-loop.com by b--man
  - n-the-loop.com by b--man
comments: https://lobste.rs/s/rhy5zp/consistency_is_not_localized_property
tags:
  - kafka
  - distributed-systems
  - consistency
  - systems-design
  - community
why_read: Learn why consistency properties cannot be engineered away inside individual components.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Kafka's exactly-once semantics took years to implement and required multiple rewrites. Even after shipping, the team was explicit: exactly-once is an end-to-end guarantee that demands application-level design discipline. Eight years later, the protocol needed redesign to close correctness holes.

Developers often assume consistency is a local property they can achieve within one component. This assumption fails at scale. If no single component can confirm a global property, responsibility must shift elsewhere in the system.

Global guarantees need ownership and understanding across the entire stack. Component owners will correctly report their part works in isolation. But a distributed property requires someone liable for the whole system, because such guarantees rest on comprehension, not code alone.
