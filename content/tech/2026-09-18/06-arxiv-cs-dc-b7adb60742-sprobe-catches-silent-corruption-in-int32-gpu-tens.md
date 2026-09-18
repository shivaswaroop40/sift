---
id: b7adb60742
title: >-
  SProbe catches silent corruption in INT32 GPU tensor core accumulators via Freivalds plus
  Reed-Solomon
original_title: Syndrome Decoding for Silent Data Corruption in Quantized Integer GPU Arithmetic
url: https://arxiv.org/abs/2609.19743
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-09-18"
published_at: "2026-09-18T04:00:00.000Z"
authors:
  - Pranav Napolean
  - Vikas Srivastava
  - Napolean Periathambi
comments: null
tags:
  - gpu
  - fault-tolerance
  - tensor-cores
  - inference
  - reliability
  - verification
  - paper
why_read: >-
  It quantifies the cost of catching silent INT32 corruption in tensor cores and shows a practical
  kernel-level design that beats standard ABFT on errors it cannot see.
rank: 6
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

SProbe is a trailing verification kernel that reads the output of an unmodified vendor GEMM and applies a randomised Freivalds gate at three independent points in a 61-bit prime field. The probability of missing a nonzero error is at most 2^-141. When the gate fires, per-row power-sum syndromes over three primes are decoded using Berlekamp-Massey, Chien search and Forney to locate the column and exact magnitude of up to four colliding errors per row, after which the accumulator is repaired in place or the GEMM is recomputed.

On an NVIDIA H100 the gate alone costs 49 percent of cuBLASLt GEMM time at N=16384 and 11 percent at N=65536, and the authors recommend recomputation over in-place recovery because diagnosis, not repair, dominates recovery cost. In an INT8 medical LLM, full protection eliminates all observed silent corruptions at a 30 percent throughput cost.

The work matters because INT32 accumulators in GPU tensor cores have no parity and no ECC, so transient faults return a valid but wrong integer with no interrupt. Conventional checksum ABFT gives only a binary verdict and is blind to errors that cancel on both axes, which is the gap SProbe targets.

The authors flag two caveats. They rely on fault injection across seven classes and four matrix sizes rather than end-to-end silicon data, and the verifier itself contained defects that they disclose alongside the fix.
