---
id: ddf0f73c6a
title: EDR systems miss browser-based attacks that steal data without malware
original_title: "The EDR blind spot: 3 ways browser attacks evade endpoint telemetry"
url: >-
  https://www.bleepingcomputer.com/news/security/the-edr-blind-spot-3-ways-browser-attacks-evade-endpoint-telemetry/
source: BleepingComputer
kind: news
section: defence
date: "2026-10-03"
published_at: "2026-10-02T14:00:10.000Z"
authors:
  - Sponsored by NordLayer Browser
comments: null
tags:
  - edr
  - browser-security
  - saas
  - phishing
  - oauth
  - malicious-extensions
  - news
why_read: >-
  Learn the specific browser attack mechanisms that your EDR cannot see and which controls will
  close the gap.
rank: 5
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

EDR tools are designed to detect malicious processes and host-level execution, but attackers increasingly compromise corporate data through browser sessions and SaaS applications without triggering endpoint alerts. In the 2025 Salesloft incident, attackers used stolen OAuth tokens to make API calls against Salesforce without creating any executable that EDR could flag.

Browser activity matters because 79% of corporate tools are now accessed only through the browser. Phishing attacks that capture session cookies, malicious browser extensions that read page content, and attacks that manipulate web sessions all operate within the browser layer where traditional endpoint detection has limited visibility.

Three attack patterns evade endpoint telemetry: adversary-in-the-middle phishing that proxies authentication flows in real time, compromised extensions that use standard browser APIs to exfiltrate data without suspicious processes, and attacks that complete within the web session such as clipboard manipulation or unauthorised file uploads.
