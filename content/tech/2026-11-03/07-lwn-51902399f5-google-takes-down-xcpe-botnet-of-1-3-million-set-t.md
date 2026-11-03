---
id: 51902399f5
title: Google takes down XCPE botnet of 1.3 million set-top boxes, blames OEM Videostrong
original_title: Shutting the Door on the XCPE Botnet (Threat Intelligence)
url: https://lwn.net/Articles/1104847/
source: LWN
kind: news
section: security
date: "2026-11-03"
published_at: "2026-11-02T14:29:37.000Z"
authors:
  - corbet
comments: null
tags:
  - botnet
  - android
  - malware
  - supply-chain
  - ad-fraud
  - residential-proxies
  - news
why_read: >-
  The Google Threat Intelligence post gives the full technical detail on the XCPE backdoor, its
  monetisation, and the modules it loaded.
rank: 7
interest_score: 6.7
depth_score: 7
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

Google and industry partners have dismantled the XCPE backdoor, which had enrolled more than 1.3 million set-top boxes into a botnet. Google assesses with high confidence that the backdoor and botnet were intentionally built, deployed and run for financial gain by Videostrong Technology, an Android OEM and ODM. Videostrong sold access to criminal affiliates and loaded their malware modules onto infected devices, which ran ad fraud, silently enrolled devices into residential proxy networks, and loaded additional malware.

The compromise came from the device manufacturer itself, not from a later attack. Google says the campaign was not an isolated rogue insider or a development oversight, and has cut ties with Videostrong, banning it from making devices with preloaded Google apps. For anyone shipping Android hardware or treating residential IP traffic as trusted, this is a supply-chain failure at the source.

The LWN discussion suggests this may not be an isolated case. One commenter expects other bargain smart devices to carry similar backstories, and warns that devices relying on vendor updates could be repurposed after their parent company is bought. Another notes that some firms already sell devices that double as residential proxies, though how far buyers understand the deal is an open question.
