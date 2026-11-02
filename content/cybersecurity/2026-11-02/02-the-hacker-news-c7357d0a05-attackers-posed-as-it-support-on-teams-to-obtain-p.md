---
id: c7357d0a05
title: Attackers posed as IT support on Teams to obtain privileged certificates via AD CS
original_title: Attackers Pose as IT Support on Microsoft Teams, Abuse AD CS to Steal Company Data
url: https://thehackernews.com/2026/11/attackers-pose-as-it-support-on.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-02"
published_at: "2026-11-02T11:08:45.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - ad-cs
  - social-engineering
  - microsoft-teams
  - certificates
  - privileged-access
  - news
why_read: >-
  Microsoft's report on the two intrusions, including how the attackers reached AD CS from a single
  Teams conversation.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Microsoft investigated two intrusions in which attackers impersonated IT support on Microsoft Teams and persuaded employees to grant them remote control of their PCs. From that access, they abused insecure Active Directory Certificate Services settings to obtain login certificates for privileged accounts, including one for a domain controller. One of the intrusions resulted in the theft of company data.

The chain links a low-cost social engineering vector to a high-impact escalation path. One persuaded employee was enough to reach certificate services and produce credentials for domain-level accounts. Teams remote support requests deserve scrutiny, and AD CS template permissions should be reviewed for who can enrol certificates against privileged accounts.
