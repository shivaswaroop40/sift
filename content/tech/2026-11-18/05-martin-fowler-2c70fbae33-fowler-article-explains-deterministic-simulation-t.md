---
id: 2c70fbae33
title: Fowler article explains deterministic simulation testing with a Java quorum store example
original_title: Deterministic Simulation Testing
url: https://martinfowler.com/articles/deterministic-simulation-testing.html
source: Martin Fowler
kind: blog
section: systems
date: "2026-11-18"
published_at: "2026-11-17T14:33:00.000Z"
authors:
  - Martin Fowler
comments: null
tags:
  - distributed-systems
  - testing
  - simulation
  - jepsen
  - chaos-engineering
  - consistency
  - blog
why_read: >-
  You get a worked Java example of making distributed-system tests reproducible, plus a trade-offs
  section on coding rules, cost and tick-based timeouts, which the excerpt only lists.
rank: 5
interest_score: 7.3
depth_score: 8
novelty_score: 6
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Unmesh Joshi, writing on Martin Fowler's site, describes deterministic simulation testing. Real clocks, networks and storage are replaced with simulated versions driven by a single-threaded execution loop. Hard failures and routine slowdowns, such as disk or network latency spikes, can be simulated. Every run is reproducible. The worked example is a quorum key-value store, with code from Tickloom, a Java implementation.

The argument starts from the limits of standard testing. Unit and integration tests rarely cover gray failures, such as a JVM stop-the-world pause, an asymmetric partition, or a 500ms WAL sync instead of 2ms. Chaos engineering checks availability, not correctness. A stale read from a partitioned replica after an acknowledged write still looks healthy. Jepsen catches this by checking client-visible histories, but it runs against a live system.

The source text is truncated, so the simulation design, seeded fault injection, trade-offs and sidebars are only listed in the contents. The article names strict coding rules and production cost among the trade-offs. Its claims about those costs cannot be assessed from this excerpt.
