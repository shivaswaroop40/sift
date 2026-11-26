---
id: 5147aaf8a2
title: >-
  SYS010 infostealer enrols browsers in attacker-run management to force-install email-stealing
  extensions
original_title: SYS010 malware abuses browser management to spy on Gmail, Outlook
url: >-
  https://www.bleepingcomputer.com/news/security/sys010-malware-abuses-browser-management-to-spy-on-gmail-outlook/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-11-26"
published_at: "2026-11-26T11:50:17.000Z"
authors:
  - Ionut Ilascu
comments: null
tags:
  - infostealer
  - malvertising
  - browser-extensions
  - sys010
  - session-cookies
  - enterprise-policy
  - news
why_read: >-
  The original gives Bitdefender's account of how the malware abuses each browser's management
  mechanism, plus its advice on spotting unexpected managed-browser notices and reviewing Meta
  account access.
rank: 9
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Bitdefender Labs reports a new SYS01 infostealer variant, tracked as SYS010, spread through Meta ads for fake Wallpaper Engine and Lively Wallpapers apps. The apps do show animated wallpapers, which hides the malware. A script, eclient.php, changes browser management policies to force-install malicious extensions in Chrome, Edge and Firefox. Bitdefender found an ad on 16 October and says hundreds have run.

In Chrome, the browser is enrolled in an attacker-controlled Google admin console. In Firefox, an ExtensionSettings policy installs the add-on and disables Developer Tools and abuse reporting. In Edge, the device can be enrolled in an attacker-run MDM server. Administrator rights are obtained by repeating the UAC prompt every three seconds, up to 99 times, until the user approves.

The extensions, called Docs Helper in Chrome and Document Hub in Firefox, steal session cookies, which bypasses passwords and two-factor authentication. The Chrome add-on can read recent Gmail and Outlook messages and permanently delete chosen ones. Bitdefender says this could let attackers take login codes and remove security alerts. They also collect Facebook Page, ad and business account data, including payment details.

Bitdefender lists request origins such as the Philippines, Thailand, Poland and the United States, but says these do not confirm infections. One ad reached 6,275 EU users. The report links the behaviour to the Remus infostealer, which instead registers the extension in the user profile and enables Developer Mode.
