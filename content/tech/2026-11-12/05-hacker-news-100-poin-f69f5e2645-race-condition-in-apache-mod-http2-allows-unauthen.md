---
id: f69f5e2645
title: Race condition in Apache mod_http2 allows unauthenticated remote code execution, fixed in 2.4.71
original_title: Critical RCE Vulnerability in Apache HTTP Server
url: https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-12"
published_at: "2026-11-12T02:11:11.000Z"
authors:
  - soheilpro
comments: https://news.ycombinator.com/item?id=50462177
tags:
  - apache
  - http2
  - rce
  - cve
  - race-condition
  - patching
  - community
why_read: >-
  The original gives the affected version ranges, the HTTP/2 disable workaround and Wiz's exposure
  figures, which help you scope patching across Apache fleets.
rank: 5
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

CVE-2026-119618 is a race condition in the assign_headers() function of Apache HTTP Server's mod_http2. Improper synchronisation between threads sharing resources lets a remote, unauthenticated attacker corrupt heap memory and potentially run arbitrary code with the web server's privileges. Anthropic and Google Cloud's Vulnerability Research Team found it independently.

Affected versions run from 2.4.55 through 2.4.70, and the fix is in 2.4.71. Wiz says no exploit is available and there are no reports of exploitation in the wild. Its data puts 64% of cloud environments as holding vulnerable resources and 51% as having publicly exposed instances, though it says this ignores configuration.

If you cannot patch at once, the stated mitigation is to disable HTTP/2 by setting Protocols http/1.1 and removing h2 and h2c. The exposure figures are vendor telemetry and do not show how many instances actually enable HTTP/2. Check that before judging urgency.

The advisory's version table for the standalone mod_h2 module is inconsistent. It lists a patched version of 2.0.24 and newer, while the remediation text says to upgrade beyond 2.0.42. Treat the text as the safer reading and confirm against upstream release notes.
