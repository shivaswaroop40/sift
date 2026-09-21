---
id: ac3cdd02af
title: Helpfeel confirms Gyazo breach exposing 23.6 million user records
original_title: Hackers exploit Gyazo server flaw to steal 23.6 million user records
url: https://www.helpnetsecurity.com/2026/09/21/helpfeel-gyazo-data-breach/
source: Help Net Security
kind: news
section: incidents
date: "2026-09-21"
published_at: "2026-09-21T08:57:26.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - gyazo
  - data-breach
  - credential-exposure
  - metadata-leak
  - japan
  - screenshot-service
  - news
why_read: >-
  You get the full scope of a major credential and metadata breach, what was taken, and what your
  users should do next.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Japanese software firm Helpfeel has confirmed a data breach at its screenshot platform Gyazo. Attackers exploited a vulnerability in the image upload server on September 11 to run arbitrary commands and access a user database. Around 23.62 million user records were stolen, including names, email addresses, password hashes, user IDs, device IDs, login session IDs, X integration tokens, Google SSO email addresses, profile details, and subscription information. No payment card data was exposed.

The breach also touched image metadata at a much larger scale. Approximately 490 million metadata records were taken, most tied to images uploaded in or before January 2019, covering around 14.4% of image data on the platform. A further 2.4 million images were pulled through targeted filtering. The metadata includes image IDs, upload IP addresses, user agents, EXIF location data, OCR text, image titles, source URLs, and hashed passphrases protecting private images. Helpfeel has warned that private images may have been viewed.

Helpfeel reported the incident to Japan's Personal Information Protection Commission on September 15 and is notifying affected users by email or through the web interface. The company has urged all Gyazo users to reset passwords, including on any account sharing the same or similar credentials. At the time of writing, Gyazo's homepage still shows a maintenance notice with no return date. Helpfeel's other services, Helpfeel and Cosense, show no sign of data exfiltration, though Gyazo-hosted images embedded there may be unavailable.
