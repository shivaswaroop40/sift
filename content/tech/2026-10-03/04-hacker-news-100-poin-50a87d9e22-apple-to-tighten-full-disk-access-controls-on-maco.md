---
id: 50a87d9e22
title: Apple to tighten Full Disk Access controls on macOS
original_title: Updates to Full Disk Access in macOS
url: https://developer.apple.com/news/?id=p6zjojqw
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-10-03"
published_at: "2026-10-02T19:37:01.000Z"
authors:
  - notfirstpost
comments: https://news.ycombinator.com/item?id=49937631
tags:
  - macos
  - privacy
  - api
  - security
  - fulldiskaccess
  - community
why_read: >-
  Learn how Apple plans to restrict Full Disk Access and what this means for system tools and backup
  software.
rank: 4
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Apple will add explicit user confirmations for Full Disk Access on macOS, citing misuse by developers who read files, mail, messages and browsing history without clear user awareness. The change aims to prevent apps from exposing sensitive system data through one of the few APIs that bypasses privacy controls.

For platform engineers, this matters because Full Disk Access remains critical for backup and system tools. Tighter controls will likely require clearer user consent flows and may push developers toward narrower APIs where possible. Apple specifically flags the risk as AI agents grow more autonomous and capable.

Apple describes the changes as "additional controls" and "very explicit user action" requirements but has not detailed specific implementation or timeline for the updates.
