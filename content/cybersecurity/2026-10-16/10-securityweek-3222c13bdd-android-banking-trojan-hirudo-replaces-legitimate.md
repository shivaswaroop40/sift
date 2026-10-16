---
id: 3222c13bdd
title: >-
  Android banking trojan Hirudo replaces legitimate apps with trojaned copies to bypass security
  checks
original_title: Novel Android RAT ‘Hirudo’ Replaces Banking Apps With Trojanized Copies
url: >-
  https://www.securityweek.com/novel-android-banking-rat-hirudo-replaces-banking-apps-with-trojanized-copies/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-10-16"
published_at: "2026-10-15T10:15:32.000Z"
authors:
  - Kevin Townsend
comments: null
tags:
  - android
  - banking-trojan
  - credential-theft
  - remote-access
  - application-integrity
  - news
why_read: >-
  Learn how this trojan bypasses banking app security controls and what server-side defences banks
  need to deploy.
rank: 10
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Hirudo is a remote access trojan for Android that uses trojanized copies of legitimate banking apps to disable security controls from within the application itself. The malware is delivered via droppers in fake shopping or video apps, then replaces targeted banking applications with modified versions that include a hooking engine to bypass signature verification, Accessibility service detection and Play Integrity checks.

The threat is significant because it moves tampering inside the target app, forcing defences to shift from device-level detection to application integrity verification. Hirudo currently targets eight Indonesian banking apps but code suggests capability to target banks in China, India, Mexico, Morocco and Thailand.

Banks must verify and enforce Play Integrity server-side, apply layered defences with behavioural analytics, treat local security signals as supporting rather than blocking evidence, and retain backend transaction-risk controls. App-level signals from potentially replaced apps cannot be trusted independently.
