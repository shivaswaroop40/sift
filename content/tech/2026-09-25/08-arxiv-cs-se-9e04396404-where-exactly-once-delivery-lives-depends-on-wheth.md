---
id: 9e04396404
title: Where exactly-once delivery lives depends on whether the agent can see what happened
original_title: >-
  Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects
  in LLM Agents
url: https://arxiv.org/abs/2609.29095
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-09-25"
published_at: "2026-09-25T04:00:00.000Z"
authors:
  - Jiapeng Li
comments: null
tags:
  - llm-agents
  - exactly-once
  - idempotency
  - tool-calling
  - distributed-systems
  - evaluation
  - paper
why_read: >-
  You will get a concrete, layered answer to a question every team running tool-using agents must
  answer: which layer is responsible when a write silently duplicates.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers introduce LIMBO, a deterministic sandbox of six services with realistic contracts including optional idempotency keys and eventually consistent reads, plus twelve fault modes such as late commits, redelivery and partial batches. They ran 25,930 episodes across nine LLMs, three production agent harnesses, two contract variants and fifteen recovery conditions, grading every episode against a ledger of committed effects.

The headline finding is that no single layer owns exactly-once behaviour. When an immediate read-back can reveal the state, the model decides: frontier models told to act once duplicated only 0.5% of writes with lost acknowledgements, weaker models duplicated far more, and model choice explained 53% of the explained variance.

When the request is still in flight or the transport delivers twice, the contract takes over. The same frontier models duplicated in 56% and 74% of those episodes, and the tool contract explained 81% of the variance. The paper proves that no verification-only policy can guarantee exactly-once under late commits without a bound on in-flight time.

Waiting only helps if that bound is short. With heavy-tailed delays an hour of waiting per episode still fell short of avoiding duplicates, while offering an idempotency key on every write cut the duplicate rate from 28% to 4% because agents use keys when they exist. The agent harness itself barely mattered, and agents reported success in 90% of episodes where they had silently duplicated an effect.
