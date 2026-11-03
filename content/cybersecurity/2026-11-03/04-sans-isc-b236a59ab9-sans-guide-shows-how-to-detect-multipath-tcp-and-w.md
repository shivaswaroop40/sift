---
id: b236a59ab9
title: SANS guide shows how to detect Multipath TCP, and why Snort cannot
original_title: "Mutipath TCP: Use and Detection, (Mon, Nov 2nd)"
url: https://isc.sans.edu/diary/rss/33482
source: SANS ISC
kind: blog
section: defence
date: "2026-11-03"
published_at: "2026-11-02T14:52:05.000Z"
authors: []
comments: null
tags:
  - mptcp
  - network-monitoring
  - suricata
  - zeek
  - snort
  - blog
why_read: >-
  You get packet-level detail on every MPTCP option, plus ready-to-use filters for tcpdump and
  Suricata and a Zeek script that flags option 30.
rank: 4
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

A new Linux vulnerability in Multipath TCP (CVE-2026-98432, RFC 8684) prompted Johannes Ullrich of SANS to publish a guide on how the protocol appears on networks. MPTCP lets one TCP connection split and hand over between different IP addresses, so mobile devices can move between WiFi and cellular without re-establishing sessions, and servers can fill high-bandwidth links despite single-connection window and sequence number limits. The only widespread use Ullrich has observed is iOS and iPadOS connecting to Apple's 17.0.0.0/8, initially for Siri and later Apple Music.

MPTCP shows up as TCP option 30 (0x1e). Its subflows can confuse monitoring that assumes one address pair per connection. An MP_JOIN subflow may arrive from a different IP address, either host may initiate it, and ports need not match the original connection. The DSS option maps each subflow's sequence numbers onto the combined stream, so each subflow looks like ordinary TCP traffic while being part of a larger session.

Detection comes down to spotting option 30. Wireshark has an mptcp display filter. tcpdump cannot match options, but MPTCP SYN packets have large TCP headers, so a check like tcp[12]>0xd0 works as a heuristic. Suricata's tcp.hdr keyword can match MP_CAPABLE, which is 20 bytes when it carries both keys and starts 1e 14 00 for version 0 or 1e 14 01 for version 1. Zeek needs a small script using its tcp_option event, included in the diary.

Snort has no keyword to inspect TCP options and, as far as Ullrich knows, no way to filter for MPTCP at all. Its experimental TCP option decoder alert fires only on option types reserved for experimental use. Teams standardised on Snort have no direct route to MPTCP visibility.
