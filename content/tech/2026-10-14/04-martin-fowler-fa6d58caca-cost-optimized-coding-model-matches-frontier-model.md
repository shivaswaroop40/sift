---
id: fa6d58caca
title: Cost-optimized coding model matches frontier model reliability with behavioral harness
original_title: Are Harnesses Worth the Cost?
url: https://martinfowler.com/articles/are-harnesses-worth-the-cost.html
source: Martin Fowler
kind: blog
section: ai-and-ml
date: "2026-10-14"
published_at: "2026-10-13T13:35:00.000Z"
authors:
  - Martin Fowler
comments: null
tags:
  - ai
  - coding-agents
  - cost-optimization
  - testing
  - reliability
  - blog
why_read: >-
  Learn whether constraints and feedback loops justify their cost when using cheaper AI models for
  coding tasks.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Fowler compared GPT-6 Sol (frontier) and GPT-6 Luna (cost-optimized) building an API service with and without a behavioral harness. Sol passed all runs either way. Luna succeeded in only 3 of 10 unharnessed runs, but all 10 with the harness. The harness increased Luna's tokens and runtime but achieved Sol-level reliability at 33% lower cost per run.

A behavioral harness guides agents with specifications and examples, then provides corrective feedback via executable tests. For cost-optimized models that struggle with consistency, this structure makes cheaper inference practical for production use. The trade-off is higher token consumption during development.

The experiment used a detailed brief and 178 acceptance tests covering HTTP semantics, timeouts, filters, and event publication. Sol needed no harness to succeed repeatedly; results with less complete briefs remain unknown.
