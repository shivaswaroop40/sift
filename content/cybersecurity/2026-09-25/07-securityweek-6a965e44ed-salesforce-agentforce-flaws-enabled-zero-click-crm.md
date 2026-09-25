---
id: 6a965e44ed
title: Salesforce Agentforce flaws enabled zero-click CRM data theft via Web-to-Lead forms
original_title: ‘SalesBleed’ Flaws in Salesforce Agentforce Enabled Zero-Click Data Exfiltration
url: >-
  https://www.securityweek.com/salesbleed-flaws-in-salesforce-agentforce-enabled-zero-click-data-exfiltration/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-09-25"
published_at: "2026-09-25T09:27:51.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - salesforce
  - agentforce
  - prompt-injection
  - zero-click
  - data-exfiltration
  - slack
  - news
why_read: >-
  You will see how a trusted AI agent in your CRM stack can be turned into a silent data
  exfiltration channel and a phishing sender without the user clicking anything.
rank: 7
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Three vulnerabilities in Salesforce Agentforce, tracked as SalesBleed by Zenity Labs, allowed attackers to hijack trusted AI agents for zero-click data exfiltration and phishing. The bugs were triggered through Web-to-Lead forms, Salesforce's official lead-collection mechanism, which feeds directly into the CRM.

Two of the flaws stemmed from weaknesses in Trusted URLs, the mechanism intended to block Agentforce from rendering or transmitting data to unapproved domains. Zenity found the parser failed to recognise top-level domains and could be confused by character sequences, letting HTML image tags leak leads and accounts table data to attacker servers before any user warning was shown.

The third flaw abused the Agentforce-Slack integration. Specially constructed links in a poisoned lead made Slack auto-fetch previews that carried CRM data out, and the same chain turned the trusted agent into a phishing sender inside internal Slack channels because the agent did not identify the originating user.

Salesforce was notified on 1 June and confirmed all three issues were fixed by 19 August. The report does not indicate in-the-wild exploitation before patching.
