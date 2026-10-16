---
id: 676eb7aaa7
title: Fake Arch Linux packages impersonate yay and paru helpers to deploy root malware
original_title: Fake Arch Linux packages push malware with root privileges
url: >-
  https://www.bleepingcomputer.com/news/security/fake-arch-linux-packages-push-malware-with-root-privileges/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-10-16"
published_at: "2026-10-15T17:12:31.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - supply-chain
  - privilege-escalation
  - malware
  - linux
  - package-management
  - aur
  - news
why_read: Learn how typosquatting plus root execution can bypass trust in community package repositories.
rank: 9
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A threat actor uploaded trojanised packages to the Arch User Repository under names mimicking the yay and paru AUR helpers. The malicious PKGBUILDs contained legitimate upstream code but injected a script that fetched and executed a remote payload with root privileges from a GitFlic repository via the Wayback Machine.

This matters because AUR helpers are widely trusted by Arch users to manage package installation. A typosquatted package can infect systems before detection, and execution with root access gives attackers complete control. The AUR has faced three major campaigns this year alone, indicating sustained targeting of the repository.

The payload origin shares infrastructure with the npm DirtyBlanket campaign, which deployed the CHAOS remote-access trojan and injected into AUR packages. However, no confirmation yet links the two operations. Users who installed the fake packages should assume compromise and perform full remediation.
