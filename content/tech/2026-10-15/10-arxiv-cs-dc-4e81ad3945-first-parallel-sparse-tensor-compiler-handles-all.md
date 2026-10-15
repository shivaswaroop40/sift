---
id: 4e81ad3945
title: First parallel sparse tensor compiler handles all loop orderings and formats
original_title: Parallel Sparse Outputs for Tensor Compilers
url: https://arxiv.org/abs/2610.19308
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-10-15"
published_at: "2026-10-15T04:00:00.000Z"
authors:
  - Adrian Gushin
  - Pau Sum
  - Willow Ahrens
comments: null
tags:
  - sparse-tensors
  - compiler
  - parallelism
  - tensor-algebra
  - paper
why_read: Learn how a compiler might finally handle arbitrary sparse tensor writes in parallel.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Birdseed, a new tensor compiler, claims to parallelize sparse tensor operations across any loop ordering and standard sparse format. It directly writes to list, bytemap, hash, and dense storage levels in fibertree formats, and handles sparse scatter operations in parallel.

Sparse tensor compilers optimise complex algebra over sparse data, but existing tools serialise outputs or assume specific access patterns. Parallel compilation matters because sparse datasets keep growing, and serialising the final write phase becomes a bottleneck on multi-socket or distributed systems.

The authors report asymptotic improvements in memory and time complexity, and demonstrate speedups on hard kernels like histogram construction and sparse matrix times sparse vector products.
