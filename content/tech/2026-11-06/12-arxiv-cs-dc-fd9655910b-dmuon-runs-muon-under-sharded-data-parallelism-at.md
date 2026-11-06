---
id: fd9655910b
title: DMuon runs Muon under sharded data parallelism at 1.05x AdamW throughput on 256 H100s
original_title: >-
  DMuon: Scaling Matrix Optimizers in Data Parallelism with Topology-Aware Matrix Ownership and
  Communication
url: https://arxiv.org/abs/2611.07084
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Starrick Liu
  - Ruizhi Chengze
  - Lufang Chen
  - Michael Zhao
  - Ran Yu
  - Xiaofan Li
comments: null
tags:
  - muon
  - optimizers
  - distributed-training
  - fsdp
  - pytorch
  - paper
why_read: >-
  The paper details matrix ownership assignment, collective scheduling, and the throughput
  measurements across three LLMs and two VLA models.
rank: 12
interest_score: 6.3
depth_score: 7
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

The paper presents DMuon, a matrix-granular optimizer runtime for PyTorch FSDP (ZeRO-2/3) and HSDP. Each weight matrix gets a single owner, which runs the Newton-Schulz iteration and the optimizer update on the full matrix, with load balanced across owners by computational cost. On HSDP, ownership is global across replicas, so the cluster keeps one copy of gradients and optimizer state and publishes updated parameters as soon as they are ready.

Muon updates whole weight matrices, which conflicts with the element- or row-wise sharding that data-parallel runtimes use. Once parameters are sharded too, a matrix optimizer pays in extra communication or repeated computation. The paper claims its parameter gathering and gradient reduction absorb that cost, so a training run keeps FSDP-style sharding and still uses Muon.

The authors report results on up to 256 H100 GPUs across three dense LLMs and two VLA models. DMuon matches or exceeds FSDP2 with AdamW, reaching 1.05x at the median on 256 GPUs. Against a gather-then-replicate Muon baseline, its throughput is 2.1x at the median. The layout makes every collective sparse and variable in length, so DMuon schedules each as its data becomes ready and routes it along the cluster's two-level network.
