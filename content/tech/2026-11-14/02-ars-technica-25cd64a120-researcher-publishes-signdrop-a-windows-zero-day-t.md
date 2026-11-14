---
id: 25cd64a120
title: Researcher publishes SignDrop, a Windows zero-day that gives local users System rights
original_title: Windows 0-day dropped by disgruntled researcher hands hackers System rights
url: >-
  https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/
source: Ars Technica
kind: news
section: security
date: "2026-11-14"
published_at: "2026-11-13T16:26:32.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/#comments
tags:
  - windows
  - zero-day
  - privilege-escalation
  - clfs
  - windows-defender
  - edr
  - news
why_read: >-
  The original has the exact registry check and the exploit chain, which let you judge quickly
  whether your Windows 26H2 fleet is exposed.
rank: 2
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A researcher using the name Nightmare Eclipse disclosed SignDrop on Tuesday. It is a local privilege escalation flaw in the Common Log File System. An ordinary user forces a privileged process such as Windows Defender to open a crafted CLFS container, using Object Manager symbolic links and the Defender function ServerMpUpdateEngineSignature.

If an authentication file is missing, CLFS creates it with Defender's System privileges. It gives the new file the access control list of the original file, so the attacker can reach a System-created file. The flaw comes from a CLFS mitigation Microsoft added in October 2025. The researcher says the same trick could switch off any antivirus or EDR, since file creation appears to come from the product's own process.

The exploit is not universal. Will Dormann reproduced it but said it appears to need Windows 26H2 that has existed for more than 90 days. The CLFS authentication mode registry value must be 0 or 1. Only one of his many machines met that condition. Nightmare Eclipse lists Windows 11 26H2 and Windows Server 2025 Experimental builds as affected.

Microsoft said it was investigating, had no evidence of exploitation in the wild, and that Defender blocks potential exploitation attempts. The claim about defeating any EDR comes from the researcher and was not independently tested in this report.
