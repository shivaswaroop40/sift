---
id: ee15af1e3c
title: Dangling COM object registration enables privilege escalation in Windows
original_title: "Windows Exploitation Techniques: Dangling COM Object Registrations"
url: https://projectzero.google/2026/09/windows-dangling-com.html
source: Project Zero
kind: research
section: vulnerabilities
date: "2026-10-01"
published_at: "2026-09-20T22:00:00.000Z"
authors:
  - James Forshaw
comments: null
tags:
  - windows
  - com
  - privilege-escalation
  - cve-2026-66804
  - marshaling
  - dll-injection
  - research
why_read: >-
  Learn a concrete privilege escalation chain combining dangling COM registration, writable system
  paths, and custom marshaling bypass.
rank: 5
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Microsoft fixed CVE-2026-66804, an incomplete remedy for CVE-2026-50343. The CrossDevice COM object was registered system-wide but pointed to a non-existent DLL in C:\ProgramData, a world-writable location. An attacker can place a malicious DLL there and trigger its loading into a privileged process.

The attack matters because COM marshaling can force arbitrary DLL loading across privilege boundaries. Custom OBJREF structures allow specifying which DLL to load during unmarshaling. Most privileged services block this via EOAC_NO_CUSTOM_MARSHAL or COMGLB_UNMARSHALING_POLICY_STRONG, but not all do.

The Shell Create Object Handler runs as SYSTEM and lacks these mitigations. It can be invoked via a scheduled task accessible to normal users, then sent a malicious marshaled COM object. The DLL loads with SYSTEM privileges, granting full compromise.
