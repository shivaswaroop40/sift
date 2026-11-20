---
id: 30db966fa5
title: OpenJDK PR fixes AVX-512 Base64 decoder heap corruption on short invalid input, then stalls
original_title: Someone reported java4shell bug in September 2026
url: https://github.com/openjdk/jdk/pull/32781
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-20"
published_at: "2026-11-19T11:47:03.000Z"
authors:
  - notmine1337
comments: https://news.ycombinator.com/item?id=50558906
tags:
  - openjdk
  - jvm
  - base64
  - avx-512
  - memory-safety
  - hotspot
  - community
why_read: >-
  The PR thread has the exact trigger and the one-line fix, and it shows how a memory-safety report
  can sit unreviewed in a process-heavy project.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

A pull request to OpenJDK describes a bug in the x86_64 AVX-512 VBMI Base64 decode stub. The tail handler L_finalBit computes output_size as (len/4)*3. Valid input is always a multiple of four, so only invalid input hits the flaw. With fewer than four bytes left, such as 64 'A' characters then '=', output_size starts at 0 and the padding path pushes it below zero.

That produces a wrong output mask, and the stub stores past the logical output length before returning to Java. The result is heap corruption. The proposed fix is small: return early to Java if length is under 4. The PR is filed under issue 8392044 and labelled hotspot-compiler.

The relevance is that this is a memory-safety bug in an intrinsic, reachable by anyone who can feed crafted Base64 to a decoder on affected hardware. Heap corruption from untrusted input is the kind of fault that surfaces later as crashes far from the cause. Linked Adoptium support issues report JVM crashes, but the source does not establish that this bug caused them.

The PR shows no completed review. A bot marked it inactive and it was closed on 4 November 2026 after the author did not touch it. Commenters asked why. The source does not say whether the fix landed another way, so its status is unclear.
