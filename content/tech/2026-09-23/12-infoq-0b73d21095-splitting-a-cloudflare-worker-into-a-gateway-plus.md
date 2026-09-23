---
id: 0b73d21095
title: Splitting a Cloudflare Worker into a gateway plus per-feature workers via service bindings
original_title: "Article: Modular Edge Computing at Multi-Tenant SaaS Scale on Cloudflare Workers"
url: >-
  https://www.infoq.com/articles/modular-edge-computing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-23"
published_at: "2026-09-23T09:00:00.000Z"
authors:
  - Chintan Tank
comments: null
tags:
  - cloudflare-workers
  - edge-computing
  - multi-tenant
  - service-bindings
  - architecture
  - saas
  - news
why_read: >-
  You will get a worked example of decomposing a production edge monolith into gateway and feature
  workers without paying an extra network hop.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

An InfoQ article by Chintan Tank describes how the edge platform behind hundreds of thousands of tenant accounts moved off a single Cloudflare Worker that owned every edge feature. The author frames the original script as a monolith whose blast radius covers all tenants and whose one-deployment model couples every team's release cadence.

The fix is a thin gateway worker plus a set of single-purpose feature workers. Service bindings let Cloudflare dispatch worker-to-worker calls inside the same isolate on the same machine, so the author argues there is no extra network hop. Each feature exposes a cheap shouldApply() predicate run inline by the gateway, and the actual worker is invoked over a binding only when needed.

The piece uses image optimisation as a worked example of the build-or-buy decision at the edge, noting that Akamai and Cloudflare differ enough that holding parity across both is an ongoing constraint rather than a one-time migration. It also argues that per-account versioning and staggered rollout stop being optional at hundreds of thousands of tenants, and that application-grade testing discipline is the minimum bar.
