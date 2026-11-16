---
id: 90952acad7
title: Attackers used outdated GeoVision camera software to install cryptominers at 13 organizations
original_title: Unpatched GeoVision camera software gave cryptojackers a side door into 13 organizations
url: https://www.helpnetsecurity.com/2026/11/16/geovision-camera-software-vulnerabilities/
source: Help Net Security
kind: news
section: incidents
date: "2026-11-16"
published_at: "2026-11-16T10:07:57.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - geovision
  - cryptojacking
  - huntress
  - byovd
  - ifeo
  - xmrig
  - news
why_read: >-
  The original gives the Huntress detection advice, the IFEO and BYOVD details, and the affected
  GV-VMS version, useful for checking whether your own camera management hosts are exposed.
rank: 7
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Huntress reports that attackers broke into Windows machines at 13 organizations through GeoVision camera management software and installed the XMRig cryptominer. Most intrusions took place between November 8 and 10. Each began with a GeoVision service, and the victims' external IPs showed exposed GeoVision devices and management interfaces on Shodan.

After gaining access, the attackers checked whether Microsoft Defender was running. They loaded a kernel driver previously abused in BYOVD attacks and set three IFEO Debugger hijacks that redirected Windows security processes to systray.exe. A custom loader, run every 15 minutes and at boot on some hosts, then fetched XMRig.

Sampled hosts ran GV-VMS 17.4.8.0, built in April 2024 and older than the fixed release, V17.4.8.58. GeoVision's April 2026 advisory lists three unauthenticated remote-code-execution flaws in WebCam Server affecting that version. Huntress calls a known flaw the most likely cause but has not confirmed which CVE was used.

The loader uses a BitTorrent Mainline DHT client and a PKARR resolver to find current server addresses, so the operator can move infrastructure. Huntress calls it botnet-like and says it could deliver other payloads. It has seen no evidence of access being sold or used beyond mining.
