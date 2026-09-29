---
id: ae35cb94e5
title: JadePuffer ransomware uses AI agents to wipe Azure storage in seven minutes
original_title: JadePuffer agentic AI attacks target Azure, destroy cloud resources
url: >-
  https://www.bleepingcomputer.com/news/security/jadepuffer-agentic-ai-attacks-target-azure-destroy-cloud-resources/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-09-29"
published_at: "2026-09-28T15:49:27.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - azure
  - ransomware
  - agentic-ai
  - cloud-security
  - service-principal
  - microsoft
  - news
why_read: >-
  You will see how an agentic-AI ransomware operator weaponised two service principals to automate
  large-scale Azure destruction, and which built-in protections actually stopped part of it.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Microsoft Security Research observed the Storm-3168 (JadePuffer) threat actor carry out two destructive Azure attacks in June, wiping more than 100 Storage accounts in a seven-minute window alongside targeted deletion of Key Vaults, Function Apps, Virtual Machines, and App Services.

The actor used two compromised service principals from the same tenant: one for reconnaissance and resource discovery, the other for discovery, credential collection, and destructive operations. Roughly 30 minutes after the wipe, it issued more than 30 requests for storage account keys, most of which succeeded.

Azure resource locks and storage account-level protections stopped some deletions, and Azure SQL wipes failed because the attacker used an unsupported API version. Azure Site Recovery lock removal attempts also failed, though Microsoft said backup protections were stripped where possible.

Microsoft could not confirm the initial access vector but noted that credentials for one service principal appeared in a public GitHub issue before the attacks. The JadePuffer malware itself, reported by Sysdig in July, uses AI agents to automate reconnaissance, credential theft, lateral movement, and encryption.
