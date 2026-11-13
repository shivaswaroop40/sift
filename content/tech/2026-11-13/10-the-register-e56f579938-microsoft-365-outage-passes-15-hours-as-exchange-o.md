---
id: e56f579938
title: Microsoft 365 outage passes 15 hours as Exchange Online fixes fail to hold
original_title: Microsoft's massive M365 outage stretches past 15 hours as its fixes keep failing
url: >-
  https://www.theregister.com/saas/2026/11/13/microsofts-massive-m365-outage-stretches-past-15-hours-as-its-fixes-keep-failing/5309609
source: The Register
kind: news
section: infrastructure
date: "2026-11-13"
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
  - status-page
  - news
why_read: >-
  The article collects Microsoft's status updates into one timeline, which shows how a capacity fix
  can stall when the new machines themselves come up unhealthy.
rank: 10
interest_score: 6.7
depth_score: 5
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Microsoft 365 services that depend on Exchange Online have been down since about 18:00 UTC on Thursday. Users cannot reach email, Teams meetings, cloud PCs or Copilot, and 15 other hosted services are affected. Microsoft first blamed servers failing automated health checks. Its first fix did not give the expected relief.

Status updates describe repeated failed attempts. Capacity changes were not taking as expected. Partial recovery in some regions did not last. Scaling up virtual machines ran into machines stuck in a bad state, which stopped changes from syncing. Microsoft says it is still pursuing the cause of a traffic influx and trying to restore backend servers.

Microsoft's wording on a cyberattack has shifted. At 04:11 UTC it saw no indication of malicious activity. By 05:46 UTC it said only that it was not aware of any. That is weaker, and the cause remains unstated. A 12:00 UTC update says users still cannot connect to multiple services.

The status page shows only the latest update, but the RSS feed keeps every one. Services that do not need Exchange Online still work.
