---
id: 7b164eab9a
title: Claude traces NIST curve seeds to 1990s random number generator
original_title: Claude reveals ECDSA curve origins
url: https://www.anthropic.com/research/ecdsa-curve-origins
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-10-17"
published_at: "2026-10-16T18:55:59.000Z"
authors:
  - ahlCVA
comments: https://news.ycombinator.com/item?id=50122800
tags:
  - ecdsa
  - cryptography
  - nist
  - prng
  - elliptic-curves
  - community
why_read: >-
  Learn how Claude reverse-engineered a cryptographic mystery through pattern analysis of published
  parameters.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Anthropic's Claude AI recovered the origins of NIST elliptic curve seeds by recognising output patterns from the lrand48 C library random-number generator seeded with Unix timestamps from 1997 and 1998. The NSA had never explained how these seeds were generated, sparking decades of speculation about possible backdoors.

For distributed systems engineers, this matters because ECDSA is fundamental to TLS, certificate signing, and blockchain systems. The finding eliminates a long-standing concern: the seeds were not the result of sophisticated design, but rather a simple clock-seeded PRNG. This makes backdoors far less plausible.

The discovery used pattern recognition on the bit structure of published seeds, recovery of PRNG internal state via lattice reduction, and verification that recovered initialization values corresponded to historical dates. No cryptographic weakness in the curves themselves was found.
