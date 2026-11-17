---
id: eaeb964b49
title: Unit 42 details HTTP/3 RATs used against Southeast Asian governments since July 2025
original_title: "QUIC and Covert: Novel HTTP/3-Powered RATs Target Southeast Asian Governments"
url: https://unit42.paloaltonetworks.com/custom-rats-target-southeast-asia-governments/
source: Unit 42
kind: research
section: threat-research
date: "2026-11-17"
published_at: "2026-11-16T23:00:55.000Z"
authors:
  - Tom Fakterman
comments: null
tags:
  - espionage
  - quic
  - http3
  - rat
  - kukurat
  - exchange
  - research
why_read: >-
  The full report covers the six PerfectPioneer variants, KUKURAT's modular design and its
  camouflage engine, plus the campaign's infection chain and exfiltration methods.
rank: 10
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Unit 42 reports a cyberespionage campaign it tracks as TGR-STA-0049 (also REF7707, Earth Alux, Ink Dragon), active against Southeast Asian government bodies since at least July 2025. The actor deployed two previously undocumented RATs. PerfectPioneer was seen in July 2025. Its modular successor, KUKURAT, appeared in March 2026. Unit 42 found six PerfectPioneer variants.

Three features stand out. PerfectPioneer uses HTTP/3 over QUIC for command and control, which Unit 42 says may bypass deep packet inspection tuned for TCP. It also has an isDangerousCommand check that stops operators running noisy or destructive commands. KUKURAT generates synthetic network, registry and file activity to bury indicators of compromise.

Server exploitation is the main infection route. The actor targets unpatched Microsoft Exchange and web servers to drop web shells, including ASPXSpy, Godzilla, Bysunue.aspx and Suo5. Phishing with decoy PDFs and lookalike domains is a secondary route. The group has been active since at least March 2023, with earlier use of the Squidoor backdoor.
