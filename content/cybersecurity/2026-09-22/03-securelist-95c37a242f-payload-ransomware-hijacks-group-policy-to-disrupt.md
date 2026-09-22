---
id: 95c37a242f
title: PAYLOAD ransomware hijacks Group Policy to disrupt Windows estates without encrypting files
original_title: "Group Policy hijacked: PAYLOAD ransomware weaponizes Active Directory GPO"
url: https://securelist.com/tr/payload-ransomware-via-group-policy/121335/
source: Securelist
kind: research
section: incidents
date: "2026-09-22"
published_at: "2026-09-21T10:00:40.000Z"
authors:
  - Ahmad Zaidi Said
  - Elsayed Elrefaei
  - Kaspersky Security Services
comments: https://securelist.com/tr/payload-ransomware-via-group-policy/121335/#respond
tags:
  - active-directory
  - group-policy
  - ransomware
  - living-off-the-land
  - defence-evasion
  - incident-response
  - research
why_read: >-
  You will see how an attacker used a single malicious GPO to hijack every Windows host in a domain
  and what detections and hardening break that chain.
rank: 3
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Kaspersky’s GERT responded in April 2026 to a manufacturing firm in the Middle East where an attacker with domain admin-equivalent access authored a malicious Group Policy Object called PAYLOAD and linked it at the Active Directory domain root. The GPO pushed ransom notes, hijacked wallpaper and lock screens, set a logon banner, and disabled local administrator accounts on every domain-joined Windows workstation. No files were encrypted on Windows and no malware was left on disk. A separate PAYLOAD sample targeted ESXi on Linux, and data stolen from file servers was later published on the dark web.

The attack matters because Group Policy is a signed, SYSTEM-privileged distribution channel that most endpoint detection tools are designed to ignore. Delivering impact through GPO lets an adversary bypass the file- and process-based detection stack entirely, so defenders relying on catching a ransomware executable would see nothing until endpoints reboot and the ransom wallpaper appears.

Initial access was a valid domain credential used against a FortiGate SSL VPN on 11 April, with insufficient FortiGate logging to reconstruct the credential theft. Two days later the actor wrote payload.jpg and hello.txt to SYSVOL, linked the PAYLOAD GPO and a second GPO named win Firewall Off at the domain root, and exfiltrated data. Endpoints had not rebooted yet, so the GPO sat dormant until 14 April, when the wallpaper and banners detonated across the fleet.
