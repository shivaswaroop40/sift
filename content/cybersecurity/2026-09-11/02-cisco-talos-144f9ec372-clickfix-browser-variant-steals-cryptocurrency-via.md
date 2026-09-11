---
id: 144f9ec372
title: ClickFix browser variant steals cryptocurrency via Google Sheets C2
original_title: "ClickFix moves into the browser: Cryptocurrency theft with Google-hosted C2"
url: https://blog.talosintelligence.com/clickfix-moves-into-the-browser/
source: Cisco Talos
kind: research
section: threat-research
date: "2026-09-11"
published_at: "2026-09-08T10:00:38.000Z"
authors:
  - Sean Gallagher
comments: null
tags:
  - clickfix
  - browser-injection
  - google-visualization-api
  - c2
  - cryptocurrency-theft
  - tampermonkey
  - research
why_read: >-
  Read this to understand how ClickFix is moving into the browser and how Google-hosted C2 evades
  detection.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 9
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Talos is tracking a monthslong campaign that abuses the Google Visualization API for command and control. Victims are lured by a fake leaked vulnerability report about a nonexistent API flaw at cryptocurrency swap services. They are convinced to paste JavaScript into Chrome's address bar or install it in the Tampermonkey extension, which gives persistence.

The injected script acts as a web skimmer. It hooks the browser's fetch API, replaces cryptocurrency deposit addresses in server responses and the clipboard, and displays counterfeit bonus elements. The actors retrieve obfuscated JavaScript from a publicly published Google Sheets document and inject it into the victim's browser session.

The campaign has run since early October 2025 and moved to Google-hosted components in March 2026 after disruption. It mainly targets individuals on crypto trading, development and hacking forums, so it is not a direct threat to most organisations. The techniques could be reused in supply-chain attacks on e-commerce sites.

Because the malicious requests come from inside a browser session, detection via DNS and process inspection is harder. The Visualization API is read-only, but the actors can change the query to retrieve different cells or switch spreadsheets, and a Google Forms endpoint can be used to write data back, creating a full C2 channel.
