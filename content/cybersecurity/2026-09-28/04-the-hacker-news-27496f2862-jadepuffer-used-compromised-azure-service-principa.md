---
id: 27496f2862
title: JADEPUFFER used compromised Azure service principals to delete cloud resources
original_title: JADEPUFFER-Linked Attackers Used Compromised Service Principals to Delete Azure Resources
url: https://thehackernews.com/2026/09/jadepuffer-linked-attackers-used.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-09-28"
published_at: "2026-09-28T09:08:21.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - jadepuffer
  - azure
  - service-principals
  - cloud-security
  - microsoft
  - identity
  - news
why_read: >-
  It shows how stolen service principals become a destructive weapon in Azure and why least
  privilege and monitoring on non-human identities matter.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Microsoft attributes destructive Azure activity to JADEPUFFER, tracked internally as Storm-3168. Over about 18 hours in early June 2026, the actor used compromised service principals to orchestrate deletions and other disruptive actions inside a victim's Azure environment.

The tradecraft matters because service principals with delete or write rights on production assets can cause rapid, irreversible damage once stolen. Many organisations accumulate service principals with broad permissions and limited monitoring, so a single compromise can give an attacker the keys to tear down subscriptions, storage, or compute without needing a human account.

Microsoft frames the activity as an evolution of JADEPUFFER's previous operations, suggesting the group is investing in cloud-native destructive tooling rather than relying on ransomware or on-premises intrudes.
