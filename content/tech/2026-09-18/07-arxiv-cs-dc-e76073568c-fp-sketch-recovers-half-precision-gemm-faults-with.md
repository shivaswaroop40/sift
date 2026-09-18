---
id: e76073568c
title: FP-Sketch recovers half-precision GEMM faults without kernel changes
original_title: >-
  Sketching the Error, Not the Product: Post Hoc Fault Recovery for Half Precision GPU Matrix
  Multiplication
url: https://arxiv.org/abs/2609.19758
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
  - sdc
  - gemm
  - fault-tolerance
  - gpu
  - abft
  - tensor-core
  - paper
why_read: >-
  You will see a drop-in verifier for catching SDC in tensor-core GEMMs and the noise measurements
  that govern its bucket sizing.
rank: 7
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A new technique called FP-Sketch detects and localises silent data corruption in half-precision GPU matrix multiplications after the kernel has run, without modifying the GEMM or encoding its operands. A sum sketch flags corruption on every call, and hashed first-moment sketches combined with independent recomputation pinpoint multiple corrupted entries with no false positives, each tagged with a coordinate and magnitude for fleet diagnosis.

The authors show that floating-point noise rather than hash collisions is the binding constraint on localisation, and that the noise constant depends on the BLAS implementation and operand format. Sizing the bucket count by measured noise rather than a fitted power law raises recovery on eight transformer shapes from 0.402 to 1.000, and measuring noise at runtime adapts the scheme to the kernel and model.

Using NVBit to inject faults into live accumulators, they find that upsets are often only 2 to 9% of a typical entry, a range that output-side injection cannot reproduce. Output-side injection is fully recovered, but the same engine sized for typical faults recovers only 0.550 under NVBit. Sizing for measured magnitudes restores full recovery.

On Llama-2-7B, guarding the MLP down projections removes 99.4% (BF16) and 99.9% (FP16) of the perplexity damage caused by 2,048 bit flips. The clean-path probe costs 0.78 to 3.06 ms against GEMMs of 0.35 to 12.47 ms.
