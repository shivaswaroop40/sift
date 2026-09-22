---
id: 7fb64edd6d
title: Study finds 5.65% of production web assets serve live credentials in JavaScript bundles
original_title: "Secrets That Survive Everything: Runtime Credential Exposure in Production Web Applications"
url: https://arxiv.org/abs/2609.23042
source: arXiv cs.CR
kind: paper
section: vulnerabilities
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - Hemanth Gorijala
comments: null
tags:
  - secret-management
  - azure-ad
  - javascript
  - static-analysis
  - credential-exposure
  - runtime-detection
  - paper
why_read: >-
  You'll see quantified evidence that static secret scanners miss a large slice of runtime-exposed
  credentials and get a concrete methodology for catching them.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Researchers found that 113 of roughly 2,000 enterprise web assets at one organisation (5.65%) exposed live credentials in production JavaScript bundles. The exposed material included Azure AD client credentials and APIM subscription keys, two of which enabled account takeover and mass data exposure.

Pre-deployment secret scanning inspects source code only and never inspects what a running application actually serves. This shift-right gap means statically clean codebases can still ship working secrets, leaving runtime-exposed credentials invisible to most existing tooling.

A ground-truth set of 194 credentials (GT-194) was built via Claude Opus 4.7 extraction and manual analyst review, with GPT-5.5 cross-validation. Of these, 13.9% (27 credentials) were recovered only by manual analysis; none of the nine production scanners tested found them. CryptoJS-encrypted configuration defeated every static scanner because the credential materialises only after decryption with a co-located key.

Best static scanner recall reached 36.6%, best runtime-aware scanner 77.8% (F1 0.818, McNemar p < 0.001), and combined coverage plateaued at 86.1%. On 73.3% of the 86 applications with exposed secrets, the full Azure AD token-mint chain was co-located and reachable from browser JavaScript. Findings are scoped to a single-organisation, Azure-heavy corpus.
