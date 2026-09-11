---
id: f70c591269
title: Kubernetes DRA driver exposes CXL memory as shared KV-cache tier for LLM serving
original_title: Composable CXL Memory as a Kubernetes-Native Shared Memory for LLM Serving
url: https://arxiv.org/abs/2609.10790
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-09-11"
published_at: "2026-09-11T04:00:00.000Z"
authors:
  - Hongjian Fan
  - Kevin Zhang
  - David Habinsky
  - Sean Dykstra
comments: null
tags:
  - cxl
  - kubernetes
  - dynamic-resource-allocation
  - llm-serving
  - kv-cache
  - vllm
  - paper
why_read: >-
  See how CXL memory can be scheduled by Kubernetes and used as a shared KV-cache tier for LLM
  serving.
rank: 11
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: deepseek-v4-flash
---

A new Kubernetes Dynamic Resource Allocation driver makes composable CXL memory a schedulable cluster resource. It creates CXL regions on demand, exposes them as DAX devices on each host, and mounts them into pods under a single Container Device Interface name, so pods on different nodes can access the same physical region. The work is reported as a feasibility study.

For LLM serving, the shared region is used as a KV-cache tier for vLLM/llm-d. A slot directory embedded in the shared medium removes the need for an external metadata service. On a two-node cluster with a 512 GiB CXL appliance and Qwen2.5-7B-Instruct, cross-node prefix reuse cut time-to-first-token by 5.5x to 36.6x at external hit rates of 95.4 to 99.5 percent. Node-local tiers fell back to full recompute.

The sharing gap, defined as the latency ratio between cross-node and same-node reuse, was 1 to 4 percent, so cross-node reuse added little latency on this testbed. Both replicas run full engines, so the work demonstrates memory disaggregation rather than prefill/decode disaggregation. The authors caution that this is a feasibility study, not a performance evaluation.
