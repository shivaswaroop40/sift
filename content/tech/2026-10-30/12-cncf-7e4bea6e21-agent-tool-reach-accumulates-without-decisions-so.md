---
id: 7e4bea6e21
title: Agent tool reach accumulates without decisions, so boundaries must live in the platform
original_title: The boundary problem in agentic AI is a platform problem
url: https://www.cncf.io/blog/2026/10/29/the-boundary-problem-in-agentic-ai-is-a-platform-problem/
source: CNCF
kind: blog
section: security
date: "2026-10-30"
published_at: "2026-10-29T18:11:50.000Z"
authors:
  - William Rizzo (Field CTO
  - Kairos Maintainer
  - CNCF Ambassador)
  - Francesco Beltramini (Field CTO)
comments: null
tags:
  - agentic-ai
  - least-privilege
  - workload-identity
  - service-mesh
  - admission-control
  - blog
why_read: >-
  The original spells out the full Safe Operating Model, including the capability enforcement points
  truncated in this excerpt.
rank: 12
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

A CNCF blog post by William Rizzo and Francesco Beltramini names a recurring failure in agent deployments. Tool reach accumulates without anyone deciding it. A tool added for one workflow stays available to every workflow. A credential scoped for a demo survives into production. Authority is granted incrementally and invisibly, so the system's real power drifts away from anyone's model of what it should be able to do. The agents behave. The boundaries erode anyway.

The authors argue that neither prompts nor governance process can fix this. An agent's output is a probability distribution over next actions, not a guarantee, and it is least reliable under the novel or adversarial conditions where a boundary matters most. Instructions state intent; tool bindings state capability. When the two disagree, capability wins, because capability is what executes. The boundary must live in the platform, and the fifteen years of practice bounding microservice workloads apply to agents directly.

Their Safe Operating Model arranges this machinery as concentric rings of least privilege. The core is identity. Each agent and tool server gets a short-lived, attested credential, so downstream checks key off verified identity rather than a bearer token that can leak or be replayed. Ring one is reach, enforced by a service mesh per connection, so a new edge must be declared and reviewed rather than appearing quietly at runtime. Ring two is capability, where admission control rejects an unapproved tool binding at the moment of the attempt.

This is an argument, not a measured result, and it is written by two field CTOs rather than drawn from a named deployment. The published text is also truncated partway through the capability ring, so the remaining enforcement points and any rings beyond it are not covered here.
