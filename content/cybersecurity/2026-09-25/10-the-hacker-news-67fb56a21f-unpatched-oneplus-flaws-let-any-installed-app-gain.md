---
id: 67fb56a21f
title: Unpatched OnePlus flaws let any installed app gain root without permissions
original_title: Unpatched OnePlus Flaws Let Installed Android Apps Gain Root Without Permissions
url: https://thehackernews.com/2026/09/unpatched-oneplus-flaws-let-installed.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-25"
published_at: "2026-09-24T18:10:18.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - android
  - oneplus
  - root
  - oxygenos
  - local-privilege-escalation
  - unpatched
  - news
why_read: >-
  You will see how two vendor flaws chain into full root from a zero-permission app, and which
  device families are exposed pending a patch.
rank: 10
interest_score: 8
depth_score: 7
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

A researcher chained two flaws in OnePlus's own OxygenOS software to gain root access on a OnePlus 15 running the latest build. The attack needs only a user-installed app that requests no Android permissions, so there is no permission prompt or warning to alert the victim.

OnePlus told the researcher that the same flaws affect many of its other devices and OPPO phones, which share the OxygenOS codebase. Full root from a zero-permission app bypasses Android's standard permission model and most mobile defence tools, so a malicious sideloaded or trojanised app could read messages, steal credentials, or persist undetected.

OnePlus has not yet released patches for the chained flaws at the time of reporting, leaving current devices exposed. Defenders should monitor for sideloaded apps and watch for vendor advisories, since detection on-device is unlikely until a fix ships.
