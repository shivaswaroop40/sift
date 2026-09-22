---
id: 06a25175fd
title: OpenAI engineer argues agents fail in the harness, not the model
original_title: >-
  Presentation: The Agent Harness: Control Planes, Invariants, and Approval Boundaries for
  Production AI Agents
url: >-
  https://www.infoq.com/presentations/ai-agent-harness/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-09-22"
published_at: "2026-09-21T11:00:00.000Z"
authors:
  - Vinoth Govindarajan
comments: null
tags:
  - ai-agents
  - distributed-systems
  - openai
  - qcon
  - agent-harness
  - observability
  - news
why_read: >-
  It gives a concrete checklist for the failure modes that hit agents in production and shows how to
  design the harness around the model.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

At QCon AI, OpenAI's Vinoth Govindarajan argued that production AI agents break in ways model benchmarks cannot catch. His central example is a refund case where the user saw a successful reply, but the durable record of the agent's memory update never landed. He called this 'silent success', where the delivery path looks healthy while the persistent path loses the turn and future reasoning inherits a hole.

For engineers running agents against real state, the talk reframes reliability questions away from model accuracy. Govindarajan proposed three production questions: who owned the state mutation, what ordered concurrent commits, and what the user-visible edge actually persisted. His model is 'a model proposes, the harness commits, the receipt proves it', pushing write authority out of the model and into the surrounding system.

He outlined four harness principles: explicit state ownership with one replay path, a serialised commit path for shared mutable state, scoped execution authority, and validation of actions at the user-visible edge rather than trusting the transcript. He used OpenClaw as a public case study because its open harness exposed these patterns.

The caveat is that the talk is a practitioner's framework drawn from case studies, not a benchmarked result. OpenClaw is used as an external example, and the same patterns are applied internally at OpenAI.
