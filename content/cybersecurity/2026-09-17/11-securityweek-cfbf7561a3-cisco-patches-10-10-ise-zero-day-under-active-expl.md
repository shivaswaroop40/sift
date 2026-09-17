---
id: cfbf7561a3
title: Cisco patches 10/10 ISE zero-day under active exploitation
original_title: Active Exploitation Triggers Emergency Patch for Cisco ISE Zero-Day
url: https://www.securityweek.com/active-exploitation-triggers-emergency-patch-for-cisco-ise-zero-day/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-09-17"
published_at: "2026-09-17T06:19:52.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - cisco
  - ise
  - zero-day
  - authentication-bypass
  - cve-2026-76460
  - cisa-kev
  - news
why_read: >-
  You get the specific patch versions, detection steps, and the fact that exploitation can wipe its
  own logs on a node.
rank: 11
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Cisco released urgent patches for CVE-2026-76460, a CVSS 10/10 authentication bypass in Identity Services Engine that is being exploited in the wild. The flaw sits in an ISE API endpoint that does not enforce sufficient authentication, letting attackers send crafted requests to reach the management interface and the underlying appliance. Both ISE and ISE-PIC are affected regardless of configuration, and no workaround is available beyond infrastructure access control lists restricting traffic to the device.

Successful exploitation grants root command execution on the node, which lets attackers hide or delete indicators of compromise. Cisco advises reviewing access.log for suspicious usernames on every node, cross-checking firewall and network logs, and re-imaging and restoring from backup any node where malicious activity is suspected. Fixed versions are ISE 3.5 Patch 4, 3.4 Patch 7, 3.3 Patch 12, 3.2 Patch 11, and 3.1 Patch 12.

CISA added the flaw to its Known Exploited Vulnerabilities catalog and is requiring federal agencies to patch within three days under BOD 26-04. Cisco has not disclosed who is behind the attacks.
