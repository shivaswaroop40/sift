---
id: fd1c6ca913
title: DNS root's second-ever key change arrives October 2026, will break sites without resolver updates
original_title: The keys to the Internet change on October 11. Are you ready?
url: https://blog.cloudflare.com/root-ksk-2024-rollover/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-10-07"
published_at: "2026-10-06T17:50:11.000Z"
authors:
  - Sebastiaan Neuteboom
comments: null
tags:
  - dns
  - dnssec
  - pki
  - infrastructure
  - rootzone
  - blog
why_read: Learn what the DNS root key rollover means for your infrastructure and how to verify readiness.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

On October 11, 2026, the DNS root will change its key-signing key for only the second time. This key anchors DNSSEC's chain of trust, authenticating DNS answers with cryptographic signatures. Validating resolvers must trust the new key, KSK-2024 (tag 38696), before the switch or websites become unreachable.

If your resolver doesn't know the new key, DNSSEC validation will fail for all domains, not just a few. Most site operators need nothing. If you run a validating resolver, verify it trusts KSK-2024 and update trust anchors if absent. Cloudflare's 1.1.1.1 already has it.

Resolvers can discover new keys automatically via RFC 5011, requiring a 30-day wait with verification. KSK-2024 has been published in the root since January 2025. Cloudflare added it to built-in trust anchors in July 2024 after lessons from 2018, when upgrades and machine moves caused resolvers to lose learned keys.

A new standard, RFC 8509, lets you test whether your resolver trusts the key before October 2026. Cloudflare's readiness test uses special DNS queries to check, avoiding surprises during the actual rollover.
