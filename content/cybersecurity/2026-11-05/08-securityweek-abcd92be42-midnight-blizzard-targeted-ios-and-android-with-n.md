---
id: abcd92be42
title: Midnight Blizzard targeted iOS and Android with n-day exploit chains via watering holes
original_title: Russia-Linked Hackers Hit iOS, Android Devices With Exploit Chains via Watering Holes
url: >-
  https://www.securityweek.com/russia-linked-hackers-hit-ios-android-devices-with-exploit-chains-via-watering-holes/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-11-05"
published_at: "2026-11-05T10:37:13.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - apt29
  - watering-hole
  - exploit-chains
  - ios
  - android
  - n-day
  - news
why_read: >-
  The Sekoia report breaks down the three exploit chains, the DarkSword kit's role, and the watering
  hole and supply chain infrastructure.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Sekoia has uncovered a large-scale watering hole campaign by Midnight Blizzard, the Russia-linked group also known as APT29, targeting iOS and Android users in Europe and the US with zero-click exploits against n-day vulnerabilities. The group compromised or cloned high-profile websites in the US, Ukraine, the Czech Republic and Bulgaria, injecting JavaScript that fingerprinted visitors before delivering an exploit. It also ran reverse-proxy lookalikes of america250.org and the Raffles London at The OWO hotel, and poisoned the Ukrainian analytics service Plerdy, exposing hundreds of sites for a week.

Every vulnerability in the campaign's three exploit chains already has a vendor patch, so unpatched mobile devices are the exposure. CISA has added CVE-2024-27834, one of the iOS bugs, to its KEV catalog, giving federal agencies two weeks to patch. The second iOS payload harvests messages, emails, credentials, tokens, photos and iCloud Drive content. Sekoia expects packaged n-day chains and reused commercial surveillance vendor exploits to become more common among state-sponsored groups.

The iOS chains rely on the DarkSword exploit kit uncovered earlier this year. One chain reimplements DarkSword's remote code execution code for arbitrary read and write access, then exploits CVE-2024-27834, patched in May 2024, to bypass Apple's Pointer Authentication Codes and steal cookies outside Safari. The Android chain combines CVE-2026-3910, a Chrome flaw patched in March as a zero-day, with CVE-2025-27038, a Qualcomm bug fixed in August 2025, to deploy AndroSnitch, a Chrome cookie and password stealer.
