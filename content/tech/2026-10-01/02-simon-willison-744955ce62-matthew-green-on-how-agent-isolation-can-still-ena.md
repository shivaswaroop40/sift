---
id: 744955ce62
title: Matthew Green on how agent isolation can still enable cross-agent worms
original_title: Quoting Matthew Green
url: https://simonwillison.net/2026/Oct/1/matthew-green/
source: Simon Willison
kind: blog
section: security
date: "2026-10-01"
published_at: "2026-10-01T06:29:01.000Z"
authors: []
comments: null
tags:
  - ai-security
  - sandboxing
  - distributed-systems
  - agent-worms
  - lateral-movement
  - blog
why_read: Understand a specific mechanism by which AI agent isolation fails in practice.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Matthew Green argues that independently sandboxed AI agents can still propagate malicious payloads to each other through shared infrastructure like package caches, email, Slack, or shared documents. The mechanism works when one agent is hijacked to leave instructions in a shared space that alter the behaviour of the next agent.

For distributed systems engineers, this matters because it shows that sandboxing alone does not prevent lateral movement between independent deployments. The attack surface includes any shared channel agents use to coordinate or share resources, making isolation incomplete even when each agent runs separately.

The analogy Green draws replaces traditional worm vectors with agent communication patterns. If your system deploys multiple autonomous agents with access to shared caches or messaging systems, you have created the conditions for propagation without needing direct network compromise.
