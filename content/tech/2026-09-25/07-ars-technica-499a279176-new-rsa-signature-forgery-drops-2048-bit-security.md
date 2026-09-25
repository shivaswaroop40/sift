---
id: 499a279176
title: New RSA signature forgery drops 2048-bit security to 2^90 without factoring
original_title: There's a new way to break RSA that's faster than anything we've seen before
url: >-
  https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/
source: Ars Technica
kind: news
section: security
date: "2026-09-25"
published_at: "2026-09-24T11:15:44.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/#comments
tags:
  - rsa
  - cryptography
  - security
  - privacy-pass
  - post-quantum
  - research
  - news
why_read: >-
  You will get the concrete numbers behind the new RSA forgery attack and which real deployments are
  actually in scope.
rank: 7
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers led by UC San Diego have published an attack that forges RSA signatures without first factoring the key. It uses a 2007 variant of the number field sieve combined with an oracle exposed by certain protocols. The forgery against 1024-bit RSA took 1,380 core-years, against an estimated 500,000 to 1 million core-years for full factoring.

The attack only works against textbook or blind-signature RSA, not the PKCS#1 or PSS padded implementations used in the vast majority of deployments. Real-world targets include Privacy Pass, used by Apple and Cloudflare, where forging a token would need about 2^43 requests, roughly a day of Cloudflare traffic.

Even padded RSA gets a downgrade. Security levels fall to 2^65, 2^90, and 2^119 for 1024, 2048, and 4096-bit keys, below the 2^128 floor set by NIST and ENISA. The work was hand-coded without GPUs or AI, and researchers expect further reductions.

The lead author is Laura Shea at UC San Diego, with Nadia Heninger as co-author. The paper claims a conceptual breakthrough because it breaks RSA without factoring, which will raise pressure on the migration to post-quantum cryptography.
