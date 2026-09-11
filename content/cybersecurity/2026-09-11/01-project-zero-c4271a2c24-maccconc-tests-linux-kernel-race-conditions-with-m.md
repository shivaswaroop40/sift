---
id: c4271a2c24
title: MAccConc tests Linux kernel race conditions with memory access tracing
original_title: Testing race conditions with memory access tracing and stack-based delay injection
url: https://projectzero.google/2026/09/maccconc-race-condition.html
source: Project Zero
kind: research
section: papers
date: "2026-09-11"
published_at: "2026-09-08T07:00:00.000Z"
authors:
  - Jann Horn
comments: null
tags:
  - race-conditions
  - linux-kernel
  - memory-access-tracing
  - asan
  - kcov
  - fuzzing
  - research
why_read: >-
  Read the original for implementation details, limitations, and a demo of MAccConc's automatic
  interleaving testing.
rank: 1
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Project Zero has published MAccConc, a set of tools for exploring race condition interleavings in Linux kernel test cases. The tools automatically test all possible A-B-A interleavings, and provide terminal and GUI interfaces for manual exploration. The kernel component uses ASAN instrumentation in outline mode to trace memory accesses, and KCOV to feed coverage to userspace.

Race conditions are hard to confirm, regression test, or fuzz because triggering them needs the right thread interleaving. MAccConc gives developers a way to systematically explore interleavings and reproduce bugs, instead of adding conditional mdelay() calls and recompiling the kernel. It also aims to support fuzzing-based discovery, though userspace tooling for that is not yet implemented.

The tooling has limitations. ASAN does not emit helper calls for direct stack memory access unless there is potential for out-of-bounds access, so race conditions involving on-stack objects such as wait queues may be missed. ASAN also skips globals unless a backend flag disables that optimisation. TSAN instrumentation would provide atomicity information but cannot be combined with ASAN hooks.
