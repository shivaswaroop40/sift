---
id: 73dfb161cf
title: Patch series proposes a third futex class, futex PING, aimed at faster locking
original_title: "[$] A new generation of futexes"
url: https://lwn.net/Articles/1102988/
source: LWN
kind: news
section: systems
date: "2026-11-17"
published_at: "2026-11-16T15:06:04.000Z"
authors:
  - corbet
comments: null
tags:
  - linux-kernel
  - futex
  - locking
  - performance
  - lwn
  - news
why_read: >-
  The full article should explain what futex PING does differently from the two existing variants
  and whether the extra complexity is justified by the speed-up.
rank: 3
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

LWN reports on a patch series from Suleiman Souhlal that adds a third class of futex, called "futex PING", with PING standing for priority inheritance next. The kernel already offers two basic futex variants. The new class is meant for users who find those too slow.

The source text is truncated after the introduction. It does not describe the mechanism, the API, any benchmark figures or how kernel developers have responded, so those details cannot be summarised here.
