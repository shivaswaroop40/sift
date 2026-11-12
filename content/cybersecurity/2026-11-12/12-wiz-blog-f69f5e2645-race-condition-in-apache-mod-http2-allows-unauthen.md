---
id: f69f5e2645
title: Race condition in Apache mod_http2 allows unauthenticated remote code execution
original_title: "Critical RCE Vulnerability in Apache HTTP Server: Everything You Need To Know"
url: https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability
source: Wiz Blog
kind: research
section: vulnerabilities
date: "2026-11-12"
published_at: "2026-11-11T19:49:10.000Z"
authors:
  - Merav Bar
  - Merav Bar
comments: null
tags:
  - apache
  - mod-http2
  - rce
  - race-condition
  - cve-2026-119618
  - patching
  - research
why_read: >-
  The post gives the affected version ranges, the HTTP/2 workaround and Wiz's exposure figures,
  though the mod_h2 patched version needs checking against upstream.
rank: 12
interest_score: 7
depth_score: 5
novelty_score: 7
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

CVE-2026-119618 is a critical race condition in the assign_headers() function of Apache HTTP Server's mod_http2 module. Concurrent threads share resources without proper synchronisation, which lets an attacker corrupt heap memory. Wiz says this can lead to arbitrary code execution with the privileges of the web server process, without authentication.

Affected versions run from 2.4.55 through 2.4.70, with the fix in 2.4.71. Standalone mod_h2 builds from GitHub are affected from 2.0.8 through 2.0.42. The patched mod_h2 version is listed as 2.0.24 and newer, which conflicts with the upgrade advice to move past 2.0.42, so check the Apache release notes. Anthropic and Google Cloud's vulnerability research team found the flaw independently.

Wiz reports no public exploit and no known exploitation in the wild at publication. Its data shows 64% of cloud environments have vulnerable resources and 51% have publicly exposed instances. Wiz notes this ignores configuration, so the real number running HTTP/2 will be lower.

If you cannot patch at once, disable HTTP/2 by setting Protocols http/1.1 and removing h2 and h2c references. A compromised instance could give an attacker a route to adjacent services or cloud metadata endpoints.
