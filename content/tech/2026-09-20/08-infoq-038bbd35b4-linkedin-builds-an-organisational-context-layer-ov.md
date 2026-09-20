---
id: 038bbd35b4
title: LinkedIn builds an organisational context layer over MCP for coding agents
original_title: >-
  Presentation: Context Engineering at LinkedIn: How We Built an Organizational Context Layer for AI
  Agents with MCP
url: >-
  https://www.infoq.com/presentations/linkedin-context-engineering/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-09-20"
published_at: "2026-09-19T11:00:00.000Z"
authors:
  - Ajay Prakash
comments: null
tags:
  - ai-agents
  - context-engineering
  - model-context-protocol
  - developer-tooling
  - linkedin
  - news
why_read: >-
  You will get a concrete pattern for giving coding agents the right internal context, plus the
  scale and claimed payoff from running it across a large engineering org.
rank: 8
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

Ajay Prakash presented how LinkedIn built Contextual Agent Playbooks and Tools, a layer on top of the Model Context Protocol that serves procedural memory, code search, and runbooks to coding agents working in its thousands of repositories. The system powers over 600 workflows and exposes thousands of tools to engineers using agents such as GitHub Copilot.

The layer matters because LinkedIn's mature internal stack defeated early vibe coding, hallucinating or missing context that engineers had to feed in by hand. By packaging that context once, the company claims a 20 percent productivity gain with no loss in reliability, and lets an agent walk a pager alert from a latency spike through downstream services, locate a bad PR, and open a fix in minutes.

The talk also describes the architectural details and operational guardrails used to keep those agents safe to run unattended in production.

The claim of 20 percent productivity with zero reliability loss is presented as the team's measured result; the underlying metrics and how they were collected are not detailed in the available transcript.
