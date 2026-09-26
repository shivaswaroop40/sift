---
id: d059c18dd1
title: ShinyHunters breached Clop leak site via unpatched Grav CMS path traversal flaw
original_title: ShinyHunters hacked Clop leak site using Grav CMS path traversal flaw
url: >-
  https://www.bleepingcomputer.com/news/security/shinyhunters-hacked-clop-leak-site-using-grav-cms-path-traversal-flaw/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-26"
published_at: "2026-09-25T20:57:55.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - grav-cms
  - path-traversal
  - shinyhunters
  - clop
  - cve-2026-42608
  - vulnerability
  - news
why_read: >-
  You will see the exact mechanism behind the Grav CMS flaw exploited against Clop and which
  versions are still exposed.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

The Clop ransomware gang has migrated its data leak site to a new Tor address after ShinyHunters defaced the previous server using CVE-2026-42608, an unauthenticated path traversal flaw in Grav CMS. ShinyHunters uploaded a defacement page, then claimed it had stolen source code, server logs, and the private keys for Clop's onion service.

The flaw lies in Grav core rather than the Form plugin. The vulnerable code inserted the __unique_form_id__ POST parameter into a temporary directory path of the form tmp/forms/<session_id>/<unique_id> without validating it. A value such as ../../../shhq caused file uploads to land outside the intended directory.

The issue was fixed in Grav 2.0 earlier in 2026 but was not backported to the older 1.7 branch until BleepingComputer shared the technical details with Grav. Grav 1.7.53.4 now contains the fix, and any site still running the 1.7 line should upgrade.

Clop acknowledged it had not fully updated its Grav installation and described the compromised server as containing only content rather than financial or operational data. ShinyHunters declined to comment when asked why Clop's listing was removed from its own leak site.
