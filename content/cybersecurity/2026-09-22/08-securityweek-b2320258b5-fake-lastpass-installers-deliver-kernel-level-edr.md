---
id: b2320258b5
title: Fake LastPass installers deliver kernel-level EDR killer and Rapuncel stealer
original_title: Fake LastPass Installers Push Kernel-Level EDR Killer, ‘Rapuncel’ Stealer
url: >-
  https://www.securityweek.com/fake-lastpass-installers-push-kernel-level-edr-killer-rapuncel-stealer/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-09-22"
published_at: "2026-09-21T15:46:58.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - lastpass
  - ransomware
  - infostealer
  - kernel-driver
  - edr-evasion
  - github
  - news
why_read: >-
  You will see exactly how the loader chain works, what the EDR killer does, and how the Rapuncel
  stealer behaves on a compromised host.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

LastPass and Delphos have detailed a malware campaign that impersonated at least 40 organisations, including a fake LastPass Authenticator hosted on GitHub and pushed via SEO so it ranked near the top of search results. No LastPass systems were compromised. The lure was first seen on 13 August.

The final payload, called Rapuncel, installs a Microsoft-attested kernel driver disguised as an NVIDIA component that is designed to terminate 145 antivirus and endpoint security products. The loader is a renamed copy of Microsoft's debugging tool, which side-loads a malicious DLL produced using the PUROSANGUE crypter from the Cruciferra service.

Once protections are disabled, Rapuncel harvests credentials from 25 browsers, 30 cryptocurrency wallets, Steam, Discord and Telegram tokens, the Windows credential store, and any documents matching credential or wallet keywords. It also takes a picture of every monitor and persists as a boot-start process that re-kills any restarted security tools.

LastPass and Delphos assess Rapuncel as a variant or sibling of the BoryptGrab stealer previously spread through around 100 GitHub repositories, citing strong behavioural and artefact overlap rather than byte-for-byte matches.
