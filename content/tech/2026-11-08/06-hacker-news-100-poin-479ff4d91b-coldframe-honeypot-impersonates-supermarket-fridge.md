---
id: 479ff4d91b
title: Coldframe honeypot impersonates supermarket fridge controllers and fools Shodan
original_title: "Show HN: Coldframe, a honeypot that poses as a supermarket fridge controller"
url: https://github.com/hedgerow-dev/coldframe
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-08"
published_at: "2026-11-07T17:27:30.000Z"
authors:
  - hedgerow-dev
comments: https://news.ycombinator.com/item?id=50406292
tags:
  - honeypot
  - shodan
  - ot-security
  - python
  - deception
  - community
why_read: >-
  The repository holds the single-file implementation and the emulated Danfoss and Dixell interfaces
  behind the deception.
rank: 6
interest_score: 6
depth_score: 6
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

A developer has released Coldframe, a honeypot that impersonates supermarket refrigeration controllers. It emulates the web interfaces of the Danfoss AK-SM 800A and Dixell XWEB, and the author reports that Shodan classifies both emulated endpoints as real devices rather than honeypots. The implementation is a single Python file that depends only on the standard library. The author built it after recent incidents on industrial fridge installations.

The Shodan detail is the interesting part. Attackers pick targets from internet-wide scans, so a decoy that survives fingerprinting at the reconnaissance layer draws the same attention as production kit. If you run exposed building controls or similar embedded web frontends, this is a cheap way to observe what gets tried against that device class, without instrumenting a real controller.

The evidence is thin in places. The Shodan classification and the claim of a convincing emulation come from the author's own report. The post also cuts off mid-sentence, so details on logging, alerting and deployment are not covered.
