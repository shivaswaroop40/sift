---
id: d56a90bccc
title: Microsoft Outlook will block MSIX attachments from November
original_title: Microsoft Outlook to block MSIX attachments starting November
url: >-
  https://www.bleepingcomputer.com/news/microsoft/microsoft-outlook-to-block-msix-attachments-used-in-attacks/
source: BleepingComputer
kind: news
section: defence
date: "2026-10-08"
published_at: "2026-10-07T15:44:22.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - outlook
  - msix
  - attachment-blocking
  - exchange-online
  - malware-delivery
  - news
why_read: Learn what file types are now blocked in Outlook and how to manage exceptions if needed.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Microsoft is adding .msix and .msixbundle files to Outlook's blocked attachment list starting early November. The change rolls out to Exchange Online users first, reaching general availability by mid-November. Users will no longer be able to send, receive, open, or download these file types in Outlook on the web and new Outlook for Windows.

MSIX files are modern Windows installation packages used for software deployment. Attackers have exploited them as vectors for malware and phishing, similar to recently blocked .library-ms and .search-ms file types. The block reduces exposure to supply-chain and installation-based attacks targeting production environments.

Organisations that do not use MSIX files for legitimate distribution need not act. Admins can whitelist the file types via the AllowedFileTypes property in OwaMailboxPolicy if required. Microsoft expects most organisations will see no operational impact.
