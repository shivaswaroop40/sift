---
id: 24dd89b340
title: Netflix built a knowledge graph to understand observability at 65 million concurrent streams
original_title: "Ontology-Driven Observability: Building an End-to-End Knowledge Graph at Netflix Scale"
url: >-
  https://netflixtechblog.com/ontology-driven-observability-building-an-end-to-end-knowledge-graph-at-netflix-scale-421392cf5adf?source=rss----2615bd06b42e---4
source: Netflix Tech Blog
kind: blog
section: infrastructure
date: "2026-10-17"
published_at: "2026-10-16T16:01:02.000Z"
authors:
  - Netflix Technology Blog
comments: null
tags:
  - observability
  - knowledge-graph
  - distributed-systems
  - netflix
  - infrastructure
  - blog
why_read: Learn how Netflix models system complexity to maintain observability at extreme scale.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Netflix processes over 2 billion requests and 38 million logging events per second. During the Paul-Tyson fight in November 2024, the platform served 65 million concurrent streams. At this scale, no single team can hold a complete mental model of the system.

An ontology-driven approach connects observability signals into a unified knowledge graph. This allows engineers to understand relationships between components, services and metrics without maintaining separate dashboards for each part of the infrastructure.

As live content and real-time streams grow, the complexity of reasoning about system state increases. A knowledge graph addresses this by making implicit dependencies and failure modes explicit and queryable.
