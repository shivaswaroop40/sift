---
id: 8de0a11356
title: Radicle discloses two critical flaws that expose private repos in transit
original_title: "Radicle: Disclosure of Vulnerability in the Network Protocol"
url: https://radicle.dev/2026/09/23/disclosure-of-vulnerability-in-network-protocol.html
source: Lobsters
kind: community
section: security
date: "2026-09-24"
published_at: "2026-09-23T14:34:37.000Z"
authors:
  - radicle.dev via tuxes
  - radicle.dev via tuxes
comments: https://lobste.rs/s/ad5vwg/radicle_disclosure_vulnerability
tags:
  - security
  - p2p
  - git
  - radicle
  - disclosure
  - community
why_read: >-
  You will get a concrete breakdown of what is actually broken, why mitigations like Tor are not
  enough, and the exact commands to stop leaking private repos today.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Radicle has disclosed two critical vulnerabilities in the network protocol used by its peer-to-peer, Git-based collaboration stack. The first is that node-to-node traffic is sent in plaintext, with no encryption or authentication in the connection handshake. The second is a broken peer authentication step that lets an attacker present a Node ID that is not their own when fetching from your node.

The two flaws chain usefully. An on-path attacker who can see a connection between two allow-listed nodes can read the traffic in real time and then use a captured Node ID to fetch the whole private repository directly later. Signed references still detect tampering with Git objects, so the issue is confidentiality rather than integrity of the code.

All versions of Radicle released to date are affected, including the current production node. There is no backward-compatible mitigation, because the fix is on the wire and there is no version negotiation. A major-version bump is planned, with the network layer set to migrate to the iroh stack. Until a fixed release ships, the only recommended action is to stop using and stop seeding private repositories.

Overlays such as Tor, I2P or a VPN hide traffic from a path observer but do not stop peer impersonation, so the Radicle team does not treat them as sufficient. Users are advised to treat any private repository that has already been transmitted to another node as disclosed, rotate any secrets that may have been in it, and ask authorised peers to block the repository too.
