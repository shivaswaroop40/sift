---
id: 2052e2e9ed
title: Fake Zoom installer delivers CloudSyncD macOS backdoor now in active deployment
original_title: macOS Users Targeted by Fake Zoom Installer Carrying CloudSyncD Backdoor
url: >-
  https://www.securityweek.com/macos-users-targeted-by-fake-zoom-installer-carrying-cloudsyncd-backdoor/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-10-03"
published_at: "2026-10-02T13:15:00.000Z"
authors:
  - Kevin Townsend
comments: null
tags:
  - macos
  - backdoor
  - malware
  - persistence
  - social-engineering
  - news
why_read: >-
  Learn the indicators and attack flow to detect this actively deployed macOS backdoor in your
  environment.
rank: 7
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Jamf researchers discovered CloudSyncD, a macOS backdoor distributed via fake Zoom installers. The dropper extracts a 756 KB payload and uses the victim's password, collected during fake installation, to execute it with sudo privileges and bypass System Integrity Protection.

CloudSyncD establishes persistent backdoor access for reconnaissance and payload delivery. The malware stores encrypted configuration in its binary and communicates via URIs masquerading as jQuery scripts. Multiple builds have been found across two domains, now in active deployment beyond testing.

All identified builds share identical obfuscation tables, install paths, and C2 encryption keys, meaning beacon traffic captured from any variant can be decrypted with material from any other. The attacker still depends on social engineering to obtain user passwords despite sophisticated evasion techniques.
