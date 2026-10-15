---
id: 4832dd4279
title: Study measures energy cost of processing input tokens in large language models
original_title: "The Cost of Context: Profiling the Energy Footprint of Input Tokens in Large Language Models"
url: https://arxiv.org/abs/2610.19819
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-10-15"
published_at: "2026-10-15T04:00:00.000Z"
authors:
  - Boris Ruf
  - Marcin Detyniecki
comments: null
tags:
  - llm-inference
  - energy-efficiency
  - attention-mechanism
  - pageattention
  - gpu-utilisation
  - serving-systems
  - paper
why_read: >-
  Learn where energy spikes occur when serving large-context models and how system design controls
  prefill costs.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers profiled energy consumption during the prefill phase of Llama and Qwen models on A100 GPUs, finding that attention complexity becomes a bottleneck as context length scales. Optimised memory techniques like PagedAttention achieved 8.9 times better efficiency at 112,000 tokens compared to unoptimised approaches.

Long input sequences consume far more energy per token than generated output tokens. The ratio between input and output token costs narrows as context scales with optimised serving systems like vLLM, but remains large and constant with unoptimised baselines, showing that system design drives efficiency more than model architecture alone.

The work distinguishes which scaling bottlenecks stem from inherent quadratic attention complexity versus those caused by suboptimal memory and scheduling strategies, providing practitioners a framework to predict energy costs across different deployment configurations.
