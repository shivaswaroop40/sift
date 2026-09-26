---
id: f004a42299
title: CISA adds WordPress Core remote file inclusion flaw to exploited vulnerabilities catalog
original_title: CISA Adds One Known Exploited Vulnerability to Catalog
url: >-
  https://www.cisa.gov/news-events/alerts/2026/09/25/cisa-adds-one-known-exploited-vulnerability-catalog
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-09-26"
published_at: "2026-09-25T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - wordpress
  - cve
  - cisa
  - kev
  - rce
  - advisory
why_read: >-
  To know that a WordPress Core remote file inclusion CVE is now on the KEV catalog and to prompt
  immediate checking of your WordPress estate.
rank: 12
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

CISA added CVE-2026-87902, a remote file inclusion vulnerability in WordPress Core, to its Known Exploited Vulnerabilities catalog on 25 September 2026 after evidence of active exploitation in the wild. The advisory cites this class of flaw as a frequent attack vector used by malicious actors. No technical details, affected versions, or exploitation context are given in the notice.

WordPress Core is widely deployed across web estates, including federal and enterprise environments. A remote file inclusion flaw lets an attacker pull or execute remote code through the application, which can lead to full site takeover if reachable from the public internet. Adding the CVE to the KEV list means FCEB agencies must patch or mitigate exposed assets under BOD 26-04 timelines.

The advisory does not specify which WordPress Core versions are affected, whether a patch is available, or how exploitation is occurring. Practitioners running WordPress should monitor vendor guidance for the CVE and treat any unpatched, internet-facing install as priority for remediation, in line with KEV handling.
