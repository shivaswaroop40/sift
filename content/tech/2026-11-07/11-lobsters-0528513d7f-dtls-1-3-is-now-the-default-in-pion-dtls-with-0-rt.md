---
id: 0528513d7f
title: DTLS 1.3 is now the default in pion/dtls, with 0-RTT and post-quantum key exchange
original_title: How hard could implementing DTLS 1.3 possibly be?
url: https://joturk.net/posts/dtls
source: Lobsters
kind: community
section: security
date: "2026-11-07"
published_at: "2026-11-07T00:54:14.000Z"
authors:
  - joturk.net via Sean-Der
  - joturk.net via Sean-Der
comments: https://lobste.rs/s/lssm6h/how_hard_could_implementing_dtls_1_3
tags:
  - dtls
  - tls
  - webrtc
  - pion
  - go
  - post-quantum
  - community
why_read: >-
  You get the story of how a team with no TLS background shipped DTLS 1.3, and a plain DTLS
  walkthrough with interactive demos.
rank: 11
interest_score: 6
depth_score: 7
novelty_score: 6
utility_score: 5
scored: true
model: glm-5.3
---

DTLS 1.3 became the default in pion/dtls on 31 October, with v4.0.0-rc.8 tagged and the final v4 next. The feature request had been open since February 2020, when the spec was still a draft. RFC 9147 was published in 2022. An NLnet grant funded the work, which took roughly ten months and about 400 commits. The new stack brings a one-round-trip handshake, post-quantum key exchange, Connection IDs, 0-RTT resumption, and Encrypted Client Hello. DTLS 1.2 remains one option away.

If you run WebRTC in Go, the next major Pion WebRTC release changes your default transport security. The one-round-trip handshake and 0-RTT resumption cut setup latency, which OpenAI had requested so voice AI sessions start sooner. Connection IDs keep sessions alive when a client switches networks. The library also serves users beyond WebRTC, and IoT operators were already testing resumption and Connection IDs on real clusters before release.

The effort nearly stalled early. None of the group that built it had a real TLS background, and four months passed between the January handoff and the first record-layer code in May. Pion creator Sean DuBois reviewed and merged the work and wrote most of the ACK reliability. A Pion client and server first completed a handshake on 29 July, Chrome interop followed on 5 August, and Anthropic's OSS scanner flagged old and new bugs that were fixed before release.
