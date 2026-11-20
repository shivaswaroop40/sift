---
id: d9d2139891
title: BPF verifier patch set reworks state tracking to allow larger programs
original_title: "[$] Added indirection allows for larger BPF programs"
url: https://lwn.net/Articles/1106537/
source: LWN
kind: news
section: systems
date: "2026-11-20"
published_at: "2026-11-19T17:32:42.000Z"
authors:
  - daroc
comments: null
tags:
  - ebpf
  - linux-kernel
  - bpf-verifier
  - lwn
  - news
why_read: >-
  The full LWN article should explain the verifier changes in detail, including how the indirection
  works and what the patch set means for program size limits.
rank: 3
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

The BPF verifier checks safety by tracing every possible execution path through a program and testing properties at each instruction. In programs with complicated control flow, the number of states to check can grow exponentially. Alexei Starovoitov, a core BPF maintainer, has posted a patch set that substantially reworks how the verifier tracks states.

The stated aim is to reduce the size of the state the verifier must hold. The headline suggests this works through an added layer of indirection, which would let larger BPF programs pass verification. The source text is truncated, so the exact mechanism and any measured gains are not available here.

For anyone writing eBPF for tracing, networking or security tooling, verifier limits are a common practical constraint. Programs are often reshaped or split to stay within them. A change that cuts verifier state could ease that, though the patch set is a proposal and has not been shown to land as described.
