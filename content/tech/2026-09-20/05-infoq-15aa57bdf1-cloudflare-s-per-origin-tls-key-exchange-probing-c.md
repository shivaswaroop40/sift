---
id: 15aa57bdf1
title: Cloudflare's per-origin TLS key exchange probing cuts handshake retries from 52% to 3.7%
original_title: Cloudflare Measures Origin TLS Preferences, Cutting Handshake Retries from 52% to 3.7%
url: >-
  https://www.infoq.com/news/2026/09/cloudflare-automatic-key-exchang/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-20"
published_at: "2026-09-20T08:15:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - tls
  - cloudflare
  - post-quantum
  - performance
  - security
  - news
why_read: >-
  You get Cloudflare's measurement data on origin TLS behaviour, the mechanics of the new
  probe-driven key exchange choice, and the operational pitfalls to watch for.
rank: 5
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Cloudflare replaced a blanket X25519 first-packet guess in its origin TLS 1.3 handshakes with per-origin probing. On scanned origins, HelloRetryRequests fell from roughly 52% to 3.7% and p90 handshake latency dropped by more than 150 ms. Post-quantum origin connections completing without a retry rose from 0% to 99.2%.

The static X25519 assumption cost roughly 30% of origin connections an extra round trip, and over 6% of origins prefer P-256 or P-384. Probing is run off the production traffic path, one key exchange group at a time, with origins rescanned daily. The feature is enabled by default and applies one preference per zone.

Two caveats matter for operators. Around 0.34% of origins failed when sent an X25519MLKEM768 keyshare first, because its 1,216-byte size pushes the ClientHello past a single TCP segment and some legacy middleboxes mishandle the split. A new Compliance requirements setting can also block all TLS 1.3 connections to an origin that lacks a permitted algorithm, including post-quantum hybrid or FIPS-only modes.

Cloudflare notes the latency win applies only to new connections, not to keep-alive sessions, and concentrates on cache misses and dynamic requests. The Origin Post-Quantum Encryption API is now a no-op and will be deprecated, while per-origin preference granularity and on-demand scans sit on the roadmap.
