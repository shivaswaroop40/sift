---
id: 2196f6e100
title: Researchers reset TPM lockout to guess Windows Hello and BitLocker PINs
original_title: New Attack Bypasses TPM Lockout to Crack Windows Hello and BitLocker PINs in Days, Not Years
url: https://thehackernews.com/2026/11/flash-chip-attack-bypasses-tpm-lockout.html
source: The Hacker News
kind: news
section: papers
date: "2026-11-18"
published_at: "2026-11-18T12:28:30.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - tpm
  - bitlocker
  - windows-hello
  - physical-access
  - pin
  - amd
  - news
why_read: >-
  The original should explain how the lockout is reset, which devices are affected and how long the
  guessing took, none of which the truncated excerpt covers.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Researchers at Technische Universität Berlin say someone with physical access can reset the TPM lockout on AMD-based PCs and some Intel PCs. The attack requires opening the case. Resetting the lockout removes the limit on wrong guesses for Windows Hello and BitLocker PINs.

In lab tests, the team recovered a four-digit Windows Hello PIN on an AMD laptop and a 6-digit BitLocker PIN on an Intel laptop. The headline claims days of effort rather than years, but the source text is cut off, so the method and timings are not given here.
