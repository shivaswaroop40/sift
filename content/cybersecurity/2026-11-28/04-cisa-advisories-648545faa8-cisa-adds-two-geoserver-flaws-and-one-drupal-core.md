---
id: 648545faa8
title: CISA adds two GeoServer flaws and one Drupal core flaw to KEV catalog
original_title: CISA Adds Three Known Exploited Vulnerabilities to Catalog
url: >-
  https://www.cisa.gov/news-events/alerts/2026/11/27/cisa-adds-three-known-exploited-vulnerabilities-catalog
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-11-28"
published_at: "2026-11-27T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - cisa
  - kev
  - geoserver
  - drupal
  - active-exploitation
  - vulnerability-management
  - advisory
why_read: >-
  The alert lists the three CVE IDs and restates what BOD 26-04 expects of agencies, though it
  carries no technical detail on the flaws.
rank: 4
interest_score: 6.7
depth_score: 4
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

CISA added three vulnerabilities to its Known Exploited Vulnerabilities catalog on 27 November 2026, citing evidence of active exploitation. Two affect OSGeo GeoServer: CVE-2026-120705, an XML injection flaw, and CVE-2026-129243, an incorrect authorization flaw. The third is CVE-2026-136716, an improper check for unusual or exceptional conditions in Drupal core.

The alert gives no exploitation details, affected versions or patch information. It does not say who is exploiting the flaws or how. You will need the CVE records and vendor advisories to find fixed versions and mitigations. Any GeoServer or Drupal instance you run should be checked against them.

The alert points to Binding Operational Directive 26-04, which covers federal civilian agencies. It requires fast remediation of KEV-listed CVEs on publicly exposed assets that give total control after exploitation. It also sets basic expectations for checking whether a system was compromised before patching. CISA encourages other organisations to adopt the same risk-based approach.
