---
id: 72b57db3e2
title: Fake LastPass Authenticator GitHub repos push new Rapuncel infostealer
original_title: Fake LastPass Authenticator GitHub repos push new Rapuncel infostealer
url: >-
  https://www.bleepingcomputer.com/news/security/fake-lastpass-authenticator-github-repos-push-new-rapuncel-infostealer/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-09-19"
published_at: "2026-09-18T15:19:06.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - infostealer
  - github
  - seo-poisoning
  - kernel-driver
  - edr-bypass
  - lastpass
  - news
why_read: >-
  It details a working SEO-to-GitHub-to-kernel-driver attack chain that bypasses PPL and disables
  145 security products, with concrete indicators you can hunt for.
rank: 12
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

A malware campaign uses SEO-poisoned GitHub repositories impersonating LastPass Authenticator and 39 other products to deliver a previously undocumented infostealer called Rapuncel, uncovered by LastPass and Delphos Labs.

Victims reaching the fake repos are funnelled through redirects to payload servers that serve ZIP archives inflated to up to 148MB to dodge scanning. The installer is a renamed copy of the legitimate Microsoft vsdbg.exe, which sideloads a malicious DLL alongside the Rapuncel stealer and a Microsoft-signed kernel driver named Alinubx.sys that masquerades as an NVIDIA component and registers as the NvFsFilter service.

The driver holds a hardcoded list of 145 antivirus and EDR processes and kills them by opening handles from kernel mode, bypassing Protected Process Light. The driver is signed through Microsoft's Windows Hardware Compatibility Publisher chain and is not on Microsoft's vulnerable driver blocklist.

Rapuncel then harvests credentials from 25 browsers, 30 crypto wallets, Discord, Steam, Telegram and Windows Credential Manager, plus targeted documents and screenshots. It persists as a Windows service so any reactivated security tools are killed before it runs.
