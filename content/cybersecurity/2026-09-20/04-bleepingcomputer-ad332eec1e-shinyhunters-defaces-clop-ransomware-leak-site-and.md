---
id: ad332eec1e
title: ShinyHunters defaces Clop ransomware leak site and claims to have stolen onion keys
original_title: ShinyHunters hacks Clop leak site, threatens to extort ransomware gang
url: >-
  https://www.bleepingcomputer.com/news/security/shinyhunters-hacks-clop-leak-site-threatens-to-extort-ransomware-gang/
source: BleepingComputer
kind: news
section: incidents
date: "2026-09-20"
published_at: "2026-09-19T13:48:32.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - shinyhunters
  - clop
  - ransomware
  - tor
  - grav-cms
  - extortion
  - news
why_read: >-
  It shows a rival extortion crew breaching a ransomware operation's leak site, with an unverified
  claim of stolen Tor keys that could undermine the site's takedown.
rank: 4
interest_score: 7.3
depth_score: 7
novelty_score: 9
utility_score: 6
scored: true
model: minimax-m3
---

ShinyHunters breached the Tor-hosted data leak site of the Clop ransomware operation, defacing it with their Umbreon artwork and claiming access to the underlying server. The group says it exploited an unauthenticated file upload vulnerability in Grav CMS to upload a message on Friday night. BleepingComputer confirmed the file upload and defacement but has not verified the broader data theft claims.

The attackers claim to have stolen source code, Grav CMS plugins, the contents of /var/log, and the private keys for Clop's onion service. If the keys are valid, ShinyHunters could continue hosting a site at Clop's original onion address even if Clop changes infrastructure. The group told BleepingComputer it plans to extort the gang by posting a 72 hour contact demand on its own leak portal.

The incident is framed by ShinyHunters as retaliation for threats from a Clop representative during a feud dating back to Clop's 2025 Oracle E-Business Suite extortion campaign. The article does not independently confirm the alleged threats or the stolen onion keys, and Clop had not responded at publication time.
