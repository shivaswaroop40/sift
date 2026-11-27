---
id: d59fdb4139
title: Remus infostealer's Gmail 'zero-day' is a fake Google Sheets Chrome extension
original_title: Remus malware steals Gmail messages via fake Google Sheets extension
url: >-
  https://www.bleepingcomputer.com/news/security/remus-malware-steals-gmail-messages-via-fake-google-sheets-extension/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-11-27"
published_at: "2026-11-26T15:23:28.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - remus
  - infostealer
  - chrome-extension
  - gmail
  - browser-security
  - developer-mode
  - news
why_read: >-
  The original gives GenDigital's reverse-engineering details on how Remus installs the extension,
  plus the advice to check chrome://extensions for rogue add-ons and unexpected Developer Mode.
rank: 9
interest_score: 6
depth_score: 5
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

The Remus infostealer developer began advertising a Gmail zero-day on November 8, claiming it could collect email even after a victim changed their password and revoked all sessions. GenDigital and Invoke RE found no vulnerability. The capability is a malicious Chrome extension named "Google Sheets", installed by a native DLL.

The extension persists because it stays installed in the browser, not because of any flaw in Gmail. Its access stops when the session ends and resumes when the victim signs in again. Every minute it checks up to 10 account slots for unread mail and sends the subject, body, sender, victim address and a campaign ID to the command-and-control server.

Chrome 137 and later removed a command-line option that malware used to load extensions. Remus gets round this by editing the victim's Chrome profile to register the extension, then enabling Developer Mode, which unpacked extensions need. The extension copies the Google Docs Offline description and requests access to all websites.

Hudson Rock had earlier reached inconclusive results. Customer evidence matched the seller's pitch, but there was no technical proof of a zero-day. The extension parses attachment filenames but does not send them, so that feature may be unfinished.
