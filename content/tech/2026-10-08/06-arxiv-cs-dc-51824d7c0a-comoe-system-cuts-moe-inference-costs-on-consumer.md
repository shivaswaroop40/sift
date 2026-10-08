---
id: 51824d7c0a
title: CoMoE system cuts MoE inference costs on consumer GPUs to a quarter of datacenter hardware
original_title: Democratizing MoE inference on commodity GPUs with CoMoE
url: https://arxiv.org/abs/2610.09424
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-08"
published_at: "2026-10-08T04:00:00.000Z"
authors:
  - Ruwen Fan (Jimmy)
  - Yuezhi Zu (Jimmy)
  - Junru Li (Jimmy)
  - Qingda Hu (Jimmy)
  - Xinjun (Jimmy)
  - Yang
comments: null
tags:
  - mixture-of-experts
  - gpu-inference
  - communication-efficiency
  - consumer-hardware
  - distributed-systems
  - paper
why_read: >-
  Learn how CoMoE makes large MoE models practical on budget GPUs without sacrificing inference
  speed.
rank: 6
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers built CoMoE, an inference system for Mixture-of-Experts models on consumer GPUs. It uses the host CPU as an active routing hub to reduce inter-GPU communication overhead. On RTX 5090 GPUs, CoMoE achieves 1.46x higher throughput than standard approaches, reaching performance comparable to NVLink-equipped A800 GPUs at 23.4% of the cost.

Expert parallelism in MoE inference generates intense GPU-to-GPU traffic. Datacenter setups rely on NVLink's high bandwidth. Consumer GPUs lack P2P support and have only PCIe bandwidth, creating a bottleneck. This has made MoE deployment on commodity hardware unviable for cost-conscious operators.

The system addresses this through host-backed token multicast for dispatch, writing shared tokens once to host memory instead of redundantly across GPUs. For aggregation, it uses fine-grained, token-level staging buffers that avoid global synchronization, reducing straggler-induced stalls.
