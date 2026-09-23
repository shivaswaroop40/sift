---
id: cb7cd447bf
title: gccrs is making progress but still not ready to compile the Linux kernel
original_title: "[$] Compiling the kernel with gccrs"
url: https://lwn.net/Articles/1095553/
source: LWN
kind: news
section: languages-and-tools
date: "2026-09-23"
published_at: "2026-09-22T15:27:35.000Z"
authors:
  - daroc
comments: null
tags:
  - rust
  - gcc
  - linux-kernel
  - compilers
  - gccrs
  - news
why_read: >-
  You will get a candid status update on whether gccrs can replace rustc for kernel builds and how
  far it still has to go.
rank: 4
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Developers working on gccrs, the Rust frontend for GCC, gave talks at RustConf 2026 and Kangrejos on the project's status, with a particular focus on the goal of compiling the Linux kernel. Pierre-Emmanuel Patry presented at Kangrejos on the kernel-focused angle.

The project is described as making good progress overall, but the speakers were clear that the compiler remains some way from being usable for real kernel work. No timeline for kernel-readiness was given in the report.

For kernel maintainers and Rust-in-Linux contributors, this is a reminder that the gccrs path to kernel compilation is still under construction, even as upstream Rust support via rustc continues to land. The practical effect today is that GCC-based build configurations cannot substitute for rustc on the kernel side.
