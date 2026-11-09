---
id: 03dd49fb43
title: Attackers log in with stolen credentials eight minutes after infection
original_title: An average of 8 minutes is all hackers need to log in with stolen credentials
url: https://www.helpnetsecurity.com/2026/11/09/elastic-businesses-remote-access-attacks-report/
source: Help Net Security
kind: news
section: threat-research
date: "2026-11-09"
published_at: "2026-11-09T05:00:39.000Z"
authors:
  - Anamarija Pogorelec
comments: null
tags:
  - infostealer
  - stolen-credentials
  - clickfix
  - remote-access
  - ai-misuse
  - phishing
  - news
why_read: >-
  The Elastic report gives case-level detail on infostealer timing, AI application misuse and remote
  tool abuse, plus its detection recommendations.
rank: 8
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

Elastic Security Threat Command analysed 27 confirmed infostealer cases on customer computers. Attackers logged in with stolen credentials an average of eight minutes after infection. ClickFix-style verification pages were the most common entry point, appearing in 12 cases. The report also documents attackers running commands through AI applications and abusing signed remote monitoring tools to hold access.

The eight-minute gap leaves almost no room for manual response. Infostealers capture saved passwords, browser session data and payment details, and captured sessions let an attacker use an account without entering its password. ClickFix lures bypass attachment scanning because the user runs the malicious command themselves. In one healthcare case, a malicious installer executed through DLL sideloading about 16 seconds after the user followed the lure.

The AI cases show misuse after attackers already had access, not flaws in the applications or their providers. On Windows, an attacker used Claude Code through its Visual Studio Code extension to prepare tools and reach an outside server over a concealed connection. On macOS, commands run through the ChatGPT desktop application read an internal infrastructure document and accessed the saved password store.

Researchers confirmed 23 cases of abused remote monitoring and management software, with ScreenConnect named most often. One campaign began with a fake digital invitation and installed ScreenConnect hidden, connecting to an attacker-controlled server as a Windows service. The authors argue that when attackers work inside trusted software, new signatures rarely help, and recommend behaviour analytics, cross-domain visibility and active correlation.
