---
id: 66c315d3c4
title: vLLM and SGLang merge weight daemons to cut LLM inference startup time
original_title: "Faster LLM inference startup: What you need to know"
url: https://www.cncf.io/blog/2026/11/06/faster-llm-inference-startup-what-you-need-to-know/
source: CNCF
kind: blog
section: ai-and-ml
date: "2026-11-06"
published_at: "2026-11-06T12:00:00.000Z"
authors:
  - Baofa Fan
  - DaoCloud
comments: null
tags:
  - vllm
  - sglang
  - llm-inference
  - snapshots
  - gpu
  - kubernetes
  - blog
why_read: >-
  The original groups each optimization by what state it preserves, with links to the vLLM and
  SGLang implementations, roadmaps, and snapshot proposals.
rank: 11
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: glm-5.3
---

A CNCF blog post by DaoCloud breaks down why an inference replica only adds capacity after a slow startup, and what the ecosystem now reuses to shorten it. vLLM and SGLang have each merged a weight daemon that loads and processes weights, holds the tensors in GPU memory, and shares them with new engines through CUDA inter-process communication. vLLM's Fast Start work also includes a merged preload command and a zero-copy mode that maps the daemon's existing allocations.

Restarts, model switches, and scale-out repeat the same work of loading weights, compiling kernels, autotuning, and capturing CUDA graphs. Once weights can be reused in GPU memory, imports, tuning, and graph capture account for more of the remaining delay. The trade-offs are concrete. The daemon must stay alive while engines use its memory, and CUDA IPC handles are local to a node, so multi-node deployments provide the relevant shards on each node.

Snapshot work is narrower. vLLM's merged experimental snapshots use CRIU for Linux process state and CUDA checkpoint support for GPU state, but only on the same machine, with one NVIDIA GPU and tensor parallelism of one. Weights and the KV cache are released before capture and reloaded after restore, so model files remain a dependency. SGLang's snapshot RFC proposes capturing after initialization and before its HTTP service binds, with the same single-GPU limits.

vLLM also has sleep/wake support, which keeps a live server while releasing much of its GPU memory, a different lifecycle from starting a new engine against cached weights. Elsewhere, llm-d provides model-file caches and warm-instance workflows, fastsafetensors and pre-sharded loaders speed weight loading, and both frameworks have open proposals for an external checkpoint orchestrator where the engine prepares its state and a node agent runs the checkpoint tools. Kubernetes, container runtimes, and the OCI are working on related interfaces.
