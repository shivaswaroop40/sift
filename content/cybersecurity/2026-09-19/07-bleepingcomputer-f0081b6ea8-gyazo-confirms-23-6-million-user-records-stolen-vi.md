---
id: f0081b6ea8
title: Gyazo confirms 23.6 million user records stolen via server vulnerability
original_title: Gyazo server flaw exploited to steal 23.6 million user records
url: >-
  https://www.bleepingcomputer.com/news/security/gyazo-server-flaw-exploited-to-steal-236-million-user-records/
source: BleepingComputer
kind: news
section: incidents
date: "2026-09-19"
published_at: "2026-09-18T16:00:38.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - data-breach
  - gyazo
  - image-hosting
  - credential-exposure
  - metadata-leak
  - incident-response
  - news
why_read: >-
  You get a breakdown of which Gyazo fields and metadata were exposed, the mechanism used, and what
  defenders should tell affected users.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Gyazo has disclosed a data breach in which attackers exploited a server vulnerability on 11 September 2026 to extract about 23.62 million user records plus 490 million image metadata records. The platform, operated by Helpfeel and used mainly by gaming communities, was taken offline for maintenance after suspicious activity was detected the following day.

Exposed per-user data may include names, email addresses, password hashes, user and device IDs, login session IDs, X integration tokens, Google SSO email addresses, profile details, subscription and billing information, and usage statistics. Metadata records, mostly tied to images uploaded before January 2019, contain image IDs, upload IPs, user-agent strings, EXIF location data, OCR text, titles, source URLs, and hashed passphrases for private images.

Helpfeel warns that image IDs can reconstruct image URLs, so access to affected files has been disabled. The company also acknowledges attackers obtained a list identifying private images and cannot rule out viewing, though it found no evidence of deletion. Other Helpfeel and Cosense services were not affected.

Users are advised to change Gyazo passwords and any reused credentials, and to watch for phishing. Gyazo is notifying affected users and working with external experts and authorities.
