---
id: 753fc57979
title: Attacker injects malicious JavaScript into 178 sites through Optimizely's experimentation platform
original_title: Malware spread through Optimizely hits 178 organizations, including BBC, CNN and Zoom
url: https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/
source: Help Net Security
kind: news
section: cloud-and-supply-chain
date: "2026-11-17"
published_at: "2026-11-17T11:53:40.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - supply-chain
  - optimizely
  - javascript
  - magecart
  - content-security-policy
  - ios
  - news
why_read: >-
  The original gives Helme's measurements of CSP coverage, the timeline of the payload's growth, and
  the caveats on the iOS stages and related services.
rank: 5
interest_score: 7.7
depth_score: 6
novelty_score: 9
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

On 16 November 2026, an attacker exploited a vulnerability in Optimizely's Experimentation product and added malicious JavaScript to the "Project JavaScript" field of customer projects. Researcher Scott Helme of Report URI found 178 affected organisations, including Zoom, the BBC, CNN, Salesforce, GitLab, HSBC and Equifax. Optimizely says it has fixed the flaw and removed the injected code.

The payload was a multi-purpose kit. It swapped crypto wallet addresses, skimmed card details from a site's own payment forms, and stole cookies and screenshots. On iOS 18.6 or older it delivered the Coruna and DarkSword exploit kits. Helme saw the payload rebuilt 26 times in one day. The wallets received about $7,150 before being emptied.

The code ran from Optimizely's own CDN, so browsers treated it as trusted. Allowlisting that domain in a Content Security Policy gave no protection. Of the affected sites, only 24 (15%) had a policy strict enough to block the attack, and 68 had none. Optimizely's documented eval setting let a backup copy run on HSBC's site.

Hudson Rock and researcher Kirk traced similar poisoned scripts to Kissmetrics, StorifyMe and minute-ly, from 13 November. They say this does not prove one operator or one entry method. Later iOS stages that steal keychain data and seed phrases have not been independently reproduced, and no real victim compromise has been shown.
