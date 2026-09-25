---
id: 4b04e2df32
title: Researchers show 1024-bit RSA signatures can be forged in SNFS time
original_title: Forging 1024-bit RSA signatures in nearly SNFS time
url: https://eprint.iacr.org/2026/2131.pdf
source: Lobsters
kind: community
section: security
date: "2026-09-25"
published_at: "2026-09-24T15:13:35.000Z"
authors:
  - eprint.iacr.org via dzwdz
  - eprint.iacr.org via dzwdz
comments: https://lobste.rs/s/ah5jnf/forging_1024_bit_rsa_signatures_nearly
tags:
  - rsa
  - cryptography
  - security
  - factoring
  - community
why_read: >-
  You will see a concrete challenge to the standard factoring-based model of RSA security at 1024
  bits.
rank: 2
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

A new paper claims that forging a 1024-bit RSA signature can be done in close to the time it takes to factor a number of similar size using the special number field sieve, rather than the general number field sieve. The work builds on a 2007 algorithm by Joux, Naccache and Thomé that only needs temporary access to a raw RSA signing key.

For practitioners, the result narrows the gap between theoretical factoring cost and practical signature forgery. A 1024-bit key was already considered weak by most guidance, but the standard argument is that factoring 1024-bit integers via GNFS is roughly 1024 bits of difficulty. If forgery is closer to SNFS complexity, the real cost is lower than the GNFS estimate implies.

The abstract does not give exact core-hours, hardware assumptions or a full implementation cost, so the practical feasibility for an attacker remains unclear. Treat the claim as a security model result rather than a ready-to-run attack until the paper's numbers are checked.
