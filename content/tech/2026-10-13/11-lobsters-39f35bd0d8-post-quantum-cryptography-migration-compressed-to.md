---
id: 39f35bd0d8
title: Post-quantum cryptography migration compressed to three years with new recommendations
original_title: (Post-Quantum) Cryptographic Right Answers
url: https://words.filippo.io/right-answers/
source: Lobsters
kind: community
section: security
date: "2026-10-13"
published_at: "2026-10-12T13:44:38.000Z"
authors:
  - words.filippo.io via jtdowney
  - words.filippo.io via jtdowney
comments: https://lobste.rs/s/sozl9e/post_quantum_cryptographic_right
tags:
  - post-quantum
  - cryptography
  - key-exchange
  - signatures
  - encryption
  - standards
  - community
why_read: >-
  Learn which cryptographic primitives to use now if your systems need to survive quantum threats
  within three years.
rank: 11
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

The post-quantum cryptography transition timeline shifted dramatically in early 2026, with consensus now requiring completion by 2029. A new set of cryptographic guidance updates prior recommendations, with most asymmetric answers changed since 2018 and many since 2024. Symmetric cryptography remains unaffected by quantum threats.

For distributed systems engineers, the immediate practical changes centre on asymmetric cryptography. Key exchange now uses X25519 plus ML-KEM-768 in secure protocols. Asymmetric signatures move to ML-DSA-44. Asymmetric encryption uses HPKE with ML-KEM-768 and X25519, or age with post-quantum keys.

Symmetric encryption guidance remains largely stable: use KMS in cloud environments, otherwise XAES-256-GCM or XChaCha20Poly1305 with random nonces. For large messages over a few megabytes, use Cobblestone-128 to avoid processing unauthenticated plaintext. The guidance assumes no specific compliance regime beyond FIPS 140 compatibility.
