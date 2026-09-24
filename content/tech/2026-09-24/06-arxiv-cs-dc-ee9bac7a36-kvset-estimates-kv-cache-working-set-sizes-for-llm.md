---
id: ee9bac7a36
title: KVSET estimates KV cache working set sizes for LLM serving
original_title: "The KV Cache Working Set: Online Capacity Planning for LLM Inference Systems"
url: https://arxiv.org/abs/2609.27746
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Luchang Li
  - Shuaishuai Wang
  - Zhao Ruan
  - Dongfang Li
  - Bozhao Gong
comments: null
tags:
  - llm
  - kv-cache
  - capacity-planning
  - mattson
  - inference
  - prefix-caching
  - paper
why_read: >-
  You will get a practical method for sizing prefix cache capacity on LLM serving stacks without
  running a full cache simulation sweep.
rank: 6
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

The paper introduces KVSET, an online analyser that estimates the minimum KV cache capacity needed to hit a target hit rate on LLM serving workloads. It applies the Mattson stack algorithm to derive LRU stack distances for each cache page and compares them against candidate capacities in a single pass.

Avoiding per-configuration simulation cuts the compute and memory cost of capacity planning, which is normally a separate offline exercise. For agentic workloads with long, repeated prefixes, this matters because under-provisioning the cache drops the hit rate sharply, while over-provisioning wastes GPU memory that could otherwise hold active requests.

The authors validate KVSET against traces from production LLM deployments and report that its capacity estimates track real cache measurements closely. The implementation is open source and supports both online request handling and offline trace replay, so operators can size cache pools before deployment or tune them live.
