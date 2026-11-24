---
id: f6aae2da74
title: CISA adds MONAI Label and N-able Mail Assure flaws to its exploited vulnerabilities catalog
original_title: CISA Adds Two Known Exploited Vulnerabilities to Catalog
url: >-
  https://www.cisa.gov/news-events/alerts/2026/11/23/cisa-adds-two-known-exploited-vulnerabilities-catalog
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-11-24"
published_at: "2026-11-23T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - cisa
  - kev
  - path-traversal
  - ssrf
  - monai
  - n-able
  - advisory
why_read: >-
  The alert confirms the two CVE identifiers now treated as exploited and summarises what BOD 26-04
  expects of agencies, though it offers no technical or patching detail.
rank: 10
interest_score: 6.7
depth_score: 4
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

CISA has added two vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog, citing evidence of active exploitation. CVE-2026-133968 is a path traversal flaw in Project MONAI MONAI Label. CVE-2026-134624 is a server-side request forgery (SSRF) flaw in N-able Mail Assure (SpamExperts).

The alert gives no detail on who is exploiting the flaws, how, or at what scale. It does not list affected versions, patches or mitigations. It says only that these vulnerability types are a frequent attack vector for malicious actors and carry significant risk to the federal enterprise.

The alert restates Binding Operational Directive 26-04 for Federal Civilian Executive Branch agencies. The directive requires fast remediation of KEV-listed CVEs on publicly exposed assets where exploitation gives total control of the asset. It defers lower-risk issues. It also sets basic expectations for checking whether a system was compromised before patching.

The directive binds only federal agencies, but CISA encourages all organisations to adopt risk-based vulnerability management and to prioritise KEV entries. Anyone can nominate an exploited vulnerability, provided it has a CVE ID, evidence of exploitation and clear mitigation guidance.
