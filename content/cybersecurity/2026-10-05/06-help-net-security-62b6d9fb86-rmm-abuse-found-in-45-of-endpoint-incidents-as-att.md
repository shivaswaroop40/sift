---
id: 62b6d9fb86
title: RMM abuse found in 45% of endpoint incidents as attackers nest multiple tools
original_title: How RMM abuse gives attackers a way in that looks like business as usual
url: https://www.helpnetsecurity.com/2026/10/05/remote-monitoring-and-management-rmm-abuse/
source: Help Net Security
kind: news
section: threat-research
date: "2026-10-05"
published_at: "2026-10-05T04:30:08.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - rmm-abuse
  - endpoint-security
  - account-takeover
  - mailbox-manipulation
  - device-code-phishing
  - adversary-in-the-middle
  - news
why_read: Learn which RMM and identity attack tactics are most widespread and how they work in practice.
rank: 6
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Huntress recorded attackers installing legitimate remote monitoring and management software in 45% of endpoint-related incidents in Q1 2026. RMM abuse ranked highest among 11 attack tactics by frequency and damage. One incident involved a fake service agreement installing Tiflux, followed by UltraVNC, Splashtop and ScreenConnect on the same device, giving attackers multiple persistent access routes.

For a defender, RMM abuse is dangerous because installed tools grant persistent remote command execution that resembles normal administrator work. The tactic jumped 277% year on year in 2025. Legitimate and malicious copies behave identically, making detection difficult without knowing which tools your organisation has approved.

Huntress also tracked mailbox manipulation and adversary-in-the-middle account takeover as high-frequency threats. Mailbox rules hide vendor replies whilst invoices are swapped to redirect payment. Session tokens copied during AiTM attacks bypass password and MFA checks while the session remains valid. Device code phishing saw a reported 1,380% increase, though without a baseline figure the volume remains unclear.
