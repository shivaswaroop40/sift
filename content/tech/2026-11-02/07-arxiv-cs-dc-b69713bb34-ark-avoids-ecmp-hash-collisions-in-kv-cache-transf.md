---
id: b69713bb34
title: ARK avoids ECMP hash collisions in KV cache transfers, cutting P95 by up to 34%
original_title: "ARK: Avoiding Routing Collisions for KV Cache Transfer in Disaggregated LLM Inference"
url: https://arxiv.org/abs/2610.41160
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Hung-Chun Lin
  - Ting-Wei Hsu
  - Chung-En Ho
  - Ahmed Saeed
comments: null
tags:
  - llm-inference
  - kv-cache
  - ecmp
  - rdma
  - load-balancing
  - paper
why_read: >-
  You get the ARK coordination protocol, its source-port selection method, and the RDMA simulation
  setup behind the reported gains.
rank: 7
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

Disaggregated LLM inference splits prefill and decode across GPU pools, and the KV cache transfers between them last hundreds of milliseconds to seconds. These transfers behave as elephant flows that dominate link bandwidth. Stateless ECMP handles them poorly. Hash collisions can overload one spine link while others sit idle, stretching transfer times by seconds. ARK, a distributed path reservation mechanism, coordinates senders to choose source ports whose hashes map concurrent flows onto distinct spines.

Transfer time feeds directly into time to first token, so routing behaviour affects serving latency. ARK needs no switch changes and no receiver-side packet reordering. In packet-level RDMA simulations it cut mean flow completion time by up to 27.3% and P95 by up to 34.0% under moderate load. Mean time to first token fell by up to 12.9%.

The coordination stays cheap because the flows are long-lived. Even one-to-all messaging amortises over a transfer's lifetime, which is what makes sender-side path reservation practical here. All results come from packet-level RDMA simulation rather than a production cluster, and the reported gains are best-case figures under moderate load.
