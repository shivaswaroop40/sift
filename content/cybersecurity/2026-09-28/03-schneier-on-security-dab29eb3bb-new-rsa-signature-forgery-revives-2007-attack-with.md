---
id: dab29eb3bb
title: New RSA signature forgery revives 2007 attack with practical 1024-bit break
original_title: New Attack Against RSA
url: https://www.schneier.com/blog/archives/2026/09/new-attack-against-rsa.html
source: Schneier on Security
kind: blog
section: threat-research
date: "2026-09-28"
published_at: "2026-09-28T11:02:58.000Z"
authors:
  - Bruce Schneier
comments: null
tags:
  - rsa
  - cryptography
  - signatures
  - forgery
  - academic-papers
  - blog
why_read: >-
  You get a corrected read of the RSA forgery result, with the practical scope and limitations a
  security engineer needs.
rank: 3
interest_score: 8
depth_score: 9
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

A 2007 attack against RSA has been implemented and demonstrated against 1024-bit RSA keys. The researchers forged signatures in 1380 CPU core-years, over five real-world months, without factoring the modulus or recovering the private key.

This matters because the forgery bypasses the usual assumption that breaking RSA signatures requires factoring. Any defender relying on signature integrity alone without padding or formatting is exposed to subexponential-time forgery at large key sizes.

The attack only works on unpadded, unformatted RSA signatures. In practice, RSA is deployed with schemes like PKCS#1 v1.5 or PSS, which add padding the attack does not defeat. Standard implementations remain safe.

The authors' description is clearer than the Ars Technica coverage and includes a link to the original paper for context.
