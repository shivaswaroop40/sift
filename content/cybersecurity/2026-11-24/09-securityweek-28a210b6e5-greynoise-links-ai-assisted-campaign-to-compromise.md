---
id: 28a210b6e5
title: GreyNoise links AI-assisted campaign to compromise of Check Point management servers
original_title: Check Point Security Management Servers Hacked in AI-Assisted Campaign
url: >-
  https://www.securityweek.com/check-point-security-management-servers-hacked-in-ai-assisted-campaign/
source: SecurityWeek
kind: news
section: incidents
date: "2026-11-24"
published_at: "2026-11-24T14:21:56.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - check-point
  - greynoise
  - ai-assisted-attacks
  - management-servers
  - lateral-movement
  - threat-actor
  - news
why_read: >-
  The original gives GreyNoise's activity counts, the CVE list tried in one victim environment, and
  the relay and exfiltration details behind the campaign.
rank: 9
interest_score: 7.3
depth_score: 5
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

GreyNoise says a threat actor it tracks as GT13 has been attacking Check Point Security Management servers since early October. The actor used 99 IP addresses, either ExpressVPN egress points or compromised Check Point devices. At least 22 organisations were targeted across energy, finance, government, manufacturing, mining, transport and other sectors in many countries.

GreyNoise believes GT13 uses agentic harnesses to weaponise vulnerabilities, find vulnerable assets and exploit them automatically, with hands-on-keyboard work alongside. In one case, the actor forged a signed admin session cookie to reach an HFS server on October 2, then gained SSH access, scanned the network and exfiltrated data. Tools included Nmap, Chisel, Impacket and Paramiko.

The actor already held access to the Check Point servers before the HFS compromise. GreyNoise could not determine when or how that access began. One victim's server served as a relay holding data taken from 24 compromised Check Point management servers. A bulk certificate-management task sent to 24 servers failed, but the responses were still collected.

GreyNoise confirmed activity between October 17 and November 2 and believes the campaign continues because GT13 kept persistent access. The AI-assisted claim rests on GreyNoise's inference from timeline oddities. The firm says it suspects them, rather than proving it. The listed CVEs were used or attempted in one victim's environment.
