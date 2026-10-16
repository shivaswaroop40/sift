---
id: 80a7b20fd8
title: Android kernel divergence persists despite vendor hooks standardisation effort
original_title: "[$] Vendor hooks in the Android kernel"
url: https://lwn.net/Articles/1098493/
source: LWN
kind: news
section: infrastructure
date: "2026-10-16"
published_at: "2026-10-15T15:09:15.000Z"
authors:
  - corbet
comments: null
tags:
  - android
  - kernel
  - vendor-hooks
  - mainline
  - out-of-tree
  - news
why_read: >-
  Understand how Android maintains kernel changes and the ongoing challenge of keeping vendor code
  manageable.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Android devices still carry substantial out-of-tree kernel modifications despite efforts to align with mainline Linux. Vendor hooks have emerged as the preferred mechanism for device-specific changes, reducing direct mainline divergence.

For platform engineers, this matters because vendor hooks affect kernel stability, update timelines, and the ability to reason about system behaviour across devices. The persistence of out-of-tree code complicates debugging and increases maintenance burden.

Todd Kjos presented the topic at the 2026 Linux Plumbers Conference, suggesting the Android ecosystem is still grappling with how to structure vendor-specific kernel modifications cleanly.
