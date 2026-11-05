---
id: 5b20bec9c6
title: Storm-2603 ran a fileless webshell inside SharePoint's IIS worker process
original_title: "The SOC Files 5: Ghost in the pipeline, or a fileless SharePoint breach by Storm-2603"
url: https://securelist.com/storm-2603-fileless-toolshell-attack/121467/
source: Securelist
kind: research
section: incidents
date: "2026-11-05"
published_at: "2026-11-05T10:00:11.000Z"
authors:
  - Alexander Rodchenko
  - Rodrigo Wanderson
comments: https://securelist.com/storm-2603-fileless-toolshell-attack/121467/#respond
tags:
  - sharepoint
  - storm-2603
  - cve-2025-53770
  - fileless-attack
  - webshell
  - ransomware
  - research
why_read: >-
  The full report gives the intrusion timeline, a module-by-module breakdown of the webshell,
  detection guidance for ToolPane deserialization and CLR artifacts, and indicators of compromise.
rank: 1
interest_score: 8
depth_score: 9
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

Microsoft attributes ransomware-related exploitation of the SharePoint ToolShell flaws to Storm-2603, separate from other actors focused on credential theft and espionage. Securelist's retrospective analysis of a December intrusion found activity consistent with that group. The attacker exploited CVE-2025-53770 on an on-premises SharePoint host and kept the entire access and control layer inside the IIS worker process, w3wp.exe, with nothing written to disk. The implant persisted for the lifetime of the application domain and disappeared when the application pool recycled or IIS restarted.

The timeline shows strategic latency. A single fingerprinting request hit a SharePoint administrative endpoint tied to the ToolPane component on 20 December. Three days of silence followed, separating the probe from later activity and reducing the chance of immediate detection. The full remote code execution chain ran on Christmas Eve, when security staffing at many companies is reduced. Discovery came on 26 December, and the gap had left the probe triaged as low priority.

The webshell itself is a modular C# framework, orchestrated through a main component named G.cs, with each capability isolated in its own compilation unit. Detection therefore has to target the ASP.NET runtime rather than files. The report's detection sections cover ToolPane deserialization, CLR artifacts, and the VPP-based runtime implant. It also documents EDR-killing attempts and a ransomware deployment attempt during post-exploitation.

The 20 December fingerprinting request came from ONYPHE, a platform that actively tests for specific CVEs by injecting a harmless marker, unlike Shodan or Censys. Twelve minutes later a connection arrived from Pfcloud UG, a bulletproof hosting provider, with no exploitation attempted. The Christmas Eve attack came from 45.91.94.204, a node on the Safing Privacy Network, which often bypasses standard Tor blocklists.
