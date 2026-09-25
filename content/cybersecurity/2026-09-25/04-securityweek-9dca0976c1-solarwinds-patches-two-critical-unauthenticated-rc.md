---
id: 9dca0976c1
title: SolarWinds patches two critical unauthenticated RCE flaws in Observability Self-Hosted
original_title: SolarWinds Patches Critical RCE Flaws in Observability Self-Hosted
url: https://www.securityweek.com/solarwinds-patches-critical-rce-flaws-in-observability-self-hosted/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-09-25"
published_at: "2026-09-24T10:40:40.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - solarwinds
  - rce
  - observability
  - access-rights-manager
  - patching
  - cve
  - news
why_read: >-
  Get the CVE IDs, CVSS scores, affected versions and configuration triggers for three
  unauthenticated RCE bugs SolarWinds just patched.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

SolarWinds has fixed two severe vulnerabilities in Observability Self-Hosted that allow remote code execution. CVE-2026-28324 carries a CVSS of 9.8 and stems from an insufficient integrity check on deployments running non-default or non-secure configurations. CVE-2026-28325, scored 8.8, is a deserialisation of untrusted data flaw that affects installations using a specific communication mode. Both bugs can be exploited by remote attackers without authentication.

Both flaws impact all Observability Self-Hosted versions up to 2026.2.2 and are resolved in version 2026.2.3. Last week SolarWinds also patched CVE-2026-28326, a separate unauthenticated RCE bug in Access Rights Manager caused by a hardcoded static key in versions up to 2026.2. The company has not reported in-the-wild exploitation of any of the three defects.

Defenders running Observability Self-Hosted or Access Rights Manager should move to the patched releases and audit configurations for the affected communication mode or non-secure settings before doing so.
