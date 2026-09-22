---
id: bad7a956d5
title: DeepSeek details DSec sandbox platform serving 380,000 concurrent agentic training sessions
original_title: "DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale"
url: https://arxiv.org/abs/2609.22978
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - Jialiang Huang
  - Hongxuan Tang
  - Jingchang Chen
  - Yuxuan Liu
  - Yixiao Chen
  - Yuan Cheng
comments: null
tags:
  - kubernetes
  - sandboxing
  - reinforcement-learning
  - deepseek
  - infrastructure
  - distributed-systems
  - paper
why_read: >-
  You get the concrete numbers and architectural choices behind DeepSeek's production sandbox layer
  for agentic RL training, including how they hit 5,000 creations per second.
rank: 3
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

DeepSeek has published DSec, a production sandbox platform purpose-built for large-scale agentic training of large language models. A single production unit spans around 160 nodes, serves roughly 3 million sandboxes per day, holds over 380,000 concurrent sandboxes, and sustains more than 5,000 sandbox creations per second.

The system exposes four backend types (FnCall, container, microVM and full VM) through a unified SDK and composes environments from independently versioned layers. Images are loaded on demand from the Fire-Flyer File System (3FS), and the platform combines memory sharing, reclamation and CPU scheduling to keep density high without blowing out latency.

DSec is co-designed with DeepSeek's reinforcement learning framework. It decouples stateful rollout execution from preemptible GPU training and coordinates sandbox lifecycle with training steps, so rollout state is preserved while idle compute is reclaimed. The paper also describes mechanisms to mitigate agent misbehaviour such as reward hacking.

For platform engineers, the interesting detail is the scale-to-node ratio: 380,000 concurrent sandboxes on 160 nodes implies heavy overcommit, with memory sharing and on-demand image loading doing the heavy lifting rather than per-sandbox isolation alone.
