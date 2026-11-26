---
id: cb60dc7d87
title: Kernel 7.4 taint on manual driver binding is reverted after breaking real use cases
original_title: "[$] Tainting (or not) on manual driver binding"
url: https://lwn.net/Articles/1103714/
source: LWN
kind: news
section: systems
date: "2026-11-26"
published_at: "2026-11-25T14:36:07.000Z"
authors:
  - corbet
comments: null
tags:
  - linux-kernel
  - taint
  - drivers
  - sysfs
  - fuzzing
  - lwn
  - news
why_read: >-
  The original covers the reasoning on both sides of the taint debate and what it implies for kernel
  interfaces around driver binding.
rank: 11
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Early in the 7.4 merge window, Greg Kroah-Hartman applied a patch that marked the kernel as tainted whenever user space manually bound or unbound a device driver. After discussion, the patch has been reverted.

The aim was to defend against a flood of spurious bug reports produced by fuzzers. Manual binding through sysfs can put a driver and device into states that normal operation never reaches, and the resulting crashes waste maintainers' time.

The change also got in the way of some real use cases, which is why it was dropped. The article says the episode points to an area where the kernel needs better interfaces, though the text available here gives no further detail on what those might be.
