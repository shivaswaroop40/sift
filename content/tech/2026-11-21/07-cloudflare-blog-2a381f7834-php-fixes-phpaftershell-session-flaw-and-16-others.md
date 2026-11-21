---
id: 2a381f7834
title: PHP fixes phpAfterShell session flaw and 16 others; Cloudflare WAF rules block known patterns
original_title: How Cloudflare WAF helps protect against phpAfterShell and other critical PHP flaws
url: https://blog.cloudflare.com/phpaftershell-waf-protection/
source: Cloudflare Blog
kind: blog
section: security
date: "2026-11-21"
published_at: "2026-11-20T20:00:45.000Z"
authors:
  - Daniele Molteni
comments: null
tags:
  - php
  - phpaftershell
  - cloudflare-waf
  - cve
  - remote-code-execution
  - patching
  - blog
why_read: >-
  The original has a per-CVE table of the exact configuration conditions, which lets you judge
  whether your own PHP deployments are actually exposed.
rank: 7
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

On 19 November 2026, depthfirst disclosed phpAfterShell (CVE-2026-126714), a CVSS 4.0 9.2 flaw in PHP's default file-based session handler that can lead to remote code execution. PHP fixed it the same day in 8.2.36, 8.3.37, 8.4.28, 8.5.13 and 8.6.0. Those releases also fix 16 other vulnerabilities, six of them critical.

The bug is triggered when a session write is interrupted. The file can then hold new data followed by the tail of old data, which is deserialised on the next request. An attacker needs to control the old data, for example through session upload progress or large user-controlled strings in the session. PHP says code execution also needs a useful interruption point and a gadget chain.

Cloudflare says its WAF blocks known phpAfterShell patterns on all plans, via a PHP RCE rule first shipped in October and updated on 19 November. It added three paid-plan rules, for a PHP-FPM request smuggling flaw and two SOAP flaws. These default to Log, because the patterns can match legitimate traffic. Cloudflare itself says the WAF is no replacement for patching.

Each of the other critical flaws needs specific conditions. The PHP-FPM smuggling bug needs a front end that reuses FastCGI connections. Several use-after-free bugs depend on PHP 8.5 or on particular error-log settings. Cloudflare notes distributions often backport fixes without changing the version number. It found no reports of exploitation, and none of the 17 is in CISA's KEV catalogue. The source is vendor-written and truncated.
