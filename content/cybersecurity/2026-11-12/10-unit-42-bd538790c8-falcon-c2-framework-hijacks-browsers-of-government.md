---
id: bd538790c8
title: Falcon C2 framework hijacks browsers of government webmail users, linked to PeckBirdy
original_title: "The XG Files: Falcon C2 Flying Under The (Browser) Radar"
url: https://unit42.paloaltonetworks.com/falcon-c2-browser-compromise/
source: Unit 42
kind: research
section: threat-research
date: "2026-11-12"
published_at: "2026-11-11T15:00:23.000Z"
authors:
  - Unit 42
comments: null
tags:
  - falcon-c2
  - peckbirdy
  - browser-compromise
  - chrome-extension
  - webmail
  - espionage
  - research
why_read: >-
  The original gives the C2 panel and listener traits, URL patterns and the Hm_lvt_ storage
  artefact, which you can use for hunting and detection.
rank: 10
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Unit 42 describes Falcon (also XG or Xiàng Gē), a Node.js command and control framework that runs malicious JavaScript placed directly in webmail portals and government web applications. Operating inside the browser, it sideloads malicious Chrome extensions and steals passwords, emails, session cookies and communications. It also delivered an implant called Antino, which uses Microsoft OneDrive for C2.

Unit 42 saw government entities compromised in one Middle Eastern country and four Southeast Asian countries between March and May 2026. Targets included foreign affairs, defence and interior ministries and law enforcement agencies. Unit 42 says this fits strategic intelligence collection.

Falcon hides its infrastructure. The management panel on TCP 8080 shows a blank page and reveals its login only after F9 is pressed three times. The victim-facing listener on TCP 443 serves a Tetris or Snake game by default. Each visit gets an implant obfuscated per session with a one-byte XOR.

Unit 42 assesses with high confidence that Falcon and Trend Micro's PeckBirdy are variants of one framework. They share near-identical URL structures, payload delivery and a Baidu-mimicking Hm_lvt_ session ID prefix in cookies and local storage. Falcon adds a /config/ path prefix and negotiates an RSA-encrypted AES session key.
