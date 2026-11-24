---
id: 7b8cf700cc
title: Microsoft 365 outage report blames a July Windows defect and load tests on older hardware
original_title: "Microsoft mega outage: Report reveals testing gaps and emails that never arrived"
url: >-
  https://www.theregister.com/saas/2026/11/23/microsoft-mega-outage-report-reveals-testing-gaps-and-emails-that-never-arrived/5311656
source: The Register
kind: news
section: infrastructure
date: "2026-11-24"
published_at: "2026-11-23T16:16:00.000Z"
authors:
  - Richard Speed
comments: null
tags:
  - microsoft-365
  - exchange-online
  - outage
  - post-incident-report
  - load-testing
  - blast-radius
  - news
why_read: >-
  The original sets out the failure sequence and Microsoft's planned fixes, including the hardware
  mismatch in its load testing, which is worth checking against your own test environments.
rank: 1
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Microsoft's final report on the 12 to 14 November Microsoft 365 outage confirms a July code change in Windows, affecting its gateway server configuration, took down Exchange Online gateways. A failover and reduced capacity made it worse. At the peak, over 80 percent of North American gateway servers were unresponsive. The defect had run worldwide for more than three months before it caused failures.

Some mail was lost. Microsoft extended its delivery retry window to 48 hours, but delayed messages to consumer mailboxes inactive for over 30 days still expired and produced non-delivery reports. It says all queued enterprise messages were eventually delivered and none were permanently lost.

The testing gap is the useful detail. Load tests ran on older, lower-core-count hardware, which made them less likely to expose a defect that got worse on newer machines. Microsoft now plans to test newer hardware with more realistic traffic and peak loads, and to widen failover testing.

The other fixes are partitioning and isolation to limit blast radius, better change auditing and diagnostics, faster recovery procedures, better communication and more spare capacity. These are commitments, not results. The report does not say when they will land.
