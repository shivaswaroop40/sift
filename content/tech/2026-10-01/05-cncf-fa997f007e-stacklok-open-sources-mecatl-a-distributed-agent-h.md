---
id: fa997f007e
title: Stacklok open sources Mecatl, a distributed agent harness for Kubernetes
original_title: The case for a cloud native agent harness
url: https://www.cncf.io/blog/2026/09/28/the-case-for-a-cloud-native-agent-harness/
source: CNCF
kind: blog
section: infrastructure
date: "2026-10-01"
published_at: "2026-09-28T11:00:00.000Z"
authors:
  - Craig McLuckie
  - Stacklok
comments: null
tags:
  - agents
  - kubernetes
  - distributed-systems
  - identity
  - cloud-native
  - blog
why_read: >-
  Learn how separating agent loops from infrastructure enables scaling agents across environments
  without redesign.
rank: 5
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Mecatl separates the agent reasoning loop from execution environments, tool ecosystems, and supporting services, allowing agents to run identically on laptops, as remote services, or on Kubernetes clusters. The architecture treats each component as independently deployable, versioned, and observable like any other distributed application.

For platform teams running hundreds of agent sessions, this matters because sessions survive worker node failures through durable storage at turn boundaries, tools are gated through explicit catalogues with permission controls, and multiple clients can attach to the same runtime without owning the filesystem or credentials.

The project identifies three open design problems: identity chains that track which user or agent initiated calls through delegation layers, direct data paths for tools like PDF decoders that should not route bytes through the model's context window, and treating packaged agent context as supply-chain artifacts with versioning and provenance.
