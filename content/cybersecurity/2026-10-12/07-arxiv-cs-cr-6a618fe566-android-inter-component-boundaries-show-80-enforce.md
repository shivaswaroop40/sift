---
id: 6a618fe566
title: Android inter-component boundaries show 80% enforcement failure rate across system packages
original_title: A Systematic Study of Security Enforcement at Android Inter-Component Boundaries
url: https://arxiv.org/abs/2610.13597
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-10-12"
published_at: "2026-10-12T04:00:00.000Z"
authors:
  - Sandiyo Christan A
comments: null
tags:
  - android
  - ipc
  - enforcement
  - inter-component
  - vulnerability
  - uri-scheme
  - paper
why_read: >-
  Understand which Android IPC enforcement mechanisms fail in practice and where zero-permission
  attacks remain viable.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers evaluated security enforcement at Android's IPC boundaries across 30 Google and AOSP packages on Android 17, using 120 test cases. They found 97 enforcement gaps (80.8%) where security mechanisms failed to function as designed, versus 23 cases where enforcement held. Activities and BroadcastReceivers showed complete failure; ContentProviders achieved 72.4% success due to framework defences like setStrict().

Enforcement gaps create a practical attack surface. A zero-permission attacker could exploit these failures to cross application and system boundaries without explicit permission. All seven evaluated platform security fixes with a specific targetSdkVersion gate remain inactive in applications because none target that version.

The study identified 18 custom URI scheme handlers processing sensitive data including authentication tokens and payment credentials, despite known unverifiability of custom schemes per RFC 8252. This represents a concrete channel for credential theft across application boundaries.
