---
id: 5947b39989
title: Fortinet FortiMail zero-day allows unauthenticated file writes and code execution
original_title: Fortinet sounds the alarm over actively exploited FortiMail zero-day
url: >-
  https://www.theregister.com/security/2026/10/02/fortinet-sounds-the-alarm-over-actively-exploited-fortimail-zero-day/5300803
source: The Register
kind: news
section: security
date: "2026-10-03"
published_at: "2026-10-02T10:53:49.000Z"
authors: []
comments: null
tags:
  - fortinet
  - zero-day
  - vulnerability
  - mail-security
  - code-execution
  - unauthenticated
  - news
why_read: >-
  Learn the details of an active zero-day affecting your mail security appliance and what
  mitigations work now.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Fortinet disclosed CVE-2026-104286, a CVSS 9.8 flaw in FortiMail versions 7.2 through 8.0 that lets unauthenticated attackers write arbitrary files via path traversal and null-byte handling bugs in the web interface. Exploitation is active in the wild.

For platform engineers running FortiMail, this matters because the vulnerability requires no login and can lead to arbitrary code execution. Attackers can plant persistence mechanisms that survive even after patching. CISA has ordered federal civilian agencies to mitigate by October 4.

Fortinet has no patches ready for several affected versions, leaving admins dependent on workarounds: disable Identity Based Encryption where possible and isolate the management interface from the internet. Check logs for suspicious file creation and configuration changes using provided indicators.
