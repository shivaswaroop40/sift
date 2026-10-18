---
id: a3fdecb665
title: ConnectWise disables seven application identities after Microsoft 365 tenant compromise
original_title: ConnectWise Suspends Cloud Backup After Attackers Compromise Microsoft 365 Tenants
url: https://thehackernews.com/2026/10/connectwise-suspends-cloud-backup-after.html
source: The Hacker News
kind: news
section: incidents
date: "2026-10-18"
published_at: "2026-10-18T08:23:02.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - connectwise
  - microsoft-365
  - breach
  - application-identity
  - cloud-backup
  - incident
  - news
why_read: >-
  Understand what was compromised and what steps to take if your organisation uses ConnectWise
  applications.
rank: 3
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

ConnectWise has disabled seven application identities following a breach in which threat actors gained unauthorized access to these identities and compromised Microsoft 365 tenants. The company is investigating the scope and nature of the compromise.

The incident is significant because compromised application identities can grant attackers persistent access to customer environments and sensitive data. If the identities retained permissions to backup systems or email, attackers could exfiltrate data or maintain access across multiple customer organisations.

The disabled identities include ConnectWise Cloud Backup and others. Organisations using these applications should audit access logs, revoke affected tokens, and assume any data processed by these services during the incident window may be at risk.
