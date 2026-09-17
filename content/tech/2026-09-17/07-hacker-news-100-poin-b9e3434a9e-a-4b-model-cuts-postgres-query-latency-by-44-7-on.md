---
id: b9e3434a9e
title: A 4B model cuts Postgres query latency by 44.7% on 113 join-heavy queries
original_title: Training a 4B model to produce 81% faster query plans than Postgres
url: https://rohanbansal.com/qorl
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-09-17"
published_at: "2026-09-16T18:50:00.000Z"
authors:
  - polyphilz
comments: https://news.ycombinator.com/item?id=49731285
tags:
  - postgres
  - query-optimisation
  - reinforcement-learning
  - databases
  - llm
  - grpo
  - community
why_read: >-
  A practical walkthrough of using RL to make a small model beat Postgres at its own join ordering,
  with the rig and GRPO tweaks spelled out.
rank: 7
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A 4B-parameter open-weights model was post-trained with supervised fine-tuning and agentic reinforcement learning to generate Postgres query plans. Across 113 join-heavy IMDb-derived queries, the model produced plans that ran 44.7% faster on average than the Postgres default. At the start of training it could not even produce a plan for 99 of the 113 queries.

The result matters because query optimisation is NP-hard and recent benchmarks still show optimisers leave latency on the table. A small model producing better plans than the built-in optimiser opens a path where the database picks the plan rather than the planner. Join ordering dominates the gain: picking the wrong root multiplies intermediate row counts by 4x on this workload.

The setup is unusual. Rollouts were scored with a custom GRPO variant tuned for noisy latency measurements, with four Postgres containers running on the author's desk while a rented 2x H100 node ran vLLM and the trainer. Off-policy distillation pulled about 500 trajectories from a GPT-6 Astra agent to seed the policy.

The catch is that these are 113 queries with hand-tuned joins and the measurement rig had to suppress Linux page cache contention across containers. Generalisation to arbitrary production queries, planner version drift, and what happens when the model hallucinates a plan are not addressed.
