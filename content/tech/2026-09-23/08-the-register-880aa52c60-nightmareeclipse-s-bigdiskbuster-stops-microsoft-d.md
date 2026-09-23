---
id: 880aa52c60
title: NightmareEclipse's BigDiskBuster stops Microsoft Defender from updating itself
original_title: NightmareEclipse's latest zero-day leaves Microsoft Defender stuck in the past
url: >-
  https://www.theregister.com/security/2026/09/22/nightmareeclipses-latest-zero-day-leaves-microsoft-defender-stuck-in-the-past/5298320
source: The Register
kind: news
section: security
date: "2026-09-23"
published_at: "2026-09-22T16:36:00.000Z"
authors: []
comments: null
tags:
  - windows
  - defender
  - nightmareeclipse
  - zero-day
  - antivirus
  - microsoft
  - news
why_read: >-
  It explains the mechanism behind a new anti-updating PoC and the ongoing feud shaping how Windows
  zero-days are being released.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Security researcher NightmareEclipse, also known as Abdelhamid Naceri, has released a proof-of-concept called BigDiskBuster that prevents Microsoft Defender Antivirus from installing platform and security intelligence updates. The tool does not disable Defender itself. Instead, it waits for an update to start and then fills the drive with hidden temporary files so the update cannot complete, releasing the space once it has failed.

It also opens MRT.exe, the Malicious Software Removal Tool, with a restrictive handle that blocks other processes from accessing it. The upshot is that Defender keeps running but stays pinned to its current definitions. A screenshot shows Windows Security reporting error 0x80070643, which is a generic installation error and not on its own proof of the tool at work.

The researcher claims BigDiskBuster works on all supported Windows versions, though they admit the current PoC is buggy and that claim has not been independently verified. There is no indication it has been used in real attacks and Microsoft has not responded to questions.

The release is the latest in a series of public Windows exploits from NightmareEclipse since April, including RoguePlanet, LegacyHive, ShieldBreak and ShieldCrash, following a public dispute over Microsoft's vulnerability disclosure process. Microsoft has since said it has no intention to pursue legal action against researchers publishing findings, though the researcher's GitHub account and access to Microsoft's reporting portal were previously removed.
