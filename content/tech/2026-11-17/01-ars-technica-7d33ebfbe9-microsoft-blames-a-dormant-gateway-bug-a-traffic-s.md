---
id: 7d33ebfbe9
title: >-
  Microsoft blames a dormant gateway bug, a traffic shift and lost capacity for its 24-hour 365
  outage
original_title: Three small failures combined to take down Microsoft 365
url: >-
  https://arstechnica.com/gadgets/2026/11/microsoft-details-how-three-problems-combined-for-a-global-outage/
source: Ars Technica
kind: news
section: systems
date: "2026-11-17"
published_at: "2026-11-16T21:56:39.000Z"
authors:
  - Nick Indge
comments: >-
  https://arstechnica.com/gadgets/2026/11/microsoft-details-how-three-problems-combined-for-a-global-outage/#comments
tags:
  - microsoft-365
  - outage
  - post-incident-report
  - failover
  - exchange-online
  - reliability
  - news
why_read: >-
  The original gives the sequence of failures and recovery steps, and the gaps Microsoft has not yet
  explained, such as the regional isolation failure.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Microsoft's preliminary incident report says a defect in its cloud gateway, introduced by a change in July, combined with a traffic shift and a capacity shortfall to cause the outage. It ran from 16:20 UTC on 12 November to 16:10 UTC on 13 November. Under certain conditions the bug exhausted CPU and memory and left servers unresponsive.

Pre-release testing missed it because the test hardware was less powerful than some production machines. Microsoft says higher core counts on newer machines apparently contributed. About 15 hours earlier, Teams traffic had moved from the alternate gateway to the primary, which also serves Exchange Online. The gateway fleet was already running 14 percent below optimal capacity because of an existing fault.

Failover made things worse. Requests shifted to backup gateways, which locked up in the same way, and over 80 percent of affected gateway servers froze. Restarts failed because queued requests triggered the same exhaustion on startup. Rollbacks failed because the bug predated the recent changes. Fixing it needed a targeted update.

Microsoft says regional isolation mechanisms failed, but the preliminary report does not explain why. Teams and OneDrive could be routed away from the affected infrastructure, but scaling limits stopped Exchange Online doing the same. The final report is due on 20 November.
