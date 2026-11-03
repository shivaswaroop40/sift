---
id: a469328329
title: Gorbag APT hits Ukrainian courts and councils with self-deleting credential stealer
original_title: Gorbag APT group hits Ukrainian courts and city councils with self-deleting malware
url: https://www.helpnetsecurity.com/2026/11/03/gorbag-apt-group-malware/
source: Help Net Security
kind: news
section: threat-research
date: "2026-11-03"
published_at: "2026-11-03T10:00:14.000Z"
authors:
  - Anamarija Pogorelec
comments: null
tags:
  - gorbag
  - apt
  - stealer
  - spearphishing
  - ukraine
  - cve-2025-8088
  - news
why_read: >-
  The original details both phishing chains, BeautyStealer's collection scope and ESET's assessment
  of Gorbag as a possible access broker.
rank: 8
interest_score: 6.3
depth_score: 7
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

ESET has tracked a Russia-aligned group it calls Gorbag breaking into Ukrainian organisations since at least February 2025 through spearphishing attachments. About a quarter of targets are law enforcement and justice bodies, another quarter are city councils near the front line, and the rest are defence entities plus one documented hub for foreign military aid. The group's stealer gathers browser credentials, VPN configurations and selected documents in a single pass, then removes itself.

The toolset is built for rapid collection rather than long-term access. ESET researcher Damien Schaeffer suggests Gorbag may operate as an initial access broker, passing stolen credentials to other actors for follow-on activity. Nearly every city whose council was targeted suffered Russian air strikes during the campaign window, raising the possibility the operators give military leadership a read on how well those strikes landed.

The delivery chain evolved. Through 2025 the lure was a macro-enabled Excel file whose VBA decoded a base64 payload from spreadsheet cells, dropped it into %ProgramData% and ran it. One message came from a compromised Uzhhorod regional government account. In early 2026 Gorbag switched to RAR archives exploiting CVE-2025-8088, a WinRAR path traversal flaw. The archive shows a decoy PDF while writing an LNK file into the Windows Startup folder that fires a PowerShell loader at every restart.

The main tool, BeautyStealer, is a C++ stealer spanning versions 0.9 to 2.0. It pulls cookies, saved passwords and local state from Chrome, Edge, Opera and Firefox, OpenVPN configurations, and files matching around 40 extensions from Desktop, Documents, Downloads, removable media and mapped drives. The list favours authenticators, including .kdbx, .jks, .rdp, .pfx and .zs2, Ukraine's e-signature key format. An earlier tool, a PowerShell reverse shell from GitHub, has one variant with a comment telling LLMs it is not malicious. ESET tested two AI assistants and both flagged it.
