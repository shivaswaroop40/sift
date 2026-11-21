---
id: 1c816faefc
title: Com-affiliated vishing crews steal data from Microsoft 365 and extort staff via Teams
original_title: "Dialing for Data: Inside the Com’s High-Profile Heists"
url: https://unit42.paloaltonetworks.com/com-affiliate-vishing-attacks/
source: Unit 42
kind: research
section: threat-research
date: "2026-11-21"
published_at: "2026-11-20T22:00:25.000Z"
authors:
  - Unit 42
comments: null
tags:
  - vishing
  - extortion
  - bling-libra
  - social-engineering
  - microsoft-365
  - browser-extension
  - research
why_read: >-
  The article gives cluster-by-cluster tradecraft, including user agents, the reused MFA device name
  and the extension's sideloading method, which can be turned into detections.
rank: 5
interest_score: 7
depth_score: 7
novelty_score: 6
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Unit 42 reports repeated waves of vishing attacks by Com-affiliated actors since August 2026, including Bling Libra (ShinyHunters) and several tracked clusters. Targets are data-rich firms in financial services, healthcare and legal services, mostly in the US, UK and Australia. Two new clusters appeared in September: CL-CRI-1264 (Vortex) and CL-CRI-1274 (Cinder).

Attackers pose as internal IT support. In the Vortex cluster, victims are sent to per-organisation subdomains that act as adversary-in-the-middle proxies, relaying credentials and MFA approvals live. The attackers enrol their own MFA device within minutes, in several cases reusing a device named Pixel 10a. Python scripts using python-httpx then pull data from Microsoft 365 mailboxes, OneDrive and SharePoint.

Cinder avoided new Duo MFA prompts by replaying a persistent 'keep me signed in' session token from proxy infrastructure. It collected data with python-requests and the Microsoft Graph SDK, then sent extortion messages from a compromised internal account. Both clusters point victims to a Tor-hosted negotiation site, and Vortex also messaged employees directly in Teams.

A separate investigation into CL-CRI-1192 (Helix, tracked by Google as UNC6671) found a malicious extension named Google Chrome. It was sideloaded in Developer Mode from oskeysetup[.]com, not the Chrome Web Store. It installs keyloggers and steals storage data and cookies. The source text is truncated after that point.
