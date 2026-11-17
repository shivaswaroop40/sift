---
id: c81036773f
title: Operation ShadowCloud uses GitDoor and GraphDoor backdoors against Asian and African governments
original_title: New GitDoor and GraphDoor Backdoors Turn GitHub and SharePoint Into Covert C2 Channels
url: https://thehackernews.com/2026/11/new-gitdoor-and-graphdoor-backdoors.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-17"
published_at: "2026-11-17T11:20:18.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - backdoor
  - c2
  - github
  - sharepoint
  - kaspersky
  - government
  - news
why_read: >-
  Read the original for Kaspersky's technical analysis of the two backdoors, which the excerpt
  omits, and for indicators you could use to hunt for this activity.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Kaspersky has described an active intrusion campaign, codenamed Operation ShadowCloud, that targets government sectors in Asia and Africa. The company says it identified the activity in early 2026. The attackers deliver two previously undocumented backdoors, named GitDoor and GraphDoor.

Both backdoors use legitimate services for command-and-control. According to the report, they abuse Microsoft SharePoint and GitHub. The names suggest GitDoor relies on GitHub and GraphDoor on Microsoft's services, though the source excerpt does not confirm which backdoor uses which.

This matters because traffic to GitHub and SharePoint is widely allowed and rarely blocked in government and enterprise networks. Domain and IP reputation controls will not flag it. Defenders may need to rely on endpoint telemetry and on identifying unusual API use or unexpected accounts and repositories.

The source text provided is short and truncated. It does not cover initial access, victim counts, attribution or indicators of compromise, so those details should be taken from Kaspersky's full report.
