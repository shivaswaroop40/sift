---
id: e102d4d691
title: FPGA P4 pipeline latency can be measured without dedicated hardware support
original_title: "LatencyLab: A DPDK-Based P4 Pipeline Latency Measurement Framework for FPGA SmartNICs"
url: https://arxiv.org/abs/2609.39978
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-01"
published_at: "2026-10-01T04:00:00.000Z"
authors:
  - Pavani Kuppili
  - Zhaoyang Han
  - Yicheng Qian
  - Suranga Handagala
  - Michael Zink
  - Miriam Leeser
comments: null
tags:
  - fpga
  - p4
  - latency-measurement
  - smartnic
  - networking
  - paper
why_read: >-
  Learn a practical method to measure datapath latency on FPGA P4 pipelines without specialised
  hardware.
rank: 12
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

LatencyLab measures how much latency a P4 packet processing program adds on FPGA SmartNICs. The framework sends probe packets through both the P4 pipeline and a bypass path on the same FPGA, timestamps both with CPU counters as they reach the NIC's receive buffer, and subtracts the arrival times to isolate pipeline latency. Four test programs on an AMD Alveo U280 showed median latencies from 107 to 364 nanoseconds with tight distributions.

For engineers deploying P4 on FPGA, this method matters because standard open toolflows do not expose pipeline latency measurements. LatencyLab needs no PTP synchronisation or special hardware support, only kernel-bypass access to both NIC ports. The reproducibility across sessions and agreement with vendor bounds shows the approach is sound.

The subtraction of transmit time removes clock synchronisation from the problem. Two independent validation paths confirm the measurements: a kernel-free reflector with a separate ConnectX-5 NIC reproduces the results within a few nanoseconds, and all measured packets fall within vendor worst-case bounds.
