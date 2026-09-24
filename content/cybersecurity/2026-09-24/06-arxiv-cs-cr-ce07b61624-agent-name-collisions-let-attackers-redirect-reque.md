---
id: ce07b61624
title: Agent name collisions let attackers redirect requests in multi-agent hosts
original_title: Agent Name Collision Attacks in Multi-Agent Systems
url: https://arxiv.org/abs/2609.27624
source: arXiv cs.CR
kind: paper
section: vulnerabilities
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Adithyan Arun Kumar
comments: null
tags:
  - a2a
  - agent-name-collision
  - multi-agent
  - routing
  - implementation-bug
  - arxiv
  - paper
why_read: >-
  It pinpoints a concrete integration mistake, wrong-peer dispatch, in A2A clients and brokers, and
  gives defenders a checklist for binding routes to stable identities.
rank: 6
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers traced how seven open-source A2A integrations handle remote Agent Card names. Six client-style implementations picked the attacker's endpoint when a trusted peer's name was requested, because the host used the human-readable card name as a local routing key. A seventh brokered implementation collapsed both peers onto one route, with interception or denial depending on queue and access-control state.

The paper frames the failure as an implementation class rather than a universal A2A protocol exploit. Synthetic credential tests found no automatic transfer of A-owned tools or credentials in the tested client bindings, though the broker path can forward caller configuration that may include usable identity or tokens.

Two further paths defer the routing decision to a model-mediated step rather than granting direct execution. The authors assign responsibilities across the protocol, integrations, and deployments, recommending that hosts bind routes to origin-stable identifiers, treat names as presentational metadata, and reject ambiguous aliases.
