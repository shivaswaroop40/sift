---
id: dc960ba404
title: Cloudflare Containers now start 6x faster with runtime-chosen images
original_title: Cloudflare Containers, rebuilt to scale agent sandboxes
url: https://blog.cloudflare.com/faster-agent-sandboxes/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-10-01"
published_at: "2026-09-30T12:58:00.000Z"
authors:
  - Thomas Gauvin
comments: null
tags:
  - containers
  - agents
  - cloudflare
  - durable-objects
  - serverless
  - sandboxing
  - blog
why_read: >-
  Learn how Cloudflare eliminated per-image deployments and reduced sandbox startup overhead for
  agent workloads.
rank: 3
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cloudflare has rearchitected its Containers service to let agents choose sandbox image and compute resources at runtime rather than deploy time. Startup time fell from over four seconds to 648 milliseconds. Filesystem snapshots are now available in beta.

Agent workloads differ from traditional deployments: they create sandboxes on demand for specific tasks, expect them ready immediately, and need to pause and resume. The new durable_object scheduling policy moves configuration decisions into application code, eliminating the need for separate deployments per image or instance type combination.

Each Container remains attached to a Durable Object that manages lifecycle and outbound traffic. The native ctx.container API now lets the Durable Object control its Container directly. Cloudflare reports burst tests successfully created hundreds of thousands of containers in seconds.
