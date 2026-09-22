---
id: ee15af1e3c
title: Dangling COM registration in Windows gave SYSTEM code execution via custom marshaling
original_title: "Windows Exploitation Techniques: Dangling COM Object Registrations"
url: https://projectzero.google/2026/09/windows-dangling-com.html
source: Project Zero
kind: research
section: vulnerabilities
date: "2026-09-22"
published_at: "2026-09-21T07:00:00.000Z"
authors:
  - James Forshaw
comments: null
tags:
  - windows
  - privilege-escalation
  - com
  - cve-2026-66804
  - project-zero
  - research
why_read: >-
  You’ll get a concrete walkthrough of how a missing DLL plus a writable ProgramData path lets any
  user run code as SYSTEM, and the COM unmarshaling trick that bypassed the previous fix.
rank: 2
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

CVE-2026-66804 is a privilege escalation in Windows caused by a dangling COM registration for the CrossDevice class with CLSID {E9F83CF2-E0C0-4CA7-AF01-E90C70BEF496}. The CLSID pointed to %PROGRAMDATA%\CrossDevice\CrossDevice.Streaming.Source.dll, a DLL that did not exist on disk. Because ProgramData is writable by any user, an attacker could place an arbitrary DLL at that path.

The author bypassed Microsoft’s earlier fix for CVE-2026-50343 by abusing custom COM marshaling. A FakeMarshal implementation returns the dangling CLSID from GetUnmarshalClass, so when a privileged service unmarshals the OBJREF the attacker’s DLL is loaded in that process. Two mitigations can block this: the EOAC_NO_CUSTOM_MARSHAL capability flag set at CoInitializeSecurity and the COMGLB_UNMARSHALING_POLICY_STRONG value set through IGlobalOptions, both stored in combase.

Exploitation also required finding a privileged COM server that does not enable those mitigations. The Shell Create Object Handler object fits: it runs as NT AUTHORITY\SYSTEM but is not directly instantiable. The \Microsoft\Windows\Shell\CreateObjectTask scheduled task, which any user can start, launches the service. The attacker must additionally signal the global ShellCreateObjectTaskReadyEvent or the task exits without exporting the COM server. CVE-2026-66804 was reported by 15 researchers and fixed by Microsoft.
