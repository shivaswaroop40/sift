---
id: d23834f1b5
title: Stanford professor proposes Homa protocol to cut AI datacenter latencies below TCP
original_title: Stanford prof is beating the drum for a new protocol to replace TCP
url: >-
  https://www.theregister.com/networks/2026/10/01/stanford-prof-is-beating-the-drum-for-a-new-protocol-to-replace-tcp/5300629
source: The Register
kind: news
section: systems
date: "2026-10-02"
published_at: "2026-10-01T20:00:45.000Z"
authors: []
comments: null
tags:
  - tcp
  - homa
  - ai-workloads
  - datacenter-networks
  - latency
  - kernel-protocols
  - news
why_read: Understand the latency trade-offs driving interest in TCP alternatives for AI infrastructure.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 9
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

John Ousterhout, retired Stanford professor, is promoting Homa, a message-based network protocol designed to replace TCP in datacenters. Unlike TCP's stream model, Homa uses explicit message lengths and lets receivers manage congestion, prioritizing short messages via a shortest-remaining-processing-time algorithm. The protocol achieves 92 microsecond p99 latency for short messages versus TCP's 1.2 milliseconds.

For distributed AI workloads, this matters. GPUs stall when waiting for network packets, even millisecond delays cost inference time. LLM training and inference must balance large weight transfers with bursty control traffic. TCP's sender-driven congestion control and inability to differentiate message priority make it unsuitable for these mixed workloads.

Homa installs as a Linux kernel module without reboots and coexists with TCP, allowing gradual migration. Running Homa reportedly speeds remaining TCP traffic. The protocol is being backported to enterprise Linux, submitted for IETF standardisation, and trialled with financial firms. However, network architect Ivan Pepelnjak published a 2023 critique questioning Ousterhout's TCP benchmarks and whether Homa solves a real problem.
