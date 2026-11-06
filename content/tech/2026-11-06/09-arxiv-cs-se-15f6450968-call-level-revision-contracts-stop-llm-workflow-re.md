---
id: 15f6450968
title: Call-level revision contracts stop LLM workflow repairs from re-paying committed calls
original_title: Call-Level Revision Contracts for LLM-Authored Workflows
url: https://arxiv.org/abs/2611.06967
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Chenyang Jiang
  - Benyang Pan
  - Puqu Wu
comments: null
tags:
  - durable-execution
  - workflow-repair
  - llm-workflows
  - replay
  - orchestration
  - paper
why_read: >-
  The paper details the identity construction, the static gate and runtime checks, and the media and
  customer-support evaluations behind these numbers.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

An arXiv paper defines a revision contract for workflows whose orchestration code is written by a model. Durable execution engines replay recorded history and do not compare activity payloads, so a repair of a workflow that failed partway must either pay again for calls that succeeded or accept a recorded result whose payload changed. The contract gives each capability call a structural identity built from its callsite, its fanout position, and its occurrence count, and committed identities form a frozen prefix.

This is a direct cost and correctness question for anyone running model-authored workflows on a durable engine. Under three assumptions, a candidate the gate accepts replays every committed call it invokes, executes only new work, and reports the identities it skips. The frozen unit is the call expression, so the model can still rewrite the code around it. A static gate rejects a rewrite that would change a committed call before a container starts.

Two runtime checks back the gate. A digest stops a changed payload at a committed identity, and an occurrence ledger names a repeated paid payload. On media workflows, 22 gate-passed repairs replayed 258 committed identities with no duplicate, and a live six-way fanout made seven paid calls instead of twelve. A 12-task customer-support study applied the same identity, replay, and boundary checks on two models.

The guarantee is conditional. It holds under three assumptions the abstract does not spell out. The paper also states a general limit. No local identity is both relocation-invariant and free of wrong reuse, so callsite identity turns a relocation into a pre-spend stop.
