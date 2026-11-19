---
id: 85036bfd12
title: Restarting pppd broke IPv6 because networkd never deprecates the old delegated prefix
original_title: IPv6 delegation, an unusually subtle failure mode
url: https://savyasacheejha.com/posts/why-odhcpd/
source: Lobsters
kind: community
section: infrastructure
date: "2026-11-19"
published_at: "2026-11-18T17:52:22.000Z"
authors:
  - savyasacheejha.com via fanf
  - savyasacheejha.com via fanf
comments: https://lobste.rs/s/inj0dn/ipv6_delegation_unusually_subtle
tags:
  - ipv6
  - networkd
  - odhcpd
  - rfc-9096
  - nixos
  - routing
  - community
why_read: >-
  You get a worked diagnosis of a silent IPv6 renumbering failure, the RFC 9096 requirement behind
  it, and which router daemons do or do not handle it.
rank: 11
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

After pppd restarted on a custom NixOS router, Google resolved to an IPv6 address but could not be reached. IPv4 worked. The laptop and an iPhone each held two groups of global IPv6 addresses, and the old group was still preferred. Restarting NetworkManager cleared the old addresses and fixed it.

The cause is renumbering. The ISP hands out a new delegated prefix after reconnection. RFC 9096 says the router should then advertise the old prefix with preferred and valid lifetimes of 0, so hosts stop using it as a source address. systemd-networkd does not do this.

The author found a networkd issue on RFC 7084 support that raises RFC 9096, and an unmerged patch. Similar requests exist for radvd and dnsmasq on OPNsense, and VyOS dynamic-prefix support is still open. odhcpd from OpenWrt does implement it, so he packaged it for nixpkgs and turned off networkd's router advertisements.

After the switch, a deliberate pppd restart left the old addresses marked deprecated with a preferred lifetime of 0, and pings to an IPv6 address succeeded. The author also notes that odhcpd keeps its state across reboots and does not depend on the system clock. That matters on his router, where a dead CMOS battery resets the clock.
