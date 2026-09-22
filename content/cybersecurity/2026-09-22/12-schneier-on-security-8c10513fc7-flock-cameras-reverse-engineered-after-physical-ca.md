---
id: 8c10513fc7
title: Flock cameras reverse-engineered after physical capture
original_title: Reverse-Engineering Flock Cameras
url: https://www.schneier.com/blog/archives/2026/09/reverse-engineering-flock-cameras.html
source: Schneier on Security
kind: blog
section: threat-research
date: "2026-09-22"
published_at: "2026-09-21T14:37:45.000Z"
authors:
  - Bruce Schneier
comments: null
tags:
  - flock
  - alpr
  - reverse-engineering
  - disk-encryption
  - surveillance
  - iot
  - blog
why_read: >-
  You will see what recoverable data and capabilities a Flock ALPR exposes when an attacker gains
  physical access to one.
rank: 12
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Hackers obtained a Flock automatic license plate reader and examined its software and storage. While the most sensitive data remained encrypted, analysis of recovered logs showed the device produced over a million images across several weeks, capturing dozens of images per passing vehicle. The on-device computer vision also classified people, bumper stickers and other graphics, including an American flag patch on a motorcyclist's saddlebag.

This matters because Flock cameras are widely deployed for vehicle tracking, and the findings suggest the devices collect and classify far more than license plates. Detecting people and incidental items such as patches extends surveillance beyond the stated purpose. For defenders and policymakers, it confirms that physical access to these devices yields significant operational intelligence.

The researchers bypassed full-disk encryption because one unencrypted partition stored the key to an encrypted partition. That is a basic security engineering failure and undermines the rest of the device's cryptographic protections.
