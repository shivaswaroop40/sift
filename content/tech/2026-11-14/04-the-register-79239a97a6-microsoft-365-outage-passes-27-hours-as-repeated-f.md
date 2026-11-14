---
id: 79239a97a6
title: Microsoft 365 outage passes 27 hours as repeated fixes fail to restore Exchange Online
original_title: Microsoft's massive M365 outage stretches past 27 hours as its fixes keep failing
url: >-
  https://www.theregister.com/saas/2026/11/13/microsofts-massive-m365-outage-stretches-past-27-hours-as-its-fixes-keep-failing/5309609
source: The Register
kind: news
section: infrastructure
date: "2026-11-14"
published_at: "2026-11-13T06:40:06.000Z"
authors:
  - Simon Sharwood
comments: null
tags:
  - microsoft-365
  - exchange-online
  - outage
  - incident-response
  - cloud
  - saas
  - news
why_read: >-
  The Register preserves the RSS status history, which shows how a hyperscaler's remediation
  attempts failed step by step, and what it did and did not say about the cause.
rank: 4
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

The outage began on Thursday at about 18:00 UTC. Users lost email, Teams meetings, cloud PCs and Copilot, plus access to about 15 other hosted services. Microsoft says the impact covers services that depend on Exchange Online. Services that do not need it still work. The first explanation was servers failing automated health checks and becoming unavailable.

Microsoft's fixes have not held. It admitted early actions had not given the expected relief. Later updates said a change was not taking as expected, and that partial recovery in some regions was not sustained. Its latest mitigation was scaling up virtual machines, but some were stuck in a bad state and blocked changes from syncing.

Microsoft's wording on cyberattack has shifted. At 04:11 UTC it saw no indication of malicious activity. By 05:46 UTC it said it was not aware of any. That is weaker, and the cause is still unstated beyond a traffic influx and backend servers that need repair.

Later updates report recovery in North America and much of Europe, with Asia Pacific improving. Microsoft is still draining queued messages and rebalancing traffic. It gave no ETA for full recovery and noted that sign-in can recover before mail flow normalises.
