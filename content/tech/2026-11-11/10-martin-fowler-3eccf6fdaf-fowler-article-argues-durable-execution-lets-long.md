---
id: 3eccf6fdaf
title: Fowler article argues durable execution lets long-running agents survive crashes and waits
original_title: Long-horizon agents and durable execution
url: https://martinfowler.com/articles/durable-execution-agents.html
source: Martin Fowler
kind: blog
section: systems
date: "2026-11-11"
published_at: "2026-11-10T14:10:00.000Z"
authors:
  - Martin Fowler
comments: null
tags:
  - durable-execution
  - ai-agents
  - workflows
  - temporal
  - distributed-systems
  - fault-tolerance
  - blog
why_read: >-
  You get a worked example of replay-based recovery applied to agent loops, plus a section on where
  durability still leaves agents wrong, such as code changes mid-task.
rank: 10
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Kiran Prakash of Thoughtworks, writing on Martin Fowler's site, describes durable execution as a pattern for long-horizon agents. These are agents that run tasks over days or weeks, with many exchanges with people and external systems. The runtime records the result of each step that touches the outside world. After a failure, the program reruns, skips completed steps and rebuilds its state from the record.

The running example is Stock Replenisher, an agent that keeps a manufacturer's parts in stock. It gets quotes, picks a supplier, asks a procurement manager to approve the price, places the order and follows it until delivery. Most of the elapsed time is waiting. Processes may restart, supplier calls may fail, and messages may arrive late, twice or not at all.

The piece says the pattern is not the same as correctness. Its contents list covers outcomes the agent does not see, a world that changes during a wait, code changes under a running task, memory, and text that steers the agent. Sidebars cover Temporal and Cloudflare. The supplied text cuts off early, so none of those sections can be assessed here.
