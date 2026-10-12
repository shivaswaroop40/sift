---
id: b491f16b4c
title: Safety responses in industrial control systems can create new attack paths across IT and OT layers
original_title: "Safety Graph: When Safety Responses Become Attack Surfaces in Cyber-Physical Systems"
url: https://arxiv.org/abs/2610.13086
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-10-12"
published_at: "2026-10-12T04:00:00.000Z"
authors:
  - Rakesh Podder
  - Philip D. Hopkins
  - Sarath Sreedharan
  - Indrakshi Ray
  - Indrajit Ray
comments: null
tags:
  - industrial-control
  - lateral-movement
  - safety-systems
  - cyber-physical
  - cascading-failures
  - paper
why_read: Understand how safety mechanisms can amplify attack scope in critical infrastructure systems.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Industrial control systems defend against failures using safety responses in the operational technology layer. Researchers show these responses can become attack surfaces, opening new lateral movement paths. The work models how safety mechanisms intended to contain failures can instead trigger cascading cyber attacks across IT and OT systems.

Security teams currently lack tools to reason about bidirectional IT-OT attacks. Existing frameworks model cyber-to-physical escalation but do not capture how safety responses to OT failures create new attack vectors in the IT layer. This gap means defenders cannot identify all paths an attacker might exploit after triggering an initial failure.

The researchers built Safety Graph, a framework combining attack graphs, fault trees, and event trees to model full IT-OT cascades. They used A* planning to search for cross-layer attack paths in a chemical plant model. The framework automatically discovered lateral movements induced by safety responses that existing models would miss.
