---
id: d6088dac6a
title: LinkedIn distils a 7B ranking model to 400M to meet P99 latency limits
original_title: >-
  Presentation: Scaling LLM-Based Ranking Systems for Latency-Critical Search & Recommendation
  Workloads
url: >-
  https://www.infoq.com/presentations/scale-llm-ranking-systems-linkedin/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-11-17"
published_at: "2026-11-17T11:00:00.000Z"
authors:
  - Sundara Raman Ramachandran
comments: null
tags:
  - llm-inference
  - ranking
  - latency
  - linkedin
  - distillation
  - search
  - news
why_read: >-
  The full talk should show how distillation, embedding compression and low-level serving fixes
  combine to hit tail-latency targets, which the excerpt only names.
rank: 4
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Sundara Raman Ramachandran, a lead engineer on LinkedIn's LLM inference team, describes how LinkedIn serves LLM-based ranking for search under strict P99 latency SLAs. The talk summary cites distilling a 7B model to 400M parameters and compressing job contexts into single-token embeddings, which it says gives a 10x throughput gain.

The summary also lists system-level fixes: custom flash attention masks, Python GIL workarounds, gc.freeze and non-blocking CUDA memory copies. The available transcript is truncated. It covers only the pipeline of query understanding, retrieval and ranking, so the detail behind these claims is not in the text.

Ranking sits after retrieval, which is tuned for recall and returns a top-K set from millions of jobs. The ranker therefore scores a bounded candidate list per query at high QPS. LinkedIn cites about 1.3 billion members, though no traffic figures are given in the excerpt.
