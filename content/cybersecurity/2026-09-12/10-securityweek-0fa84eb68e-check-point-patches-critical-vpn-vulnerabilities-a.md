---
id: 0fa84eb68e
title: Check Point patches critical VPN vulnerabilities allowing unauthenticated RCE
original_title: Check Point Patches Critical VPN Vulnerabilities
url: https://www.securityweek.com/check-point-patches-critical-vpn-vulnerabilities/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-09-12"
published_at: "2026-09-11T11:10:02.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - check-point
  - vpn
  - remote-code-execution
  - cve-2026-85102
  - cve-2026-85103
  - firewall
  - news
why_read: >-
  If you run Check Point VPN, you need the affected versions, patch levels and the manual VPN rule
  mitigation.
rank: 10
interest_score: 6.7
depth_score: 5
novelty_score: 7
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Check Point has released patches for two critical vulnerabilities in its gateway and firewall products that use VPN functionality. Tracked as CVE-2026-85102 and CVE-2026-85103, both have a CVSS score of 9.8 and can be exploited without authentication for remote code execution. The flaws are an improper validation of certificate data during VPN negotiation and a heap overflow in the VPN certificate ASN.1 decoding flow.

The vulnerabilities affect Security Gateway, Check Point Spark Firewall, and Security Management Server, depending on the CVE. An unauthenticated attacker who can reach the VPN interface could achieve remote code execution on affected appliances. That makes these urgent for any organisation running Site to Site VPN or Remote Access VPN on the affected versions. Check Point says it found the flaws internally and has no evidence of exploitation in the wild, but the severity warrants immediate patching.

Patches are available for versions R82.10, R82, and R81.20. Check Point also provides a mitigation that involves manually defining VPN rules instead of using implied rules, restricting UDP/500 and UDP/4500 to specific peer IP addresses. The mitigation does not apply to locally managed Spark Firewall instances, which should get the latest Jumbo hotfixes. Customers with LivePatch enabled receive updates automatically.
