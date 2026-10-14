---
id: cd19dfde15
title: Gentoo maintainer warns against uv-build for Python packages
original_title: A plea not to use uv-build
url: https://blogs.gentoo.org/mgorny/2026/10/12/a-plea-not-to-use-uv-build/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-10-14"
published_at: "2026-10-13T14:36:52.000Z"
authors:
  - blogs.gentoo.org via lim
  - blogs.gentoo.org via lim
comments: https://lobste.rs/s/73ssw1/plea_not_use_uv_build
tags:
  - python
  - build-systems
  - gentoo
  - rust
  - packaging
  - portability
  - community
why_read: >-
  Understand why a Rust build backend creates practical friction for maintainers and source
  distribution users.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A Gentoo developer has called for package maintainers to stop using uv-build as a Python build backend. The switch by dependencies causes packages to lose keywords across Gentoo, breaking compatibility. The core issue is not uv itself, which is praised as responsive, but the specific choice of backend.

uv-build is a 1.2 to 1.5 MiB Rust binary, compared to pure Python alternatives like flit-core at 45 KiB. On Gentoo, this means compiling Rust from source repeatedly as uv releases 12 times per month. The maintenance burden for users far outweighs the claimed 100 ms performance gain.

Portability is the sharper problem. Python runs on platforms with only a C compiler. Rust support is narrower and uv fails on some architectures entirely, from dependency bugs to address space exhaustion on 32-bit systems. Adding platform support requires sustained effort.

The performance argument misses its target. Most users install pre-built wheels, not source distributions. For the few who do rebuild, compilation time for uv-build itself dominates any backend speed difference. PEP 517 allows any backend with any frontend, so consistency arguments do not justify the cost.
