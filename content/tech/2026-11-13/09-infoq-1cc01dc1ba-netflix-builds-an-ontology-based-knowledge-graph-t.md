---
id: 1cc01dc1ba
title: Netflix builds an ontology-based knowledge graph to speed up incident root-cause analysis
original_title: Netflix Turns Operational Data Into a Knowledge Graph for AI-Driven Observability
url: >-
  https://www.infoq.com/news/2026/11/netflix-ai-driven-observability/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-13"
published_at: "2026-11-13T12:00:00.000Z"
authors:
  - Craig Risi
comments: null
tags:
  - netflix
  - observability
  - knowledge-graph
  - root-cause-analysis
  - aiops
  - rdf
  - news
why_read: >-
  The original shows how Netflix uses a typed graph, not free-text exchange, to coordinate AI agents
  on incidents, which is useful if you are weighing similar tooling.
rank: 9
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Netflix is building an observability ontology and knowledge graph that links applications, incidents, deployments, alerts and infrastructure dependencies. It says a typical application regression takes around four hours to investigate, mostly spent reconstructing relationships between systems. The graph uses RDF, OWL, SHACL and SPARQL, and is stored in QuipuDB, its distributed RDF database built on Rust's redb.

Enrichers feed the graph by turning data from operational systems into subject-predicate-object triples. Some are deterministic. Others use LLMs, constrained by validation rules on entity types, URI naming and checks against the software catalogue. Netflix also records hypotheses, rejected explanations and mitigation decisions from incident discussions. A correlation engine weighs 13 signal types, such as log errors, deployments and config changes, to rank causal hypotheses.

The graph underpins AutoRCA, an internal agentic system. Agents for traces, logs or deployments share the ontology as a common interface, rather than passing loosely structured findings to each other. Humans keep approval authority over proposed remediation. Netflix wants to move on to automated remediation and self-healing, but the article gives no results for accuracy or time saved.
