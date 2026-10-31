---
id: b1a158fc85
title: Attackers probe WordPress core update race condition hours after patch
original_title: Fresh WordPress Vulnerability in Attackers’ Crosshairs
url: https://www.securityweek.com/fresh-wordpress-vulnerability-in-attackers-crosshairs/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-10-31"
published_at: "2026-10-30T12:04:13.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - wordpress
  - race-condition
  - remote-code-execution
  - exploitation
  - patching
  - news
why_read: >-
  The original details the race condition mechanics, the attacker prerequisites, Wordfence's
  exploitation telemetry, and the full contents of WordPress 7.1.4.
rank: 4
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: glm-5.3
---

Threat actors began targeting a high-severity WordPress vulnerability within hours of patches rolling out on October 28, according to Defiant. The flaw is a race condition in the WordPress core update process, exploitable without authentication for remote code execution. It stems from predictable, web-accessible staging paths where update files are unpacked. No CVE identifier has been assigned yet.

No account is needed, but the attacker must hit a seconds-long window while WordPress unpacks a complete core update, and needs public web and PHP access to the staging tree plus a predictable or discovered staging path. Attack complexity is high. The fix randomizes the staging directory, adds an index guard, and blocks unsafe promotion of staged configuration data. It shipped in WordPress 7.1.4 and was backported to branches through WordPress 4.7.

Wordfence telemetry shows attackers polling the vulnerable paths repeatedly to hit the exploitability window. The first match for the new firewall rule arrived nine minutes after deployment. In the first 21 hours, Defiant recorded more than 18,500 requests targeting staged setup-config.php installer paths. Wordfence has not reported successful compromises.

WordPress 7.1.4 patches 22 security defects in total, including several XSS flaws, interactivity API issues, an unauthenticated information disclosure bug, and an authorization weakness. The release also updates the bundled root certificates to reflect the recent eMudhra revocation. Patching therefore covers more than the update-process race condition alone.
