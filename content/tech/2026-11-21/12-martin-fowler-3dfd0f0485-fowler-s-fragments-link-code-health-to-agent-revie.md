---
id: 3dfd0f0485
title: Fowler's fragments link code health to agent review cost and argue for slower agents
original_title: "Fragments: November 20"
url: https://martinfowler.com/fragments/2026-11-20.html
source: Martin Fowler
kind: blog
section: ai-and-ml
date: "2026-11-21"
published_at: "2026-11-20T18:38:00.000Z"
authors:
  - Martin Fowler
comments: null
tags:
  - agentic-engineering
  - code-quality
  - codescene
  - saas
  - code-review
  - llm
  - blog
why_read: >-
  You get the Borg experiment's headline numbers and links to Yegge and Chad Fowler, whose arguments
  on agent pacing and SaaS architecture are worth reading in full.
rank: 12
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Martin Fowler's digest of links opens with an experiment from Marcus Borg on whether healthy code is cheaper for agents to review. It used CodeScene health scores, three LLMs and 465 pull requests across 246 open source repositories. Each went through a five-agent review and fix pipeline. A typical unhealthy pull request (CodeHealth 2.8) cost 22 to 35% more than a healthy one (9.7).

The experiment singled out two smells as raising cost: Complex Method and Complex Conditional. Fowler calls it another drop of evidence that code quality matters in agentic engineering. It is one experiment using one vendor's metric, and the excerpt gives no detail on how cost was measured.

Other items cover Steve Yegge's call to pace agents to human speed, and Chad Fowler's view that SaaS may become one core service under thousands of bespoke applications. Chad Fowler argues that code generation is no longer the bottleneck, and that verification is. He applies Stewart Brand's pace layers: stable identity and authority below, fast-changing applications above.
