---
id: de3bed041e
title: Critical Puppet Enterprise deserialization flaw CVE-2026-115731 is being exploited in the wild
original_title: >-
  Exploited Puppet flaw puts the server that configures your endpoint fleet at risk
  (CVE-2026-115731)
url: >-
  https://www.helpnetsecurity.com/2026/11/19/puppet-enterprise-vulnerability-cve-2026-115731-exploited/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-11-19"
published_at: "2026-11-19T13:07:41.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - puppet
  - cve-2026-115731
  - rce
  - deserialization
  - cisa-kev
  - configuration-management
  - news
why_read: >-
  The article gives affected and fixed version numbers, the autosign risk, and the compromise
  checks, including why a breached server means rebuilding the CA.
rank: 10
interest_score: 7
depth_score: 4
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Attackers are exploiting CVE-2026-115731, a critical remote code execution flaw in Perforce Puppet Enterprise. It is a deserialization bug in the report-processing code of Puppet Server. A client with any certificate signed by the Puppet CA can send a crafted rich-data report via PUT and run code as the Puppet Server service user. CISA added it to its KEV catalog and set a 1 December 2026 deadline for federal civilian agencies.

The signed-certificate requirement is a weak barrier where autosigning is enabled, which the OpenVox maintainers describe as common in enterprise deployments. An unauthenticated attacker can then request a valid certificate and exploit the flaw. Code execution as puppet exposes the CA signing key, which could allow the attacker to sign certificates and reach other hosts if certain orchestration is configured.

Affected versions include Puppet Enterprise before 2023.8.13, 2025.12.1 and 2026.0.1, and Puppet Core before 8.22.2 and 9.1.3. The OpenVox fork is also affected. Fixes shipped on 3 November, alongside a fix for CVE-2026-115732, a certificate name authorization bypass. Details of the in-the-wild attacks have not been published.

Patch and restart the server, and review autosign configuration and authorization rules if you cannot upgrade at once. Check the signed certificate list for unknown nodes and look for unexpected processes, files or outbound connections tied to the service user. If the server looks compromised, treat the CA as compromised and rebuild it. A public proof-of-concept exists in the OpenVox advisory.
