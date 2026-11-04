---
id: 2a138a3148
title: Google takes down botnet pre-installed on 1.3 million Android TV boxes
original_title: Google dismantles massive botnet hidden in Android TV boxes
url: https://therecord.media/google-dismantles-botnet-hidden-android-tv-boxes
source: The Record
kind: news
section: threat-research
date: "2026-11-04"
published_at: "2026-11-03T19:48:00.000Z"
authors: []
comments: null
tags:
  - botnet
  - android
  - supply-chain
  - residential-proxy
  - firmware
  - takedown
  - news
why_read: >-
  The original details the botnet's monetisation model, the three-stage malware architecture, and
  what Google's takedown does and does not do for affected device owners.
rank: 10
interest_score: 6
depth_score: 6
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

Google, Japanese police and the security firms TrendAI, Human and Synthient have dismantled the X.CPE botnet, hidden in more than 1.3 million devices across more than 200 countries. Most were Android TV set-top boxes. Other infected devices included telehealth equipment, karaoke machines and digital signage. Google tied the scheme to Videostrong Technology, a Chinese Android manufacturer, and said the malware was built into firmware before devices reached buyers. It used legal action to seize the botnet's control domains.

The backdoor turned infected devices into a residential proxy network, letting third-party traffic pass through victims' connections using their internet addresses and bandwidth. It also supported ad fraud, data exfiltration and installing apps for payment. It silently downloaded and executed files without consent, and reinstalled itself if a user removed it. Google says the takedown may also have cut criminal access to a further 10 million compromised devices, many not Android.

Google did not say whether owners will be notified or whether the malware will be forcibly removed. Its head of disruption operations claims severing the domains effectively renders the malware benign. Since late 2024 the pre-installed malware evolved from single-stage droppers into a modular three-stage architecture built for resilience and multi-tenant monetisation. Google has banned Videostrong and future subsidiaries from selling Android devices or supplying software to certified vendors, and pledged to change its review process.
