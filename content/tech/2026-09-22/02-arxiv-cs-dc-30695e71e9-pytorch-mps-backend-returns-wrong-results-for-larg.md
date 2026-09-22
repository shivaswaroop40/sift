---
id: 30695e71e9
title: PyTorch MPS backend returns wrong results for large batched matmuls without warning
original_title: >-
  Silent Failures at the $2^{32}$ Boundary: A Technical Report on Large-Tensor Matrix Multiplication
  in PyTorch's Apple MPS Backend
url: https://arxiv.org/abs/2609.22991
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - Junichiro Niimi
comments: null
tags:
  - pytorch
  - mps
  - apple-silicon
  - bmm
  - numerical-errors
  - 2-32-boundary
  - paper
why_read: >-
  You will see the exact failure modes, the shapes that trigger them, and a guard you can drop in to
  block the silent corruption on Apple Silicon.
rank: 2
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

PyTorch's Metal Performance Shaders backend on Apple Silicon silently produces wrong results for batched matrix multiplication when tensors exceed 2^32 elements, across every release from 2.4.1 to 2.14.0 tested on macOS 27.0. The failures hit torch.bmm, and therefore torch.matmul and eager attention, returning relative errors above 1 with no exception or warning.

Three rules explain every wrong outcome on 2.14.0. If the output exceeds 2^32 elements and an operand is a transposed view, the entire output is wrong because strides are ignored. If a contiguous input exceeds 2^32 elements, batches beyond the boundary are wrong and wrap at 2^32. Views with at least 2^31 elements raise an exception, so enlarging a problem can convert an explicit error into a silent failure.

The bugs are not isolated. A public sentiment classifier was corrupted in practice, with one oversized batch collapsing a third of outputs onto a single class. CUDA handles bmm correctly at the same scale, although torch.arange is silently wrong above 2^32 elements on CUDA as well, so the class of issue extends beyond MPS.

The study is black-box and ships with a sweep harness, raw results, and a guard that refuses any MPS operation touching 2^32 or more elements.
