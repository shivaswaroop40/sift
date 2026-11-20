---
id: f7729fafe5
title: PHP November release fixes seven critical RCE flaws, including a bypass of the PHP2Shell patches
original_title: "phpAfterShell and Critical PHP RCE Vulnerabilities: Everything You Need To Know"
url: https://www.wiz.io/blog/phpaftershell-critical-php-rce-vulnerabilities-cve-2026-126714
source: Wiz Blog
kind: research
section: vulnerabilities
date: "2026-11-20"
published_at: "2026-11-19T21:46:23.000Z"
authors:
  - Merav Bar
  - Merav Bar
comments: null
tags:
  - php
  - rce
  - php-fpm
  - phpaftershell
  - request-smuggling
  - patching
  - research
why_read: >-
  The post gives the affected and patched versions, a table of all 17 CVEs, and interim
  configuration changes for teams that cannot upgrade straight away.
rank: 7
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

On 19 November 2026 the PHP group patched 17 vulnerabilities across the 8.2, 8.3, 8.4 and 8.5 branches. Seven are rated Critical at CVSS 9.2 and offer routes to unauthenticated remote code execution. Fixed versions are 8.5.13, 8.4.28, 8.3.37 and 8.2.36. Wiz reports no exploitation in the wild and none in public reporting.

Two flaws stand out. phpAfterShell (CVE-2026-126714) abuses non-atomic writes in the default file-based session handler. A worker killed mid-write leaves a malformed session file, and session_start() then deserialises it. The PHP-FPM request smuggling bug (CVE-2026-129289) lets an attacker hide a second FastCGI request in a request body when the proxy reuses backend connections.

The release matters because October's PHP2Shell mitigations do not cover all of these vectors. CVE-2026-129481 is an incomplete fix for the PHP2Shell flaw itself. PHP 8.1 and earlier are end of life and get no fix. PHP 8.2 moves to security-only support, which ends in December 2026.

Exposure depends on configuration. phpAfterShell needs file-based sessions and a usable gadget chain in the application, which may not exist. Most other critical bugs need non-default settings, such as mixed session serialisers or zend.exception_ignore_args = 0 on PHP 8.5. Default installs avoid many of them.
