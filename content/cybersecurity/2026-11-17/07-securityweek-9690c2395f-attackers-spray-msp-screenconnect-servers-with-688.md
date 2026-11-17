---
id: 9690c2395f
title: Attackers spray MSP ScreenConnect servers with 688,000 requests exploiting CVE-2026-84869
original_title: MSP ScreenConnect Servers Targeted in Month-Long Campaign
url: https://www.securityweek.com/msp-screenconnect-servers-targeted-in-month-long-campaign/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-11-17"
published_at: "2026-11-17T13:24:43.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - screenconnect
  - msp
  - cve-2026-84869
  - huntress
  - rmm
  - kev
  - news
why_read: >-
  Read it for Huntress's timing details on the attack chain and the fixed client version, so you can
  check your technician hosts and ScreenConnect servers.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Huntress reports a campaign since at least 20 October against MSP ScreenConnect servers, exploiting CVE-2026-84869 (CVSS 9.9). The flaw is a missing authorization and privilege management bug. It lets a guest push files that run on a technician's client without a prompt. Huntress counted 688,000 guest 'run file' requests for update*.bat against 42 servers from 29 IP addresses.

The batch file connects to a Telegram bot and installs a rogue ScreenConnect client. In one case the client, disguised as Windows Update, was installed within nine seconds of the host client running the file. Huntress says the attackers spray servers blindly and wait for any technician to join a session.

A technician's workstation typically holds RMM consoles, saved credentials and access to every customer. That makes one compromised session a route into many downstream environments. Huntress says this activity differs from the recent SCKit and fake crypto exchange campaigns.

ConnectWise patched the flaw on 8 September and CISA added it to the KEV catalog on 11 September. Huntress says exploitation began on 20 August. Update technicians' host clients to version 26.6.5 or later, plus all the Access agents ConnectWise lists.
