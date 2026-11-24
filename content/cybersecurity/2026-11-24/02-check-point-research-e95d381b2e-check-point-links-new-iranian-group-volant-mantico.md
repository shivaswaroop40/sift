---
id: e95d381b2e
title: Check Point links new Iranian group Volant Manticore to MOIS, with Cyprus as primary target
original_title: "Volant Manticore: Flying Under the Radar"
url: https://research.checkpoint.com/2026/volant-manticore-flying-under-the-radar/
source: Check Point Research
kind: research
section: threat-research
date: "2026-11-24"
published_at: "2026-11-24T14:13:55.000Z"
authors:
  - matthewsu@checkpoint.com
comments: null
tags:
  - volant-manticore
  - muddywater
  - iran
  - kuboshell
  - ipfs
  - espionage
  - research
why_read: >-
  The full report has the KuboShell and Homa Framework analysis, infrastructure mapping and
  attribution evidence, which are useful for building detections around IPFS and Pinata traffic and
  RMM abuse.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 9
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Check Point Research describes Volant Manticore, a previously undocumented Iran-nexus group linked to the Ministry of Intelligence and Security. It targets telecoms, airlines and critical infrastructure in Cyprus. Activity traced back to September 2025. The July 2026 discovery began with a fake CV sent to a Cyprus-based airline.

The group uses KuboShell, a 64-bit Windows backdoor that runs C2 over IPFS through the Pinata pinning service. It uses the MAC address as a victim ID, fetches a command file named after it, and runs the contents in hidden PowerShell. It then deploys the Homa Framework, built on a reimplementation of MuddyWater's MuddyC2Go client. It also delivers RMM tools and harvests credentials.

From September 2026 the group turned to Saudi healthcare, using lures such as AI_Healthcare_Seminar.zip. A related archive carried an N-able RMM executable instead of KuboShell. The sending email account belonged to a private Saudi hospital and was likely compromised with leaked credentials. Check Point ties the shift to Saudi-Houthi tensions.

Attribution is an assessment. Check Point finds multiple MuddyWater links and thinks the group is likely made up of former MuddyWater operators. The source text is truncated, so details of the Homa Framework and the wider infrastructure are not covered here.
