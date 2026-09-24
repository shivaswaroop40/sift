---
id: 52922c8585
title: Radicle discloses two critical protocol flaws allowing on-path eavesdropping and impersonation
original_title: Critical security vulnerabilities in the Radicle network protocol
url: https://lwn.net/Articles/1096200/
source: LWN
kind: news
section: security
date: "2026-09-24"
published_at: "2026-09-23T14:20:46.000Z"
authors:
  - jzb
comments: null
tags:
  - radicle
  - security
  - p2p
  - vulnerability
  - authentication
  - news
why_read: >-
  You will see exactly how the two Radicle protocol flaws combine, what an on-path attacker can
  actually do, and why your allow-list does not help.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

The Radicle project has disclosed two critical vulnerabilities in the network protocol used by Radicle nodes. The first flaw means the protocol fails to deliver the confidentiality it was meant to provide, so anyone able to observe traffic between two nodes can read the data exchanged. The second flaw breaks peer authentication, letting an attacker spoof a Node ID and read private repositories they should not have access to.

The two flaws are most damaging when chained. An on-path attacker can observe the Node IDs at both ends of a connection, which are normally on each side's allow-list. That attacker can read traffic as it flows and then use a captured Node ID to pull the whole repository on demand. No allow-list setting protects against a peer that has been observed on the wire.

The advisory was published before a fix is available. The project says a major, backward-incompatible update is underway and has pointed to workarounds in the post for operators who want to act now.
