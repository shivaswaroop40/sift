---
id: d1be641892
title: Drupal patches critical RCE flaws in core and contributed modules
original_title: Drupal patches critical RCE flaws, warns exploits may emerge soon
url: >-
  https://www.bleepingcomputer.com/news/security/drupal-patches-critical-rce-flaws-warns-exploits-may-emerge-soon/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-18"
published_at: "2026-10-17T14:32:48.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - drupal
  - rce
  - cve
  - cms
  - patch
  - field-ui
  - news
why_read: Learn the patch versions and exploitation paths for two critical Drupal flaws now public.
rank: 2
interest_score: 7.7
depth_score: 7
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Drupal has released patches for two critical remote code execution vulnerabilities affecting all supported versions of the CMS. CVE-2026-108097 affects the Field UI module in core, while CVE-2026-108099 targets the Entity List contributed module. Both can be exploited without authentication through certain code paths.

These flaws matter because Drupal powers over one million websites, including many run by government agencies, universities, and non-profits. The Drupal Security Team warned that exploits could emerge within hours or days of disclosure, making rapid patching essential for production systems.

Administrators should update to Drupal 10.6.19, 11.3.19, or 11.4.10 depending on their branch, and Entity List to 3.0.10. As a temporary mitigation, disabling the field_ui module can reduce exposure, though this is not a complete fix.
