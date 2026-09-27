---
id: 1dff31a4c4
title: Lunex stealer abuses AMD driver to disable defences and grab browser passwords
original_title: Lunex Stealer Abuses AMD Driver to Disable Security Monitoring and Steal Browser Credentials
url: https://thehackernews.com/2026/09/lunex-stealer-abuses-amd-driver-to.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-09-27"
published_at: "2026-09-26T18:22:52.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - infostealer
  - lunex
  - amd-driver
  - clickfix
  - ukraine
  - edr-evasion
  - news
why_read: >-
  You will see how a signed driver is being weaponised to blind EDR before credential theft, and
  which user-facing lure is delivering it.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

A new write-up from Ontinue links the Psychedelic Stealer malware to a wider operation called Lunex, distributed through compromised Ukrainian websites that present fake Cloudflare-style CAPTCHA pages. The four-stage chain targets Ukrainian-speaking users and culminates in credential theft from browsers.

The final payload abuses a legitimately signed AMD driver, using its kernel access to disable endpoint security monitoring before harvesting stored browser passwords. That makes detection harder because the killing action is performed by a trusted vendor binary.

Defenders should look for unsigned or scripted processes loading the AMD driver for unexpected purposes, and treat any browser credential store read following such activity as high confidence compromise. The ClickFix-style lure means user interaction is required, so awareness training around fake verification prompts remains relevant.
