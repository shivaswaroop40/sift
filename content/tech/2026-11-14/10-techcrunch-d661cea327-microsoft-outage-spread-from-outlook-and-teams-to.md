---
id: d661cea327
title: Microsoft outage spread from Outlook and Teams to Intune and Defender, lasting about 18 hours
original_title: Microsoft’s latest email outage turned into a full-blown global cloud crisis
url: >-
  https://techcrunch.com/2026/11/13/microsoft-latest-email-outage-turned-into-a-full-blown-global-cloud-crisis/
source: TechCrunch
kind: news
section: infrastructure
date: "2026-11-14"
published_at: "2026-11-13T13:15:20.000Z"
authors:
  - Zack Whittaker
comments: null
tags:
  - microsoft
  - outage
  - outlook
  - intune
  - cloud-reliability
  - incident-response
  - news
why_read: >-
  The piece gives the timeline, the list of affected services and Microsoft's statements so far,
  which is useful until a proper root-cause report appears.
rank: 10
interest_score: 6.3
depth_score: 6
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A Microsoft outage that began on Thursday started with Outlook and Teams and spread worldwide. It later hit consumer and business email, files and documents, Copilot, Defender and the Intune admin dashboards. Some users also reported trouble reaching cloud-based Windows computers. Kentik's Doug Madory put the downtime at about 18 hours.

Microsoft has not given a cause. It says only that "a large number of servers" were "unexpectedly unavailable". It reports no evidence of malicious activity and says the incident was not related to cyber or AI agents. TechCrunch says engineers initially could not find why servers in the data centres were failing.

The detail that matters is the knock-on loss of Intune and Defender. Administrators lost the management consoles and security tooling they would use to respond. That is a dependency problem for anyone running identity, endpoint and mail on one vendor's control plane.

Treat the account as incomplete. There is no root cause or post-incident review yet. Microsoft did not answer whether it can check for malicious activity through logs. In September a dayslong outage was blamed on a core authentication configuration issue.
