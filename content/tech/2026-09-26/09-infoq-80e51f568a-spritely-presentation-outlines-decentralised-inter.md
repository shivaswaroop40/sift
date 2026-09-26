---
id: 80e51f568a
title: Spritely presentation outlines decentralised internet stack built on Scheme and Wasm
original_title: "Presentation: Spritely: Infrastructure for the Future of the Internet"
url: >-
  https://www.infoq.com/presentations/spritely-decentralized-architecture/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-09-26"
published_at: "2026-09-25T11:00:00.000Z"
authors:
  - Christine Lemmer-Webber
  - David Thompson
comments: null
tags:
  - decentralisation
  - capability-security
  - actor-model
  - webassembly
  - scheme
  - local-first
  - news
why_read: >-
  You will see one team's full-stack answer to centralisation, from capability-based access control
  to Wasm-compiled Scheme peers.
rank: 9
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

A QCon London talk by Spritely Institute leaders Christine Lemmer-Webber and David Thompson laid out an infrastructure for peer-to-peer applications that avoids central servers. The stack uses Goblins for capability-secure actor-model programming, OCapN for inter-actor communication, Hoot as a Scheme-to-WebAssembly compiler, and local-first CRDTs for state. Petnames handle human-readable identifiers in a capability-based system.

For engineers, the pitch is a concrete alternative to federated, server-hosted services. Capability security replaces account-based permissions, the actor model localises failure, and Wasm compilation lets the same code run across peers. The decentralised social protocol ActivityPub, which Lemmer-Webber co-authored and which powers Mastodon, is cited as prior work by the same team.

Caveat: the transcript is a presentation summary, not a release announcement. No benchmarks, deployment numbers, or production users are given, so production readiness is unstated. The talk frames centralisation risks around VC incentives, legislative moats, and platform surveillance rather than technical failure modes.
