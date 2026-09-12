---
id: 1ac6f9ef3b
title: Passkey-themed phishing attacks lead to Microsoft 365 data theft
original_title: Passkey-themed phishing attacks lead to Microsoft 365 data theft
url: >-
  https://www.bleepingcomputer.com/news/security/passkey-themed-phishing-attacks-lead-to-microsoft-365-data-theft/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-09-12"
published_at: "2026-09-11T17:26:50.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - phishing
  - microsoft-365
  - passkey
  - device-code-phishing
  - aitm
  - extortion
  - news
why_read: >-
  Read the original to see the phishing lures, post-compromise Graph enumeration, and the MFA
  persistence that lets attackers keep access.
rank: 5
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Microsoft says threat actors linked to ShinyHunters, Helix and other extortion gangs are using passkey and single sign-on themed social engineering to compromise corporate Microsoft 365 accounts. The campaign has run since May 2026. Attackers impersonate IT help desks, tell employees to urgently update passkey or MFA settings, and send links to phishing sites that mimic Microsoft login pages.

The passkey lure is not an attempt to enrol a passkey. Instead, victims are pushed to adversary-in-the-middle phishing sites or device-code authentication flows. AiTM captures credentials and session tokens. Device-code phishing makes the victim authorise an attacker-controlled client through Microsoft's legitimate authentication pages, so normal MFA does not block it.

After compromise, Microsoft observed attackers adding MFA methods they control, then using Microsoft Graph to enumerate organisations, users, roles, SharePoint sites, OneDrive and mail. In one case the session stayed active for about an hour while the attacker listed sensitive files. In another, device-code phishing granted access to connected SSO apps including Salesforce, Google Workspace and Slack. The added MFA methods do not survive a full credential and session reset.
