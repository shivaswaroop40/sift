---
id: 0792700f5e
title: Refrigeration hack across 700 French supermarkets exploited known, preventable vulnerabilities
original_title: Fridge hack costing millions and sparking fires stemmed from poor security
url: >-
  https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/
source: Ars Technica
kind: news
section: infrastructure
date: "2026-10-15"
published_at: "2026-10-14T21:35:09.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/#comments
tags:
  - iot-security
  - refrigeration
  - vulnerable-firmware
  - network-hygiene
  - supply-chain
  - news
why_read: >-
  Learn how basic network hygiene would have prevented a continent-wide attack costing hundreds of
  millions in food spoilage and damage.
rank: 11
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Internet-connected controllers from Danfoss, Dixell and Copeland at approximately 700 supermarkets across France were compromised this week. Attackers activated defrosters remotely, raising fridge temperatures to 50°C and spoiling food. Some electrical systems caught fire. The incident likely affected stores in Spain, Portugal, Poland, Germany and Belgium too.

These controllers contained critical vulnerabilities allowing remote admin access. Danfoss used daily passwords generated from public firmware based on the date, identical across thousands of devices. Copeland and Dixell models had similar remote access flaws, recently patched but not deployed to affected stores.

The stores failed basic protections: controllers were exposed to the public internet instead of behind VPNs, no IP allowlists restricted access, firmware was outdated, and default credentials were not changed. Pen Test Partners and Claroty had warned of these exact risks. The attack likely cost tens or hundreds of millions of euros.
