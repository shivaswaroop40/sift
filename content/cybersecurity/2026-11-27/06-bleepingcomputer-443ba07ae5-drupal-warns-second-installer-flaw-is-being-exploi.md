---
id: 443ba07ae5
title: Drupal warns second installer flaw is being exploited to take over sites
original_title: Drupal warns of new site takeover flaw exploited in attacks
url: >-
  https://www.bleepingcomputer.com/news/security/drupal-warns-of-new-access-bypass-flaw-exploited-in-attacks/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-11-27"
published_at: "2026-11-27T10:10:15.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - drupal
  - cve-2026-136716
  - actively-exploited
  - rce
  - cms
  - patching
  - news
why_read: >-
  The article gives the fixed Drupal versions, the interim block on /core/install.php, and the
  checks for user 1 that show whether a site may already be compromised.
rank: 6
interest_score: 7
depth_score: 5
novelty_score: 7
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Drupal says attackers are exploiting a second critical flaw, CVE-2026-136716, that allows takeover of unpatched sites. It follows CVE-2026-132165 (Fail2Install), a remote code execution bug in the installer patched a week earlier. That earlier flaw was exploited one day after patches were released, according to an updated advisory.

The new patch covers attack paths the first fix left open. Drupal says sites in unusual or incomplete install states stay vulnerable, including production sites. The user interface does not show whether a site is in that state. Sites already compromised may no longer be in it.

Any site that left its installer remotely accessible after SA-CORE-2026-017 may have been compromised. Drupal has not shared details of the attacks. Admins should confirm the user 1 email address is one they control and consider resetting it. They should also check logs for unexpected changes to or by user 1.

The fixed versions are Drupal 10.6.23, 11.3.23 and 11.4.14. If you cannot upgrade at once, block /core/install.php in the web server configuration or the .htaccess file in the web root. CISA lists six Drupal flaws as exploited since November 2021, two used in ransomware attacks.
