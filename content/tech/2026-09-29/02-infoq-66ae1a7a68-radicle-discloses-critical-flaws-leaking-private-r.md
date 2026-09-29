---
id: 66ae1a7a68
title: Radicle discloses critical flaws leaking private repos in cleartext
original_title: Radicle Discloses Critical Flaws Exposing Private Repositories in Plain Text
url: >-
  https://www.infoq.com/news/2026/09/radicle-network-vulnerabilities/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-09-29"
published_at: "2026-09-28T14:14:00.000Z"
authors:
  - Olimpiu Pop
comments: null
tags:
  - security
  - radicle
  - p2p
  - git
  - vulnerability
  - heartwood
  - news
why_read: >-
  You will get the exact mechanism behind the two flaws, what is and is not actually compromised,
  and the workarounds until the Iroh-based release ships.
rank: 2
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Radicle has disclosed two critical flaws in its core wire protocol affecting every release of radicle-node to date. The Noise XK handshake derives session keys but the daemon never reads them, so all post-handshake traffic including Git packfiles and gossip metadata travels in cleartext over raw TCP. A second flaw lets attackers spoof an allow-listed Node ID and impersonate authorised peers to pull private repositories directly from seed nodes.

Git integrity survives because objects are content-addressed and references are signed, but transport confidentiality and peer authentication are absent. On-path attackers can passively capture Node IDs in cleartext and then use the authentication defect to impersonate trusted nodes, exposing any private repository cloned, pushed or seeded over clearnet. There is no protocol version negotiation field, so the maintainers cannot ship a backward-compatible patch and will replace the Noise transport with Iroh (QUIC plus TLS) in a hard network-partitioning release.

Until patched binaries ship, operators should treat all clearnet private repositories as compromised, rotate any secrets stored in them, and confine node traffic to WireGuard tunnels, SSH forwarding, or onion or I2P endpoints. Tor exit nodes do not help because traffic leaves them in cleartext. Legacy 1.x nodes will not interoperate with upgraded peers after the Iroh migration.
