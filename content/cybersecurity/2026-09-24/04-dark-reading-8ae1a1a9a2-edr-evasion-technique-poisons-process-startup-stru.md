---
id: 8ae1a1a9a2
title: EDR evasion technique poisons process startup structures to skip API hooks
original_title: EDR Evasion Stack Helps Process Injection Slip Past Defenses
url: >-
  https://www.darkreading.com/endpoint-security/edr-evasion-stack-helps-process-injection-slip-past-defenses
source: Dark Reading
kind: news
section: threat-research
date: "2026-09-24"
published_at: "2026-09-23T21:03:01.000Z"
authors:
  - Alexander Culafi
comments: null
tags:
  - edr-evasion
  - process-injection
  - windows
  - endpoint-security
  - threat-research
  - news
why_read: >-
  You will see how the technique sidesteps the API-call telemetry that most endpoint defences depend
  on.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Researchers describe a process parameter-poisoning method that injects code into process initialisation structures on Windows, without touching the APIs that EDR tools monitor. The approach writes malicious values into structures used before a process starts, so the hostile code runs as part of legitimate startup.

It matters because most EDR products rely on watching calls to a known set of Windows APIs such as CreateProcess and VirtualAlloc. If an attacker can influence what code runs during process bring-up without those calls, the activity falls outside the visibility of those hooks.

The write-up details which structures are abused and notes the technique can be chained with other injection methods. It does not name a specific EDR vendor or provide full working code, so the practical weaponisation is limited.
