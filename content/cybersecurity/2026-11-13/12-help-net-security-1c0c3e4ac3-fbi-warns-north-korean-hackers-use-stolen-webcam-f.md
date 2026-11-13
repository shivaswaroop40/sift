---
id: 1c0c3e4ac3
title: FBI warns North Korean hackers use stolen webcam footage in fake Zoom calls
original_title: Stolen webcam clips of 900+ victims feed North Korea’s $400 million fake Zoom scheme
url: https://www.helpnetsecurity.com/2026/11/13/fbi-north-korean-fake-zoom-calls/
source: Help Net Security
kind: news
section: threat-research
date: "2026-11-13"
published_at: "2026-11-13T06:30:30.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - north-korea
  - social-engineering
  - fbi
  - supply-chain
  - deepfakes
  - cryptocurrency
  - news
why_read: >-
  The article sets out the full attack chain and the FBI's practical advice, useful for briefing
  developers, open-source maintainers and crypto staff who take video calls from contacts.
rank: 12
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

The FBI says North Korean state hackers have stolen more than $400 million in cryptocurrency over 18 months using fake Zoom and Teams calls. The scheme, called FaceStealer, plays recorded webcam video of earlier victims to convince targets they are meeting a real contact. The FBI has seized more than 900 such recordings. It issued a warning on 12 November.

Attackers take over Telegram, LinkedIn, Slack and Discord accounts and message the victim's contacts. A Calendly invite follows, then a link to a lookalike domain. In the call, a chat message says the others cannot hear the target and prompts them to run an update, script or terminal command. That installs a cookie harvester, keyloggers, a screen capturer and a backdoor, and the webcam starts recording.

The FBI ties the activity to Sapphire Sleet, BlueNoroff and APT38. The attackers sometimes waited months, or over a year, for wallet balances to grow before emptying them. Earlier this year the group got a maintainer of a major JavaScript library, with tens of millions of weekly downloads, to run the fix. They used his access to create malicious dependencies, but the attack was caught quickly.

The FBI has seen similar attempts against npm and Rust crate maintainers. The group is also building deepfakes of known crypto figures, though stolen real footage still makes up most of the scheme. Advice includes keeping the camera off until you can see and hear the inviter, joining through the official app, confirming the meeting through a second channel, and never pasting code to fix a meeting app.
