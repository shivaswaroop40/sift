---
id: ea9d125287
title: Meta deploys authenticated NTP using Network Time Security protocol
original_title: "NTS: Authenticated Time at Meta"
url: https://engineering.fb.com/2026/10/06/production-engineering/nts-authenticated-time-at-meta/
source: Meta Engineering
kind: blog
section: infrastructure
date: "2026-10-07"
published_at: "2026-10-06T16:00:06.000Z"
authors: []
comments: null
tags:
  - ntp
  - authentication
  - cryptography
  - distributed-systems
  - certificates
  - protocol-design
  - blog
why_read: >-
  Understand how Meta secured its time service at scale without storing per-client state or
  maintaining session tables.
rank: 6
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Meta has launched NTS (Network Time Security) for its public time service at nts.meta.com. The protocol authenticates NTP packets so clients can verify the time source and detect modification in transit. Cookie keys are derived per-day rather than stored or replicated, eliminating distributed state management.

Unauthenticated NTP has been a foundational security gap since 1985. Time validation underpins certificate expiry, token claims, replay windows and log ordering. As certificate lifespans shrink from 398 days to 47 days by 2029, manual renewal becomes unviable and automated ACME loops on skewed clocks will silently fail or reissue without alerting operators.

NTS separates key establishment (TLS 1.3 handshake once per session) from authenticated NTP queries (stateless UDP exchanges). The server derives daily sealing keys from a master secret, accepting cookies from two days back to one day forward to handle rotation boundaries. Forged packets fail verification without NAK responses that could signal failure.
