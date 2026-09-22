---
id: 8ee9921333
title: CISA flags Zyxel and Veeam flaws as actively exploited
original_title: Zyxel and Veeam Flaws Under Active Exploitation With Command and SYSTEM Access
url: https://thehackernews.com/2026/09/zyxel-and-veeam-flaws-under-active.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-22"
published_at: "2026-09-22T05:31:59.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - cisa
  - zyxel
  - veeam
  - kev
  - cve-2026-7273
  - buffer-overflow
  - news
why_read: >-
  You will get the two CVE identifiers, severity scores, and exploitation context needed to
  prioritise patching on Zyxel switches and Veeam servers.
rank: 9
interest_score: 7.7
depth_score: 7
novelty_score: 7
utility_score: 9
scored: true
model: minimax-m3
---

CISA has added a patched Zyxel GS1900 series switch vulnerability, CVE-2026-7273, to its Known Exploited Vulnerabilities catalog after evidence of in-the-wild attacks. The flaw is a stack-based buffer overflow with a CVSS score of 8.8 that can allow arbitrary operating system command execution on affected devices.

CISA also listed a separate Veeam vulnerability that researchers say gives attackers SYSTEM-level access on targeted hosts. Both flaws have patches available, but KEV listing means U.S. federal agencies must remediate by a set deadline and many private sector defenders treat the catalog as a priority triage signal.

Defenders running Zyxel GS1900 switches should confirm they are on a fixed firmware build and audit device logs for signs of exploitation. Veeam administrators should verify backup server versions and check for indicators of compromise consistent with the reported SYSTEM-level access.
