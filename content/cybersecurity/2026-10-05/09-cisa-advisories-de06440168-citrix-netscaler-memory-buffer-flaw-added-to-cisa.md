---
id: de06440168
title: Citrix NetScaler memory buffer flaw added to CISA's actively exploited catalogue
original_title: CISA Adds One Known Exploited Vulnerability to Catalog
url: >-
  https://www.cisa.gov/news-events/alerts/2026/10/04/cisa-adds-one-known-exploited-vulnerability-catalog
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-10-05"
published_at: "2026-10-04T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - citrix
  - cve-2026-88779
  - buffer-overflow
  - kev-catalogue
  - remediation
  - advisory
why_read: >-
  Learn which Citrix vulnerability is being actively exploited and now mandates priority patching in
  federal networks.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 6
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

CISA has added CVE-2026-88779, a buffer overflow in Citrix NetScaler, to its Known Exploited Vulnerabilities catalogue based on evidence of active exploitation. The vulnerability allows improper restriction of operations within memory bounds and grants total control of affected assets after successful compromise.

Federal agencies must now prioritise patching this flaw on publicly exposed systems under Binding Operational Directive 26-04. CISA strongly encourages all organisations to treat KEV catalogue entries as high-priority regardless of sector, given the severity and proven exploitation in the wild.

Agencies must also check whether systems were already compromised before patches were deployed. The directive requires risk-based vulnerability management, deferring lower-risk flaws to focus resources on KEV entries that enable full system takeover.
