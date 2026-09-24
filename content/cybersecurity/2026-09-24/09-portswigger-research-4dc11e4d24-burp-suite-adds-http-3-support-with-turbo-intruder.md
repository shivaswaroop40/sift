---
id: 4dc11e4d24
title: Burp Suite adds HTTP/3 support with Turbo Intruder speeds over 100,000 RPS
original_title: HTTP/3 in Burp Suite - it’s time to find a bigger wordlist
url: https://portswigger.net/research/http3-in-burp-suite
source: PortSwigger Research
kind: research
section: defence
date: "2026-09-24"
published_at: "2026-09-23T14:00:00.000Z"
authors: []
comments: null
tags:
  - http3
  - burp-suite
  - turbo-intruder
  - race-condition
  - fuzzing
  - quic
  - research
why_read: >-
  It shows practical HTTP/3 fuzzing, race-condition, and downgrade techniques in Burp Suite, with
  concrete RPS numbers and configuration guidance.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

PortSwigger has released two extensions that add HTTP/3 support across Burp Suite. Turbo Intruder now ships with an HTTP3 engine and a new AUTO mode that picks the highest protocol version and tunes settings as an attack runs. A separate HTTP/3 Adapter extension converts HTTP/1.1 and HTTP/2 traffic to HTTP/3 so other Burp tools can reach endpoints that only speak QUIC.

The author reports 100,000 requests per second from a laptop over Wi-Fi and 180,000 RPS from a co-region cloud box, compared with 30,000 RPS over HTTP/1.1 in prior work. Two new race-condition techniques are built in: the single datagram attack from QUIC-er Races and server-side QPACK blocked streams. These fire automatically when the target supports HTTP/3 and target tighter race windows than the existing single-packet attack.

Kettled request syntax now works in the HTTP3 engine, with escapes for CRLF, space, null and arbitrary hex bytes, enabling HTTP/3 downgrade header injection attempts. The adapter has Explicit and Always modes, and an option to log mismatched handshakes so testers can see which origins do not support HTTP/3.
