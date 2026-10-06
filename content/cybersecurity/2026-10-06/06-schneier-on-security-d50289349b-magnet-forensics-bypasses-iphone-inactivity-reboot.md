---
id: d50289349b
title: Magnet Forensics bypasses iPhone inactivity reboot security feature
original_title: Possible Vulnerability in Apple’s Automatic Reboot
url: >-
  https://www.schneier.com/blog/archives/2026/10/possible-vulnerability-in-apples-automatic-reboot.html
source: Schneier on Security
kind: blog
section: vulnerabilities
date: "2026-10-06"
published_at: "2026-10-06T11:06:46.000Z"
authors:
  - Bruce Schneier
comments: null
tags:
  - ios
  - vulnerability
  - forensics
  - law-enforcement
  - inactivity-reboot
  - blog
why_read: Learn how a forensics tool defeats a key iOS security feature and what data remains at risk.
rank: 6
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Magnet Forensics has developed tools called GrayKey Preserve and Evidence Preservation Mode that circumvent Apple's automatic reboot feature, which normally secures iPhones after 72 hours of inactivity. The tools also defeat data deletion mechanisms that remove cached locations and old messages after set periods.

The inactivity reboot is a meaningful security boundary for iOS devices. Bypassing it extends the window during which law enforcement tools can access device data that would otherwise become inaccessible or deleted. This affects the threat model for compromised or seized devices.

The vulnerability appears to exist in how iOS handles the reboot trigger or the data preservation mechanisms. Apple engineers can now work to close these gaps. The specific technical mechanism is not detailed in the reporting.
