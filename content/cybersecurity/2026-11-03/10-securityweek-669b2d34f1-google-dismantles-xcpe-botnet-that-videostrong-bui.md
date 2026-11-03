---
id: 669b2d34f1
title: Google dismantles XCPE botnet that Videostrong built into 1.3 million Android devices
original_title: Google Dismantles XCPE Botnet of 1.3 Million Android Devices
url: https://www.securityweek.com/google-dismantles-xcpe-botnet-of-1-3-million-android-devices/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-11-03"
published_at: "2026-11-03T09:22:09.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - botnet
  - android
  - supply-chain
  - malware
  - iot
  - ad-fraud
  - news
why_read: >-
  The original details the three-stage malware architecture, how Videostrong evaded Google's OEM
  security tests, and the takedown's impact on the wider illicit module market.
rank: 10
interest_score: 6.3
depth_score: 6
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

Google has dismantled XCPE, a backdoor and botnet of more than 1.3 million Android set-top boxes. The malware was built and operated by Videostrong Technology, a China-based OEM and ODM of Android devices. Videostrong sold access to affiliates, who abused infected devices for ad fraud, data exfiltration, residential proxying, and loading further malware. Google took legal action against the botnet's domains and servers, and the command-and-control domains behind the extra modules.

The backdoor was installed at the factory, not through later compromise. It persisted on the /oem/ partition as the first stage of a three-stage architecture, alongside a loader with an execution engine and monetisation modules. Videostrong used obfuscation to exploit a gap in Google's compatibility and security tests, loading malicious code only after a device's first boot. For defenders, Android TV boxes and similar IoT devices on the estate can be hostile from first boot, acting as proxies or exfiltrating data.

Google believes the botnet was a deliberate Videostrong operation, not the work of a rogue insider or a development oversight, and banned the firm from shipping devices with preloaded Google apps. The takedown likely severed access to at least 10 million other devices, because the module operators had diversified their distribution beyond XCPE. Beyond set-top boxes, infected hardware included telehealth devices, karaoke machines, and digital signage. Google warns the illicit market is resilient, with operators pivoting quickly to new loaders or rival monetisation SDKs when disrupted.
