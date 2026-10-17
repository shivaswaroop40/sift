---
id: c4a4ad6b77
title: Critical BlockStrap flaw in Magento allows arbitrary code execution on stores
original_title: Critical BlockStrap flaw lets hackers run code on Magento servers
url: >-
  https://www.bleepingcomputer.com/news/security/critical-blockstrap-flaw-lets-hackers-run-code-on-magento-servers/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-17"
published_at: "2026-10-16T20:00:59.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - magento
  - code-execution
  - template-injection
  - e-commerce
  - adobe-commerce
  - cve-2026-103849
  - news
why_read: >-
  Understand the BlockStrap attack mechanism and the specific patching steps needed to protect
  Magento stores.
rank: 11
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A maximum-severity vulnerability in Magento and Adobe Commerce versions through 2.4.9 allows attackers to execute arbitrary PHP code on e-commerce servers. Researchers at Sansec identified four potential attack paths within 24 hours but have not yet observed active exploitation. The flaw exploits a gap in email template processing, allowing attacker-controlled content to be re-processed at the root level.

The BlockStrap vulnerability exposes Magento stores to remote code execution without requiring prior compromise. Adobe rated it priority 2, requiring patching within 30 days, but Sansec argues this underestimates the risk. A similar flaw called StyleSmuggler escalated from priority 1 to mass exploitation in three days, suggesting BlockStrap could follow a similar timeline.

Administrators must apply both the October 2026 Composer release and Adobe's isolated patch. A plain Composer install does not provide adequate protection. The September VULN-39341 hotfix for StyleSmuggler must remain in place alongside the new fix, as BlockStrap and StyleSmuggler require separate patches.
