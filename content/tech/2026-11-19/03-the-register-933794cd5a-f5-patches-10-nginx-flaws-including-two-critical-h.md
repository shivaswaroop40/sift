---
id: 933794cd5a
title: F5 patches 10 NGINX flaws, including two critical HTTP/2 remote code execution bugs
original_title: AI found more critical bugs in another widely used technology running 225M websites
url: >-
  https://www.theregister.com/security/2026/11/18/ai-found-more-critical-bugs-in-another-widely-used-technology-running-225m-websites/5310887
source: The Register
kind: news
section: security
date: "2026-11-19"
published_at: "2026-11-18T21:11:04.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - nginx
  - vulnerabilities
  - http2
  - remote-code-execution
  - ai-security
  - patching
  - news
why_read: >-
  The article gives the affected versions, the HTTP/2 mitigation, and the exploit chain details,
  which help you judge patch urgency for NGINX fleets.
rank: 3
interest_score: 8.3
depth_score: 6
novelty_score: 9
utility_score: 10
scored: true
model: claude-sonnet-5-5
---

F5 released out-of-band patches for 10 CVEs in open source NGINX. Two are unauthenticated remote code execution bugs, CVE-2026-123633 and CVE-2026-123007, both rated 9.2 CVSS. Both need HTTP/2 enabled. The second affects versions back to 1.9.5 in 2015. F5 says it has seen no exploitation in the wild. The fixed version is 1.31.9.

Wiz describes both as memory-safety faults in HTTP/2 handling. One is a use-after-free where connection memory is released while a request still needs it. The other is incorrect flow-control accounting that causes an invalid memory copy. Rapid7 published a proof of concept against an nginx 1.31.8 Docker image on linux/amd64.

Xint found five NGINX flaws and a Linux kernel bug that chains with any of them to give root on the host. It calls the set nginx2root and shows container-to-host escalation on AWS, Azure, Google Cloud and bare metal. Several firms found the bugs independently, mostly with AI help. One Xint scan found four of them without human guidance.

The Register ties this to recent AI-assisted disclosures in PHP, Apache and Java. Wiz's Tomer Schwartz says the hard part now is the manual work after a fix ships: finding affected versions, testing patches, applying mitigations such as disabling HTTP/2, and coordinating rollouts. His claim that AI research will eventually harden core software is an opinion, not a finding.
