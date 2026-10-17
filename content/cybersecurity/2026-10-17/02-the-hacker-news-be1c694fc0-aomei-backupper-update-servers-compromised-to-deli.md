---
id: be1c694fc0
title: AOMEI Backupper update servers compromised to deliver backdoor for months
original_title: Attackers Tampered with AOMEI Backupper's Update Servers for Minutes to Deliver a Backdoor
url: https://thehackernews.com/2026/10/attackers-tampered-with-aomei.html
source: The Hacker News
kind: news
section: incidents
date: "2026-10-17"
published_at: "2026-10-16T16:43:39.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - supply-chain
  - backdoor
  - update-mechanism
  - aomei
  - server-compromise
  - privilege-escalation
  - news
why_read: >-
  Learn how attackers weaponised a vendor's update infrastructure and what window of exposure you
  face with unattended update checks.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Attackers gained repeated access to AOMEI Backupper's update servers between May and July 2026, replacing legitimate files with backdoored versions in windows of five to ten minutes. Any user checking for updates during these intervals would download and execute the malicious payload.

This attack is significant because update mechanisms are trusted vectors. Backup software runs with high privileges and reaches production systems, making it an effective distribution channel for persistent access. The attacker's ability to repeatedly modify files suggests sustained server compromise rather than a single incident.

Google Threat Intelligence, Mandiant, and ManageEngine's Threat Analysis teams documented the campaign. The attack demonstrates how even vendor infrastructure can be turned against their user base when not adequately secured.
