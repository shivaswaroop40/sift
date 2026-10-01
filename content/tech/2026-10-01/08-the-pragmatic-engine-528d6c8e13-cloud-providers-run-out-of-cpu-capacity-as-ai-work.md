---
id: 528d6c8e13
title: Cloud providers run out of CPU capacity as AI workloads surge
original_title: "The Pulse: a new trend of CPU shortages"
url: https://blog.pragmaticengineer.com/the-pulse-a-new-trend-of-cpu-shortages/
source: The Pragmatic Engineer
kind: blog
section: infrastructure
date: "2026-10-01"
published_at: "2026-09-24T16:45:01.000Z"
authors:
  - Ivan Klaric
comments: null
tags:
  - cpu-shortage
  - cloud-capacity
  - infrastructure-planning
  - ai-workloads
  - cost
  - blog
why_read: Learn how AI demand has exhausted CPU supply and what capacity planning looks like now.
rank: 8
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Companies now struggle to obtain CPUs from cloud providers, with spot pricing—which once offered up to 90% discounts—vanishing entirely. Reserving specific CPU types requires months of advance planning, and providers are declining requests from even large enterprises who have cash to spend.

For infrastructure teams, this matters because general-purpose compute can no longer be treated as auto-scaled on-demand capacity. CPU allocation must now be forecast and reserved 12 months ahead, with fulfillment taking six months instead of one to two weeks, and prices up 10–20%.

The squeeze stems from manufacturing constraints. TSMC prioritises GPU production, AMD relies on TSMC's constrained allocation, and DRAM manufacturers favour high-bandwidth memory over standard DRAM. Meanwhile, AI workloads shifted CPU-to-GPU ratios from 1:8 towards 1:1 as agents compile code and run tests on cloud instances rather than locally.

Teams should audit CPU usage now, consolidate underutilised services onto fewer nodes, and eliminate unnecessary CPU-intensive operations. New capacity requests will take months to fulfil, so efficiency gains on existing infrastructure are the only lever available in the near term.
