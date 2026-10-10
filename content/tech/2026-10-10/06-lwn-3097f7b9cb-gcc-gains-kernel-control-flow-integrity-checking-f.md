---
id: 3097f7b9cb
title: GCC gains kernel control-flow-integrity checking for forward edges
original_title: "[$] Adding kernel control-flow-integrity checking to GCC"
url: https://lwn.net/Articles/1098670/
source: LWN
kind: news
section: systems
date: "2026-10-10"
published_at: "2026-10-09T17:06:12.000Z"
authors:
  - corbet
comments: null
tags:
  - gcc
  - kernel-security
  - control-flow-integrity
  - compiler
  - news
why_read: Learn how GCC will help the kernel defend against control-flow hijacking attacks.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Kees Cook presented changes to GCC at the 2026 GNU Tools Cauldron to add forward-edge control-flow integrity (CFI) support for the Linux kernel. CFI detects and prevents exploits that redirect program execution from its intended path.

Forward-edge CFI protects indirect function calls and jumps, a major attack surface in kernel code. This matters because kernel exploits often hijack control flow to execute arbitrary code or escalate privilege. Compiler-level CFI enforcement makes such attacks substantially harder.

The work focuses on integrating CFI checks into GCC rather than relying on runtime instrumentation alone. This approach reduces performance overhead and makes integrity checks transparent to kernel developers.
