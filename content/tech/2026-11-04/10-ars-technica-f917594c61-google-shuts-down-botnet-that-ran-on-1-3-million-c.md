---
id: f917594c61
title: Google shuts down botnet that ran on 1.3 million certified Android TV boxes
original_title: Google dismantles botnet secretly running on 1.3 million Android TV boxes
url: >-
  https://arstechnica.com/google/2026/11/google-dismantles-botnet-secretly-running-on-1-3-million-android-tv-boxes/
source: Ars Technica
kind: news
section: security
date: "2026-11-04"
published_at: "2026-11-03T17:08:21.000Z"
authors:
  - Ryan Whitwam
comments: >-
  https://arstechnica.com/google/2026/11/google-dismantles-botnet-secretly-running-on-1-3-million-android-tv-boxes/#comments
tags:
  - botnet
  - android-tv
  - malware
  - google
  - residential-proxies
  - ad-fraud
  - news
why_read: >-
  The original details the three-stage malware design, the certification loophole it exploited, and
  Synthient's list of 182 affected device models.
rank: 10
interest_score: 6.3
depth_score: 7
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

Google's Threat Intelligence Group has shut down the x.cpe botnet, which ran on more than 1.3 million Android TV devices at its height. Trend Micro counted 1,472,554. The boxes were Google-certified, mostly MECOOL-brand hardware from Shenzhen-based Videostrong. A stub app named com.oemservice phoned home after setup, disabled Play Protect, and used system-level permissions to install further malware modules at the operator's behest.

These were Google-certified devices, and certification is the process meant to catch exactly this kind of threat. The malware slipped through via obfuscation and a backdoor that installed it remotely after devices were set up and online. It grew from a single-stage dropper into a modular three-stage platform selling access to third parties. Most boxes ran residential proxies or ad fraud modules. Videostrong kept full device access, enough to run terminal commands, capture the screen, and probe other devices on the local network.

Google worked with Japan's National Police Agency, Synthient and Trend Micro, taking legal action to shut down the domains and command-and-control servers Videostrong used. It estimates Videostrong is now cut off from about 10 million compromised devices. Most infected boxes were in Brazil, Malaysia, Iraq, Mexico and Taiwan, with tens of thousands online in the US, Germany, the UK, Australia and Canada. Google has ended its relationship with Videostrong and barred its subsidiaries from Android apps and services.

Remediation is incomplete. Play Protect remains disabled on affected boxes, and the inert malware modules load as system apps that users cannot easily remove. Synthient has published a list of 182 affected model names. Google is updating its certification process, but Android is open source and countless uncertified TV boxes sit outside its reach. Videostrong could sell malicious hardware under other brands, though it would need to rebuild the botnet from scratch.
