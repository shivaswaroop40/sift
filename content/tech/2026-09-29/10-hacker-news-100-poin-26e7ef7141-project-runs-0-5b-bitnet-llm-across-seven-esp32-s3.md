---
id: 26e7ef7141
title: Project runs 0.5B BitNet LLM across seven ESP32-S3 boards over SPI daisy-chain
original_title: ESP32S3 cluster running 1.58-bit (BitNet) Language model
url: https://github.com/Low-Zi-Hong/ESP32s3-LLM-Cluster
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-09-29"
published_at: "2026-09-28T21:26:41.000Z"
authors:
  - nkko
comments: https://news.ycombinator.com/item?id=49884625
tags:
  - esp32
  - llm
  - bitnet
  - edge-ai
  - distributed-inference
  - quantisation
  - community
why_read: >-
  It is a working, MIT-licensed reference for sharding an LLM across microcontroller nodes with
  hand-written assembly and SPI DMA, worth a scan for the partition layout alone.
rank: 10
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

The repository demonstrates a 0.5B parameter language model sliced across seven ESP32-S3 microcontrollers, with one acting as a master running the BPE tokenizer, INT4 embeddings and LM head, and six compute nodes each handling four transformer blocks. 1.58-bit ternary weights are used for attention and MLP projections, with KV cache held in PSRAM. Communication between boards uses a high-speed SPI daisy-chain passing FP32 hidden states between nodes.

The relevance for distributed systems engineers is the explicit pipelining of transformer blocks across cheap nodes linked by a serial bus rather than a network. It is a concrete data point on what microcontroller-class hardware can do for local inference, and the code exposes the mechanisms (SPI DMA, hand-written assembly for ternary MAC ops, partition tables for model fragments) needed to make it work.

The source is a GitHub project rather than a benchmark paper. No latency, throughput, or power figures are given, so claims about practical usefulness cannot be checked. The project is licensed MIT and is clearly positioned as a working demonstration and reference design.
