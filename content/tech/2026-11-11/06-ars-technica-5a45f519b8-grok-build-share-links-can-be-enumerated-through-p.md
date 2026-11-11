---
id: 5a45f519b8
title: Grok Build share links can be enumerated through passive DNS, exposing thousands of apps
original_title: Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI
url: >-
  https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/
source: Ars Technica
kind: news
section: security
date: "2026-11-11"
published_at: "2026-11-10T21:12:59.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/#comments
tags:
  - grok-build
  - passive-dns
  - capability-urls
  - ai-coding-agents
  - data-exposure
  - security
  - news
why_read: >-
  You get the specific mechanism, hostname versus path randomness and passive DNS, plus the list of
  exposed data types, useful for reviewing any preview-URL scheme you run.
rank: 6
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Security firm Claroc says Grok Build, SpaceXSI's coding agent, exposes data from thousands of user-built apps. Share links use random words placed to the left of the domain, such as cinder-crane-sand-frost.grok.me. Passive DNS services record those hostnames, so anyone can list them. Claroc found 43,601 grok.me links, and over 35,000 were public.

The exposed material includes a Peruvian firm's 3,784 worker medical exams, a Navy contractor's roster of 108 people and an aerospace group's explosives building procedure. Claroc also found 24 apps built by SpaceXSI itself, including a sales territory map of 594 accounts. SpaceXSI began removing those links hours after Ars asked for comment.

This is a design error rather than a code bug. Capability URLs only work if the secret is not visible to third parties. Google places the random token in the path, which DNS lookups do not reveal. Putting it in the hostname leaks it to every resolver-level log and passive DNS database that sees the lookup.

The vendor's account is disputed. A Cursor representative, speaking for SpaceXSI, said apps are private by default. Claroc's tests found the default is 'Anyone with the link'. The source text cuts off before the full detail of those tests, so the dispute is not fully settled here.
