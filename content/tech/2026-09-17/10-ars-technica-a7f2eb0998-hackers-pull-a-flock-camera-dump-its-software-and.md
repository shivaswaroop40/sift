---
id: a7f2eb0998
title: Hackers pull a Flock camera, dump its software, and show what the device actually sees
original_title: Hackers reveal how Flock cameras really track cars and people
url: >-
  https://arstechnica.com/security/2026/09/hackers-reveal-how-flock-cameras-really-track-cars-and-people/
source: Ars Technica
kind: news
section: security
date: "2026-09-17"
published_at: "2026-09-17T09:43:46.000Z"
authors:
  - Dhruv Mehrotra
  - Joseph Cox
  - wired.com
comments: >-
  https://arstechnica.com/security/2026/09/hackers-reveal-how-flock-cameras-really-track-cars-and-people/#comments
tags:
  - surveillance
  - flock
  - reverse-engineering
  - computer-vision
  - android
  - privacy
  - news
why_read: >-
  You will see the internals of a deployed surveillance camera, including the actual on-device
  models, storage layout and image volumes, and what was claimed versus what was true.
rank: 10
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Hackers calling themselves stegan0gram removed a Flock Safety automatic licence plate reader from a roadway, copied its on-device storage, and recovered an encryption key that unlocked thousands of stored video clips. They passed the files to 404 Media and Distributed Denial of Secrets, who shared them with WIRED for joint analysis.

The recovered software runs about 20 Flock-built apps on Android, using a processor similar to a mid-range smartphone. Logs spanning roughly 21 days show the device photographed around 50,200 vehicles and produced about 1.6 million images, with a typical day logging 3,300 vehicles. Plate reading and vehicle make, model and colour classification happen on Flock's servers, not on the device.

The camera also runs a computer-vision model that explicitly detects people, recording bounding boxes and confidence scores. WIRED extracted the models and ran them across 27,321 short MP4 clips stored locally, plus test images, and confirmed person detection works. The most sensitive storage remained encrypted and inaccessible.

The breach contradicts Flock's claim that footage is unreadable without physical access, following earlier reverse-engineering by researcher Jon Gaines in early 2025 that Flock had downplayed. It comes amid ongoing controversy over Flock's national search network, with one Georgia city alone exposing its records to more than 2,000 agencies, and several towns announcing they will drop Flock.
