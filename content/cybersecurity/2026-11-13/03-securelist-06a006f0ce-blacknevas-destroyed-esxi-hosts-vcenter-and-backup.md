---
id: 06a006f0ce
title: BlackNevas destroyed ESXi hosts, vCenter and backups using only legitimate VMware management tools
original_title: >-
  Ransomware at the hypervisor layer: how attackers use ESXi and vCenter features for malicious
  purposes
url: https://securelist.com/esxi-ransomware/121959/
source: Securelist
kind: research
section: threat-research
date: "2026-11-13"
published_at: "2026-11-13T09:00:43.000Z"
authors:
  - Elsayed Elrefaei
  - Mohamed Ghobashy
comments: https://securelist.com/esxi-ransomware/121959/#respond
tags:
  - esxi
  - vcenter
  - ransomware
  - blacknevas
  - hypervisor
  - incident-response
  - research
why_read: >-
  The full report offers detection correlation logic, an incident response checklist, hardening
  advice for vCenter and backups, and indicators of compromise from the BlackNevas case.
rank: 3
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Kaspersky's GERT investigated a 10-day intrusion in which the BlackNevas group destroyed four ESXi hosts, every virtual machine on them, both vCenter Server Appliances and all connected backup infrastructure. No virtualization vulnerabilities were exploited. There were no guest-to-host escapes or hypervisor memory corruption. Every action against ESXi went through legitimate VMware management interfaces.

The ESXi lockers derive from the Babuk source code leaked in September 2021, which at least ten ransomware families have since used. The victim ran unsupported ESXi versions, which made the attack easier. Kaspersky reports ransomware made up 39.4% of GERT incidents in 2025.

Visibility is the core problem. Broadcom does not support third-party agents or antivirus on ESXi or VCSA. A guest EDR agent cannot see an ESXi process modifying a VMDK, and records only the consequences, such as I/O failures. In this case host-native and management-plane telemetry drove the timeline reconstruction.

The report names four routes to the virtualization layer: vulnerability exploitation, credential reuse from the Windows estate, Active Directory integration abuse, and backup infrastructure as a credential bridge. The initial access path here was not an ESXi vulnerability. The source text is truncated, so the detection logic and indicators are not covered.
