---
id: 1d1ab4d071
title: Action1 RMM tool abused in phishing campaign delivering malware
original_title: More RMM Tools In the Wild, (Tue, Oct 6th)
url: https://isc.sans.edu/diary/rss/33400
source: SANS ISC
kind: blog
section: threat-research
date: "2026-10-06"
published_at: "2026-10-06T09:34:56.000Z"
authors: []
comments: null
tags:
  - rmm-abuse
  - phishing
  - persistence
  - action1
  - malware-delivery
  - blog
why_read: >-
  Learn how attackers are abusing legitimate RMM platforms to establish persistence in production
  systems.
rank: 9
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Attackers sent phishing emails with fake PDF invoices. PDFs used OpenAction and URI keywords to silently redirect victims to a malicious VBS file hosted on Vercel. The script displayed a decoy PDF while downloading an MSI archive containing Action1 RMM binaries.

Action1 is legitimate remote management software. Threat actors are abusing free or test accounts to distribute it through the company's infrastructure, gaining persistence as a Windows service. This mirrors recent ScreenConnect abuse and represents a trend of weaponising legitimate RMM tools.

The MSI contained four unsigned DLL and EXE files from Action1, signed with an expired corporate certificate from May 2026. Registry keys stored customer ID, certificate, and private key data. The customer ID connected to Action1's cloud infrastructure.
