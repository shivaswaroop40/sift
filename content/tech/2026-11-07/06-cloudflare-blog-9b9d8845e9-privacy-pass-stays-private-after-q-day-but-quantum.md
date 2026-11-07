---
id: 9b9d8845e9
title: Privacy Pass stays private after Q-day, but quantum attackers can forge its tokens
original_title: The post-quantum future of web privacy
url: https://blog.cloudflare.com/vole-mole/
source: Cloudflare Blog
kind: blog
section: security
date: "2026-11-07"
published_at: "2026-11-06T14:00:00.000Z"
authors:
  - Christopher Patton
comments: null
tags:
  - privacy-pass
  - post-quantum
  - cryptography
  - blind-signatures
  - cloudflare
  - blog
why_read: >-
  The original walks through MOLE's endorsement and credential design and the post-quantum blind
  signature options behind it.
rank: 6
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

Cloudflare has assessed how Privacy Pass fares against quantum attackers. The protocol's privacy holds, because token redemption is unconditionally unlinkable from issuance, so no attacker can connect the two. Its authentication does not hold. Privacy Pass still uses RSA and elliptic curves, so a quantum attacker could forge tokens at will and bypass rate limits and other abuse controls. Cloudflare is now designing a successor, called MOLE, based on a recent breakthrough in blind signature design.

Privacy Pass has ten years of deployment behind it, including iCloud Private Relay and Cloudflare's Privacy Gateway, so this is running infrastructure rather than a proposal. The size problem mirrors the one facing TLS. ML-DSA-44 signatures run to 2,420 bytes against 64 bytes for ECDSA-P256, and Cloudflare sees little hope of drop-in replacements. Systems will have to absorb the higher cost through re-engineering.

MOLE, short for Moderation Of unLinkable Endorsements, changes what a token reveals. Today a verifier learns which issuer signed a Privacy Pass token. In MOLE, an anchor issues an endorsement, and the client proves at redemption that some anchor in a trusted anchor set issued it, without saying which. The moderator then issues a credential. Hiding the issuer guarantees equal treatment across client types.

This is a design sketch, not a shipped protocol. Cloudflare frames MOLE around two goals, managing agentic traffic that would otherwise degrade performance for human visitors, and letting more client types participate. Credentials need not be anchor-hiding or publicly verifiable, so blind signatures, anonymous credit tokens, or anonymous rate-limited credentials could all instantiate them.
