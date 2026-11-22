---
id: 411dbf6eff
title: USB hub latency in a monitor capped a 2.5G Ethernet adapter's downloads at 600 Mbps
original_title: My monitor was cutting my download speed by 75%
url: https://blog.tymscar.com/posts/studiodisplayethernet/
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-11-22"
published_at: "2026-11-21T10:36:32.000Z"
authors:
  - soheilpro
comments: https://news.ycombinator.com/item?id=50587875
tags:
  - networking
  - debugging
  - usb
  - ethernet
  - flow-control
  - macos
  - community
why_read: >-
  You get a worked example of isolating a throughput fault with iperf3, UDP rate sweeps and adapter
  counters, plus a clear account of how USB burst size and hub latency limit drain rate.
rank: 5
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

A user with a 2.5 Gbps line found downloads stuck at about 600 Mbps while uploads ran at 2.4 Gbps. The cause was a USB-C 2.5G Ethernet adapter (Realtek RTL8156B) plugged into a Studio Display XDR. Plugged straight into the Mac, it managed 2.2 to 2.3 Gbps both ways.

Realtek's own macOS driver raised downloads to 1.1 Gbps. Enabling Ethernet flow control on the router lifted them to about 2 Gbps. UDP tests showed the adapter handing frames to the Mac at a ceiling of about 168,000 per second, roughly 2 Gbps, and dropping the rest. Direct to the Mac, drops were near zero.

The author's explanation is burst size. The adapter sends 4 USB packets before waiting for an acknowledgement. An SSD enclosure sends 16. Through the monitor's hub, the acknowledgement takes about 7.6 µs and sending 4 KB takes about 8.2 µs. That caps drain at about 2 Gbps against 2.5 Gbps arriving, so the buffer overflows and TCP backs off hard.

This is one person's diagnosis from a single hardware combination, and the text is truncated before the final fix. The mechanism fits the measurements, but it has not been confirmed by Apple or Realtek. Flow control also carries a latency cost for other devices on the network.
