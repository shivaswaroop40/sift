---
id: 438cee49f2
title: GPU math units busy only 6-11% while serving large models, paper finds
original_title: The GPU Needs an Operating System
url: https://arxiv.org/abs/2611.08720
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-11-09"
published_at: "2026-11-09T05:00:00.000Z"
authors:
  - Reza Nourai
  - Behnam Bastani
comments: null
tags:
  - gpu
  - inference
  - utilisation
  - scheduling
  - kernels
  - operating-systems
  - paper
why_read: >-
  You get the measured idle-time figures, the sharing trade-offs, and the compiler and chip changes
  the authors say scaling needs.
rank: 2
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

A new arXiv paper measures GPU utilisation during model serving. On two large open models, the math units were busy only about 6-11% of the time. The cause is latency-bound decoding. Replies must be fast, and each step waits on memory. The authors argue the GPU needs an operating system that keeps urgent work on schedule and fills idle capacity with other useful work.

The economics matter to anyone running inference. Most of an expensive accelerator does nothing during serving. The paper reports that a feature shipping today recovers a quarter of a GPU with work designed to share, and a tenth with real jobs, at 5% slower decode. That is the concrete latency-for-capacity trade-off.

The research system goes further. One resident kernel runs a whole model faster than vLLM's best for a single request, and shares the GPU at under 2% slowdown. The catch is that it is hand-built for one model. Scaling beyond it needs compilers and a few new chip features, which the paper specifies.
