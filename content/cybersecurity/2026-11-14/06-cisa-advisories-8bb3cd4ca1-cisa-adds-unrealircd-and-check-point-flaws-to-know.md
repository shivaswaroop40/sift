---
id: 8bb3cd4ca1
title: CISA adds UnrealIRCd and Check Point flaws to Known Exploited Vulnerabilities catalog
original_title: CISA Adds Two Known Exploited Vulnerabilities to Catalog
url: >-
  https://www.cisa.gov/news-events/alerts/2026/11/13/cisa-adds-two-known-exploited-vulnerabilities-catalog
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-11-14"
published_at: "2026-11-13T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - cisa
  - kev
  - unrealircd
  - check-point
  - vulnerability-management
  - bod-26-04
  - advisory
why_read: >-
  The alert is short, but it confirms the two CVE identifiers and restates what BOD 26-04 expects of
  agencies, which is useful for triage against your own asset inventory.
rank: 6
interest_score: 6.7
depth_score: 3
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

On 13 November 2026 CISA added two vulnerabilities to its Known Exploited Vulnerabilities catalog, citing evidence of active exploitation. CVE-2026-114713 is an improper neutralisation of delimiters flaw in UnrealIRCd. CVE-2026-123039 is an incorrect permission assignment for a critical resource in multiple Check Point products.

The alert gives no technical detail, affected versions, patch information or description of the attacks. It only names the CVEs and their weakness types. Anyone running either product will need to check the vendor advisories for scope and fixes.

The additions fall under Binding Operational Directive 26-04, which applies to federal civilian agencies. It requires fast remediation of KEV-listed CVEs on publicly exposed assets that give total control after exploitation. It also sets basic expectations for checking whether a system was compromised before patching. CISA encourages other organisations to adopt the same risk-based approach.
