---
id: ce27a3aa39
title: Antino backdoor uses Outlook and OneDrive for C2 in Asia-targeted campaign
original_title: Antino Backdoor Uses Outlook and OneDrive for C2 in China-Nexus Espionage Campaign
url: https://thehackernews.com/2026/10/antino-backdoor-uses-outlook-and.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-10-03"
published_at: "2026-10-02T17:33:16.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - backdoor
  - c2
  - outlook
  - onedrive
  - apt
  - asia
  - news
why_read: Understand how this backdoor abuses legitimate services to hide C2 activity in your environment.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A China-linked threat actor has deployed a previously undocumented backdoor called Antino against government and policy organisations across seven Asian countries: Taiwan, India, the Philippines, Cambodia, Pakistan, Thailand, and Myanmar. Cisco Talos is tracking the activity.

The backdoor uses Outlook and OneDrive as command-and-control channels, leveraging legitimate cloud services to evade network detection. This approach allows operators to blend malicious traffic with ordinary business communication.

The use of mainstream productivity services for C2 means traditional network-based detection signatures will struggle to identify the activity. Defenders must monitor for unusual Outlook and OneDrive access patterns tied to external policy organisations.
