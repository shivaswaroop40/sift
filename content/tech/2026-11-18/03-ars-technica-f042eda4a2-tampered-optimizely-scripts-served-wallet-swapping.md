---
id: f042eda4a2
title: Tampered Optimizely scripts served wallet-swapping and iOS exploit code on 178 sites
original_title: Hundreds of websites deliver potent malware cocktail to unsuspecting visitors
url: >-
  https://arstechnica.com/security/2026/11/malicious-code-delivered-through-optimizely-hits-visitors-to-hundreds-of-sites/
source: Ars Technica
kind: news
section: security
date: "2026-11-18"
published_at: "2026-11-17T22:32:16.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/11/malicious-code-delivered-through-optimizely-hits-visitors-to-hundreds-of-sites/#comments
tags:
  - supply-chain
  - optimizely
  - javascript
  - malware
  - ios
  - web-security
  - news
why_read: >-
  The original lists the payload behaviour, the exploit kit domains and the iOS version coverage,
  and points to indicators of compromise that site administrators can check against their own pages.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

ReportURI found 178 websites, including CNN, Zoom, the BBC and Salesforce, serving modified JavaScript from cdn.optimizely.com. The files were named track.js and carried a valid certificate for Optimizely's domain. They bundled four components: crypto wallet address swapping, card skimming, cookie and screenshot theft, and delivery of the Coruna and DarkSword iOS exploit kits.

The delivery was not CDN cache poisoning. Researcher Scott Helme says the attackers used Optimizely's legitimate infrastructure to serve code written into each affected customer's snippet. Optimizely's own pages were also hit. How the attacker gained write access to so many unrelated customer projects is unknown. Optimizely did not respond to questions.

This is a supply chain problem that a valid certificate and a trusted domain do not catch. Any third-party script running on every page has full access to that page. Hosted payment iframes from Stripe and Adyen were not affected, which shows the value of isolating card entry from first-party page scripts.

Key gaps remain. There is no data on how often the exploit chains succeeded, and the list of 178 sites may not be complete. Coruna targets iOS 13 to 17 and DarkSword targets 18.x. A chain for iOS 26 only fingerprints devices. Funds have reportedly been stolen from some victims.
