---
id: e8367705c4
title: Fake LastPass installer uses Microsoft-signed driver to disable security tools
original_title: Fake LastPass Authenticator Installer Abuses Microsoft-Signed Driver to Kill Antivirus and EDR
url: https://thehackernews.com/2026/09/fake-lastpass-authenticator-installer.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-09-22"
published_at: "2026-09-21T17:31:01.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - lastpass
  - signed-drivers
  - edr-evasion
  - credential-thealer
  - supply-chain
  - windows
  - news
why_read: >-
  You will see how a Microsoft-signed kernel driver was used to disarm endpoint defences before
  credential theft, and where signature-based trust assumptions break down.
rank: 7
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A malicious package impersonating the LastPass Authenticator was hosted on GitHub and distributed to victims, researchers at LastPass and Delphos Labs reported on 17 September. Running the installer drops a Windows kernel driver that turns off antivirus and EDR processes before a password stealer executes.

The driver is signed through Microsoft's hardware-compatibility programme, so it loads cleanly on Windows and is treated as trusted code. That signature lets it terminate or interfere with security products that would normally block unsigned kernel payloads, removing the main layer of defence before the stealer runs.

The report does not state how many users installed the fake package or how it was promoted. It also does not say whether Microsoft has revoked the signature or whether the GitHub repository has been taken down, leaving the current exposure unclear.
