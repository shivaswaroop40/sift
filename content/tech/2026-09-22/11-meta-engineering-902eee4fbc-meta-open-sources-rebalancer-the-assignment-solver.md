---
id: 902eee4fbc
title: Meta open-sources Rebalancer, the assignment solver behind nine years of internal allocation work
original_title: "Open-Sourcing Rebalancer: A Generic, High-Performance Library for Solving Assignment Problems"
url: >-
  https://engineering.fb.com/2026/09/21/open-source/rebalancer-generic-high-performance-library-assignment-problems/
source: Meta Engineering
kind: blog
section: languages-and-tools
date: "2026-09-22"
published_at: "2026-09-21T16:00:37.000Z"
authors: []
comments: null
tags:
  - optimisation
  - meta
  - open-source
  - assignment
  - datacenters
  - blog
why_read: >-
  You get a battle-worn optimisation framework Meta has used in production for nearly a decade, with
  practical notes on where MIP solving breaks down.
rank: 11
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Meta has released Rebalancer, an open-source library for solving assignment problems that it says has run in production across its infrastructure for over nine years. It covers rack placement, service placement, task placement and traffic routing, with the same separation of concerns used throughout.

It matters because the library turns a high-level problem description into either a local-search heuristic or a mixed-integer program, choosing between HiGHS, Gurobi or FICO Xpress. Practitioners get a domain language with reusable specs for common objectives like balance, capacity and group counts, rather than rebuilding optimisation models by hand.

The MIP path can blow up quadratically in objects times bins, so the largest problems go through a local-search solver instead. Meta's own write-up also admits some trade-offs around how constraints are encoded and how much work is left to the modeler.
