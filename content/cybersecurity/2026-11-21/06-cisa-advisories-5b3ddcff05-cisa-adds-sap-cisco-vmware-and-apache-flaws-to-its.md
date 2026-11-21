---
id: 5b3ddcff05
title: CISA adds SAP, Cisco, VMware and Apache flaws to its exploited vulnerabilities list
original_title: CISA Adds Four Known Exploited Vulnerabilities to Catalog
url: >-
  https://www.cisa.gov/news-events/alerts/2026/11/20/cisa-adds-four-known-exploited-vulnerabilities-catalog
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-11-21"
published_at: "2026-11-20T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - cisa
  - kev
  - sap-netweaver
  - cisco-expressway
  - vmware-vcenter
  - apache-roller
  - advisory
why_read: >-
  You get the four CVE identifiers and affected products, plus CISA's summary of how BOD 26-04
  expects KEV items to be prioritised and checked for prior compromise.
rank: 6
interest_score: 6.3
depth_score: 4
novelty_score: 6
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

CISA has added four vulnerabilities to its Known Exploited Vulnerabilities catalogue, citing evidence of active exploitation. They are CVE-2025-42884 in SAP NetWeaver (improper neutralisation in data query logic), CVE-2026-76466 in Cisco Expressway (hard-coded credentials), CVE-2026-123890 in VMware vCenter (authentication bypass via an alternate path) and CVE-2026-129448 in Apache Roller (deserialisation of untrusted data).

The alert gives no detail on who is exploiting the flaws, how, or at what scale. It also lists no patch versions or mitigations. Teams will need to check vendor advisories for fixes and for affected versions.

The alert ties the additions to Binding Operational Directive 26-04. This requires federal civilian agencies to prioritise rapid fixes for KEV-listed CVEs on publicly exposed assets that give total control after exploitation. It sets expectations for checking whether a system was compromised before patching. The directive binds only federal agencies, but CISA urges all organisations to adopt risk-based vulnerability management and to prioritise KEV entries.
