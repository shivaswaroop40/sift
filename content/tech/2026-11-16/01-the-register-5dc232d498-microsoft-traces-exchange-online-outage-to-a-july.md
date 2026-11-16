---
id: 5dc232d498
title: Microsoft traces Exchange Online outage to a July gateway change that only failed at scale
original_title: Microsoft blames monster email outage on software defect introduced in July fix
url: >-
  https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026
source: The Register
kind: news
section: infrastructure
date: "2026-11-16"
published_at: "2026-11-16T11:15:07.000Z"
authors:
  - Richard Speed
comments: null
tags:
  - microsoft
  - exchange-online
  - outage
  - cascading-failure
  - load-testing
  - post-incident-report
  - news
why_read: >-
  The report gives a detailed timeline of a cascading failure, including why load testing on weaker
  hardware missed a latent defect and why rollback and automated recovery both failed.
rank: 1
interest_score: 8
depth_score: 7
novelty_score: 9
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Microsoft's preliminary post incident report says last week's Microsoft 365 outage came from a defect introduced in July 2026 in a fix for its network gateway servers. The change passed load testing and ran without impact. It caused lock contention in an internal Windows process, which exhausted CPU and memory. The problem was worse on machines with more cores and newer hardware.

Two events then coincided. Teams failed over to the primary gateway that supports Exchange Online, raising load. Almost 14 percent of gateway capacity was already out of service. Microsoft says there was enough headroom for either alone. Together they triggered the defect, traffic was rerouted to the next endpoint, and the failure cascaded. At its lowest, more than 80 percent of servers were unresponsive.

Recovery was hard. Restarted servers were overwhelmed and fell over again. Automated recovery was not designed for such a broad unresponsive state. Rollback was not possible because the defect was months old, so engineers shipped a patch restoring the previously known good code path and applied it in groups. Teams, OneDrive and SharePoint could fail out of the gateway. Exchange Online could not, for scale reasons.

The timeline runs long. Teams failed over at 0107 UTC on 12 November. Monitoring flagged connectivity issues at 1603 UTC. The mitigation was applied at 0720 UTC on 13 November. A final report is due on 20 November.
