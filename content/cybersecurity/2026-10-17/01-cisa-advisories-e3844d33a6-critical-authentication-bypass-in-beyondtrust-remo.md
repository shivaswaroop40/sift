---
id: e3844d33a6
title: Critical authentication bypass in BeyondTrust Remote Support actively exploited
original_title: CISA Urges Patching Critical Vulnerability in BeyondTrust Remote Support
url: >-
  https://www.cisa.gov/news-events/alerts/2026/10/16/cisa-urges-patching-critical-vulnerability-beyondtrust-remote-support
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-10-17"
published_at: "2026-10-16T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - beyondtrust
  - authentication-bypass
  - cve-2026-102764
  - remote-access
  - privilege-escalation
  - active-exploitation
  - advisory
why_read: Understand the scope of active exploitation and the forensic hunting steps needed after patching.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

CVE-2026-102764 affects BeyondTrust Remote Support versions 26.2.3 and earlier. The vulnerability bypasses authentication, allowing threat actors to gain initial access to self-hosted appliances. Patches are available for versions 24.3.1 and later; older versions require upgrade first. SaaS deployments are already patched.

Threat actors exploit this to establish persistence, escalate privileges, and move laterally within networks. CISA added the vulnerability to its Known Exploited Vulnerabilities catalog on 16 October 2026. This poses immediate risk to any organisation running self-hosted Remote Support without the patch.

If compromise is suspected, isolate the appliance immediately, collect forensic images, forward logs to your SIEM, and hunt for unrecognised admin sessions, script files, or credential changes. Rebuild from known-good state, rotate all stored credentials, and revoke active support sessions.
