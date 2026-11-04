---
id: a5a89e5419
title: APT29 watering hole campaign delivered zero-click n-day exploits to iOS and Android
original_title: Hackers use n-day exploits in zero-click attacks on iOS, Android devices
url: >-
  https://www.bleepingcomputer.com/news/security/hackers-use-n-day-exploits-in-zero-click-attacks-on-ios-android-devices/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-11-04"
published_at: "2026-11-04T09:39:54.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - apt29
  - watering-hole
  - zero-click
  - n-day
  - ios
  - android
  - news
why_read: >-
  The Sekoia report lists the exact CVE chains, affected versions, and payload behaviour per
  platform, useful for patch audits and detection work.
rank: 7
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Sekoia attributes a watering hole campaign to APT29, also known as Midnight Blizzard, with moderate-to-high confidence. The operation compromised legitimate sites including a Ukrainian gas producer, a U.S. chemical industry trade association, and a Bulgarian military-related site, plus lookalike domains impersonating America250 and Raffles London at The OWO. The attackers also compromised the Ukrainian analytics service Plerdy, whose modified SEO tracker loaded on thousands of websites, mostly in Ukraine, between August 27 and September 3.

Injected JavaScript profiled each visitor's device and browser version, then the command-and-control server pushed a matching n-day exploit chain with no user interaction. On iOS 16.7 the chain steals Safari cookies. On iOS 18.5 it harvests WhatsApp and Telegram databases, Keychain credentials, location data, and photos. On Chrome for Android 139 to 145, excluding 143, it deploys AndroSnitch to collect cookies, login data, browsing history, and saved WiFi credentials.

None of the payloads established persistence, so a reboot stops the activity until the device revisits a compromised site. CVE-2025-43529 is linked to the DarkSword exploit kit, used by multiple threat groups since at least November 2025. Apple and Google have patched every flaw in the campaign, with fixes backported to older iOS releases, so applying current updates remains the primary defence.
