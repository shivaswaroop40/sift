---
id: d0a6e484b6
title: Linux 7.4-rc1 closes record merge window of 18,591 changesets
original_title: Kernel prepatch 7.4-rc1
url: https://lwn.net/Articles/1104654/
source: LWN
kind: news
section: systems
date: "2026-11-02"
published_at: "2026-11-02T00:17:08.000Z"
authors:
  - corbet
comments: null
tags:
  - linux-kernel
  - merge-window
  - ai
  - kernel-release
  - open-source
  - news
why_read: >-
  You get the full release announcement and LWN's KSDB page with more detailed statistics on 7.4
  contributions.
rank: 12
interest_score: 5.3
depth_score: 5
novelty_score: 6
utility_score: 5
scored: true
model: glm-5.3
---

The 7.4-rc1 kernel prepatch is out and the merge window for this development cycle is closed. The window brought in 18,591 non-merge changesets, a record that nearly matches the patch volume of the entire 7.3 cycle, which was itself a record. So far 2,678 developers have contributed to 7.4, and 625 of them are first-time kernel contributors.

The announcement calls this a big merge window and attributes the size to AI-triggered work. That work going into the merge window is preferred over it showing up mainly as extra fixes during the -rc period. The stated hope is that AI fixes are becoming part of normal development rather than a late flood, a model the announcement calls much healthier.

The practical signal is that AI-triggered work is now large enough to be credited with a record merge window in a major upstream project. The healthier-model claim is a hope, not a measurement. The 7.4 -rc releases will show whether work that lands early stabilises cleanly.
