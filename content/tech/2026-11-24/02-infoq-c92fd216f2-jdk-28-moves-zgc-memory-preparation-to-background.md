---
id: c92fd216f2
title: JDK 28 moves ZGC memory preparation to background threads, cutting startup and warmup trade-offs
original_title: JEP 545 Moves ZGC Memory Preparation off the Startup Path in JDK 28
url: >-
  https://www.infoq.com/news/2026/11/jep-545-jdk-28/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-24"
published_at: "2026-11-23T15:30:00.000Z"
authors:
  - A N M Bazlur Rahman
comments: null
tags:
  - zgc
  - jdk-28
  - java
  - garbage-collection
  - jvm-tuning
  - linux
  - news
why_read: >-
  The article gives the mechanism, the flags, the default-off dependency on adaptive sizing, and
  edge cases from the implementation that the JEP text does not cover.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

JEP 545 has been integrated into JDK 28. ZGC now acquires and prepares heap memory on a new thread, ZMemoryWorker, one per heap partition, instead of on the startup path. On Linux 6.1 and later it also collapses 4 KB pages into 2 MB pages while the application runs, using MADV_COLLAPSE. The work is capped at a quarter of available CPU.

The JEP's headline numbers depend on a companion feature. Adaptive heap sizing, in JEP 546, drops the initial heap to 2 MB and raises the maximum to 100% of physical memory. It is enabled with -XX:+ZAdaptiveHeapSizing and still defaults to off. For Spring PetClinic on a 32 GB machine, the JEP reports startup time down 38% and warmup down from 80 seconds to 10.

For operators, the change removes a tuning choice. Teams used a tiny -Xms for fast startup or a large pre-touched heap for fast warmup. Services that pre-touch a large heap only to buy warmup may be able to drop it, but only after enabling adaptive sizing. Modest heaps on Linux 6.1 or later get concurrent pre-touch and background large pages by default.

The caveats are real. The JEP says applications tuned around a larger initial heap may warm up more slowly and need re-tuning. Techniques differ by operating system, so large pages may not be the default on Windows. The MADV_COLLAPSE retry loop can spin indefinitely if EAGAIN persists, which the code treats as user error. JDK 28 is due for general availability on 9 March 2027.
