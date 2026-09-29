---
id: 3f7dc2fe36
title: Apple patches CoreGraphics out-of-bounds write flaw exploited in targeted attacks
original_title: Apple Patches CoreGraphics Flaw Possibly Exploited in Targeted Attacks
url: https://thehackernews.com/2026/09/apple-patches-coregraphics-flaw.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-29"
published_at: "2026-09-28T19:18:01.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - apple
  - coregraphics
  - cve-2026-86950
  - out-of-bounds-write
  - ios
  - macos
  - news
why_read: >-
  It tells you about an actively exploited Apple image-rendering flaw, though the source itself is
  incomplete on patched builds and indicators.
rank: 11
interest_score: 7.7
depth_score: 7
novelty_score: 7
utility_score: 9
scored: true
model: minimax-m3
---

Apple has released security updates for older iOS, iPadOS, and macOS versions to fix CVE-2026-86950, an out-of-bounds write in the CoreGraphics component that may have been exploited in targeted attacks. The flaw can trigger arbitrary code execution when a user processes a maliciously crafted file.

The vulnerability matters because CoreGraphics handles image and PDF rendering across Apple platforms, so a malicious file opened in any supported application could run attacker code with the privileges of the user. Apple has not shared technical details or indicators of compromise, which limits the ability to hunt for related activity.

The text from the source is truncated and does not specify the patched versions, the affected components beyond CoreGraphics, or whether a sandbox escape is involved. Treat the available detail as limited until Apple publishes a fuller advisory.
