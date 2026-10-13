---
id: c544486d4f
title: Linux 7.3-rc7 released with ext4 data=journal mode deprecated
original_title: Kernel prepatch 7.3-rc7
url: https://lwn.net/Articles/1099798/
source: LWN
kind: news
section: systems
date: "2026-10-13"
published_at: "2026-10-12T03:31:34.000Z"
authors:
  - corbet
comments: null
tags:
  - linux
  - kernel
  - ext4
  - storage
  - news
why_read: Track kernel release timing and learn about ext4 changes affecting your storage stack.
rank: 8
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

The seventh release candidate for kernel 7.3 is now available for testing. Linus Torvalds expects the final release next weekend barring major issues. The prepatch contains the usual mix of fixes and smaller changes accumulated through the development cycle.

A significant change deprecates ext4's data=journal mode, which will be removed entirely at the start of 2028. This gives users and distributions nearly three years to migrate workloads to alternative journaling modes. The deprecation addresses long-standing performance and reliability concerns with the mode.
