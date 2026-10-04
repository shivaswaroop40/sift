---
id: 8c5479588f
title: Valve engineer improves kernel driver support for decade-old AMD GPUs on Linux
original_title: The work by Valve's Timur Kristóf on improving old AMD GPUs on Linux
url: https://www.phoronix.com/news/XDC-2026-Valve-Timur-AMDGPU
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-10-04"
published_at: "2026-10-03T19:14:48.000Z"
authors:
  - speckx
comments: https://news.ycombinator.com/item?id=49946895
tags:
  - amd-gpu
  - kernel-drivers
  - linux
  - vulkan
  - radeon
  - community
why_read: See how one engineer extended the useful life of decade-old AMD GPUs through kernel driver work.
rank: 5
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Timur Kristóf at Valve has spent the past year patching the AMDGPU kernel driver to better support GCN 1.0 and 1.1 era AMD graphics cards from around 2012. He fixed display bugs, power management issues, and added soft reset support, then migrated these legacy cards from the deprecated Radeon driver to AMDGPU.

For practitioners running old AMD hardware on Linux, this work unlocks access to the RADV Vulkan driver and the performance gains that come with it. Kristóf's migration of these cards achieved around 30% performance improvement when it landed in Linux 6.19.

AMD has not maintained drivers for this older hardware, leaving Valve's Linux graphics team to fill the gap. His XDC 2026 presentation documents both the technical work and the path to contributing to kernel driver development.
