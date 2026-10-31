---
id: 40312c2186
title: Forged certificates using eMudhra's weak keys appeared within an hour of disclosure
original_title: 4 real? Tracking exploitation and patching of eMudhra’s weak keys
url: https://blog.cloudflare.com/emudhra-patching/
source: Cloudflare Blog
kind: blog
section: security
date: "2026-10-31"
published_at: "2026-10-30T17:38:50.000Z"
authors:
  - Maxime Guerreiro
comments: null
tags:
  - tls
  - pki
  - emudhra
  - certificate-transparency
  - cloudflare
  - blog
why_read: >-
  Cloudflare's handshake logs and challenge-page probes show how quickly forged certificates
  appeared and how much of the web still trusts the weak keys.
rank: 5
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

eMudhra generated eight intermediate CA keys that were trivially weak, including the number 4 where a 115-digit number was expected, alongside 56, 66, 115, 155, 156, 230 and 237. Anyone could recover the private keys from the public certificates themselves and issue certificates for any domain an unpatched client not enforcing Certificate Transparency would accept. Cloudflare patched high-impact systems, including its Pingora origin-facing proxies, within hours of learning this on October 19, and an AI-assisted source analysis mapped every other trusting system within four hours.

The exploitation window opened immediately. One forged certificate was dated October 20 at 18:19 UTC, less than an hour after Mozilla's bug report became public. Pingora logging recorded about 22,000 attempted handshakes with the weak keys in the following week, and every handshake configured to verify the certificate was refused because Cloudflare had already patched. Any TLS client that still trusts these keys, or skips Certificate Transparency checks, will accept fraudulent certificates.

Two-thirds of the 22,000 attempts fetched test sites, and almost all the rest went to origins that had issued themselves certificates from the weak intermediate. About 160 handshakes stood out, naming other organisations' domains, some tied to consumer IoT, with validity beyond two years, longer than any public CA may issue. Cloudflare judged these servers' default certificates rather than interception, since they would fail hostname verification and appeared from many locations. It has seen no evidence of interception, though carefully targeted interception is not excluded.

To measure how many visitors still trust the weak keys, Cloudflare added probe connections to a fraction of its challenge pages, one serving an eMudhra-signed certificate, and gathered 50 million probes in a week. The sample is skewed by unconfirmed bots and limited to clients running JavaScript. eMudhra is exiting the public CA business and blames a key generation script mistake it has not published. It signed a revocation list with what may have been a correctly generated key, then corrected the signature to use the weak key.
