---
id: 9b76c75255
title: 1989 compiler work shows customization can recover performance in dynamically-typed languages
original_title: >-
  Customization: Optimizing Compiler Technology for SELF, a Dynamically-Typed Object-Oriented
  Programming Language (1989)
url: https://dl.acm.org/doi/epdf/10.1145/74818.74831
source: Lobsters
kind: community
section: papers
date: "2026-10-04"
published_at: "2026-10-03T20:59:46.000Z"
authors:
  - dl.acm.org via calvin
  - dl.acm.org via calvin
comments: https://lobste.rs/s/dqp0oc/customization_optimizing_compiler
tags:
  - compilation
  - dynamic-typing
  - specialization
  - performance
  - interpreter
  - community
why_read: Learn how compilers can extract performance from untyped code through selective specialisation.
rank: 4
interest_score: 7.7
depth_score: 9
novelty_score: 7
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Researchers described a compiler technique that generates multiple copies of procedures, each optimised for a specific receiver type. Type information is extracted at compile time where possible and verified at runtime where needed, rather than deferring all type resolution to runtime.

Dynamic languages sacrifice performance for programmer convenience because the compiler lacks static type data. This technique applies to any language where types are determined at runtime, allowing faster code paths for common cases without losing language flexibility.

The approach uses prediction to assume likely types and inserts checks to catch mismatches. This trades compile-time cost and binary size for execution speed on real workloads.
