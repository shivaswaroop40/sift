---
id: 111a9e3b3e
title: Chrome appears to exempt google.com from on-device site data clearing
original_title: Chrome again exempts Google from user site data settings
url: https://lapcatsoftware.com/articles/2026/9/1.html
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-06"
published_at: "2026-09-05T23:39:47.000Z"
authors:
  - ExMachina73
comments: https://news.ycombinator.com/item?id=49581870
tags:
  - chrome
  - privacy
  - google
  - browser-bug
  - site-data
  - community
why_read: >-
  Reproducible steps for testing whether Chrome is leaking google.com site data past your deletion
  settings, plus context on a near-identical 2019 bug.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

A developer reports that Chrome 152.0.7977.83 on macOS keeps site data for www.google.com even when the user has set the default behaviour to delete all site data on close, with no Chrome sign-in enabled. The author reproduced the behaviour on two Macs after running a Google search, closing the only window, and reopening settings. Cookies, local storage and session storage for google.com persisted across a full Chrome quit and relaunch, and only google.com appeared to be affected.

The report echoes a 2019 Chrome bug in which Google-owned domains were exempt from the same setting, which Google later fixed. Because the author uses Safari as a default browser and only tests in Chrome periodically, the exact version that introduced the regression is unknown, so the finding is thin and awaits independent confirmation from other users and platforms.
