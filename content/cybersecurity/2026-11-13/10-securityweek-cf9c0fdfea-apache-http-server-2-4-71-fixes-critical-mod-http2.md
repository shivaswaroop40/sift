---
id: cf9c0fdfea
title: Apache HTTP Server 2.4.71 fixes critical mod_http2 race condition enabling remote code execution
original_title: Apache Patches Critical HTTP Server RCE Found by Anthropic, Google
url: https://www.securityweek.com/apache-patches-critical-http-server-rce-found-by-anthropic-google/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-11-13"
published_at: "2026-11-12T15:38:31.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - apache
  - cve-2026-119618
  - mod-http2
  - rce
  - race-condition
  - patching
  - news
why_read: >-
  The article gives affected versions, the HTTP/2 mitigation and the current state of public exploit
  evidence, so you can prioritise patching.
rank: 10
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Apache has fixed CVE-2026-119618, a critical flaw in mod_http2 affecting HTTP Server 2.4.55 through 2.4.70. The fix shipped on November 11 in version 2.4.71. The bug is a race condition in which threads access shared resources improperly, which can corrupt server memory. Red Hat rates it CVSS 9.8 and says it allows unauthenticated remote code execution.

Anthropic's OSS Scanner reported the flaw on October 26. Google Cloud Vulnerability Research (Anthony Weems and Simon Scannell) independently reported it on November 3. Only servers with HTTP/2 enabled are affected. Servers serving only HTTP/1.1 are not vulnerable.

Wiz found affected versions in 64% of the cloud environments in its data, and 51% had publicly exposed instances. Wiz cautions that this ignores configuration, so many of these may not be exploitable. Disabling HTTP/2 is a stopgap if you cannot patch at once. WordPress updates will not help, because the flaw sits in the web server.

Exploit status is unclear. Red Hat says public research has shown a reliable exploit but does not name it. Wiz saw no exploit and no in-the-wild exploitation when it published on November 11. A GitHub proof of concept reproduces memory corruption and crashes but not code execution. The release also fixes CVE-2026-106023, a crash bug, and CVE-2026-109163, a low-severity stack buffer overflow.
