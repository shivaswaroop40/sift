---
id: 194fdb802c
title: Most small-model database agent failures come from server bugs, not model reasoning
original_title: What Stops a Small Language Model From Driving a Database Agent
url: https://arxiv.org/abs/2609.21341
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-09-21"
published_at: "2026-09-21T04:00:00.000Z"
authors:
  - Cevheri Bozoglan
  - Yusuf Gundogdu
  - Abdullah Kaya
  - Koray Sirin
comments: null
tags:
  - agents
  - databases
  - benchmarks
  - open-source
  - inference
  - paper
why_read: >-
  You will see how a large share of small-model agent failures traced to server-side argument
  handling rather than model capability, and how to avoid a memory-context confound in your own
  benchmarks.
rank: 3
interest_score: 8
depth_score: 9
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers ran 39 open-weight models and one hosted control against an open-source SQL client's agent mode over eleven days. That produced 8,199 runs, 110,711 ledger events and 14,008 refused tool calls. Of 2,100 model-attributed agent-mode losses, 75.7% came from runs that had invoked at least one tool, a majority that survived clustered resampling in 99.7% of cases.

The point for practitioners is that the failure mode is not the model's reasoning but the surrounding transport. Transport failures, runs that used tools but never produced a deliverable, made up 36.2% of losses, the largest class. Capability failures, runs that invoked no tool at all, were the smallest at 17.3%. Five server defects surfaced once refusal codes were cross-checked against actual arguments, and five server-side fixes, with no model, prompt or sampling changes, moved six models by 6 to 21 cells out of 30 on the scorer.

One confound is worth flagging for anyone running local benchmarks. With no context cap, a 7.1 GB model was admitted at its full 262,144-token window and held 51 GB on a 64 GB machine, producing logs indistinguishable from a model timing out. The authors release the corpus, scorer and a verifier that regenerates every figure.
