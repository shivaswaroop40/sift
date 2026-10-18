---
id: 4f421408f8
title: Malicious npm package imgdecode conceals shellcode loader in Windows native addon
original_title: MALFEX npm Package 'imgdecode' Hides Shellcode Loader in Windows Native Addon
url: https://thehackernews.com/2026/10/malfex-npm-package-imgdecode-hides.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-10-18"
published_at: "2026-10-17T11:11:56.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - npm
  - supply-chain
  - shellcode
  - native-addon
  - malfex
  - news
why_read: Learn how this attack conceals executable payloads in npm native modules.
rank: 1
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A malicious npm package named imgdecode was uploaded to npm on 30 September 2026 by user malfexteste8. The package hides a shellcode loader within a Windows native addon. It had been downloaded 979 times at the time of discovery and remained available on the registry.

The package is part of MALFEX, a supply chain attack campaign. For platform engineers, this demonstrates how native addons in Node.js packages can bypass typical code review by obfuscating malicious code in compiled binaries rather than readable JavaScript.
