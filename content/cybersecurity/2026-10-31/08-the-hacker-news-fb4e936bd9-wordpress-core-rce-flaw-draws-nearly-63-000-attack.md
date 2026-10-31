---
id: fb4e936bd9
title: WordPress core RCE flaw draws nearly 63,000 attack attempts in 24 hours
original_title: WordPress RCE Flaw Draws Nearly 63,000 Attack Attempts in Just 24 Hours
url: https://thehackernews.com/2026/10/wordpress-rce-flaw-draws-nearly-63000.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-31"
published_at: "2026-10-30T14:08:14.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - wordpress
  - rce
  - exploitation
  - patching
  - vulnerability
  - news
why_read: >-
  The original report gives the attack volume, the exploitation timeline, and the patch details for
  this WordPress Core RCE.
rank: 8
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

Threat actors began attempting to exploit a remote code execution flaw in WordPress Core almost immediately after patches shipped in October. The vulnerability has no CVE identifier. It affects WordPress Core versions 4.7 through 7.1.3 and carries a CVSS score of 8.1. Reporting on the campaign counts nearly 63,000 attack attempts within a single 24-hour window.

For anyone running WordPress in production, this is a patch-now event. Remote code execution in core gives an attacker full control of the site and its host. The speed of the campaign shows the gap between patch release and mass exploitation is measured in hours, not days. Any unpatched install in the affected range is likely already being probed.

The absence of a CVE identifier complicates tracking. Scanners and asset inventories that key on CVEs may not flag affected installs. Teams should match WordPress version numbers against the affected range, 4.7 through 7.1.3, rather than wait for a CVE to appear.
