---
id: f34eb29614
title: Fake payroll desktop apps deliver ScreenConnect and route attackers to company paychecks
original_title: Fake payroll desktop apps hand attackers a route to company paychecks
url: https://www.helpnetsecurity.com/2026/09/25/fake-payroll-desktop-apps-screenconnect/
source: Help Net Security
kind: news
section: threat-research
date: "2026-09-25"
published_at: "2026-09-25T07:52:51.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - screenconnect
  - payroll-fraud
  - social-engineering
  - supply-chain
  - windows
  - remote-access
  - news
why_read: >-
  You will see exactly how the lure, installer and persistence chain fit together and what to tell
  payroll staff about downloads the vendor does not actually offer.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Allure Security has found an attacker offering desktop applications for three large US payroll and HR platforms, none of which publishes a desktop client. The installer drops ScreenConnect configured for unattended access, while the victim sees a genuine Microsoft .NET Desktop Runtime installer run to completion and no payroll app appear.

Anyone who runs payroll is the target. Unattended remote access on that machine gives the operator a path to divert or drain a company paycheck run, which is a high-impact outcome from a single mistaken download.

The lure pages were built with the AI builder Lovable, saved as HTML with a browser extension and hosted on Vercel behind its bot challenge, which kept automated scanners away. Each download linked to a GitHub release, with one repo per brand, and the 64 MB NSIS installer launched msiexec with the /qn flag to install ScreenConnect silently after a standard Windows elevation prompt.

The ScreenConnect client installs as a service, survives Safe Mode and runs on the sign-in screen, so the operator has access before any user logs in. All samples connected to jyleatyg[.]com on port 8041. GitHub recorded 291 downloads, the C2 domain and repos have been taken down, and a separate cluster used the same tooling against crypto and DeFi brands.
